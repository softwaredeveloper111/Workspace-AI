# 11. czg & cz-git

> **Purpose**
>
> `czg` and `cz-git` work together to create standardized, interactive commit messages. Instead of manually writing commit messages, developers answer a few prompts, and a valid Conventional Commit is generated automatically.

---

# Why Use czg & cz-git?

Writing commit messages manually often leads to inconsistent commit history.

Example

```text
updated

bug fixed

final

changes

last commit

abc
```

These messages don't clearly describe the changes.

With `czg` and `cz-git`, every commit follows the same format.

---

# Project Decision

Use an interactive commit workflow.

Instead of

```bash
git commit -m "..."
```

developers use

```bash
npm run commit
```

which launches an interactive questionnaire.

---

# Packages Used

Install

```bash
npm install -D czg cz-git
```

---

# Responsibilities

| Package | Responsibility |
|----------|----------------|
| czg | Starts the interactive commit process |
| cz-git | Generates the commit message |
| .czrc | Stores commit configuration |
| Commitlint | Validates the generated message |
| Husky | Executes Git hooks |

---

# Project Workflow

```text
Developer

↓

npm run commit

↓

czg

↓

Reads .czrc

↓

cz-git

↓

Interactive Questions

↓

Generate Commit Message

↓

git commit

↓

Husky

↓

commit-msg

↓

Commitlint

↓

Commit Created
```

---

# package.json

Configure

```json
{
  "scripts": {
    "commit": "czg"
  }
}
```

Now running

```bash
npm run commit
```

starts the interactive commit process.

---

# Configuration File

Create

```text
.czrc
```

This file contains all commit-related configuration.

Example responsibilities

- Commit Types
- Scopes
- Emoji Support
- Subject Length
- Skip Questions
- Custom Scopes
- Prompt Customization

`cz-git` reads this file every time a commit is created.

---

# How It Works

## Step 1

Developer runs

```bash
npm run commit
```

---

## Step 2

`czg` starts the interactive interface.

---

## Step 3

`cz-git` loads the configuration from

```text
.czrc
```

---

## Step 4

Interactive questions appear.

Example

```text
? Select Commit Type

❯ feat
  fix
  docs
  refactor
  style
  test
  chore
```

---

## Step 5

Developer answers all prompts.

Example

```text
Type

↓

feat

↓

Scope

↓

auth

↓

Subject

↓

add JWT authentication
```

---

## Step 6

`cz-git` generates

```text
feat(auth): add JWT authentication
```

---

## Step 7

Git starts the commit.

---

## Step 8

Husky executes

```text
commit-msg
```

---

## Step 9

Commitlint validates the message.

---

## Step 10

Commit is created.

---

# Relationship Between Tools

```text
npm run commit

↓

czg

↓

cz-git

↓

Generated Commit Message

↓

Git

↓

Husky

↓

Commitlint

↓

Commit Created
```

Each tool has a single responsibility.

---

# Why Not Use git commit -m ?

Manual commits rely on the developer remembering the correct format.

Example

```bash
git commit -m "fixed"
```

This may fail Commitlint validation.

Using

```bash
npm run commit
```

ensures every commit follows the project's standard automatically.

---

# What czg Does NOT Do

`czg` does **not**

- Generate commit messages
- Validate commit messages
- Run Git hooks

It simply launches the interactive commit interface.

---

# What cz-git Does NOT Do

`cz-git` does **not**

- Execute Git hooks
- Validate commit messages
- Format code
- Lint code

Its responsibility is to generate a commit message based on the answers provided by the developer.

---

# Implementation

## Step 1 — Install Packages

```bash
npm install -D czg cz-git
```

---

## Step 2 — Configure package.json

```json
{
  "scripts": {
    "commit": "czg"
  }
}
```

---

## Step 3 — Create `.czrc`

Create

```text
.czrc
```

Configure your project-specific commit types, scopes, prompts, and other options.

---

## Step 4 — Run

```bash
npm run commit
```

---

## Step 5 — Answer the Questions

Select

- Commit Type
- Scope
- Subject
- Additional prompts (if configured)

---

## Step 6 — Complete the Commit

The generated commit message is passed to Git and then validated by Commitlint.

---

# Common Mistakes

## Using `git commit -m`

Avoid

```bash
git commit -m "updated"
```

Use

```bash
npm run commit
```

---

## Forgetting `.czrc`

Without

```text
.czrc
```

`cz-git` will use its default configuration or may not match your project's conventions.

---

## Confusing czg and cz-git

Remember

- `czg` launches the interface.
- `cz-git` generates the commit message.

---

## Expecting Validation

`cz-git` generates the commit message.

Validation is performed later by Commitlint.

---

# Verification

Run

```bash
npm run commit
```

Expected Flow

```text
Interactive Questions

↓

Generated Commit Message

↓

Commitlint Validation

↓

Commit Created
```

---

# Verification Checklist

- [ ] `czg` installed.
- [ ] `cz-git` installed.
- [ ] `.czrc` created.
- [ ] `commit` script added to `package.json`.
- [ ] `npm run commit` opens the interactive prompt.
- [ ] Commit message is generated correctly.
- [ ] Commitlint validates the generated message.

---

# Best Practices

- Always use `npm run commit` instead of `git commit -m`.
- Keep `.czrc` version-controlled.
- Define meaningful commit scopes.
- Use clear, concise commit subjects.
- Let `cz-git` generate the message and Commitlint enforce the rules.

---

# Quick Revision

- `czg` is the CLI that starts the interactive commit process.
- `cz-git` generates Conventional Commit messages from your answers.
- `.czrc` stores the commit configuration.
- Husky runs the Git hooks.
- Commitlint validates the generated commit message.
- Use `npm run commit` for consistent, production-grade commit history.
