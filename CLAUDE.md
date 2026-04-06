# Catch Portfolio — CLAUDE.md

## Project Overview

Landing page for **Catch**, a coordination platform connecting people, businesses, and autonomous systems into a shared timeline. Single-page marketing site with animated sections, a product preview gallery, and waitlist capture forms.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript 5 |
| Styling | Tailwind CSS 4 + PostCSS |
| Animation | Framer Motion 12, GSAP 3 |
| UI Primitives | shadcn/ui, Radix UI |
| Icons | Lucide React |
| 3D | Three.js |
| Utilities | clsx, tailwind-merge, class-variance-authority |

Path alias: `@/*` → `./src/*` ([tsconfig.json:22](tsconfig.json#L22))

## Key Directories

```
src/
  app/              # Next.js App Router — layout, root page, global CSS
  components/
    sections/       # Full-width landing page sections (one component per section)
    ui/             # Reusable primitives (Button, Card, InfiniteSlider, etc.)
    *.tsx           # Shared components (Navbar, Footer, DarkGrid, Demo, etc.)
  constants/        # Static data arrays imported by section components
  lib/
    utils.ts        # cn() helper (clsx + tailwind-merge)
public/             # Static assets (images, logos, icons)
```

## Build & Dev Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
```

No test suite is configured.

## Additional Documentation

Check these files when relevant:

- [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) — Component structure, animation conventions, data patterns, state management, and UI composition patterns used throughout the codebase.
