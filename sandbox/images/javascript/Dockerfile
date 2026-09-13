FROM node:20-alpine
# Pre-installed globally so a subject's test script can invoke them without
# `npm install` at run time — the sandbox runs with --network none.
RUN npm install -g jest mocha
RUN adduser -D -u 10001 runner
USER runner
WORKDIR /workspace/submission
