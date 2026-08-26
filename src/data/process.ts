export type ProcessStep = {
  id: "discover" | "design" | "build" | "deploySupport";
  number: string;
};

export const processSteps: ProcessStep[] = [
  { id: "discover", number: "01" },
  { id: "design", number: "02" },
  { id: "build", number: "03" },
  { id: "deploySupport", number: "04" },
];
