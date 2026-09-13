package main

import (
	"context"
	"log"
	"net/http"

	"github.com/clerk/clerk-sdk-go/v2"
	"github.com/joho/godotenv"

	"github.com/Michealshodipo56/gauntlex/backend/internal/ai"
	"github.com/Michealshodipo56/gauntlex/backend/internal/config"
	"github.com/Michealshodipo56/gauntlex/backend/internal/httpserver"
	"github.com/Michealshodipo56/gauntlex/backend/internal/store"
)

func main() {
	// Local dev convenience only — Render injects real env vars in prod, so
	// a missing .env there is expected and fine to ignore.
	_ = godotenv.Load()

	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("config error: %v", err)
	}

	clerk.SetKey(cfg.ClerkSecretKey)

	ctx := context.Background()

	st, err := store.New(ctx, cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("database error: %v", err)
	}

	aiClient, err := ai.New(cfg.AIProvider, cfg.AnthropicAPIKey, cfg.OpenAIAPIKey)
	if err != nil {
		log.Fatalf("ai client error: %v", err)
	}

	srv := httpserver.New(st, aiClient, cfg.FrontendOrigin)

	log.Printf("gauntlex backend listening on :%s (ai provider: %s)", cfg.Port, cfg.AIProvider)
	if err := http.ListenAndServe(":"+cfg.Port, srv); err != nil {
		log.Fatalf("server error: %v", err)
	}
}
