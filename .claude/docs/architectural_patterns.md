# Architectural Patterns

Patterns observed in 3+ files across this codebase.

---

## 1. "use client" Directive

All interactive/animated components declare `"use client"` at line 1. Server components (static layout-only files) omit it.

Present in: [Navbar.tsx:1](src/components/Navbar.tsx#L1), [sections/HeroSection.tsx:1](src/components/sections/HeroSection.tsx#L1), [sections/CTASection.tsx:1](src/components/sections/CTASection.tsx#L1), [sections/ProblemSection.tsx:1](src/components/sections/ProblemSection.tsx#L1), and all other interactive section components.

---

## 2. Section Component Structure

Every section in `src/components/sections/` follows the same shape:

1. `"use client"` (if interactive)
2. Named function export: `export function XSection()`
3. Returns `<section id="anchor-name">` — the `id` is the scroll target
4. Inner `<div className="mx-auto max-w-[1440px] px-6 md:px-12">` container
5. Motion-wrapped content (see §3)

Example: [sections/HeroSection.tsx:24](src/components/sections/HeroSection.tsx#L24)

---

## 3. Framer Motion Animation Convention

Scroll-triggered entrance animations appear on virtually all section content.

Standard shape:
```
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: N }}
```

- `viewport={{ once: true }}` — animate only on first scroll into view
- Sequential `delay` values stagger child elements
- `AnimatePresence` wraps conditionally rendered content (modals, overlays)

Examples: [sections/HeroSection.tsx:25-41](src/components/sections/HeroSection.tsx#L25), [sections/CTASection.tsx:17-20](src/components/sections/CTASection.tsx#L17), [dark-grid.tsx:73-78](src/components/dark-grid.tsx#L73)

---

## 4. Data-Driven Constants

Static content is stored as typed arrays in `src/constants/` and imported into section components. Components iterate with `.map()`.

- [constants/grid-items.ts](src/constants/grid-items.ts) — exports `WHY_NOW_ITEMS`, `SOLUTION_ITEMS`, and the `GridItem` interface
- Consumed by [sections/ProblemSection.tsx:7](src/components/sections/ProblemSection.tsx#L7) and [sections/SolutionSection.tsx:6](src/components/sections/SolutionSection.tsx#L6)
- Inline data arrays follow the same pattern inside components when local (e.g., `USE_CASES` in [sections/UseCasesSection.tsx:6-25](src/components/sections/UseCasesSection.tsx#L6))

---

## 5. Local State Only (useState)

No global state library. All state is component-local via `useState`.

- Form inputs: [sections/HeroSection.tsx:8-9](src/components/sections/HeroSection.tsx#L8), [sections/CTASection.tsx:7-8](src/components/sections/CTASection.tsx#L7)
- Mobile menu: [Navbar.tsx:16](src/components/Navbar.tsx#L16)
- Modal/expanded image: [sections/ProductPreviewSection.tsx:14](src/components/sections/ProductPreviewSection.tsx#L14)

---

## 6. Modal Pattern

Expandable views use a consistent pattern: `useState` for the open value, `useEffect` for keyboard escape cleanup, `AnimatePresence` + `motion.div` for animated entry/exit, click-outside to dismiss.

Reference implementation: [sections/ProductPreviewSection.tsx:72-106](src/components/sections/ProductPreviewSection.tsx#L72)

---

## 7. Compound Component Pattern (shadcn/ui style)

UI primitives are composed from subcomponents using `React.forwardRef` + `displayName`. The `cn()` utility merges caller `className` with defaults.

- [ui/card.tsx](src/components/ui/card.tsx) — `Card`, `CardHeader`, `CardTitle`, `CardContent`, `CardFooter` all exported separately
- [ui/button.tsx](src/components/ui/button.tsx) — CVA-based variants (`variant`, `size`), `asChild`/`Slot` pattern for polymorphism

---

## 8. Anchor-Based Navigation

Navigation links are URL fragments (`#preview`, `#platform`). Section root elements carry the matching `id`. Sections that need header offset use `scroll-mt-24`.

Nav links defined at: [Navbar.tsx:8-13](src/components/Navbar.tsx#L8)

---

## 9. Responsive Container

Every section and the Navbar/Footer use the same container class:

```
mx-auto max-w-[1440px] px-6 md:px-12
```

(`max-w-360` is a Tailwind custom variable that resolves to the same 1440px value.)

---

## 10. Brand Color Palette (Inline Hex)

Colors are hardcoded as hex values throughout, not Tailwind config tokens:

| Role | Value |
|---|---|
| Page background | `#000000`, `#0d1117` |
| Surface / input bg | `#161B22` |
| Border | `#30363D` |
| Muted text | `#8B949E` |
| Accent (lime green) | `#A3CB31` |
| Dark green | `#008756` |

---

## 11. Next.js Image Usage

`next/image` is used for all images with consistent props:

- Hero/background images: `fill` + `priority` + `sizes`
- Logos / fixed-size: explicit `width` + `height`
- Hover cards: `fill` with an aspect-ratio parent container

Example: [sections/HeroSection.tsx:16-22](src/components/sections/HeroSection.tsx#L16)

---

## 12. Lucide Icons in Data Structures

Icons are stored as `LucideIcon` type references inside constant arrays and rendered dynamically. This avoids switch/if blocks when mapping over data.

Definition pattern: [constants/grid-items.ts:1-9](src/constants/grid-items.ts#L1)
Render pattern: [dark-grid.tsx:31](src/components/dark-grid.tsx#L31) (`const Icon = icon; <Icon className="..." />`)
