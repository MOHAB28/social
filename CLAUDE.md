# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` (`ng serve`) — dev server at http://localhost:4200 (development config by default)
- `npm run build` (`ng build`) — production build to `dist/` (budgets: 500kB warn / 1MB error initial; 4kB / 8kB per component stylesheet)
- `npm run watch` — development build in watch mode
- `npm test` (`ng test`) — unit tests via Vitest through `@angular/build:unit-test` (jsdom environment); add `--watch=false` for a single non-interactive run
- Run a single spec: `ng test --watch=false --include src/app/app.spec.ts`
- Scaffold: `ng generate component features/<name>` — schematics are configured to emit `*.component.ts` / `*.service.ts` / `*.interface.ts` suffixes (`type` option in `angular.json`), so keep that naming.
- Formatting: Prettier (`.prettierrc`: printWidth 100, single quotes, Angular parser for HTML). No lint target is configured.

## Architecture

Angular 21 standalone app (no NgModules), bootstrapped in `src/main.ts` with `appConfig` from `src/app/app.config.ts`.

- **Providers (`app.config.ts`)**: router uses **hash location** (`withHashLocation()`, so URLs look like `/#/login`), view transitions, and scroll-to-top on navigation; `HttpClient` is provided with `withFetch()`.
- **Routing (`app.routes.ts`)**: two layout shells, both mounted at path `''` with child routes:
  - `AuthLayoutComponent` (bare `<router-outlet>`) → `login`, `register`, `forget`
  - `MainLayoutComponent` (`<app-nav-bar>` + `<router-outlet>`) → `profile`, `timeline`, `notifications`, `change` (change password)
  - `''` redirects to `login`; unknown paths redirect to `notfound`.
  - Routes are eagerly imported components; no guards yet.
- **Folders**: page-level components live in `src/app/features/<name>/`; layout shells in `src/app/layouts/`, with layout-specific pieces under `layouts/<layout>/components/` (e.g. the nav bar).

## Styling

- Tailwind CSS v4 via PostCSS (`.postcssrc.json`), configured CSS-first in `src/styles.css` (no `tailwind.config.js`).
- Flowbite is wired in as a Tailwind plugin + theme in `styles.css`; Font Awesome CSS is loaded globally through `angular.json` `styles`.
- Custom theme tokens defined in `@theme`: `mainColor` (`#00298d`) and `secondryColor` (`#f0f2f5`, note the spelling) — use as `bg-mainColor`, `text-mainColor`, etc. The `container` utility is overridden to center only (`margin-inline: auto`).

## Notes

- `src/app/app.spec.ts` still contains the CLI-generated "should render title" test expecting an `<h1>`, but `app.html` is only `<router-outlet />`, so that test fails until it is updated or removed.
- `.vscode/mcp.json` configures the Angular CLI MCP server (`npx @angular/cli mcp`).
