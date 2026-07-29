# 4. ESLint

## Purpose

ESLint is responsible for code quality.

It detects:
- Bugs
- Bad coding practices
- TypeScript issues
- React mistakes

It does NOT format code.

Formatting belongs to Prettier.

---

# Project Structure

Configuration File

```text
eslint.config.js
```

---

# Packages Used

| Package | Purpose |
|----------|---------|
| eslint | Core linter |
| @eslint/js | JavaScript recommended rules |
| typescript-eslint | TypeScript support |
| eslint-plugin-react-hooks | React Hooks rules |
| eslint-plugin-react-refresh | Vite Fast Refresh rules |
| globals | Browser globals |
| eslint-config-prettier | Disable formatting conflicts |

---

# Installation

```bash
npm install -D \
eslint \
@eslint/js \
typescript-eslint \
eslint-plugin-react-hooks \
eslint-plugin-react-refresh \
globals \
eslint-config-prettier
```

---

# Project Configuration

```js
// your complete eslint.config.js
```

---

# Configuration Breakdown

## globalIgnores()

```js
globalIgnores([
  'dist',
  'build',
  'node_modules',
  'docs',
]);
```

Ignore generated folders.

Never lint build output.

---

## files

```js
files: ['**/*.{ts,tsx}']
```

Lint only TypeScript files.

---

## extends

Use

- JS recommended
- TS recommended
- React Hooks
- React Refresh

---

## languageOptions

```js
globals.browser
```

Avoid errors for browser APIs like:

window

document

localStorage

etc.

---

# Rules

```
no-console
```

Purpose

Avoid leaving debug logs.

Level

```js
warn
```

Example

❌

```ts
console.log(user);
```

Production

Remove before release.

---

```
no-debugger
```

Purpose

Prevent debugger statements.

Level

```js
error
```

Example

❌

```ts
debugger;
```

---

```
eqeqeq
```

Purpose

Always use strict equality.

❌

```ts
a == b
```

✅

```ts
a === b
```

Reason

Avoid type coercion bugs.

---

```
prefer-const
```

Purpose

Use const whenever possible.

---

```
no-var
```

Purpose

Never use var.

---

```
no-duplicate-imports
```

Purpose

Prevent duplicate imports.

---

```
curly
```

Purpose

Always use braces.

---

```
object-shorthand
```

Purpose

Use modern object syntax.

---

```
no-alert
```

Purpose

Avoid browser alert().

Use proper UI instead.

---

```
no-useless-return
```

Purpose

Remove unnecessary returns.

---

```
no-self-assign
```

Purpose

Prevent useless assignments.

---

```
no-unreachable
```

Purpose

Detect unreachable code.

---

```
no-unreachable-loop
```

Purpose

Warn about loops that never iterate.

---

```
no-constant-condition
```

Purpose

Warn for infinite conditions.

---

```
no-empty
```

Purpose

Avoid empty blocks.

---

# TypeScript Rules

```
no-explicit-any
```

Purpose

Avoid losing type safety.

Level

warn

---

```
no-unused-vars
```

Purpose

Detect unused variables.

Level

error

---

```
consistent-type-imports
```

Purpose

Prefer

```ts
import type { User } from './types';
```

---

```
no-empty-object-type
```

Purpose

Avoid empty object/interface types.

---

# package.json

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

---

# Implementation

## Step 1

Install packages.

## Step 2

Create

```text
eslint.config.js
```

## Step 3

Paste configuration.

## Step 4

Run

```bash
npm run lint
```

## Step 5

Fix reported issues.

---

# Verification

```bash
npm run lint
```

Expected

```text
✔ No problems found
```

---

# Common Mistakes

- Using ESLint for formatting.
- Forgetting `eslint-config-prettier`.
- Linting `dist/`.
- Turning off rules instead of fixing code.
- Using `any` everywhere.

---

# Quick Revision

- ESLint = Code Quality
- Prettier = Formatting
- One linter
- One formatter
- Fix errors instead of disabling rules
