export type Stat = {
  id: "delivered" | "years" | "person" | "remote";
  value: string;
};

export const trustStats: Stat[] = [
  { id: "delivered", value: "10+" },
  { id: "years", value: "3+" },
  { id: "person", value: "1" },
  { id: "remote", value: "100%" },
];
