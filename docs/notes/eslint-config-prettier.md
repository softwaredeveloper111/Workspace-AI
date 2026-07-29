# 5. eslint-config-prettier

> **Purpose**
>
> `eslint-config-prettier` disables all formatting-related ESLint rules so that **Prettier** becomes the only tool responsible for code formatting.

---

# Why Do We Need It?

Both ESLint and Prettier can modify the appearance of your code.

Without proper integration, they may disagree on formatting, causing conflicts.

Example:

- ESLint formats code one way.
- Prettier formats it differently.
- Saving the file repeatedly results in formatting changes back and forth.

To prevent this, formatting responsibility is assigned **only** to Prettier.

---

# Project Decision

| Responsibility | Tool |
|---------------|------|
| Code Formatting | ✅ Prettier |
| Code Quality | ✅ ESLint |

This separation keeps the tooling simple and predictable.

---

# Installation

Install the package.

```bash
npm install -D eslint-config-prettier
```

Verify installation.

```bash
npm ls eslint-config-prettier
```

Expected

```text
eslint-config-prettier@10.x.x
```

---

# Implementation

## Step 1 — Install

```bash
npm install -D eslint-config-prettier
```

---

## Step 2 — Import

Open

```text
eslint.config.js
```

Import the package.

```js
import eslintConfigPrettier from 'eslint-config-prettier';
```

---

## Step 3 — Add as the Last Configuration

```js
export default defineConfig([
  // Other configurations...

  eslintConfigPrettier,
]);
```

> **Important:** Always place `eslintConfigPrettier` at the **end** of the configuration array so it can disable conflicting formatting rules from previously loaded configs.

---

# Configuration Flow

```text
ESLint Recommended Rules
        │
        ▼
TypeScript Rules
        │
        ▼
React Rules
        │
        ▼
eslint-config-prettier
        │
        ▼
Formatting Rules Disabled
        │
        ▼
Prettier Handles Formatting
```

---

# Before vs After

Without `eslint-config-prettier`

```text
ESLint
      │
      ├── Code Quality
      └── Formatting

Prettier
      │
      └── Formatting

❌ Possible conflicts
```

---

With `eslint-config-prettier`

```text
ESLint
      │
      └── Code Quality

Prettier
      │
      └── Formatting

✅ Clear responsibility
```

---

# Verification

Run ESLint.

```bash
npm run lint
```

Run Prettier.

```bash
npm run format
```

Expected

- ESLint reports code quality issues only.
- Prettier formats the code.
- No formatting conflicts.

---

# Common Mistakes

### Forgetting to Install the Package

```text
Cannot find package 'eslint-config-prettier'
```

Install it first.

---

### Not Importing It

Installing the package is not enough.

You must import it inside `eslint.config.js`.

---

### Placing It in the Wrong Position

❌ Incorrect

```js
export default defineConfig([
  eslintConfigPrettier,
  js.configs.recommended,
]);
```

The later configs can re-enable formatting rules.

---

✅ Correct

```js
export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,

  eslintConfigPrettier,
]);
```

---

### Assuming It Formats Code

`eslint-config-prettier` does **not** format anything.

It only disables conflicting ESLint formatting rules.

Formatting is still performed by **Prettier**.

---

# Verification Checklist

- [ ] Package installed.
- [ ] Imported in `eslint.config.js`.
- [ ] Added as the last configuration.
- [ ] ESLint runs successfully.
- [ ] Prettier formats code without conflicts.

---

# Best Practices

- Use **one formatter** (Prettier).
- Use **one linter** (ESLint).
- Always keep `eslint-config-prettier` as the last configuration.
- Never use ESLint for formatting.

---

# Quick Revision

- `eslint-config-prettier` disables formatting-related ESLint rules.
- It does **not** format code.
- Prettier remains the only formatter.
- Import it in `eslint.config.js`.
- Always place it at the end of the configuration array.
