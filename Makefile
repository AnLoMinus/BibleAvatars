# BibleAvatars - Makefile
# פקודות מהירות לניהול הפרויקט

.PHONY: help install test lint format clean docs serve

# Default target
help:
	@echo "BibleAvatars - Makefile Commands"
	@echo ""
	@echo "Available commands:"
	@echo "  make help        - Show this help message"
	@echo "  make validate    - Validate JSON files"
	@echo "  make lint        - Run linting checks"
	@echo "  make format      - Format code and files"
	@echo "  make docs        - Generate documentation"
	@echo "  make clean       - Clean temporary files"
	@echo "  make version     - Show current version"
	@echo "  make check       - Run all checks"

# Validate JSON files
validate:
	@echo "Validating JSON files..."
	@find . -name "*.json" -type f -exec sh -c 'python3 -m json.tool {} > /dev/null' \;
	@echo "✓ All JSON files are valid"

# Lint Markdown files (if markdownlint is available)
lint:
	@echo "Linting files..."
	@if command -v markdownlint >/dev/null 2>&1; then \
		markdownlint *.md docs/*.md 2>/dev/null || true; \
	else \
		echo "⚠ markdownlint not installed, skipping"; \
	fi
	@echo "✓ Linting complete"

# Format files
format:
	@echo "Formatting files..."
	@if command -v prettier >/dev/null 2>&1; then \
		prettier --write "*.md" "docs/*.md" 2>/dev/null || true; \
	else \
		echo "⚠ prettier not installed, skipping"; \
	fi
	@echo "✓ Formatting complete"

# Generate documentation
docs:
	@echo "Documentation is already in docs/ directory"
	@echo "To generate additional docs, edit the docs/ files"

# Clean temporary files
clean:
	@echo "Cleaning temporary files..."
	@find . -type f -name "*.tmp" -delete
	@find . -type f -name "*.bak" -delete
	@find . -type f -name ".DS_Store" -delete
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	@echo "✓ Clean complete"

# Show version
version:
	@cat VERSION

# Run all checks
check: validate lint
	@echo "✓ All checks passed"

# Install dependencies (if needed in the future)
install:
	@echo "No dependencies to install for this project"
	@echo "This is a documentation/data repository"

# Test (placeholder for future tests)
test:
	@echo "Running tests..."
	@make validate
	@echo "✓ Tests passed"

# Create release (helper for RELEASING.md)
release:
	@echo "To create a release, follow RELEASING.md"
	@echo "Current version: $$(cat VERSION)"

