export type WorkItem = {
  name: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  href?: string;
};

export const workItems: WorkItem[] = [
  {
    name: "Forno Rosso",
    year: "2026",
    role: "Restaurant Frontend",
    description:
      "A fully responsive site for an Italian trattoria — animated hero, a structured menu across four courses, and a mobile slide-in navigation built for one-handed browsing.",
    tags: ["HTML5", "CSS3", "Vanilla JS", "Responsive"],
    href: "https://marvelousfairy.netlify.app/",
  },
  {
    name: "Field Office",
    year: "2026",
    role: "Architecture Studio Frontend",
    description:
      "An editorial-style site with an interactive canvas blueprint grid that responds to cursor movement, plus a structured project index for the studio's portfolio.",
    tags: ["HTML5", "CSS3", "Canvas API", "Responsive"],
    href: "https://wonderfultoffee.netlify.app/",
  },
  {
    name: "EnergieDirekt",
    year: "2024 – Present",
    role: "Consultant Business Website",
    description:
      "A business site for an independent energy consultant — helping homeowners compare providers, with a multi-channel contact hub and a guided comparison flow.",
    tags: ["HTML5", "CSS3", "Vanilla JS", "Responsive"],
  },
];
