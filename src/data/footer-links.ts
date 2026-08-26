export type FooterResourceLink = {
  id: string;
  label: string;
  href: string;
};

export const footerResourceLinks: FooterResourceLink[] = [
  { id: "mdn", label: "MDN Web Docs", href: "https://developer.mozilla.org" },
  { id: "webdev", label: "web.dev", href: "https://web.dev" },
  { id: "caniuse", label: "Can I Use", href: "https://caniuse.com" },
  { id: "github", label: "GitHub", href: "https://github.com" },
  { id: "stackoverflow", label: "Stack Overflow", href: "https://stackoverflow.com" },
  {
    id: "typescript",
    label: "TypeScript Handbook",
    href: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  { id: "tailwind", label: "Tailwind CSS Docs", href: "https://tailwindcss.com/docs" },
  { id: "nextjs", label: "Next.js Docs", href: "https://nextjs.org/docs" },
];
