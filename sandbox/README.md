# Sandbox images

These are the isolated execution environments the backend's
`internal/sandbox.DockerRunner` runs each submission's test suite in
(`Gauntlex.md`'s "Docker-based sandbox for running each subject's own test
suite in isolation"). They're standalone Dockerfiles, not part of the Go
module or the frontend build — build them once per host with:

```bash
./images/build-all.sh
```

## Convention

Each image:

- Runs as a non-root user (`runner`).
- Has no network access at run time (`docker run --network none`) — tests
  must not depend on hitting the internet.
- Expects the submission mounted read-only at `/workspace/submission`,
  containing **both** the student's solution files and the subject's
  official test files merged together (the platform owns the test files;
  the student never sees or supplies them — see `Gauntlex.md`'s "server-side
  test validation" step). Assembling that merged submission is the job of
  the service that calls `sandbox.Runner`, not the image itself.
- Is invoked with a fixed test command per language (`go test ./...`,
  `npm test --silent`, `cargo test`, `./run_tests.sh`) — see
  `backend/internal/sandbox/languages.go`. Exit code 0 means the suite
  passed; anything else is a failure, and stdout/stderr are surfaced back to
  the Guide's next hint per the core loop's escalation rule.

## Adding a language

01-edu's curriculum spans far more than these four (Python, Java, PHP,
Ruby, C/C++, Dart, Solidity, ...) — see `01-CURRICULUM-MAP.md` §8.7 for the
open question about test coverage across the rest of the curriculum. Add a
new language by:

1. Adding a subdirectory here with a `Dockerfile` following the convention
   above.
2. Registering it in `backend/internal/sandbox/languages.go`'s
   `languageImages` map.
3. Adding it to `build-all.sh`.
