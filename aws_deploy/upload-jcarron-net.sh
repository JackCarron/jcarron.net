#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
BUILD_DIR="$REPO_ROOT/build"
BUCKET_NAME="jacks-website"

if [[ ! -d "$BUILD_DIR" ]]; then
  echo "Build directory not found: $BUILD_DIR"
  echo "Run npm run build before deploying."
  exit 1
fi

aws s3 sync "$BUILD_DIR/" "s3://$BUCKET_NAME" --delete

echo "Deployment complete: s3://$BUCKET_NAME"
