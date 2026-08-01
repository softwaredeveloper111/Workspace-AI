# 🗂️ Folder Architecture

> This document explains the production-grade folder architecture of **Workspace AI**.
>
> **Goals**
> - Understand the purpose of every top-level folder.
> - Maintain a scalable and consistent project structure.
> - Help future contributors understand where new code belongs.
> - Serve as a long-term reference for the project.

---

# Project Structure

```text
AI Workspace
├── README.md
├── commitlint.config.js
├── docs
│   ├── notes
│   │   ├── Commitlint.md
│   │   ├── ESLint.condig.md
│   │   ├── EnvironmentStrategy.md
│   │   ├── Git Workflow.md
│   │   ├── Husky.md
│   │   ├── code-quality-handbook.md
│   │   ├── code-quality-notes-p1.md
│   │   ├── code-quality-notes-p2.md
│   │   ├── eslint-config-prettier.md
│   │   ├── lint_staged.md
│   │   ├── paht_alias.md
│   │   └── prettier.config.md
│   └── project
│       ├── SRS.md
│       ├── code-quality.md
│       ├── folder_structure.md
│       └── project-roadmap.md
├── eslint.config.js
├── folder-structure.txt
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── icons.svg
│   ├── mockups ui
│   │   ├── ChatGPT Image Jul 27, 2026, 01_49_34 AM.png
│   │   ├── ChatGPT Image Jul 27, 2026, 02_00_11 AM.png
│   │   ├── ChatGPT Image Jul 27, 2026, 02_08_49 AM.png
│   │   ├── ChatGPT Image Jul 27, 2026, 03_07_47 AM.png
│   │   ├── ChatGPT Image Jul 27, 2026, 03_09_21 AM.png
│   │   ├── ChatGPT Image Jul 27, 2026, 03_11_13 AM.png
│   │   ├── Login page.png
│   │   └── Singup page.png
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── app
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── illustrations
│   │   ├── images
│   │   │   └── hero.png
│   │   ├── logos
│   │   └── svgs
│   ├── components
│   │   ├── Avatar
│   │   ├── Badge
│   │   ├── Breadcrumb
│   │   ├── Button
│   │   ├── Card
│   │   ├── CommandPalett
│   │   ├── Dialog
│   │   ├── Drawer
│   │   ├── Dropdown
│   │   ├── EmptyState
│   │   ├── ErrorState
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Input
│   │   ├── Modal
│   │   ├── Navbar
│   │   ├── Pagination
│   │   ├── SearchBar
│   │   ├── Sidebar
│   │   ├── Skeleton
│   │   ├── Spinner
│   │   ├── Table
│   │   ├── Tabs
│   │   ├── Tooltip
│   │   ├── shared
│   │   └── ui
│   ├── config
│   │   ├── app.config.ts
│   │   ├── env.ts
│   │   ├── featureFlags.ts
│   │   └── navigation.config.ts
│   ├── constants
│   │   ├── api.constants.ts
│   │   ├── app.constants.ts
│   │   ├── index.ts
│   │   ├── route.constants.ts
│   │   ├── storage.constants.ts
│   │   └── theme.constants.ts
│   ├── features
│   │   ├── auth
│   │   │   ├── api
│   │   │   ├── components
│   │   │   ├── constants
│   │   │   ├── hooks
│   │   │   ├── index.ts
│   │   │   ├── schemas
│   │   │   ├── services
│   │   │   ├── types
│   │   │   └── utils
│   │   ├── chat
│   │   ├── dashboard
│   │   ├── notes
│   │   ├── profile
│   │   ├── prompts
│   │   ├── search
│   │   └── setting
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useClickOutside.ts
│   │   ├── useDebounce.ts
│   │   ├── useInfiniteScroll.ts
│   │   ├── useKeyboardShortcut.ts
│   │   ├── useLocalStorage.ts
│   │   └── useMediaQuery.ts
│   ├── layouts
│   │   ├── AuthLayout
│   │   ├── DashboardLayout
│   │   └── MainLayout
│   ├── lib
│   │   ├── axios.ts
│   │   ├── dayjs.ts
│   │   ├── framer.ts
│   │   ├── markdown.ts
│   │   ├── reactQuery.ts
│   │   └── zod.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Chat.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   ├── NotFound.tsx
│   │   ├── Notes.tsx
│   │   ├── Profile.tsx
│   │   ├── PromptLibrary.tsx
│   │   ├── Settings.tsx
│   │   └── Signup.tsx
│   ├── providers
│   │   ├── AuthProvider.tsx
│   │   ├── QueryProvider.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ToastProvider.tsx
│   │   └── index.ts
│   ├── routes
│   │   ├── AppRouter.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── PublicRoute.tsx
│   │   ├── index.ts
│   │   └── route.constants.ts
│   ├── services
│   │   ├── analytics
│   │   │   └── analyticsService.ts
│   │   ├── api
│   │   │   ├── apiClient.ts
│   │   │   ├── apiConfig.ts
│   │   │   └── interceptors.ts
│   │   ├── logger
│   │   │   └── logger.ts
│   │   └── storage
│   │       └── storageService.ts
│   ├── stores
│   │   ├── app.store.ts
│   │   ├── auth.store.ts
│   │   ├── index.ts
│   │   ├── sidebar.store.ts
│   │   └── theme.store.ts
│   ├── styles
│   │   ├── animations.scss
│   │   ├── globals.scss
│   │   ├── mixins.scss
│   │   ├── reset.scss
│   │   ├── theme.scss
│   │   ├── utilities.scss
│   │   └── variables.scss
│   ├── types
│   │   ├── api.types.ts
│   │   ├── common.types.ts
│   │   ├── index.ts
│   │   ├── models.types.ts
│   │   └── theme.types.ts
│   └── utils
│       ├── formatters
│       ├── generators
│       ├── guards
│       ├── helpers
│       ├── transformers
│       └── validators
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

# Root Directory

| File / Folder | Purpose |
|---|---|
| `src/` | Main application source code. |
| `public/` | Static assets served directly by Vite. |
| `docs/` | Project documentation, notes, architecture, and handbook. |
| `README.md` | Project overview and setup guide. |
| `package.json` | Project metadata, scripts, and dependencies. |
| `package-lock.json` | Locked dependency versions. |
| `vite.config.ts` | Vite configuration and path aliases. |
| `tsconfig.json` | Shared TypeScript configuration. |
| `tsconfig.app.json` | Application-specific TypeScript configuration. |
| `tsconfig.node.json` | Node/Vite configuration types. |
| `eslint.config.js` | ESLint configuration. |
| `commitlint.config.js` | Commitlint configuration. |
| `index.html` | Vite HTML entry point. |

---

# docs/

Documentation only.

- **notes/** → Individual setup guides (ESLint, Prettier, Husky, Commitlint, etc.).
- **project/** → Project-specific documents such as SRS, roadmap, folder architecture and code-quality guide.

---

# public/

Contains static assets that are served without bundling.

- `favicon.*` → Browser icons.
- `icons.svg` → Shared SVG sprite/assets.
- `mockups ui/` → UI references and design mockups.
- `robots.txt` → Search engine crawling rules.

---

# src/

Contains the complete application source code.

| Folder | Responsibility |
|---|---|
| `app/` | Application bootstrap and initialization. |
| `assets/` | Images, icons, fonts, logos, illustrations, SVGs. |
| `components/` | Reusable UI components shared across features. |
| `config/` | App configuration, environment parsing, feature flags. |
| `constants/` | Global constants. |
| `features/` | Feature-based modules (Auth, Chat, Notes, etc.). |
| `hooks/` | Reusable custom React hooks. |
| `layouts/` | Shared page layouts. |
| `lib/` | Third-party library configuration (Axios, Zod, Day.js, etc.). |
| `pages/` | Route-level pages. |
| `providers/` | Global React providers. |
| `routes/` | Router configuration and route guards. |
| `services/` | API, analytics, logger, storage services. |
| `stores/` | Global state management. |
| `styles/` | Global SCSS architecture. |
| `types/` | Shared TypeScript types and interfaces. |
| `utils/` | Pure helper functions. |
| `App.tsx` | Root application component. |
| `main.tsx` | React application entry point. |

---

# Folder Responsibility Rules

- **components/** → Reusable UI only.
- **features/** → Feature-specific business logic.
- **pages/** → Compose features into screens.
- **services/** → External communication (API, analytics, storage).
- **stores/** → Global application state.
- **hooks/** → Shared custom hooks.
- **utils/** → Pure utility functions with no React dependency.
- **config/** → Application configuration only.

---

# Architecture Principles

- Feature-first organization.
- Shared code separated from feature code.
- Reusable UI components.
- Centralized configuration.
- Strong TypeScript boundaries.
- Scalable production-ready structure.
- Clear separation of concerns.

---

> This structure is based on the current Workspace AI project architecture and should evolve only when the application's requirements justify it.





### src/styles ->
  - globals.scss : define global styles, Like html,body,a,button,img,selection, scrollbar
  - reset.scss : css reset , nothing else
  - variables.scss : Ye SCSS variables ke liye hai. ex. $mobile:768px; $tablet:1024px; $desktop:1280px;
  - theme.scss : Ye tumhara main Theme Token file hoga. Yaha root variables rahenge.
  - mixins.scss : Responsive mixins , Flex center , Text truncate
  - utilities.scss : Common helper classes, .hidden .flex-center .text-center .mt-auto
  - animations.scss : Reusable keyframes.
