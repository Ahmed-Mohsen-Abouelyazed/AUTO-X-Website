# AUTO-X Website

Marketing and technical presentation platform for **AUTO-X** and **PlatX**, built with **Astro 5**, **React 18 Islands**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **UI Islands**: React 18 (`@astrojs/react`)
- **Styling**: Tailwind CSS v3 + CSS Variables
- **Icons**: Lucide React
- **Animation**: Framer Motion & CSS Keyframes
- **Type Safety**: TypeScript Strict Mode

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the local Astro development server
npm run dev

# 3. Type-check and build the static production bundle in dist/
npm run build

# 4. Preview the generated production build locally
npm run preview

# 5. Run ESLint code quality checks
npm run lint

# 6. Run Astro TypeScript diagnostics
npx astro check
```

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro         # HTML5 SEO shell, OpenGraph, JSON-LD Schema
├── pages/
│   └── index.astro          # Main landing page assembling sections
├── components/
│   ├── ui/                  # Reusable primitives (Badge, Button, Card, Input)
│   ├── Navigation.tsx       # Sticky navbar with scroll-spy & mobile drawer
│   ├── Hero.astro           # Hero narrative section
│   ├── HeroPipeline.tsx     # 6-stage deterministic pipeline visualizer
│   ├── TrustBand.astro      # Deterministic standards & vendor compatibility matrix
│   ├── Problem.astro        # Tool fragmentation & commissioning cost breakdown
│   ├── Pillars.astro        # 4 Core Pillars (AI, Knowledge, Automation, Data)
│   ├── PlatXArchitecture.astro # 5 Platform layers & 9-phase lifecycle strip
│   ├── Products.astro       # Flagship products, multi-agent teams, 30+ module grid
│   ├── PlcShowcase.tsx      # 6-gate deterministic pipeline explorer
│   ├── About.astro          # Founder profile, engineering values, and timeline
│   ├── Faq.astro            # Semantic <details>/<summary> accordion
│   ├── Contact.tsx          # Interactive waitlist form with validation
│   └── Footer.astro         # Sitemap & FIS truth-domain disclosure notice
├── lib/
│   ├── utils.ts             # Typed utility functions (cn, debounce, throttle)
│   └── scroll.ts            # Smooth anchor scrolling with reduced-motion support
└── index.css                # Design system tokens and global CSS
```

## Truth-Domain Governance

All platform claims and module readiness levels follow the **Founder Intelligence System (FIS)** governance rules:
- **AUTO-PLC**: Active starter MVP (Siemens TIA Portal Structured Text/SCL validated).
- **AUTO-IO**: Technically validated functional POC (PyQt6).
- **All other 30+ modules**: Conceptual Design (PlatX Vision).
- **Functional Safety (AUTO-SAFE)**: Post-MVP module under independent human governance, strictly non-AI.
- **Quantitative Metrics**: Level 2 target value hypotheses under active pilot measurement.

## Deployment

Configured for static hosting (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Production output is generated in `dist/`.
