---
description: "Codex Troubleshooting Manual summarizes the location and recovery paths for login, installation, pertasks, dependencies, command failures and task execution abnormalities to help you continue working quickly."
---

# Troubleshooting Manual

This page collects frequently asked questions about using Codex. Continuous additions via PR are welcome.

## Codex cannot find project context

Possible reasons:

- You are not in the project root directory.
- The repository is missing a README, test commands, or project description.
- The monorepo does not specify package boundaries.

Processing method:

- Start by making Codex a read-only directory and summarize the project structure.
- Add or update `AGENTS.md`.
- Specify the relevant directories in the task description.

## The scope of Codex changes is too large

Processing method:

- Make it clear "only modify these files".
- "Output the plan first, don't take action" is required.
- Break the task into smaller steps.
- Reject irrelevant refactorings during review.

## The test cannot run

Processing method:

- Let Codex locate the test command first.
- Check whether dependencies are installed.
- Distinguish between environmental issues and code issues.
- If it is an environmental problem, let the Codex record block instead of continuing to modify it.

## Generated content is inaccurate

Processing method:

- The Codex is required to cite the document on which it is based.
- Links to official fact requests.
- Let it differentiate between "confirmed" and "speculated."
- Let it read the code first and then write the documentation.

## Login or pertask issues

Processing method:

- Update Codex CLI to the latest version.
- Rerun the login process.
- Review current account plans and organizational policies.
- Check out the Codex-related articles in the official Help Center.
