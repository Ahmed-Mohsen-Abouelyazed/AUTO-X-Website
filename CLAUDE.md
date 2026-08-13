# CLAUDE.md

Project instructions for coding agents working on the AUTO-X site.

## Stack
- React + Vite + TypeScript + Tailwind CSS.
- Animation: Motion (framer-motion).

## Design System
Always read `DESIGN.md` before making any visual or UI decision.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code or rendered output that does not match `DESIGN.md`.

## Build & Verify
- Lint: `npm run lint`
- Build: `npm run build`
- Run a production preview (`npm run preview`) and screenshot/inspect after visual changes
  to confirm zero console errors and palette/typography compliance.
