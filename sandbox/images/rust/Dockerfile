FROM rust:1.82-alpine
RUN apk add --no-cache musl-dev
RUN adduser -D -u 10001 runner
USER runner
WORKDIR /workspace/submission
