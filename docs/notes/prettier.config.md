# 3. Prettier

> **Purpose**
>
> Prettier is the single source of truth for code formatting in this project. It automatically formats code to maintain a consistent code style across the entire codebase.

---

# Why Use Prettier?

In a team, every developer has a different coding style.

Without Prettier:

- Different quote styles
- Different indentation
- Missing semicolons
- Inconsistent commas
- Large formatting-only pull requests
- Time wasted during code reviews

Instead of discussing formatting, Prettier formats everything automatically.

---

# Responsibility

Prettier is responsible **only** for formatting.

It does **not**

- Detect bugs
- Find unused variables
- Detect logical errors
- Improve code quality

Those responsibilities belong to ESLint.

---

# Project Decision

| Responsibility | Tool |
|---------------|------|
| Code Formatting | ✅ Prettier |
| Code Quality | ✅ ESLint |

Formatting should never be handled by ESLint.

---

# Installation

## Step 1 — Install Prettier

```bash
npm install -D prettier
```

Verify installation

```bash
npm ls prettier
```

Expected

```text
prettier@3.x.x
```

---

# Project Files

Create the following files in the project root.

```text
.prettierrc

.prettierignore
```

---

# Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

---

# Configuration Breakdown

## semi

```json
{
  "semi": true
}
```

### Purpose

Always insert semicolons.

Example

Before formatting

```ts
const name = 'Roko'
```

After formatting

```ts
const name = 'Roko';
```

### Project Decision

Always use semicolons.

---

## singleQuote

```json
{
  "singleQuote": true
}
```

### Purpose

Use single quotes instead of double quotes.

Before

```ts
const name = "Roko";
```

After

```ts
const name = 'Roko';
```

### Project Decision

Use single quotes across the project.

---

## trailingComma

```json
{
  "trailingComma": "all"
}
```

### Purpose

Add trailing commas wherever possible.

Before

```ts
const user = {
  name: 'Roko'
};
```

After

```ts
const user = {
  name: 'Roko',
};
```

### Why?

Makes Git diffs cleaner when new properties are added.

---

# Ignore File

Create

```text
.prettierignore
```

Project Configuration

```text
node_modules
dist
build
coverage
package-lock.json
docs
```

---

# Why Ignore These?

| Path | Reason |
|------|--------|
| node_modules | Third-party packages |
| dist | Build output |
| build | Production build |
| coverage | Test reports |
| package-lock.json | Auto-generated file |
| docs | Documentation (Project Decision) |

---

# VS Code Configuration

## Step 1

Install extension

```text
Prettier - Code formatter
```

Publisher

```text
Prettier
```

---

## Step 2

Open Settings

Search

```text
Default Formatter
```

Select

```text
Prettier - Code Formatter
```

---

## Step 3

Search

```text
Format On Save
```

Enable

```text
✓ Format On Save
```

Equivalent

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

---

# Package Scripts

Add to

```json
package.json
```

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

# Script Explanation

## format

```bash
npm run format
```

Formats every supported file.

Use when

- Before pushing
- Initial formatting
- Large refactoring

---

## format:check

```bash
npm run format:check
```

Checks formatting without modifying files.

Useful for

- CI/CD
- GitHub Actions
- Verification

---

# Implementation (Step-by-Step)

## Step 1

Install

```bash
npm install -D prettier
```

---

## Step 2

Create

```text
.prettierrc
```

Paste

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

---

## Step 3

Create

```text
.prettierignore
```

Paste

```text
node_modules
dist
build
coverage
package-lock.json
docs
```

---

## Step 4

Install the VS Code extension.

```
Prettier - Code formatter
```

---

## Step 5

Configure VS Code.

- Default Formatter → Prettier
- Format On Save → Enabled

---

## Step 6

Add scripts to

```json
package.json
```

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## Step 7

Run formatting.

```bash
npm run format
```

---

## Step 8

Verify.

Create

```ts
const user={name:"Roko",age:21}
```

Save the file.

Expected

```ts
const user = {
  name: 'Roko',
  age: 21,
};
```

Or run

```bash
npm run format
```

---

# Formatting Flow

```text
Developer
      │
      ▼
Write Code
      │
      ▼
Save File
      │
      ▼
VS Code
      │
      ▼
Prettier
      │
      ▼
Formatted File
```

---

# Common Mistakes

### Using ESLint for formatting

Wrong.

Formatting belongs to Prettier.

---

### Installing multiple formatters

Use only one formatter.

---

### Forgetting Format on Save

Results in inconsistent formatting.

---

### Editing generated files

Do not format

- node_modules
- dist
- build

---

### Forgetting `.prettierignore`

Prettier may waste time formatting unnecessary files.

---

# Verification Checklist

- [ ] Prettier installed.
- [ ] `.prettierrc` created.
- [ ] `.prettierignore` created.
- [ ] VS Code extension installed.
- [ ] Default formatter set to Prettier.
- [ ] Format on Save enabled.
- [ ] `format` script added.
- [ ] `format:check` script added.
- [ ] Formatting verified.

---

# Best Practices

- Use only one formatter in the project.
- Enable Format on Save.
- Keep configuration minimal.
- Ignore generated files.
- Let Prettier handle formatting automatically.

---

# Quick Revision

- Prettier formats code.
- ESLint checks code quality.
- `.prettierrc` stores formatting rules.
- `.prettierignore` excludes unnecessary files.
- `npm run format` formats the project.
- `npm run format:check` verifies formatting without modifying files.
- Always configure Prettier before ESLint.
