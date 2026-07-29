# 10. Commitlint

> **Purpose**
>
> Commitlint validates commit messages before Git creates a commit. It ensures every commit follows a consistent format across the project.

---

# Why Use Commitlint?

Without Commitlint, every developer may write commit messages differently.

Example

```text
updated

bug fixed

changes

work done

final

abc
```

These messages provide little to no information about what changed.

Commitlint enforces a standard format, making commit history easier to read, search, and maintain.

---

# Project Decision

Commit messages must follow the **Conventional Commits** specification.

Format

```text
type(scope): subject
```

Example

```text
feat(auth): add login page

fix(api): handle invalid token

docs(readme): update installation guide
```

---

# Installation

Install

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

Verify

```bash
npm ls @commitlint/cli
```

Expected

```text
@commitlint/cli@21.x.x
```

---

# Configuration File

Create

```text
commitlint.config.js
```

Project Configuration

```js
export default {
  extends: ['@commitlint/config-conventional'],
};
```

---

# Configuration Breakdown

## extends

```js
extends: ['@commitlint/config-conventional']
```

### Purpose

Loads the Conventional Commits rules.

Instead of writing your own validation rules, Commitlint uses the official configuration.

---

# Relationship with Husky

Commitlint does not run automatically.

Husky executes it using the **commit-msg** hook.

Flow

```text
git commit

↓

Write Commit Message

↓

commit-msg Hook

↓

Commitlint

↓

Valid Message ?

↓

Yes → Commit Created

No → Commit Rejected
```

---

# commit-msg Hook

Create

```text
.husky/commit-msg
```

Add

```sh
#!/usr/bin/env sh

npx --no -- commitlint --edit "$1"
```

### Purpose

Reads the commit message entered by Git and validates it before creating the commit.

---

# Implementation

## Step 1 — Install

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

---

## Step 2 — Create Configuration

Create

```text
commitlint.config.js
```

Paste

```js
export default {
  extends: ['@commitlint/config-conventional'],
};
```

---

## Step 3 — Configure Husky

Create

```text
.husky/commit-msg
```

Paste

```sh
#!/usr/bin/env sh

npx --no -- commitlint --edit "$1"
```

---

## Step 4 — Stage Files

```bash
git add .
```

---

## Step 5 — Commit

```bash
git commit
```

Commitlint now validates the commit message automatically.

---

# Valid Commit Messages

```text
feat(auth): add login page

fix(api): handle token refresh

refactor(utils): simplify date formatter

docs(readme): update setup guide

style(button): improve spacing

test(auth): add login tests

build(vite): update dependencies

ci(github): add deployment workflow

chore(deps): upgrade eslint
```

---

# Invalid Commit Messages

```text
updated code

fixed bug

hello

work

commit

abc

last update
```

These messages will be rejected.

---

# Validation Flow

```text
Developer

↓

git commit

↓

Enter Commit Message

↓

Husky

↓

commit-msg Hook

↓

Commitlint

↓

Valid ?

↓

Yes

↓

Commit Created
```

---

# What Commitlint Does NOT Do

Commitlint does **not**

- Generate commit messages
- Format commit messages
- Create commits

It only validates whether the message follows the required format.

Commit generation in this project is handled by **czg**.

---

# Responsibilities

| Tool | Responsibility |
|------|----------------|
| Husky | Executes Git hook |
| Commitlint | Validates commit message |
| czg | Generates commit message |

---

# Common Mistakes

## Forgetting the commit-msg Hook

Installing Commitlint alone does nothing.

Without

```text
.husky/commit-msg
```

validation will never run.

---

## Wrong Configuration File

Use

```text
commitlint.config.js
```

Don't create a random configuration file name.

---

## Expecting Commitlint to Generate Messages

Commitlint validates.

It does not generate.

Use **czg** for interactive commit creation.

---

## Writing Random Commit Messages

Avoid

```text
update

fix

done

changes

work
```

Use proper Conventional Commits.

---

# Verification

Run

```bash
git commit -m "updated code"
```

Expected

```text
❌ Commit rejected
```

Run

```bash
git commit -m "feat(auth): add login page"
```

Expected

```text
✅ Commit created
```

---

# Verification Checklist

- [ ] Commitlint installed.
- [ ] `commitlint.config.js` created.
- [ ] `commit-msg` hook configured.
- [ ] Invalid commit messages are rejected.
- [ ] Valid commit messages are accepted.

---

# Best Practices

- Use Conventional Commits.
- Keep commit messages short and descriptive.
- Use imperative verbs (`add`, `fix`, `remove`, `update`).
- Let Commitlint enforce consistency automatically.
- Combine Commitlint with **czg** for the best developer experience.

---

# Quick Revision

- Commitlint validates commit messages.
- Uses the Conventional Commits specification.
- Runs through Husky's `commit-msg` hook.
- Rejects invalid commit messages before the commit is created.
- Does not generate commit messages—`czg` does that.
