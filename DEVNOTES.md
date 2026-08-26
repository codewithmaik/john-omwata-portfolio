# Dev Notes

Internal notes for maintaining and extending this project. Not linked from the site.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Fonts loaded via `next/font/google`: Playfair Display (headings), DM Sans (body), IBM Plex Mono (eyebrows, labels, technical accents)
- i18n via `next-intl` — English (default), German, Luganda
- No backend, no database, no CMS — content lives in `src/data/*.ts` and
  `messages/*.json`

## Structure

```
messages/
  en.json / de.json / lg.json  Translated copy, one file per locale,
                                nested by section (matches component names)
src/
  i18n/
    routing.ts            Locale list, default locale, localePrefix config
    navigation.ts          Locale-aware Link/usePathname/useRouter
    request.ts              Loads the message file for the active locale
  proxy.ts                 next-intl middleware — device-language detection
                            on first visit, NEXT_LOCALE cookie persistence
  app/
    [locale]/
      layout.tsx           Root layout (owns <html>/<body>), fonts, locale
                            validation, per-locale metadata
      page.tsx             Assembles all sections in order
      opengraph-image.tsx   Social share image (generated, per locale)
    globals.css            Tailwind import + theme tokens (colors, fonts)
    icon.tsx                Favicon (generated, shared across locales)
    apple-icon.tsx          Apple touch icon (generated, shared across locales)
  components/              One component per section, plus shared pieces
                            (SectionHeading, Reveal, DeployTerminal). Server
                            components call `getTranslations`; the client
                            Header uses `useTranslations`.
  data/                    Typed content arrays — locale-invariant fields
                            only (ids, years, tags, hrefs). Prose lives in
                            `messages/*.json`, keyed by each item's `id`.
  lib/styles.ts             Shared class-string constants (e.g. focus ring)
public/images/              Static assets (about portrait)
```

To change site copy, edit the matching key in all three `messages/*.json`
files (English is the source of truth — add a key there first). To change
structural fields (years, tags, live-site links, item order), edit the
relevant file in `src/data/`.

Next.js 16's auto-generated `AGENTS.md`/`CLAUDE.md` file convention is
disabled (`agentRules: false` in `next.config.ts`) — those files must not
exist in this repo.

## Conventions

- One feature branch per logical change, PR against `main`, squash merge,
  delete branch after merge. Commit messages follow Conventional Commits
  (`feat:`, `fix:`, `chore:`, `docs:`).
- `main` is always deployable and maps to the Vercel production deployment.
- Run `npm run build` and `npm run lint` before merging anything.

## Deployment

- GitHub: `codewithmaik/john-omwata-portfolio` (public)
- Vercel: team `codewithmaik`, project `john-omwata-portfolio`
- Production: https://john-omwata-portfolio.vercel.app

**Open item:** the Vercel project isn't connected to GitHub for
auto-deploy-on-push yet — the Vercel account needs a Login Connection to the
`codewithmaik` GitHub account first (Vercel → Account Settings → Login
Connections; this can't be done from the CLI). Until that's set up, deploy
manually after merging to `main`:

```
vercel --prod
```

## Known follow-ups

- The EnergieDirekt work item has no live link yet (`href` is unset in
  `src/data/work.ts`, rendered as "Live site coming soon"). Add the URL
  there once the site ships.
- No contact form — contact is `mailto:`/`tel:` only, matching the original
  site. Revisit if a real intake flow is wanted later.
