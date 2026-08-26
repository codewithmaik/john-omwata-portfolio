export type DeployStep = {
  command: string;
  result: string;
};

export const deploySteps: DeployStep[] = [
  { command: "design mockup --client", result: "done" },
  { command: "build components --responsive", result: "done" },
  { command: "run tests --cross-browser", result: "passed" },
  { command: "connect domain", result: "linked" },
  { command: "deploy --production", result: "live" },
];
