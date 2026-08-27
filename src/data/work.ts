export type WorkItem = {
  id:
    | "auszeit-mosel"
    | "vd-handwerk"
    | "stromfritz"
    | "forno-rosso"
    | "field-office";
  year: string;
  tags: string[];
  href?: string;
  caseStudySlug?: string;
  thumbSeed: number;
};

export const workItems: WorkItem[] = [
  {
    id: "auszeit-mosel",
    year: "2026",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
    href: "https://auszeit-mosel.vercel.app",
    thumbSeed: 0,
  },
  {
    id: "vd-handwerk",
    year: "2025",
    tags: ["Next.js", "Responsive", "Multilingual"],
    href: "https://vd-handwerk2.vercel.app",
    caseStudySlug: "vd-handwerk",
    thumbSeed: 1,
  },
  {
    id: "stromfritz",
    year: "2026",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
    href: "https://stromfritz.vercel.app",
    thumbSeed: 2,
  },
  {
    id: "forno-rosso",
    year: "2026",
    tags: ["HTML5", "CSS3", "Vanilla JS", "Responsive"],
    href: "https://marvelousfairy.netlify.app/",
    thumbSeed: 3,
  },
  {
    id: "field-office",
    year: "2026",
    tags: ["HTML5", "CSS3", "Canvas API", "Responsive"],
    href: "https://wonderfultoffee.netlify.app/",
    thumbSeed: 4,
  },
];
