type LinksData = {
  path: string;
  titles?: string;
};

type DataObject = {
  data: LinksData[];
};

export const linksData: DataObject = {
  data: [
    { path: "/about", titles: "About" },
    { path: "/services", titles: "Services" },
    { path: "/references", titles: "References" },
    { path: "/prices", titles: "Prices" },
  ],
};
