// Package sandbox runs a user's submitted code against a subject's real
// test suite inside an isolated Docker container. Per Gauntlex.md's core
// design principle, this server-side run is the source of truth — the
// user's own "it works locally" claim is never trusted.
package sandbox

import "context"

// Language identifies which sandbox image + test-run convention to use.
// Every 01-edu subject is tagged with one of these based on its curriculum
// language (see 01-CURRICULUM-MAP.md §3 for which subjects have real tests
// today — most don't yet, which is the open item tracked in §8.7).
type Language string

const (
	LanguageGo         Language = "go"
	LanguageJavaScript Language = "javascript"
	LanguageRust       Language = "rust"
	LanguageShell      Language = "shell"
)

type SubmitRequest struct {
	Language Language
	// Files maps a relative path within the submission to its contents,
	// e.g. {"main.go": "package main\n..."}.
	Files map[string]string
}

type Result struct {
	Passed   bool
	Stdout   string
	Stderr   string
	ExitCode int
	// TimedOut is true if the run was killed for exceeding the sandbox's
	// time budget rather than finishing on its own.
	TimedOut bool
}

// Runner executes one submission and returns its outcome. The Docker-backed
// implementation is the only one meant for production use; a fake
// implementation can satisfy this interface for tests that don't want to
// actually spin up containers.
type Runner interface {
	Run(ctx context.Context, req SubmitRequest) (*Result, error)
}
