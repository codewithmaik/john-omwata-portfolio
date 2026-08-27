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
- Also aliased to: https://johnomwata-dev.vercel.app (`codewithjohn.vercel.app`
  was requested but is already claimed by an unrelated Vercel account)

**Open item:** the Vercel project isn't connected to GitHub for
auto-deploy-on-push yet — the Vercel account needs a Login Connection to the
`codewithmaik` GitHub account first (Vercel → Account Settings → Login
Connections; this can't be done from the CLI). Until that's set up, deploy
manually after merging to `main`:

```
vercel --prod
```

## Known follow-ups

- No contact form — contact is `mailto:`/`tel:` only, matching the original
  site. Revisit if a real intake flow is wanted later.
- Luganda (`lg`) translations were machine-authored — worth a native-speaker
  review pass at some point, flagged when this was set up.

## 2026-08-27: work items update (2)

- **Stromfritz** now links to its live deployment
  (`https://stromfritz.vercel.app`) via `href` in `src/data/work.ts`; copy
  updated in `messages/{en,de,lg}.json` to drop the "live link on the way"
  placeholder line.
- Added a `contact.specialization` line
  ("Specializing in clients in Germany and the EU.") rendered in
  `Contact.tsx` just below the email/phone/location meta grid, in all
  three locales.

## 2026-08-27: work items update

- **Auszeit Mosel** now links to its live deployment
  (`https://auszeit-mosel.vercel.app`) via `href` in `src/data/work.ts`;
  copy updated in `messages/{en,de,lg}.json` to drop the "live link on the
  way" placeholder line.
- **EnergieDirekt** work item removed entirely — deleted from
  `src/data/work.ts` (including the `id` union type) and from
  `work.items.energiedirekt` in all three `messages/*.json` files.

## In-progress: 2026-08-26 feature batch

Working through a large batch of changes (i18n, case study, new work items,
legal pages, nav dropdown, footer links, responsiveness) as separate
feature branches per the convention above. Status:

- ✅ Merged & deployed: `feat/i18n-infrastructure` (PR #10),
  `feat/work-items-and-thumbnails` (PR #11).
- 🔧 Built and locally verified (build + lint green, manually clicked
  through in-browser), **not yet committed/PR'd/merged/deployed** as of
  this note: the VD Handwerk² case-study page
  (`src/app/[locale]/work/[slug]/page.tsx`,
  `src/data/case-studies/vd-handwerk.ts`, plus the `caseStudy.vdHandwerk`
  key and `work.viewCaseStudy` key added to all three `messages/*.json`,
  and the "View case study" link wired into `Work.tsx`). Next step:
  `git add -A`, commit (`feat: add VD Handwerk² case study page`), push,
  open a PR against `main`, squash-merge, delete branch, `vercel --prod`.
- ⏳ Not started yet: nav "Work" dropdown (branch 4), Impressum/Datenschutz
  pages + footer backlinks (branch 5), full responsiveness audit (branch 6).
- Full plan with architecture decisions lives at
  `/Users/admin/.claude/plans/adaptive-leaping-octopus.md` on the machine
  this was built on — re-read it before continuing if picking this back up
  in a new session.
