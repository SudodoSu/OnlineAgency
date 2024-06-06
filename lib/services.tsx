import { ReactNode } from "react";
import { TbSeo } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";

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
      path: <MdOutlineDesignServices className="text-5xl text-white" />,
      title: "Web Design",
      des: "Crafting visually stunning and user-friendly websites that engage and convert visitors",
    },
    {
      path: <TbSeo className="text-5xl text-white" />,
      title: "Search Engine Optimization",
      des: "Improving your website to increase its visibility in Google",
    },
    {
      path: <DiResponsive className="text-5xl text-white" />,
      title: "Responsive Design",
      des: "Ensuring your website looks great and functions seamlessly on all devices, from desktops to smartphones",
    },
    {
      path: <SiGooglemarketingplatform className="text-5xl text-white" />,
      title: "Marketing",
      des: "Developing tailored strategies to elevate your brand and reach your target audience effectively",
    },
    {
      path: <FaBusinessTime className="text-5xl text-white" />,
      title: "Business Solutions",
      des: "Providing innovative tools and strategies to streamline operations and drive business growth",
    },
    {
      path: <GrHostMaintenance className="text-5xl text-white" />,
      title: "Maintenance",
      des: "Offering comprehensive support to keep your website secure, up-to-date, and running smoothly",
    },
  ],
};
