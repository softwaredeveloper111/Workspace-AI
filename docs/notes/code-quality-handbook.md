# 1. Project Setup Order

> **Purpose**
>
> This chapter defines the exact order for setting up a production-grade React + TypeScript project. Following this sequence prevents tool conflicts and ensures each tool integrates correctly with the previous one.

---

# Why Follow an Order?

Every tool depends on another tool.

For example:

- ESLint should not fight with Prettier.
- Husky requires Git to be initialized.
- lint-staged requires Husky.
- Commitlint requires a commit-msg hook.
- Path aliases require both TypeScript and Vite configuration.

Installing tools randomly often leads to unnecessary debugging and configuration conflicts.

---

# Project Setup Flow

```text
Create Project
        │
        ▼
Install Dependencies
        │
        ▼
Initialize Git Repository
        │
        ▼
Configure EditorConfig
        │
        ▼
Configure Prettier
        │
        ▼
Configure ESLint
        │
        ▼
Integrate Prettier + ESLint
        │
        ▼
Configure Path Alias
        │
        ▼
Configure Environment Files
        │
        ▼
Configure Husky
        │
        ▼
Configure lint-staged
        │
        ▼
Configure Commitlint
        │
        ▼
Configure czg
        │
        ▼
Verify Entire Workflow
        │
        ▼
Start Development
```

---

# Complete Setup Sequence

## Step 1 — Create Project

Create a new Vite project.

```bash
npm create vite@latest
```

Select:

```text
Framework : React

Variant : TypeScript
```

Install dependencies.

```bash
npm install
```

---

## Step 2 — Initialize Git

If Git isn't already initialized:

```bash
git init
```

Create the first commit after the complete setup is finished.

---

## Step 3 — Configure EditorConfig

Create:

```text
.editorconfig
```

Purpose:

- Consistent indentation
- UTF-8 encoding
- LF line endings
- Final newline
- Remove trailing whitespace

Reason:

Every editor behaves differently.
EditorConfig makes all editors behave consistently.

---

## Step 4 — Configure Prettier

Install

```bash
npm install -D prettier
```

Create

```text
.prettierrc

.prettierignore
```

Configure VS Code

- Default Formatter → Prettier
- Format On Save → Enabled

Purpose

Automatic code formatting.

---

## Step 5 — Configure ESLint

Install ESLint and required plugins.

Configure

```text
eslint.config.js
```

Purpose

- Detect bugs
- Enforce coding standards
- Improve maintainability

---

## Step 6 — Integrate ESLint with Prettier

Install

```bash
npm install -D eslint-config-prettier
```

Import

```js
import eslintConfigPrettier from 'eslint-config-prettier';
```

Add it as the last configuration.

```js
eslintConfigPrettier;
```

Purpose

Disable formatting-related ESLint rules.

Final Responsibility

```text
Formatting
        │
        ▼
Prettier

Code Quality
        │
        ▼
ESLint
```

---

## Step 7 — Configure Path Alias

Files

```text
tsconfig.app.json

vite.config.ts
```

Alias

```text
@
```

maps to

```text
src/
```

Purpose

Replace

```text
../../../components
```

with

```text
@/components
```

---

## Step 8 — Configure Environment Files

Create

```text
.env

.env.example

.env.development

.env.production
```

Purpose

Separate configuration for different environments.

Never store secrets inside frontend environment files.

---

## Step 9 — Configure Husky

Install

```bash
npm install -D husky
```

Initialize

```bash
npx husky init
```

Create

```text
.husky/
```

Purpose

Run Git hooks automatically.

---

## Step 10 — Configure lint-staged

Install

```bash
npm install -D lint-staged
```

Configure inside

```text
package.json
```

Purpose

Run checks only on staged files.

---

## Step 11 — Configure Commitlint

Install

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

Create

```text
commitlint.config.js
```

Configure

```js
export default {
  extends: ['@commitlint/config-conventional'],
};
```

Purpose

Validate commit message format.

---

## Step 12 — Configure commit-msg Hook

Create

```text
.husky/commit-msg
```

Content

```sh
#!/usr/bin/env sh

npx --no -- commitlint --edit "$1"
```

Purpose

Validate every commit message before Git creates the commit.

---

## Step 13 — Configure czg

Install

```bash
npm install -D cz-git czg
```

Create

```text
.czrc
```

Add script

```json
"scripts": {
  "commit": "czg"
}
```

Purpose

Generate standardized commit messages interactively.

---

## Step 14 — Verify Entire Workflow

Run formatting

```bash
npm run format
```

Run formatting check

```bash
npm run format:check
```

Run lint

```bash
npm run lint
```

Create a test commit

```bash
git add .

npm run commit
```

Expected Flow

```text
Write Code
      │
      ▼
Save File
      │
      ▼
Prettier
      │
      ▼
git add .
      │
      ▼
npm run commit
      │
      ▼
Husky
      │
      ▼
lint-staged
      │
      ▼
ESLint --fix
      │
      ▼
Prettier --write
      │
      ▼
Commitlint
      │
      ▼
Git Commit Created
```

---

# Final Project Structure

```text
project/
│
├── .editorconfig
├── .env
├── .env.development
├── .env.production
├── .env.example
├── .gitignore
├── .prettierrc
├── .prettierignore
├── .czrc
├── commitlint.config.js
├── eslint.config.js
├── package.json
├── tsconfig.app.json
├── vite.config.ts
├── .husky/
│   ├── pre-commit
│   └── commit-msg
│
├── src/
├── public/
└── docs/
```

---

# Setup Checklist

| Step | Status |
|-------|:------:|
| Create Vite Project | ☐ |
| Install Dependencies | ☐ |
| Initialize Git | ☐ |
| Configure EditorConfig | ☐ |
| Configure Prettier | ☐ |
| Configure ESLint | ☐ |
| Add eslint-config-prettier | ☐ |
| Configure Path Alias | ☐ |
| Configure Environment Files | ☐ |
| Configure Husky | ☐ |
| Configure lint-staged | ☐ |
| Configure Commitlint | ☐ |
| Configure czg | ☐ |
| Verify Workflow | ☐ |

---

# Production Notes

- Configure one formatter (**Prettier**) and one linter (**ESLint**).
- Install tools in the defined order to avoid unnecessary conflicts.
- Keep automation inside Git hooks instead of relying on developers to run commands manually.
- Verify the complete workflow before writing production code.
- After the setup is complete, create a dedicated commit (for example: `chore(project-setup): initialize code quality tooling`) so the project starts from a clean, reproducible baseline.
