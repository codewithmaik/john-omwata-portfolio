export type Fact = {
  id: "basedIn" | "worksWith" | "availability";
};

export const aboutFacts: Fact[] = [
  { id: "basedIn" },
  { id: "worksWith" },
  { id: "availability" },
];
