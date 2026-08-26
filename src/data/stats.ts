export type Stat = {
  id: "delivered" | "years" | "person" | "remote";
  value: number;
  suffix: string;
};

export const trustStats: Stat[] = [
  { id: "delivered", value: 10, suffix: "+" },
  { id: "years", value: 3, suffix: "+" },
  { id: "person", value: 1, suffix: "" },
  { id: "remote", value: 100, suffix: "%" },
];
