import { ReactNode } from "react";
import { TbSeo } from "react-icons/tb";

type ServicesData = {
  path: string | ReactNode;
  title?: string;
  des?: string;
};

type DataObject = {
  data: ServicesData[];
};

export const servicesData: DataObject = {
  data: [
    {
      path: <TbSeo className="text-5xl" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
    {
      path: <TbSeo className="text-5xl" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
    {
      path: <TbSeo className="text-5xl" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
    {
      path: <TbSeo className="text-5xl" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
    {
      path: <TbSeo className="text-5xl" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
    {
      path: <TbSeo className="text-5xl" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
  ],
};
