# Code Quality Notes

> Personal engineering notes.
>
> Purpose:
> - Refresh concepts quickly.
> - Understand why each tool exists.
> - Remember implementation decisions.
> - Recall interview answers.
> - Avoid repeating common mistakes.

---

# Code Quality

Code quality is the practice of keeping code:

- Readable
- Maintainable
- Consistent
- Predictable
- Easy to review
- Easy to scale

Good code quality is not achieved by writing "smart" code.

It is achieved through consistency and automation.

---

# Prettier

## What

Prettier is an opinionated code formatter.

It automatically formats code according to predefined rules.

---

## Why

Without Prettier

Every developer writes code differently.

Example

```ts
const user={name:"John"}
```

```ts
const user = {
    name : "John"
}
```

Both work.

Neither is wrong.

But inconsistency makes projects harder to maintain.

Prettier solves this automatically.

---

## Responsibilities

Prettier formats:

- spacing
- indentation
- semicolons
- quotes
- line wrapping
- trailing commas

It **does not** detect logical mistakes.

---

## Why not format manually?

Humans forget.

Automation doesn't.

---

## Configuration

Files

```
.prettierrc
.prettierignore
```

---

## Project Decision

Formatting responsibility belongs **only** to Prettier.

ESLint should not fight with formatting.

Therefore:

```
eslint-config-prettier
```

was added.

---

## Common Mistakes

❌ Using ESLint for formatting.

❌ Disabling Prettier rules.

❌ Running different formatters.

---

## Interview

Q:
Why use Prettier?

A:

To keep formatting consistent across the entire codebase automatically.

---

# ESLint

## What

ESLint is a static analysis tool.

It analyzes source code without executing it.

---

## Why

JavaScript and TypeScript allow many patterns.

Some are unsafe.

Some are bugs.

Some reduce readability.

ESLint identifies them before runtime.

---

## Responsibilities

- unused variables
- unreachable code
- invalid patterns
- React best practices
- TypeScript rules
- code quality

---

## What ESLint does NOT do

ESLint is not responsible for formatting.

That is Prettier's job.

---

## Configuration

```
eslint.config.js
```

---

## Project Decision

Formatting disabled inside ESLint.

Prettier is the single source of formatting.

---

## Common Mistakes

❌ Installing too many plugins.

❌ Disabling rules instead of fixing code.

❌ Turning off lint because of errors.

---

## Interview

Q:
Difference between ESLint and Prettier?

A:

ESLint improves code quality.

Prettier improves code formatting.

---

# EditorConfig

## What

EditorConfig standardizes editor behavior.

---

## Why

Every developer uses different editor settings.

Without EditorConfig:

Developer A

```
Tabs
```

Developer B

```
Spaces
```

Developer C

```
CRLF
```

Result:

Huge unnecessary Git diffs.

---

## Responsibilities

- indentation
- encoding
- line endings
- trailing whitespace
- final newline

---

## Configuration

```
.editorconfig
```

---

## Project Decision

Rules

- UTF-8
- LF
- 2 spaces
- trim whitespace
- final newline

---

## Common Mistakes

Thinking EditorConfig replaces Prettier.

It doesn't.

EditorConfig configures the editor.

Prettier formats code.

---

## Interview

Q:
Difference between EditorConfig and Prettier?

A:

EditorConfig configures the editor.

Prettier formats the code.

---

# Husky

## What

Husky manages Git hooks.

---

## Why

Developers forget to run checks.

Automation never forgets.

---

## Current Hook

```
pre-commit
```

---

## Pipeline

```
git commit

↓

Husky

↓

lint-staged

↓

ESLint

↓

Prettier

↓

Commit
```

---

## Benefits

- Prevent bad commits
- Improve consistency
- Catch issues early

---

## Common Mistakes

❌ Running the entire project on every commit.

Use lint-staged instead.

---

## Interview

Q:

Why Husky?

A:

To automate Git hooks and ensure quality checks run before commits.

---

# lint-staged

## What

Runs commands only on staged files.

---

## Why

Running ESLint on the entire project is slow.

Only modified files need checking.

---

## Workflow

```
git add

↓

Staged Files

↓

ESLint

↓

Prettier
```

---

## Benefits

- Faster commits
- Better performance
- Smaller scope

---

## Interview

Q:

Why lint-staged?

A:

To execute quality checks only on staged files instead of the entire project.

---

# Commitlint

## What

Validates commit message format.

---

## Why

Commit history should be predictable.

---

## Example

Correct

```
feat(auth): add login page
```

Incorrect

```
updated code
```

---

## Benefits

- Better Git history
- Better changelog generation
- Easier release management

---

## Interview

Q:

Why Commitlint?

A:

To enforce a consistent commit message format across the project.

---

# Conventional Commits

## What

A standardized commit message specification.

---

## Common Types

- feat
- fix
- docs
- style
- refactor
- test
- chore
- build
- ci
- perf

---

## Why

Makes commit history easier to understand.

---

## Example

```
feat(chat): add message reactions
```

---

## Benefits

- readable history
- automatic changelog
- semantic releases

---

# czg

## What

Interactive CLI for writing Conventional Commits.

---

## Why

Developers don't need to remember commit syntax.

---

## Workflow

```
npm run commit

↓

Select Type

↓

Select Scope

↓

Write Subject

↓

Commit Generated
```

---

## Project Decision

Use **czg** instead of manually writing commit messages.

---

## Benefits

- Faster commits
- Fewer mistakes
- Consistent history

---

# Import Alias

## What

Maps

```
@
```

to

```
src/
```

---

## Why

Avoid long relative imports.

Instead of

```
../../../components
```

use

```
@/components
```

---

## Configuration

TypeScript

```
paths
```

Vite

```
resolve.alias
```

Both must be configured.

---

## Common Mistakes

Configuring only TypeScript.

Configuring only Vite.

Both are required.

---

## Interview

Q:

Why configure alias in both Vite and TypeScript?

A:

TypeScript resolves imports during development.

Vite resolves them while bundling.

---

# Environment Variables

## What

Store configuration outside source code.

---

## Why

Different environments require different configuration.

Development

```
localhost
```

Production

```
production server
```

The source code should remain identical.

---

## Files

```
.env
.env.example
.env.development
.env.production
```

---

## Rules

Never commit secrets.

Always use

```
VITE_
```

for frontend variables.

---

## Common Mistakes

❌ Hardcoding API URLs.

❌ Storing secrets in frontend.

❌ Committing private keys.

---

## Interview

Q:

Why does Vite require the `VITE_` prefix?

A:

Only variables prefixed with `VITE_` are exposed to client-side code. This prevents accidentally leaking all environment variables.

---

# Key Takeaways

- ESLint checks code quality.
- Prettier formats code.
- EditorConfig standardizes editor behavior.
- Husky automates Git hooks.
- lint-staged processes only staged files.
- Commitlint validates commit messages.
- Conventional Commits standardize Git history.
- czg generates valid commit messages.
- Path aliases improve import readability.
- Environment variables separate configuration from source code.

---

# Personal Rule

> Automation should enforce consistency.

Developers should focus on writing features—not remembering formatting rules, commit syntax, or manual quality checks.
