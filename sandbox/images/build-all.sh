#!/usr/bin/env bash
# Builds every sandbox image referenced in backend/internal/sandbox/languages.go.
# Run this once per host (or in CI, pushing to a registry) — the backend
# expects these images to already exist locally; it never builds them itself.
set -euo pipefail
cd "$(dirname "$0")"

for lang in go javascript rust shell; do
  echo "Building gauntlex-sandbox-${lang}:latest ..."
  docker build -t "gauntlex-sandbox-${lang}:latest" "./${lang}"
done
