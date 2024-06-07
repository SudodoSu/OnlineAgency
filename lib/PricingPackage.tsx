import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";

type LinksData = {
  title: string;
  des: { icon: string | ReactNode; text: string }[];
  price: number;
};

type DataObject = {
  data: LinksData[];
};

export const PricingPackage: DataObject = {
  data: [
    {
      title: "Starter",
      des: [
        {
          icon: <FaCheck color="green" />,
          text: "UI/UX Design on a Single Page",
        },
        { icon: <FaCheck color="green" />, text: "Responsive Design" },
        { icon: <FaCheck color="green" />, text: "Presentation Gallery" },
        { icon: <FaCheck color="green" />, text: "Google Maps Integration" },
        { icon: <FaCheck color="green" />, text: "Contact Form" },
        { icon: <FaCheck color="green" />, text: "Speed Optimization" },
        { icon: <FcCancel />, text: "Website Traffic Insights" },
        { icon: <FcCancel />, text: "Payment integration" },
        { icon: <FcCancel />, text: "SEO" },
        { icon: <FcCancel />, text: "Business Solutions" },
      ],
      price: 100,
    },
    {
      title: "Professional",
      des: [
        {
          icon: <FaCheck color="green" />,
          text: "Multi-page (max 5) UI/UX Design",
        },
        { icon: <FaCheck color="green" />, text: "Responsive Design" },
        { icon: <FaCheck color="green" />, text: "Interactive Gallery" },
        { icon: <FaCheck color="green" />, text: "Google Maps Integration" },
        { icon: <FaCheck color="green" />, text: "Contact Form" },
        { icon: <FaCheck color="green" />, text: "Speed Optimization" },
        { icon: <FaCheck color="green" />, text: "Website Traffic Insights" },
        { icon: <FaCheck color="green" />, text: "Payment integration" },
        { icon: <FcCancel />, text: "SEO" },
        { icon: <FcCancel />, text: "Business Solutions" },
      ],
      price: 200,
    },
    {
      title: "Premium",
      des: [
        {
          icon: <FaCheck color="green" />,
          text: "UI/UX Design on a Single Page",
        },
        { icon: <FaCheck color="green" />, text: "Responsive Design" },
        { icon: <FaCheck color="green" />, text: "Presentation Gallery" },
        { icon: <FaCheck color="green" />, text: "Google Maps Integration" },
        { icon: <FaCheck color="green" />, text: "Contact Form" },
        { icon: <FaCheck color="green" />, text: "Speed Optimization" },
        { icon: <FaCheck color="green" />, text: "Website Traffic Insights" },
        { icon: <FaCheck color="green" />, text: "Payment integration" },
        { icon: <FaCheck color="green" />, text: "SEO" },
        { icon: <FaCheck color="green" />, text: "Business Solutions" },
      ],
      price: 500,
    },
  ],
};
