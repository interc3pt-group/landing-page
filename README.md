# Interc3pt — Landing Page

Single-page landing for **Interc3pt**, an AI-based automation company (Tallinn, Estonia).
The site copy is in Estonian; all source code, file names and comments are in English.

Built with React 19, TypeScript, Vite, Tailwind CSS v4 and [shadcn/ui](https://ui.shadcn.com).

## Tech stack

- **React 19** + **TypeScript** (Vite 8, React Compiler enabled)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **shadcn/ui** components (`button`, `card`, `badge`, `separator`, `sheet`, `accordion`, `tooltip`, `avatar`)
- **next-themes** for light/dark theming
- **lucide-react** icons
- **Oxlint** for linting

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # run Oxlint
```

## Project structure

```
src/
├─ App.tsx              # the whole landing page (header, hero, sections, footer)
├─ main.tsx             # React entry point
├─ index.css           # Tailwind import + design tokens (light/dark themes)
├─ components/
│  ├─ theme-provider.tsx # next-themes provider wrapper
│  └─ ui/              # shadcn/ui components
└─ lib/
   └─ utils.ts          # cn() class-name helper
```

## Theming & color palette

Colors are defined as CSS variables in `src/index.css` and exposed to Tailwind via
`@theme inline`, following the shadcn/ui token convention. Dark mode is driven by the
`.dark` class on `<html>`, managed by **next-themes** (`ThemeProvider` in `main.tsx`,
`attribute="class"`, respects the OS preference and persists the choice).

| Color     | Hex       | Role                                     |
| --------- | --------- | ---------------------------------------- |
| Deep teal | `#025949` | `primary` (light) / `secondary` (dark)   |
| Black     | `#0D0D0D` | background (dark) / foreground (light)   |
| Bright cyan | `#5CF2E3` | `accent`, glows, lightning animation   |
| Teal      | `#26BFB0` | `secondary` (light) / `primary` (dark)   |
| White     | `#F2F2F2` | background (light) / foreground (dark)   |

To add more shadcn/ui components:

```bash
npx shadcn@latest add <component>
```

## Path alias

`@/*` resolves to `src/*` (configured in `vite.config.ts` and `tsconfig`).
