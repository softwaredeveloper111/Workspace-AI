# 8. Husky

> **Purpose**
>
> Husky automates Git hooks, allowing quality checks to run automatically before or after Git events. In this project, Husky ensures that no code is committed without passing the required checks.

---

# Why Use Husky?

Developers often forget to run commands like:

```bash
npm run lint
```

or

```bash
npm run format
```

This can result in:

- Poor code quality
- Broken commits
- Inconsistent formatting
- Invalid commit messages

Husky solves this by running these checks automatically.

---

# Project Decision

Current Hooks

```text
pre-commit

commit-msg
```

Purpose

| Hook | Responsibility |
|------|----------------|
| pre-commit | Run quality checks before creating a commit |
| commit-msg | Validate commit message format |

---

# Project Workflow

```text
git add .
        │
        ▼
git commit
        │
        ▼
pre-commit
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
commit-msg
        │
        ▼
Commitlint
        │
        ▼
Commit Created
```

---

# Installation

Install Husky

```bash
npm install -D husky
```

---

# package.json

Add

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

### Why?

The `prepare` script initializes Husky after dependencies are installed.

Whenever someone runs

```bash
npm install
```

Husky is automatically set up.

---

# Implementation

## Step 1 — Install Husky

```bash
npm install -D husky
```

---

## Step 2 — Add Prepare Script

Open

```text
package.json
```

Add

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

---

## Step 3 — Initialize Husky

Run

```bash
npx husky init
```

This creates

```text
.husky/
```

Example

```text
.husky/
│
├── pre-commit
└── _
```

---

## Step 4 — Configure pre-commit Hook

Open

```text
.husky/pre-commit
```

Replace its contents with

```sh
#!/usr/bin/env sh

npx lint-staged
```

Now every commit automatically runs lint-staged.

---

## Step 5 — Create commit-msg Hook

Create

```text
.husky/commit-msg
```

Add

```sh
#!/usr/bin/env sh

npx --no -- commitlint --edit "$1"
```

This validates every commit message.

---

## Step 6 — Verify

Stage a file

```bash
git add .
```

Run

```bash
git commit
```

Expected

```text
pre-commit

↓

lint-staged

↓

ESLint

↓

Prettier

↓

commit-msg

↓

Commitlint

↓

Commit Success
```

---

# Folder Structure

```text
.husky/
│
├── _
├── pre-commit
└── commit-msg
```

---

# Hook Explanation

## pre-commit

Runs **before** Git creates the commit.

Current responsibility

```text
lint-staged
```

---

## commit-msg

Runs after entering the commit message but before the commit is finalized.

Current responsibility

```text
Commitlint
```

---

# Why Use Git Hooks?

Without Hooks

```text
Developer

↓

git commit

↓

Commit Created
```

Developer might forget to:

- Run ESLint
- Format code
- Validate commit message

---

With Hooks

```text
Developer

↓

git commit

↓

Automatic Checks

↓

Commit Created
```

Nothing depends on memory.

Everything is automated.

---

# What Husky Does NOT Do

Husky **does not**

- Format code
- Lint code
- Validate commits

It simply **runs other tools** at specific Git events.

Think of Husky as the **automation layer**.

---

# Responsibilities

| Tool | Responsibility |
|------|----------------|
| Husky | Execute Git hooks |
| lint-staged | Process staged files |
| ESLint | Check code quality |
| Prettier | Format code |
| Commitlint | Validate commit message |

---

# Common Mistakes

## Forgetting to Run

```bash
npx husky init
```

Without initialization, the `.husky` folder is never created.

---

## Forgetting the Prepare Script

Without

```json
"prepare": "husky"
```

other developers may not get Husky after running `npm install`.

---

## Running ESLint Directly

Avoid

```sh
npm run lint
```

inside `pre-commit`.

Instead use

```sh
npx lint-staged
```

Only staged files should be checked.

---

## Putting Everything Inside Husky

Husky should only trigger tools.

It should **not** contain complex logic.

Keep hooks simple.

---

## Deleting the `.husky` Folder

Removing the folder disables all Git hooks.

---

# Verification Checklist

- [ ] Husky installed.
- [ ] `prepare` script added.
- [ ] `.husky/` folder created.
- [ ] `pre-commit` hook configured.
- [ ] `commit-msg` hook configured.
- [ ] `git commit` triggers both hooks.
- [ ] Commit succeeds after all checks pass.

---

# Best Practices

- Keep hooks lightweight.
- Let Husky trigger other tools.
- Never put business logic inside Git hooks.
- Use Husky together with `lint-staged` instead of running checks on the entire project.
- Test hooks after every configuration change.

---

# Quick Revision

- Husky automates Git hooks.
- `pre-commit` runs before a commit is created.
- `commit-msg` validates the commit message.
- Husky does not lint or format code—it only executes other tools.
- Always initialize Husky and add the `prepare` script.
- In this project, Husky triggers `lint-staged` and `Commitlint`.
