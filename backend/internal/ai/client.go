// Package ai provides a provider-agnostic interface for the AI Guide and AI
// Auditor roles. Swap providers via the AI_PROVIDER env var — the rest of the
// codebase talks to the Client interface only, never to a specific vendor SDK.
package ai

import "context"

type Message struct {
	Role    string // "system" | "user" | "assistant"
	Content string
}

type CompleteRequest struct {
	Messages    []Message
	MaxTokens   int
	Temperature float64
}

type CompleteResponse struct {
	Content string
}

// Client is implemented once per provider (Anthropic, OpenAI, ...). Callers
// (Guide/Auditor services) depend on this interface, never a concrete type.
type Client interface {
	Complete(ctx context.Context, req CompleteRequest) (*CompleteResponse, error)
}

// New builds the configured provider's client. provider is expected to be
// "anthropic" or "openai" (validated in config.Load).
func New(provider, anthropicKey, openaiKey string) (Client, error) {
	switch provider {
	case "anthropic":
		return NewAnthropicClient(anthropicKey), nil
	case "openai":
		return NewOpenAIClient(openaiKey), nil
	default:
		return nil, ErrUnknownProvider(provider)
	}
}
