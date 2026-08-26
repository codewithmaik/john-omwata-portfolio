export const contactInfo = {
  email: "omwatajohncharles@gmail.com",
  phone: "+256 779 239 902",
  phoneHref: "tel:+256779239902",
  location: "Kampala, Uganda",
};

export const contactMeta = [
  { id: "email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { id: "phone", value: contactInfo.phone, href: contactInfo.phoneHref },
  { id: "location", value: contactInfo.location },
];
