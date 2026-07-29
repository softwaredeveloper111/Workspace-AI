# 12. Git Workflow

> **Purpose**
>
> A Git workflow defines how code moves from your local machine to the remote repository in a consistent and reliable manner. Following a standard workflow keeps the repository clean, maintains code quality, and reduces integration issues.

---

# Why Use a Git Workflow?

Without a workflow, developers may:

- Skip formatting
- Forget linting
- Write poor commit messages
- Push unreviewed code
- Create inconsistent Git history

A defined workflow ensures every commit passes the same quality checks before reaching the repository.

---

# Project Workflow

```text
Start Development

↓

Create / Switch Branch

↓

Write Code

↓

Format & Save

↓

git add

↓

npm run commit

↓

czg

↓

cz-git

↓

Generate Commit Message

↓

Git Commit

↓

Husky

↓

pre-commit

↓

lint-staged

↓

ESLint --fix

↓

Prettier --write

↓

commit-msg

↓

Commitlint

↓

Commit Success

↓

git push

↓

Create Pull Request

↓

Code Review

↓

Merge into Main
```

---

# Branch Strategy

```text
main
```

Production-ready code.

---

```text
feature/<feature-name>
```

Example

```text
feature/authentication

feature/dashboard

feature/user-profile
```

Used for developing new features.

---

```text
bugfix/<bug-name>
```

Example

```text
bugfix/login-error

bugfix/sidebar-overflow
```

Used for fixing bugs.

---

```text
hotfix/<issue>
```

Example

```text
hotfix/payment-failure
```

Used for urgent production fixes.

---

# Daily Development Workflow

## Step 1 — Pull Latest Changes

```bash
git pull origin main
```

---

## Step 2 — Create a New Branch

```bash
git checkout -b feature/authentication
```

---

## Step 3 — Develop the Feature

Write code normally.

---

## Step 4 — Stage Changes

```bash
git add .
```

or

```bash
git add src/components/Login.tsx
```

---

## Step 5 — Create a Commit

Instead of

```bash
git commit -m "..."
```

Use

```bash
npm run commit
```

This automatically:

```text
czg

↓

cz-git

↓

Generate Commit Message

↓

Commitlint Validation

↓

Commit Created
```

---

## Step 6 — Push Branch

```bash
git push origin feature/authentication
```

---

## Step 7 — Create Pull Request

Open a Pull Request from

```text
feature/authentication

↓

main
```

---

## Step 8 — Code Review

Review

- Code Quality
- Naming
- Architecture
- Tests
- Documentation

---

## Step 9 — Merge

Once approved, merge the Pull Request into

```text
main
```

---

# Complete Commit Flow

```text
Write Code

↓

git add

↓

npm run commit

↓

czg

↓

cz-git

↓

Git

↓

Husky

↓

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

Commit Created
```

---

# Push Flow

```text
Local Repository

↓

git push

↓

GitHub

↓

Pull Request

↓

Review

↓

Merge

↓

Production Branch
```

---

# Quality Gates

Every commit passes through these checks:

| Stage | Tool |
|--------|------|
| Code Quality | ESLint |
| Code Formatting | Prettier |
| Staged File Processing | lint-staged |
| Git Hooks | Husky |
| Commit Message Generation | czg + cz-git |
| Commit Validation | Commitlint |

---

# Complete Development Cycle

```text
Pull Latest Code

↓

Create Branch

↓

Develop Feature

↓

git add

↓

npm run commit

↓

Git Hooks

↓

Push Branch

↓

Create Pull Request

↓

Code Review

↓

Merge

↓

Delete Feature Branch
```

---

# Common Mistakes

## Committing Directly to `main`

Avoid making feature changes directly on the `main` branch.

Always create a feature or bugfix branch.

---

## Skipping Interactive Commits

Avoid

```bash
git commit -m "update"
```

Use

```bash
npm run commit
```

---

## Skipping Pull Before Starting

Always synchronize with the latest `main` branch before creating a new branch.

---

## Pushing Without Review

Create a Pull Request instead of pushing directly to the production branch.

---

## Large Commits

Prefer multiple small, focused commits instead of one large commit containing unrelated changes.

---

# Verification Checklist

- [ ] Pulled the latest changes.
- [ ] Created a dedicated branch.
- [ ] Developed the feature.
- [ ] Staged the required files.
- [ ] Used `npm run commit`.
- [ ] All Git hooks passed successfully.
- [ ] Pushed the branch.
- [ ] Created a Pull Request.
- [ ] Completed code review.
- [ ] Merged into `main`.

---

# Best Practices

- Pull the latest changes before starting new work.
- Use descriptive branch names.
- Keep commits small and focused.
- Always use `npm run commit`.
- Never bypass Husky or Commitlint.
- Create Pull Requests for every feature.
- Merge only reviewed and approved code.
- Delete merged feature branches to keep the repository clean.

---

# Quick Revision

- Create a new branch for every feature or bug fix.
- Stage changes with `git add`.
- Use `npm run commit` to generate standardized commit messages.
- Husky automatically runs `lint-staged` and Commitlint.
- Push your branch and create a Pull Request.
- Merge reviewed code into `main`.
- Keep the Git history clean, consistent, and production-ready.
