#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== Predeploy checks =="
node -v
npm -v

echo
echo "== Install (clean) =="
npm ci

echo
echo "== Lint =="
npm run lint

echo
echo "== Build =="
npm run build

echo
echo "== Git status =="
git status --short
git branch -vv

echo
echo "Predeploy checks complete."
