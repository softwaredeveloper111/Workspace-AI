# 9. lint-staged

> **Purpose**
>
> `lint-staged` runs commands **only on staged files** before a commit is created. This makes Git hooks fast by avoiding unnecessary checks on the entire project.

---

# Why Use lint-staged?

Imagine your project contains **2,000 files**, but you've only modified **3 files**.

Without `lint-staged`

```text
git commit

↓

ESLint checks 2,000 files

↓

Prettier checks 2,000 files

↓

Slow Commit
```

With `lint-staged`

```text
git commit

↓

ESLint checks only staged files

↓

Prettier checks only staged files

↓

Fast Commit
```

Only the files being committed are processed.

---

# Project Decision

Only staged files should be checked.

Current workflow

```text
git add .

↓

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

# Installation

Install

```bash
npm install -D lint-staged
```

Verify

```bash
npm ls lint-staged
```

Expected

```text
lint-staged@17.x.x
```

---

# Project Configuration

Inside

```text
package.json
```

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css,scss}": [
      "prettier --write"
    ]
  }
}
```

---

# Configuration Breakdown

## JavaScript & TypeScript Files

```json
"*.{js,jsx,ts,tsx}": [
  "eslint --fix",
  "prettier --write"
]
```

### Purpose

For staged JavaScript and TypeScript files:

1. Run ESLint
2. Automatically fix fixable issues
3. Format the file with Prettier

Execution Order

```text
ESLint --fix

↓

Prettier --write
```

> **Why ESLint first?**
>
> ESLint fixes code quality issues first, then Prettier applies the final formatting.

---

## JSON / Markdown / CSS / SCSS

```json
"*.{json,md,css,scss}": [
  "prettier --write"
]
```

### Purpose

These files don't need ESLint.

Only formatting is required.

---

# Why Not Run ESLint on Every File?

Avoid

```bash
npm run lint
```

inside the `pre-commit` hook.

Reason

- Slower commits
- Unnecessary processing
- Poor developer experience

Instead

```text
Only staged files

↓

Much faster commits
```

---

# Relationship with Husky

Husky

```text
pre-commit
```

runs

```text
lint-staged
```

`lint-staged`

↓

Runs

- ESLint
- Prettier

Relationship

```text
Husky

↓

lint-staged

↓

ESLint

↓

Prettier
```

---

# Implementation

## Step 1 — Install

```bash
npm install -D lint-staged
```

---

## Step 2 — Configure package.json

Add

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css,scss}": [
      "prettier --write"
    ]
  }
}
```

---

## Step 3 — Configure Husky

Open

```text
.husky/pre-commit
```

Add

```sh
#!/usr/bin/env sh

npx lint-staged
```

---

## Step 4 — Stage Files

```bash
git add .
```

or

```bash
git add src/components/Button.tsx
```

---

## Step 5 — Commit

```bash
git commit
```

Expected Flow

```text
pre-commit

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

# Execution Flow

```text
Developer

↓

Modify Files

↓

git add

↓

Staged Files

↓

Husky

↓

lint-staged

↓

ESLint --fix

↓

Prettier --write

↓

Git Commit
```

---

# Example

Modified Files

```text
src/App.tsx

src/components/Button.tsx

README.md
```

Only these files are processed.

Files like

```text
src/pages/

src/hooks/

src/utils/

node_modules/
```

are ignored because they are not staged.

---

# Common Mistakes

## Running ESLint on the Entire Project

❌

```sh
npm run lint
```

inside `pre-commit`.

✔

```sh
npx lint-staged
```

---

## Forgetting `git add`

`lint-staged` only processes **staged** files.

Unstaged files are ignored.

---

## Wrong Command Order

❌

```json
[
  "prettier --write",
  "eslint --fix"
]
```

✔

```json
[
  "eslint --fix",
  "prettier --write"
]
```

Run ESLint first, then Prettier.

---

## Including Build Files

Don't include

- `dist`
- `build`
- `node_modules`

Only source files should be staged.

---

# Verification

Modify

```ts
const name="Roko"
```

Stage

```bash
git add .
```

Commit

```bash
git commit
```

Expected

- ESLint fixes issues.
- Prettier formats the file.
- Commit succeeds.

---

# Verification Checklist

- [ ] `lint-staged` installed.
- [ ] Configured in `package.json`.
- [ ] Husky `pre-commit` runs `lint-staged`.
- [ ] Only staged files are processed.
- [ ] ESLint runs before Prettier.
- [ ] Commit succeeds after all checks pass.

---

# Best Practices

- Process only staged files.
- Run ESLint before Prettier.
- Keep the configuration minimal.
- Never lint the entire project during every commit.
- Let Husky trigger `lint-staged` automatically.

---

# Quick Revision

- `lint-staged` runs commands only on staged files.
- It makes commits much faster.
- Husky executes `lint-staged` during the `pre-commit` hook.
- JavaScript/TypeScript files → ESLint → Prettier.
- JSON, Markdown, CSS, SCSS → Prettier only.
- Always stage files before committing.
