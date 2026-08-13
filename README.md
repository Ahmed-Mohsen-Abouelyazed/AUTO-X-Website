# AUTO-X Website

Marketing site for AUTO-X, built with React, Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project Structure

```
src/
  components/      # UI sections and reusable components
    ui/            # Primitive UI components (Button, Card, Input, Badge)
  lib/             # Utilities (cn helper)
  App.tsx          # Page composition
  main.tsx         # Entry point
```

## Deployment

Configured for Netlify (`netlify.toml`). The production build outputs to `dist/`.
