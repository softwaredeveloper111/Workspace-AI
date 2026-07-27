# 📄 Git Workflow Guide

> Beginner-friendly guide to a production-style Git workflow for Workspace AI.

---

# 🎯 Goal

The goal is **not just to save code on GitHub**.

The goal is to:

- Keep the project organized
- Isolate every feature
- Maintain a clean commit history
- Make bugs easier to fix
- Follow a workflow similar to professional software teams

---

# 🌳 Branch Strategy

We will use only two types of branches.

```
main
feature/*
```

Example

```
main

feature/project-setup

feature/design-system

feature/layout

feature/auth

feature/dashboard

feature/chat

feature/prompt-library

feature/notes

feature/profile

feature/settings

feature/performance

feature/testing
```

---

# 📌 Main Branch

`main` always contains **stable code**.

Rules

- Never develop directly on `main`
- Every completed feature is merged into `main`
- `main` should always be deployable

Think of `main` as the **master copy** of your project.

---

# 🚀 Feature Branch

Every major feature gets its own branch.

Examples

```
feature/auth

feature/chat

feature/dashboard

feature/settings
```

Only work related to that feature should exist in that branch.

---

# 🔄 Development Workflow

Every feature follows the same lifecycle.

```
main

↓

Create Feature Branch

↓

Build Feature

↓

Commit Changes

↓

Push Feature Branch

↓

Merge into main

↓

Delete Feature Branch
```

Repeat this process for every feature.

---

# 🛠 Step-by-Step Workflow

## Step 1

Go to the latest main branch.

```
git checkout main
git pull origin main
```

---

## Step 2

Create a new feature branch.

```
git checkout -b feature/auth
```

Now all your work happens inside this branch.

---

## Step 3

Build the feature.

Example

- Login UI
- Signup UI
- Form Validation
- Protected Routes

---

## Step 4

Commit meaningful progress.

Good examples

```
feat(auth): create login page

feat(auth): add signup page

feat(auth): implement form validation

feat(auth): protect private routes
```

Avoid commits like

```
update

changes

done

final

working
```

---

## Step 5

Push the feature branch.

```
git push -u origin feature/auth
```

---

## Step 6

Once the feature is complete,

switch back to main.

```
git checkout main
```

Pull latest changes.

```
git pull origin main
```

Merge the feature.

```
git merge feature/auth
```

Push updated main.

```
git push origin main
```

---

## Step 7

Delete the feature branch.

Local

```
git branch -d feature/auth
```

Remote

```
git push origin --delete feature/auth
```

The feature is now officially complete.

---

# 📦 Commit Message Convention

Use meaningful commit messages.

Examples

```
feat(auth): create login page

feat(chat): implement message list

feat(notes): add markdown editor

fix(sidebar): resolve scrolling issue

refactor(api): extract axios instance

style(profile): improve spacing
```

This makes project history easy to understand.

---

# ✅ Benefits

Following this workflow gives you:

- Cleaner Git history
- Easier debugging
- Better project organization
- Professional development habits
- Easier rollback of broken features
- Experience similar to real engineering teams

---

# 📋 Workflow Summary

```
main
      │
      ▼
Create Feature Branch
      │
      ▼
Develop Feature
      │
      ▼
Commit Changes
      │
      ▼
Push Branch
      │
      ▼
Merge into main
      │
      ▼
Delete Branch
```

Repeat this process for every feature.