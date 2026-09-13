package sandbox

import "fmt"

// imageConfig describes how to invoke the sandbox image for a language.
// Images are built from sandbox/images/<language>/Dockerfile at the repo
// root (outside the Go module — they're standalone container definitions,
// not Go code) and expected to already exist on the host running the
// backend (built once via sandbox/images/build-all.sh, not built per-run).
type imageConfig struct {
	image string
	// testCmd is run inside the container with the submission mounted at
	// /workspace/submission. Exit code 0 means the suite passed.
	testCmd []string
}

var languageImages = map[Language]imageConfig{
	LanguageGo:         {image: "gauntlex-sandbox-go:latest", testCmd: []string{"go", "test", "./..."}},
	LanguageJavaScript: {image: "gauntlex-sandbox-javascript:latest", testCmd: []string{"npm", "test", "--silent"}},
	LanguageRust:       {image: "gauntlex-sandbox-rust:latest", testCmd: []string{"cargo", "test"}},
	LanguageShell:      {image: "gauntlex-sandbox-shell:latest", testCmd: []string{"./run_tests.sh"}},
}

func configFor(lang Language) (imageConfig, error) {
	cfg, ok := languageImages[lang]
	if !ok {
		return imageConfig{}, fmt.Errorf("no sandbox image configured for language %q", lang)
	}
	return cfg, nil
}
