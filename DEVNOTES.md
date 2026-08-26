# Dev Notes

Internal notes for maintaining and extending this project. Not linked from the site.

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Fonts loaded via `next/font/google`: Playfair Display (headings), DM Sans (body), IBM Plex Mono (eyebrows, labels, technical accents)
- No backend, no database, no CMS — content lives in `src/data/*.ts`

## Structure

```
src/
  app/
    layout.tsx          Root layout, fonts, metadata (title/description/OG/Twitter)
    page.tsx             Assembles all sections in order
    globals.css          Tailwind import + theme tokens (colors, fonts)
    icon.tsx              Favicon (generated)
    apple-icon.tsx        Apple touch icon (generated)
    opengraph-image.tsx   Social share image (generated)
  components/            One component per section, plus shared pieces
                          (SectionHeading, Reveal, DeployTerminal)
  data/                  Typed content arrays — edit these to change copy,
                          not the components
  lib/styles.ts           Shared class-string constants (e.g. focus ring)
public/images/            Static assets (about portrait)
```

To change site copy (services, work items, process steps, stats, contact
info, nav links), edit the relevant file in `src/data/` — the components
just render whatever is in there.

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
