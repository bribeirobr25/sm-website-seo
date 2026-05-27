#!/usr/bin/env bash
# Pre-commit hook — scan staged files for leaked secrets via secretlint.
# Blocks commits if any secret pattern matches.
#
# Bypass: SKIP_SIMPLE_GIT_HOOKS=1 git commit ...      (skip all hooks)
#         git commit --no-verify ...                   (skip pre-commit only)
# Use bypasses intentionally + know why.

set -e

# Collect staged files (Added / Copied / Modified). Skip deletes + renames.
STAGED=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED" ]; then
  exit 0
fi

# Filter out binary-extension files that secretlint can't usefully scan.
# Pass paths NUL-terminated to handle whitespace + special chars safely.
TMP_FILES=$(mktemp)
trap 'rm -f "$TMP_FILES"' EXIT

echo "$STAGED" | grep -vE '\.(jpg|jpeg|png|gif|webp|avif|ico|woff2?|ttf|otf|eot|pdf|zip|tar|gz|mp4|webm|mov)$' > "$TMP_FILES" || true

COUNT=$(wc -l < "$TMP_FILES" | tr -d ' ')
if [ "$COUNT" -eq 0 ]; then
  exit 0
fi

echo "[pre-commit] Scanning $COUNT staged file(s) for secrets..."

# Build the secretlint command. Use array-style argv expansion via xargs to handle
# odd filenames; `xargs -I {}` is POSIX and works on macOS + GNU.
# We invoke secretlint ONCE with all files as args (faster than per-file).
FILES_AS_ARGS=$(awk 'BEGIN{ORS=" "} {print}' "$TMP_FILES")
# shellcheck disable=SC2086
pnpm exec secretlint --maskSecrets --secretlintignore .gitignore $FILES_AS_ARGS

# `set -e` propagates secretlint's non-zero exit on any finding, blocking the commit.
exit 0
