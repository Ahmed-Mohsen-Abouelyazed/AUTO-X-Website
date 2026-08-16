# AUTO-X AI Agent Engineering Guidelines

This document provides definitive project instructions, architecture conventions, truth-domain governance rules, and verification procedures for AI coding agents working on the **AUTO-X / PlatX** codebase.

---

## 1. Technology Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG).
- **UI Islands**: Selective React 18 islands (`@astrojs/react`) for dynamic widgets (`Navigation`, `HeroPipeline`, `PlcShowcase`, `Contact`).
- **Styling**: Tailwind CSS v3 with custom design tokens (`tailwind.config.js` and `src/index.css`).
- **Icons**: `lucide-react`. **Note**: In `.astro` files, use `className="..."` on Lucide components (not `class="..."`).
- **Animations**: `framer-motion` (in React islands only) + native CSS keyframes in `src/index.css`.
- **TypeScript**: Strict mode enabled (`tsconfig.json` extending `astro/tsconfigs/strict`). Use `@/*` alias for `src/*`.

---

## 2. Directory Structure & Architecture

```
c:/AntiGravity/AUTO-X-Website/
├── astro.config.mjs             # Astro 5 configuration (React + Tailwind integrations)
├── tailwind.config.js           # Design system tokens, colors, fonts, shadows
├── tsconfig.json                # TypeScript strict config with @/* path aliases
├── eslint.config.js             # Flat ESLint config (ignores .astro, dist, *.d.ts)
├── package.json                 # Project scripts and clean dependencies
├── DESIGN.md                    # Visual design specification & aesthetic rules
├── public/                      # Static assets (favicons, manifests, logos)
└── src/
    ├── env.d.ts                 # Astro client type references
    ├── index.css                # Global CSS variables, fonts, and animation keyframes
    ├── layouts/
    │   └── Layout.astro         # HTML5 SEO shell, OpenGraph, JSON-LD Schema
    ├── pages/
    │   └── index.astro          # Landing page composing Astro & React sections
    ├── lib/
    │   ├── utils.ts             # Typed utility functions (cn, debounce, throttle)
    │   └── scroll.ts            # Smooth anchor scrolling with reduced-motion support
    └── components/
        ├── Navigation.tsx       # React Island: Sticky navbar with scroll spy
        ├── Hero.astro           # Hero narrative section
        ├── HeroPipeline.tsx     # React Island: 6-stage compiler with 5s auto-circulation
        ├── TrustBand.astro      # Deterministic standards (IEC/ISA) & vendor matrix
        ├── Problem.astro        # Tool fragmentation & commissioning cost breakdown
        ├── Pillars.astro        # 4 Core Pillars (AI, Knowledge, Automation, Data)
        ├── PlatXArchitecture.astro # 5 Platform layers & 9-phase lifecycle strip
        ├── Products.astro       # Flagship products, multi-agent teams, 30+ module grid
        ├── PlcShowcase.tsx      # React Island: 6-gate deterministic pipeline explorer
        ├── About.astro          # Founder profile, engineering values, and timeline
        ├── Faq.astro            # Semantic <details>/<summary> accordion
        ├── Contact.tsx          # React Island: Waitlist form with email validation
        ├── Footer.astro         # Sitemap & FIS Governance disclosure statement
        ├── motion.tsx           # Framer motion helper components
        └── ui/                  # Reusable UI primitives (Badge, Button, Card, Input)
```

---

## 3. Truth-Domain Governance & Content Rules (FIS Compliance)

When creating or modifying content, strictly adhere to the Founder Intelligence System (FIS) truth classifications:

1. **Mission Statement**:
   *"Make industrial engineering more intelligent, connected, and dramatically more productive."*
2. **PlatX Vision**:
   *"The Siemens + EPLAN + AVEVA + GitHub + ChatGPT + Palantir for Industrial Automation Engineering."*
   Followed by the brand-free functional breakdown:
   *"PLC Automation + Electrical CAD + SCADA/Supervision + Version Control + Generative AI + Industrial Data Intelligence"*.
3. **Module Maturity Classifications**:
   - **AUTO-PLC**: Starter MVP / Demo Ready proof point (Siemens TIA Portal Structured Text/SCL validated).
   - **AUTO-IO**: Technically validated functional POC (PyQt6).
   - **All other 30+ modules** across Phases 1–9: Strictly labeled as **Conceptual Design (PlatX Vision)**.
4. **Safety Governance**:
   - **Functional Safety (AUTO-SAFE)** is strictly a **Post-MVP module under independent human governance and is NEVER automated by AI**.
5. **Quantitative Metrics**:
   - All performance claims (e.g. ~80-90% repetitive task reduction) must be labeled as **Target Value Hypotheses (Level 2 Evidence)** under active pilot measurement.
6. **Founder Information**:
   - Founder: **Ahmed Mohsen Abouelyazed** (Siemens TIA-PRO1 Certified, ITI Automation Alum, Electrical Power & Control Engineer).
   - Headquarters: **Cairo, Egypt** (serving MENA & global automation teams).
   - Stage: **Pre-seed validation / Beta pilots starting Q4 2026**.

---

## 4. Coding Standards & Best Practices

1. **Astro vs React**:
   - Default to `.astro` components for static content (Hero, Problem, Pillars, About, FAQ, Footer).
   - Use `.tsx` React components *only* when client-side interactivity is required (`client:load` for Navigation/HeroPipeline, `client:visible` for Contact/PlcShowcase).
2. **Accessibility**:
   - Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<details>`, `<footer>`).
   - Interactive elements must support full keyboard navigation (`Tab`, `Enter`, `Space`, `Escape`, Arrow keys).
   - Form inputs must have descriptive `<label>` tags with matching `htmlFor`/`id` and `aria-describedby` for error text.
   - Respect `prefers-reduced-motion` on all animations and automated timers.
3. **Styling**:
   - Use CSS custom properties defined in `src/index.css` and utility classes from `tailwind.config.js`.
   - Never use hardcoded arbitrary colors; use semantic tokens (`bg-bg-page`, `text-text-primary`, `border-border-standard`, `text-accent-primary`, `bg-success-bg`).

---

## 5. Verification Commands

Always run these verification commands before completing any coding task:

```bash
# 1. Linting (ESLint with zero warnings)
npm run lint

# 2. TypeScript & Astro Diagnostic Check (0 errors, 0 warnings, 0 hints)
npx astro check

# 3. Full Production Build (SSG bundle in dist/)
npm run build
```
