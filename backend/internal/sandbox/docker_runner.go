package sandbox

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

// DockerRunner shells out to the `docker` CLI rather than linking the Docker
// SDK, so the backend has no extra build-time dependency on the container
// runtime — it just needs `docker` on PATH at deploy time.
type DockerRunner struct {
	// MemoryLimit and CPULimit are passed straight to `docker run`, e.g.
	// "256m" and "1". Zero values fall back to the package defaults below.
	MemoryLimit string
	CPULimit    string
}

const (
	defaultMemoryLimit = "256m"
	defaultCPULimit    = "1"
	defaultPidsLimit   = "128"
)

func NewDockerRunner() *DockerRunner {
	return &DockerRunner{MemoryLimit: defaultMemoryLimit, CPULimit: defaultCPULimit}
}

func (d *DockerRunner) Run(ctx context.Context, req SubmitRequest) (*Result, error) {
	cfg, err := configFor(req.Language)
	if err != nil {
		return nil, err
	}

	submissionDir, err := writeSubmission(req.Files)
	if err != nil {
		return nil, fmt.Errorf("write submission: %w", err)
	}
	defer os.RemoveAll(submissionDir)

	args := []string{
		"run", "--rm",
		"--network", "none", // no network access during test execution
		"--memory", firstNonEmpty(d.MemoryLimit, defaultMemoryLimit),
		"--cpus", firstNonEmpty(d.CPULimit, defaultCPULimit),
		"--pids-limit", defaultPidsLimit,
		"-v", submissionDir + ":/workspace/submission:ro",
		"-w", "/workspace/submission",
		cfg.image,
	}
	args = append(args, cfg.testCmd...)

	cmd := exec.CommandContext(ctx, "docker", args...)
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	runErr := cmd.Run()

	result := &Result{
		Stdout: stdout.String(),
		Stderr: stderr.String(),
	}

	if errors.Is(ctx.Err(), context.DeadlineExceeded) {
		result.TimedOut = true
		result.ExitCode = -1
		return result, nil
	}

	var exitErr *exec.ExitError
	switch {
	case runErr == nil:
		result.ExitCode = 0
		result.Passed = true
	case errors.As(runErr, &exitErr):
		result.ExitCode = exitErr.ExitCode()
		result.Passed = false
	default:
		return nil, fmt.Errorf("run sandbox container: %w", runErr)
	}

	return result, nil
}

func writeSubmission(files map[string]string) (string, error) {
	dir, err := os.MkdirTemp("", "gauntlex-submission-*")
	if err != nil {
		return "", err
	}

	for relPath, content := range files {
		fullPath := filepath.Join(dir, relPath)
		if err := os.MkdirAll(filepath.Dir(fullPath), 0o755); err != nil {
			return "", err
		}
		if err := os.WriteFile(fullPath, []byte(content), 0o644); err != nil {
			return "", err
		}
	}

	return dir, nil
}

func firstNonEmpty(a, b string) string {
	if a != "" {
		return a
	}
	return b
}
