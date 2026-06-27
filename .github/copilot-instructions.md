# Copilot instructions — Interc3pt landing page

Single-page marketing landing for **Interc3pt**, an AI-based B2B automation company
(Tallinn, Estonia). See [`AGENTS.md`](../AGENTS.md) for full details.

## Language rule

- **Visible UI text → Estonian.** All copy the user sees (headings, buttons, labels,
  descriptions, footer) must be in Estonian.
- **Everything else → English.** Identifiers, comments, file/folder names, commit
  messages and docs are always in English.

## Stack & tooling

- React 19 + TypeScript (strict), Vite 8, React Compiler enabled
- Tailwind CSS v4 (configured in `src/index.css`, **no `tailwind.config.js`**)
- shadcn/ui (new-york) components + lucide-react icons
- next-themes for light/dark theming
- oxlint for linting; commitlint + commitizen for commits
- **Package manager: bun** — use `bun`/`bunx`, never npm/pnpm/yarn

## Commands

```bash
bun run dev      # dev server
bun run build    # type-check + build (must pass before pushing)
bun run lint     # oxlint
bun run commit   # conventional-commit prompt
```

## Code conventions

- Import via the `@/*` alias (→ `src/*`), e.g. `@/components/ui/button`.
- Add UI primitives with `bunx shadcn@latest add <component>`; **don't hand-edit**
  files in `src/components/ui/`.
- Style with Tailwind **semantic tokens** (`bg-background`, `text-foreground`,
  `text-primary`, `bg-secondary`, `text-accent`, `text-muted-foreground`,
  `border-border`) — never raw hex/palette colors, so theming keeps working.
- Merge conditional classes with `cn()` from `@/lib/utils`.
- Read the theme via `useTheme()` from `next-themes`; gate theme-dependent rendering
  behind a `mounted` flag to avoid hydration mismatches.
- Page content lives in `const` arrays at the top of `src/App.tsx` (solutions, steps,
  benefits, testimonials, faqs, navLinks) — edit copy there.

## Palette (defined in `src/index.css`)

`#025949` deep teal · `#0D0D0D` black · `#5CF2E3` bright cyan · `#26BFB0` teal ·
`#F2F2F2` white. White = light-theme background, black = dark-theme background.

## Commits

Conventional Commits enforced by commitlint. Types: `feat`, `fix`, `docs`, `style`,
`refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`. Lowercase, no trailing
period, header ≤ 100 chars. Example: `feat: add FAQ accordion`.
