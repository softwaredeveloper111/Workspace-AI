# 6. Path Alias

> **Purpose**
>
> Path Alias replaces long relative imports with clean, readable, and maintainable absolute imports.

---

# Why Use Path Alias?

As a project grows, relative imports become difficult to read.

Instead of writing

```ts
import Button from '../../../../components/Button';
```

you can write

```ts
import Button from '@/components/Button';
```

The code becomes easier to read and refactor.

---

# Project Decision

Alias

```text
@
```

maps to

```text
src/
```

Example

```text
@/components
        │
        ▼
src/components
```

---

# Before vs After

### Without Alias

```ts
import Navbar from '../../../components/layout/Navbar';
import Button from '../../../../components/ui/Button';
import UserCard from '../../../features/user/components/UserCard';
```

---

### With Alias

```ts
import Navbar from '@/components/layout/Navbar';
import Button from '@/components/ui/Button';
import UserCard from '@/features/user/components/UserCard';
```

---

# Why Configure in Two Places?

Path Alias must be configured in **both**:

- TypeScript
- Vite

Because they solve different problems.

| Tool | Responsibility |
|------|----------------|
| TypeScript | Understand imports during development and type checking |
| Vite | Resolve imports while bundling the application |

If one is missing, imports will fail.

---

# Files

```text
tsconfig.app.json

vite.config.ts
```

---

# Implementation

## Step 1 — Install Node Types

If not already installed

```bash
npm install -D @types/node
```

---

## Step 2 — Configure TypeScript

Open

```text
tsconfig.app.json
```

Inside

```json
compilerOptions
```

add

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Example

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Step 3 — Configure Vite

Open

```text
vite.config.ts
```

Import

```ts
import path from 'path';
```

Then configure

```ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
},
```

Complete example

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

---

## Step 4 — Restart Development Server

After changing alias configuration

Stop

```bash
Ctrl + C
```

Start again

```bash
npm run dev
```

---

## Step 5 — Verify

Create

```text
src/components/Button.tsx
```

Import

```ts
import Button from '@/components/Button';
```

Expected

- No TypeScript error
- No Vite error
- Project runs successfully

---

# Import Flow

```text
Import

@
        │
        ▼
TypeScript

Checks Types
        │
        ▼
Vite

Resolves Path
        │
        ▼
src/
```

---

# Common Mistakes

## Configuring Only TypeScript

```text
✔ No TypeScript error

❌ Vite cannot resolve import
```

---

## Configuring Only Vite

```text
✔ Project runs

❌ TypeScript shows red underline
```

---

## Forgetting to Restart Vite

Alias changes are not always picked up immediately.

Restart the development server.

---

## Wrong Folder Mapping

Incorrect

```json
"@/*": ["src"]
```

Correct

```json
"@/*": ["./src/*"]
```

---

## Using Relative Imports Again

Avoid

```ts
import Card from '../../../components/Card';
```

Prefer

```ts
import Card from '@/components/Card';
```

Be consistent throughout the project.

---

# Verification Checklist

- [ ] `@types/node` installed.
- [ ] Alias configured in `tsconfig.app.json`.
- [ ] Alias configured in `vite.config.ts`.
- [ ] Development server restarted.
- [ ] Alias imports work without errors.
- [ ] Relative imports replaced where appropriate.

---

# Best Practices

- Use `@` only for files inside `src/`.
- Configure both TypeScript and Vite.
- Keep one alias for the entire project unless there's a strong reason to add more.
- Prefer alias imports over deep relative paths.
- Use the same import style across the codebase.

---

# Quick Revision

- `@` → `src/`
- Configure alias in **TypeScript** and **Vite**.
- Restart the dev server after configuration.
- Use alias imports for cleaner and maintainable code.
- Avoid deep relative imports like `../../../`.
