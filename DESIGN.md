# AUTO-X — Design System

This file is the single source of truth for all visual and UI decisions on the AUTO-X
site. Read it before building or changing anything visual. Do not deviate from it without
explicit user approval.

## Brand

- **Name:** AUTO-X
- **Tagline / slogan:** _AI-Native Industrial Engineering._
- **Positioning:** AUTO-X builds the software infrastructure for the next generation of
  industrial engineering. We develop AI-powered engineering tools that help Industrial
  Automation teams design, build, verify, and operate complex systems — cutting project
  timelines and reducing errors.
- **Mission:** Make industrial engineering more intelligent, connected, and dramatically
  more productive.
- **Approach:** We combine AI, engineering knowledge, automation, and industrial data to
  connect fragmented workflows and reduce repetitive engineering work while keeping
  engineers in control of critical decisions.
- **Product hierarchy:**
  - **AUTO-X** — the startup / parent. The brand and company.
  - **PlatX** — the AI-Native Industrial Engineering Operating System. The flagship
    platform. Vision: _The Siemens + EPLAN + AVEVA + GitHub + ChatGPT + Palantir
    for Industrial Automation Engineering._
  - **AUTO-PLC** — the current complete MVP that kickstarts AUTO-X. A PlatX module
    for PLC engineering workflow automation. Demo-ready today as the live proof point.
  - **AUTO-IO** — standalone I/O allocation tool. POC complete, ready for productization.
  - **Additional modules** — expanding toward the complete industrial automation lifecycle
    through the PlatX module ecosystem (30+ modules across 9 phases).
- **Lifecycle phases (PlatX backbone):**
  1. Define & Scope (AUTO-SCOPE, AUTO-REQ, AUTO-FEED)
  2. Engineering Design (AUTO-PD, AUTO-INST, AUTO-IO, AUTO-ELEC, AUTO-NET, AUTO-SAFE, AUTO-ICS/OT)
  3. Control System Development (AUTO-PLC, AUTO-HMI, AUTO-SCADA, AUTO-MES, AUTO-IIoT)
  4. Documentation Automation (AUTO-DOC, AUTO-TEST)
  5. Simulation & Validation (AUTO-SIM, AUTO-DT)
  6. Deployment & Commissioning (AUTO-COMM, AUTO-MIGRATE)
  7. Operations (AUTO-OPS, AUTO-PERF)
  8. Maintenance (AUTO-CM, AUTO-PDM)
  9. Continuous Learning (AUTO-KG, AUTO-LEARN)

## Aesthetic

- **Theme:** Light. Clean, minimal, professional. Easy to read for any audience
  including investors, executives, and engineers.
- **Signature element:** the deterministic **gate pipeline** — a left-to-right sequence of
  stages (Design → Build → Verify → Document → Approve → Commission). Each stage shows a
  status: `pending` (neutral), `running` (accent), or `verified` (green). This is the
  recurring visual metaphor across the site and the hero.
- **Mood:** trustworthy infrastructure. Evidence over hype.

## Color

Palette is intentionally minimal — **2–3 colors max**.

- **Surface scale (monochrome):** page background `#fafbfc`, panel `#ffffff`, elevated
  `#f8fafc`, hover `#f1f5f9`, borders `#e2e8f0` / `#cbd5e1`.
- **Text:** primary `#0d1117`, secondary `#424a5a`, tertiary `#6b7280`, quaternary `#9ca3af`.
- **Accent — Electric Blue `#2F80FF`**. Used **functionally only**: CTAs, the active/running
  gate state, links on hover, focus rings. Never purely decorative.
- **Verified Green `#10b981`** — used only for the `verified` gate state and success affordances.
- Warning/error are rare edge cases and not part of the core palette.

Tailwind tokens (already wired): `accent-primary #2F80FF`, `accent-hover #2F80FF`,
`accent-muted #16335C`, `accent-border rgba(47,128,255,0.3)`, `brand #2F80FF`,
`success #10b981`.

## Typography

- **Font:** Geist (`Inter`/`ui-sans-serif` fallback). Body + display are the same family —
  do **not** reintroduce a separate display face.
- **Weights:** 400 (body), 500 (emphasis), 600 (labels/headings). **No 700.**
- **Feature:** enable ligatures (`font-feature-settings: "liga" 1`) on all Geist text.
- **Scale:** display-hero `3.5rem`; display-large `3rem`; display-medium `2.5rem`;
  body `1.06rem`; body-large `1.25rem`; small `0.94rem`.
- **Tracking:** slightly tight on display (`-0.02em`), normal on body.

## Spacing & Layout

- Max content width 1200px, centered. Section vertical rhythm 96–128px.
- Generous whitespace; group related elements; one clear focal point per section.
- Surface cards: `bg-panel`, `border-border`, radius 12px, subtle shadows.

## Motion

- **Library:** Motion (framer-motion).
- Restrained: fade + small translate on scroll-in, gentle gate pulse, hover lifts.
- Respect `prefers-reduced-motion`: disable transforms/loops, keep content visible.
- No autoplay loops, no parallax theatrics.

## Voice & Content

- **Audience:** Investors, executives, and engineering leaders — plus technical engineers.
  Lead with business outcomes. Explain technical concepts simply. No jargon without a plain-language
  purpose.
- **Buttons:** primary = `bg-accent-primary text-white`; secondary = outline.
- **Voice:** concrete, honest, professional. State hypotheses as hypotheses; no fake
  metrics, no unverifiable claims. Pre-seed status is stated plainly.
- **Technical details:** Keep engineering credibility (standards, certifications) but present
  them as background context, not the lead narrative. Avoid code snippets, tech stack badges,
  and file-name-style labels on diagrams.
- **Section order (source of truth):** Hero → TrustBand → Problem → How it works → PlatX Story → Products → About → FAQ → Contact.
