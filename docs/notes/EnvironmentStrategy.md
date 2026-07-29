# 7. Environment Strategy

> **Purpose**
>
> Environment variables allow you to store configuration outside your source code. This makes the same codebase work in different environments (Development, Production, etc.) without changing the actual code.

---

# Why Use Environment Variables?

Every environment has different configurations.

Example

| Environment | API URL |
|-------------|---------|
| Development | http://localhost:5000/api |
| Production | https://api.example.com/api |

Instead of modifying the source code every time you deploy, keep these values inside environment files.

---

# Project Decision

Store **configuration**, not **secrets**.

Frontend environment variables are publicly accessible after the application is built.

Never assume they are secure.

---

# Environment Files

```text
.env
.env.example
.env.development
.env.production
```

---

# File Purpose

## .env

Shared variables used across all environments.

Example

```env
VITE_APP_NAME=AI Workspace
```

---

## .env.development

Variables only used during local development.

Example

```env
VITE_API_URL=http://localhost:5000/api
```

---

## .env.production

Variables used in production deployment.

Example

```env
VITE_API_URL=https://api.example.com/api
```

---

## .env.example

Contains only the required variable names.

Never put actual values or secrets here.

Example

```env
VITE_API_URL=
VITE_APP_NAME=
```

This file acts as documentation for other developers.

---

# Naming Convention

For Vite projects, every client-side environment variable **must** start with

```text
VITE_
```

Example

✅ Correct

```env
VITE_API_URL=https://api.example.com
```

❌ Incorrect

```env
API_URL=https://api.example.com
```

---

# Accessing Variables

Correct

```ts
const apiUrl = import.meta.env.VITE_API_URL;
```

Incorrect

```ts
const apiUrl = process.env.API_URL;
```

Vite does **not** use `process.env` in frontend applications.

---

# Folder Structure

```text
project/
│
├── .env
├── .env.example
├── .env.development
├── .env.production
│
└── src/
```

---

# Implementation

## Step 1 — Create Environment Files

Create

```text
.env

.env.example

.env.development

.env.production
```

at the project root.

---

## Step 2 — Add Shared Variables

Open

```text
.env
```

Example

```env
VITE_APP_NAME=AI Workspace
```

---

## Step 3 — Configure Development Variables

Open

```text
.env.development
```

Example

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Step 4 — Configure Production Variables

Open

```text
.env.production
```

Example

```env
VITE_API_URL=https://api.example.com/api
```

---

## Step 5 — Create `.env.example`

Example

```env
VITE_API_URL=
VITE_APP_NAME=
```

Commit this file to Git.

---

## Step 6 — Use Variables

Example

```ts
const API_URL = import.meta.env.VITE_API_URL;
```

---

## Step 7 — Restart Development Server

Whenever you create or modify an environment file,

Restart Vite.

```bash
npm run dev
```

Otherwise, the new variables will not be loaded.

---

# Load Priority

```text
Development

.env
      │
      ▼
.env.development
```

```text
Production

.env
      │
      ▼
.env.production
```

Environment-specific files override values from `.env`.

---

# What Should Be Stored?

✅ Good Candidates

- API Base URL
- Application Name
- Feature Flags
- Public Analytics ID
- Public Cloudinary Cloud Name
- Public ImageKit Endpoint

---

# What Should NEVER Be Stored?

❌ Database Password

❌ JWT Secret

❌ OpenAI Secret Key

❌ Stripe Secret Key

❌ SMTP Password

❌ Private API Keys

If a value is sensitive, it belongs on the **backend**, not in the frontend.

---

# Git Strategy

Commit

```text
.env.example
```

Do **not** commit

```text
.env
.env.development
.env.production
```

Add them to

```text
.gitignore
```

Example

```gitignore
.env
.env.local
.env.development
.env.production
```

---

# Common Mistakes

## Forgetting `VITE_`

```env
API_URL=http://localhost:5000
```

This variable will not be available in the application.

---

## Using `process.env`

Incorrect

```ts
process.env.API_URL
```

Correct

```ts
import.meta.env.VITE_API_URL
```

---

## Forgetting to Restart Vite

Environment changes require restarting the development server.

---

## Committing Environment Files

Never commit files containing real configuration or secrets.

Commit only

```text
.env.example
```

---

## Storing Secrets

Frontend code is shipped to the browser.

Anyone can inspect the bundled application.

Never place sensitive information in frontend environment files.

---

# Verification

Create

```env
VITE_APP_NAME=AI Workspace
```

Access it

```ts
console.log(import.meta.env.VITE_APP_NAME);
```

Expected Output

```text
AI Workspace
```

---

# Verification Checklist

- [ ] Environment files created.
- [ ] All variables use the `VITE_` prefix.
- [ ] Variables accessed with `import.meta.env`.
- [ ] `.env.example` created.
- [ ] Environment files added to `.gitignore`.
- [ ] Development server restarted.
- [ ] Variables verified successfully.

---

# Best Practices

- Store configuration, not secrets.
- Always prefix frontend variables with `VITE_`.
- Commit only `.env.example`.
- Restart Vite after changing environment files.
- Keep production and development configurations separate.

---

# Quick Revision

- Environment variables separate configuration from code.
- Use `.env`, `.env.development`, and `.env.production` for different environments.
- Use `import.meta.env` to access variables.
- Every frontend variable must start with `VITE_`.
- Never store secrets in frontend environment files.
- Commit `.env.example`, ignore actual `.env` files.
