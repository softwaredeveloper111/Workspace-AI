# Code Quality Guide

> This document describes the code quality standards, tooling, and development workflow used in this project.

---

# Overview

This project follows a production-oriented development workflow. Before implementing features, the development environment was configured to ensure:

- Consistent code formatting
- Static code analysis
- Automated Git hooks
- Standardized commit messages
- Environment management
- Better developer experience

---

# Tooling Stack

| Tool | Purpose |
|------|----------|
| ESLint | Detect code issues and enforce coding standards |
| Prettier | Automatically format source code |
| EditorConfig | Keep editor settings consistent across developers |
| Husky | Execute Git hooks automatically |
| lint-staged | Run checks only on staged files |
| Commitlint | Validate commit message format |
| Conventional Commits | Standardize Git history |
| czg | Interactive commit message generator |
| Path Alias | Cleaner imports using `@/` |
| Environment Variables | Separate configuration from source code |

---

# Formatting

## Prettier

Prettier is responsible for code formatting.

Responsibilities:

- indentation
- quotes
- semicolons
- spacing
- line wrapping

Configuration:

```
.prettierrc
.prettierignore
```

Formatting is automatically executed before every commit.

---

# Linting

## ESLint

ESLint performs static analysis and detects potential issues before runtime.

Responsibilities:

- unused variables
- incorrect patterns
- React best practices
- TypeScript rules
- import validation

Configuration:

```
eslint.config.js
```

ESLint runs automatically during the pre-commit process.

---

# Editor Configuration

EditorConfig ensures every developer uses the same editor behavior.

Configuration:

```
.editorconfig
```

Current rules:

- UTF-8 encoding
- LF line endings
- 2-space indentation
- trim trailing whitespace
- insert final newline

---

# Git Workflow

## Husky

Husky manages Git hooks.

Current hook:

```
pre-commit
```

---

## lint-staged

Instead of checking the entire project, only staged files are processed.

Pipeline:

```
Staged Files
        │
        ▼
ESLint --fix
        │
        ▼
Prettier --write
        │
        ▼
Commit
```

---

## Commitlint

Commitlint validates commit messages.

Example:

```
feat(auth): add login page
```

Invalid commits are rejected.

---

## Conventional Commits

Commit messages follow the Conventional Commits specification.

Common types:

- feat
- fix
- docs
- style
- refactor
- test
- chore
- perf
- build
- ci

---

## czg

Interactive CLI for generating commit messages.

Instead of remembering the commit format manually, developers can run:

```
npm run commit
```

---

# Import Alias

Project uses the following alias:

```
@
```

Mapping:

```
@  →  src/
```

Example:

```ts
import Button from '@/components/Button';
```

This improves readability and simplifies refactoring.

---

# Environment Strategy

Environment variables are separated by purpose.

Files:

```
.env
.env.example
.env.development
.env.production
```

Rules:

- Never hardcode URLs.
- Never hardcode configuration.
- Never commit secrets.
- Always expose frontend variables using the `VITE_` prefix.

---

# Development Workflow

Recommended workflow:

```
Create Branch

↓

Develop Feature

↓

git add

↓

npm run commit

↓

git push
```

During commit:

```
Husky

↓

lint-staged

↓

ESLint

↓

Prettier

↓

Commitlint

↓

Commit Created
```

---

# Commands

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Lint project

```bash
npm run lint
```

Format project

```bash
npm run format
```

Interactive commit

```bash
npm run commit
```

Build production bundle

```bash
npm run build
```

---

# Best Practices

- Always use the import alias (`@/`).
- Never disable ESLint without justification.
- Never bypass Git hooks.
- Never expose secrets in frontend code.
- Keep formatting automatic through Prettier.
- Follow Conventional Commits for every commit.
- Keep environment-specific values inside `.env` files.
