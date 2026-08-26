export type Service = {
  id:
    | "businessConsultant"
    | "restaurantHospitality"
    | "studioPortfolio"
    | "landingLaunch"
    | "storefront"
    | "refreshSpeed";
  number: string;
};

export const services: Service[] = [
  { id: "businessConsultant", number: "01" },
  { id: "restaurantHospitality", number: "02" },
  { id: "studioPortfolio", number: "03" },
  { id: "landingLaunch", number: "04" },
  { id: "storefront", number: "05" },
  { id: "refreshSpeed", number: "06" },
];
