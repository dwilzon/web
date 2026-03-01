#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== Repo =="
pwd
git branch --show-current
git status --short

echo
echo "== Runtime =="
node -v
npm -v

echo
echo "== Key dirs =="
for d in docs src public scripts bin; do
  [ -d "$d" ] && echo "[ok] $d" || echo "[missing] $d"
done
