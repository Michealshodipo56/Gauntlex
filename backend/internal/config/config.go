package config

import (
	"fmt"
	"os"
)

type Config struct {
	Port             string
	DatabaseURL      string
	ClerkSecretKey   string
	AIProvider       string // "anthropic" | "openai"
	AnthropicAPIKey  string
	OpenAIAPIKey     string
	FrontendOrigin   string
}

func Load() (*Config, error) {
	cfg := &Config{
		Port:            getEnv("PORT", "8080"),
		DatabaseURL:     os.Getenv("DATABASE_URL"),
		ClerkSecretKey:  os.Getenv("CLERK_SECRET_KEY"),
		AIProvider:      getEnv("AI_PROVIDER", "anthropic"),
		AnthropicAPIKey: os.Getenv("ANTHROPIC_API_KEY"),
		OpenAIAPIKey:    os.Getenv("OPENAI_API_KEY"),
		FrontendOrigin:  getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
	}

	if cfg.DatabaseURL == "" {
		return nil, fmt.Errorf("DATABASE_URL is required")
	}
	if cfg.ClerkSecretKey == "" {
		return nil, fmt.Errorf("CLERK_SECRET_KEY is required")
	}
	switch cfg.AIProvider {
	case "anthropic":
		if cfg.AnthropicAPIKey == "" {
			return nil, fmt.Errorf("AI_PROVIDER=anthropic requires ANTHROPIC_API_KEY")
		}
	case "openai":
		if cfg.OpenAIAPIKey == "" {
			return nil, fmt.Errorf("AI_PROVIDER=openai requires OPENAI_API_KEY")
		}
	default:
		return nil, fmt.Errorf("AI_PROVIDER must be \"anthropic\" or \"openai\", got %q", cfg.AIProvider)
	}

	return cfg, nil
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
