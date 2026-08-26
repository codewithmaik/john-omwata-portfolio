export const contactInfo = {
  email: "omwatajohncharles@gmail.com",
  phone: "+256 779 239 902",
  phoneHref: "tel:+256779239902",
  location: "Kampala, Uganda",
};

export const contactMeta = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { label: "Phone", value: contactInfo.phone, href: contactInfo.phoneHref },
  { label: "Location", value: contactInfo.location },
];
