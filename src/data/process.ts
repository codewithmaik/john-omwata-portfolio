export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "A short call or written brief to understand the business, the audience, and what the site needs to do.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "A visual direction and page layout built around the brand — shared for feedback before any code is written.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Responsive, fast, accessible code — tested across browsers and devices, not just the one on my desk.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description:
      "The site goes live on your domain, with a short handover and support window for the first fixes.",
  },
];
