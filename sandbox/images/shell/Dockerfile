FROM alpine:3.20
RUN apk add --no-cache bash coreutils grep
RUN adduser -D -u 10001 runner
USER runner
WORKDIR /workspace/submission
