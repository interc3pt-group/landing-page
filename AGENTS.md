# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

**Interc3pt** — a single-page marketing landing page for an AI-based B2B automation
company based in Tallinn, Estonia.

- **UI copy is in Estonian.** All visible text (headings, buttons, descriptions,
  footer) must be written in Estonian.
- **Code is in English.** Identifiers, comments, file/folder names, commit messages,
  branch names and docs are always in English.

## Tech stack

- **React 19** + **TypeScript** (strict), built with **Vite 8** (React Compiler enabled)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js` — config lives in CSS)
- **shadcn/ui** (new-york style) for components, **lucide-react** for icons
- **next-themes** for light/dark theming
- **oxlint** for linting, **commitlint** + **commitizen** for commits
- **Package manager: bun** (a `bun.lock` is committed — do not introduce npm/pnpm/yarn lockfiles)

## Commands

```bash
bun install          # install dependencies
bun run dev          # start the Vite dev server
bun run build        # type-check (tsc -b) + production build
bun run preview      # preview the production build
bun run lint         # run oxlint
bun run commit       # commitizen prompt (conventional commits)
```

Always run `bun run lint` and `bun run build` before considering a change complete —
`build` runs the TypeScript type-checker, and the `pre-push` git hook runs it too.

## Project structure

```
src/
├─ App.tsx                  # the entire landing page (header, hero, sections, footer)
├─ main.tsx                 # entry point; wraps <App/> in <ThemeProvider/>
├─ index.css                # Tailwind import + design tokens (light/dark) + custom animations
├─ components/
│  ├─ theme-provider.tsx    # next-themes provider wrapper
│  └─ ui/                   # shadcn/ui components (generated — avoid hand-editing)
└─ lib/
   └─ utils.ts              # cn() class-name helper
```

## Conventions

- **Path alias:** import from `@/*` (resolves to `src/*`). Configured in `vite.config.ts`
  and the tsconfig files. Use `@/components/ui/button`, not relative paths.
- **Adding shadcn components:** `bunx shadcn@latest add <component>`. Do not write
  `src/components/ui/*` by hand; let the CLI generate them.
- **Styling:** Tailwind utility classes only. Use the semantic design tokens
  (`bg-background`, `text-foreground`, `text-primary`, `bg-secondary`, `text-accent`,
  `border-border`, `text-muted-foreground`, …) rather than raw hex or palette colors,
  so light/dark theming keeps working.
- **Theming:** dark mode is the `.dark` class on `<html>`, managed by next-themes.
  Read the current theme with `useTheme()` from `next-themes`; guard rendering that
  depends on it behind a `mounted` flag to avoid hydration mismatches.
- **Class merging:** combine conditional classes with `cn()` from `@/lib/utils`.
- **Content data:** section content (solutions, steps, benefits, testimonials, faqs,
  navLinks) lives in module-level `const` arrays at the top of `App.tsx` and is mapped
  in JSX. Add or edit copy there.

## Color palette

Defined as CSS variables in `src/index.css`, exposed to Tailwind via `@theme inline`.

| Color       | Hex       | Role (light → dark)                    |
| ----------- | --------- | -------------------------------------- |
| Deep teal   | `#025949` | `primary` → `secondary`                |
| Black       | `#0D0D0D` | foreground → background                |
| Bright cyan | `#5CF2E3` | `accent`, glows, lightning animation   |
| Teal        | `#26BFB0` | `secondary` → `primary`                |
| White       | `#F2F2F2` | background → foreground                |

White is the light-theme background; black is the dark-theme background.

## Commits

This repo enforces **Conventional Commits** via commitlint (`commitlint.config.cjs`,
`@commitlint/config-conventional`). The `commit-msg` hook validates every message.

- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`,
  `ci`, `chore`, `revert`. Lowercase type and scope, no trailing period, header ≤ 100 chars.
- Prefer `bun run commit` (commitizen) to compose a valid message interactively.
- Examples: `feat: add testimonials section`, `chore(deps): bump tailwindcss`.

## Git hooks (husky)

- `pre-commit` → `bun x lint-staged` (runs `oxlint --fix` on staged JS/TS files)
- `commit-msg` → `bun x commitlint --edit` (validates the message)
- `pre-push`  → `bun run build` (type-check + build must pass)

## Do / Don't

- ✅ Keep visible UI text in Estonian; keep code/comments/filenames in English.
- ✅ Use semantic Tailwind tokens so both themes stay correct.
- ✅ Run `bun run lint` and `bun run build` before finishing.
- ✅ Use `bun` for every script and dependency change.
- ❌ Don't hardcode palette hex values in components — use the tokens.
- ❌ Don't hand-edit generated `src/components/ui/*` files.
- ❌ Don't add a `tailwind.config.js` — Tailwind v4 is configured in `index.css`.
- ❌ Don't introduce a non-bun lockfile.
