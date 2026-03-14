#!/usr/bin/env bash
set -euo pipefail

OUT_DIR="${1:-/home/joe/.openclaw/workspace/sample-no-website-rescue/assets/ai}"
mkdir -p "$OUT_DIR"

prompts=(
"modern scandi cafe interior warm morning light oak textures espresso machine high end editorial photo"
"flat white and pastry on ceramic plate soft natural light premium food photography"
"cozy brunch table in new zealand cafe neutral palette lifestyle composition"
"cafe counter cabinet with pastries and scones tasteful styling depth of field"
"street facing cafe entrance in small new zealand town clean signage golden hour"
"friendly barista serving coffee in modern local cafe documentary style"
)

i=1
for p in "${prompts[@]}"; do
  url="https://image.pollinations.ai/prompt/${p// /%20}?width=1400&height=900&model=flux&nologo=true"
  curl -L "$url" -o "$OUT_DIR/tin-goose-ai-${i}.jpg"
  echo "saved $OUT_DIR/tin-goose-ai-${i}.jpg"
  i=$((i+1))
  sleep 1
done

echo "Done. Review images in: $OUT_DIR"
