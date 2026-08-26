export type WorkItem = {
  id: "forno-rosso" | "field-office" | "energiedirekt";
  year: string;
  tags: string[];
  href?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "forno-rosso",
    year: "2026",
    tags: ["HTML5", "CSS3", "Vanilla JS", "Responsive"],
    href: "https://marvelousfairy.netlify.app/",
  },
  {
    id: "field-office",
    year: "2026",
    tags: ["HTML5", "CSS3", "Canvas API", "Responsive"],
    href: "https://wonderfultoffee.netlify.app/",
  },
  {
    id: "energiedirekt",
    year: "2024 – Present",
    tags: ["HTML5", "CSS3", "Vanilla JS", "Responsive"],
  },
];
