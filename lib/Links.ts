type LinksData = {
  path: string;
  titles?: string;
};

type DataObject = {
  data: LinksData[];
};

export const linksData: DataObject = {
  data: [
    { path: "/#services", titles: "Services" },
    { path: "/#references", titles: "References" },
    { path: "/pricing", titles: "Pricing" },
    { path: "#faq", titles: "Faq" },
  ],
};
