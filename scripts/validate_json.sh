#!/bin/bash
# BibleAvatars - JSON Validation Script

echo "Validating JSON files..."

# Find all JSON files
find . -name "*.json" -type f | while read -r file; do
    # Skip node_modules and .git
    if [[ "$file" == *"node_modules"* ]] || [[ "$file" == *".git"* ]]; then
        continue
    fi

    # Validate JSON
    if python3 -m json.tool "$file" > /dev/null 2>&1; then
        echo "✓ $file"
    else
        echo "✗ $file - INVALID"
        exit 1
    fi
done

echo "All JSON files are valid!"

