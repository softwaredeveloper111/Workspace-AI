# Code Quality Notes (Part 2)

> Implementation reference.
>
> This document records every important configuration, why it exists, how it was implemented, and production recommendations.

---

# Overall Architecture

The development environment was configured in the following order.

```
React + TypeScript + Vite

↓

EditorConfig

↓

Prettier

↓

ESLint

↓

Husky

↓

lint-staged

↓

Commitlint

↓

Conventional Commits

↓

czg

↓

Import Alias

↓

Environment Strategy
```

This order minimizes conflicts between tools.

---

# EditorConfig

## Files

```
.editorconfig
```

---

## Configuration

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

---

## Why these rules?

### UTF-8

Ensures all developers use the same encoding.

---

### LF

Avoids Windows vs Linux Git differences.

---

### 2 Spaces

Consistent indentation across the project.

---

### Final Newline

Recommended by POSIX and Git.

---

### Trim Trailing Whitespace

Avoids meaningless Git diffs.

---

# Prettier

## Files

```
.prettierrc

.prettierignore
```

---

## Responsibility

Formatting only.

Never use Prettier to detect code problems.

---

## Project Decision

Formatting responsibility belongs only to Prettier.

ESLint should never format code.

---

## Important Package

```
eslint-config-prettier
```

Purpose

Disable formatting rules inside ESLint.

Avoid conflicts.

---

# ESLint

## File

```
eslint.config.js
```

---

## Responsibility

Static analysis.

Not formatting.

---

## Project Decision

Formatting rules disabled.

Quality rules enabled.

---

## Important Ignore

```
dist/
```

Build output should never be linted.

---

## Why not ignore node_modules?

Already ignored internally by ESLint.

No need to configure manually.

---

# Husky

## Folder

```
.husky/
```

---

## Current Hook

```
pre-commit
```

---

## Current Pipeline

```
git commit

↓

Husky

↓

lint-staged

↓

ESLint --fix

↓

Prettier --write

↓

Commit
```

---

## Why pre-commit?

Reject bad code before it enters Git history.

---

# lint-staged

## Configuration

```json
{
    "*.{js,jsx,ts,tsx}": [
        "eslint --fix",
        "prettier --write"
    ],
    "*.{json,css,scss,md}": [
        "prettier --write"
    ]
}
```

---

## Why staged files only?

Large projects can contain thousands of files.

Checking only staged files keeps commits fast.

---

# Commitlint

## File

```
commitlint.config.js
```

---

## Configuration

```js
export default {
    extends: ['@commitlint/config-conventional'],
};
```

---

## Responsibility

Validate commit messages.

---

## Rejects

```
updated code
```

Accepts

```
feat(auth): add login page
```

---

# Conventional Commits

## Types Used

```
feat
fix
docs
style
refactor
perf
test
build
ci
chore
```

---

## Format

```
type(scope): subject
```

Example

```
feat(auth): add forgot password page
```

---

# czg

## Why czg?

Initially explored:

```
Commitizen

↓

cz-git
```

Later switched to:

```
czg

↓

cz-git
```

Reason

- simpler CLI
- actively recommended by cz-git
- less configuration overhead

---

## Important Understanding

czg is **not** a replacement for cz-git.

Relationship

```
czg

↓

uses

↓

cz-git
```

cz-git still generates the commit prompts.

---

## Configuration File

```
.czrc
```

Contains

- commit types
- scopes
- emojis
- messages
- prompts

---

# Import Alias

## Why?

Instead of

```
../../../../components
```

Use

```
@/components
```

---

## Files

```
tsconfig.app.json

vite.config.ts
```

---

## TypeScript

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"]
        }
    }
}
```

---

## Vite

```ts
resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src")
    }
}
```

---

## Why configure both?

TypeScript

↓

Editor & compiler

Vite

↓

Bundler

Both resolve imports independently.

---

## TypeScript 6 Note

TypeScript 6 marks `baseUrl` as deprecated for future removal.

Current workaround:

```
ignoreDeprecations
```

until Vite/TypeScript ecosystem fully transitions.

Future projects should verify the latest recommendation before upgrading.

---

# Environment Strategy

## Files

```
.env

.env.example

.env.development

.env.production
```

---

## Responsibilities

.env

Shared configuration

---

.env.example

Documents required variables.

Never store secrets.

---

.env.development

Local development values.

---

.env.production

Production deployment values.

---

## Access

Correct

```ts
import.meta.env.VITE_API_URL
```

Wrong

```ts
process.env
```

---

## Why VITE_?

Only variables prefixed with

```
VITE_
```

are exposed to frontend code.

---

## Never Store

❌ Database passwords

❌ JWT secrets

❌ OpenAI Secret Keys

❌ Private API Keys

Frontend variables are public.

---

# Import Style

Preferred

```ts
import Button from "@/components/Button";
```

Avoid

```ts
import Button from "../../../components/Button";
```

---

# Git Workflow

Current workflow

```
Create Branch

↓

Develop

↓

git add .

↓

npm run commit

↓

git push
```

During commit

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

Git Commit
```

---

# Folder Summary

```
.editorconfig

.prettierrc

.prettierignore

eslint.config.js

commitlint.config.js

.czrc

.husky/

tsconfig.app.json

vite.config.ts

.env

.env.example

.env.development

.env.production
```

---

# Production Decisions

✔ One formatter

Prettier

---

✔ One linter

ESLint

---

✔ Automatic Git hooks

Husky

---

✔ Only staged files

lint-staged

---

✔ Standard commit history

Conventional Commits

---

✔ Interactive commits

czg

---

✔ Centralized imports

@

---

✔ Environment separation

.env files

---

# Lessons Learned

1.

ESLint and Prettier solve different problems.

Never confuse them.

---

2.

EditorConfig configures editors.

It does not format code.

---

3.

TypeScript alias alone is not enough.

Vite must also understand aliases.

---

4.

Environment variables are configuration.

They are not security.

---

5.

Git hooks improve discipline through automation.

---

6.

Consistency is more valuable than personal coding style.

---

# Future Improvements

Not implemented yet.

- GitHub Actions (CI)
- Automated Deployment (CD)
- Testing (Vitest)
- E2E Testing
- Storybook (if required)
- Renovate (optional)
- Semantic Release (optional)

These should be introduced only when the project reaches the appropriate stage.
