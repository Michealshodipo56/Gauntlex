package ai

import "fmt"

func ErrUnknownProvider(provider string) error {
	return fmt.Errorf("unknown AI provider %q (expected \"anthropic\" or \"openai\")", provider)
}
