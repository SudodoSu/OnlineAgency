"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="flex flex-col gap-6">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ borderRadius: "6px", backgroundColor: "#18181C" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon className="text-white" />
            ) : (
              <AddIcon className="text-white" />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            borderBottom: expanded === "panel1" ? "1px solid #9E9E9E" : "",
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          How much does it cost to create a website?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
          The cost of creating a website varies depending on the features and
          complexity of the project, as well as the number of pages,
          multilingual options, number of galleries, and many other factors.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ borderRadius: "6px", backgroundColor: "#18181C" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon className="text-white" />
            ) : (
              <AddIcon className="text-white" />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            borderBottom: expanded === "panel2" ? "1px solid #9E9E9E" : "",
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          How long does it take to create a website?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
          The time it takes to create a website varies depending on the
          complexity of the project. On average, building a simple website can
          take anywhere from a few days to a few weeks, while more complex
          projects can take longer.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ borderRadius: "6px", backgroundColor: "#18181C" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon className="text-white" />
            ) : (
              <AddIcon className="text-white" />
            )
          }
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            borderBottom: expanded === "panel3" ? "1px solid #9E9E9E" : "",
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          What information and materials do I need to prepare?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
          <span className="font-titleBold">Goal of the website:</span> What is
          the purpose of the website and what is intended to be achieved through
          it. <br />
          <br />
          <span className="font-titleBold">Target audience:</span> Who is the
          target audience of the website and what are their needs. <br />
          <br />
          <span className="font-titleBold">Content:</span> What content will be
          displayed on the page, including texts, images, and video content.{" "}
          <br />
          <br />
          <span className="font-titleBold">Functionality:</span> What
          functionalities are needed on the page, such as contact forms,
          e-commerce, or social media integrations. <br />
          <br />
          <span className="font-titleBold">Design:</span> General style and
          colors to be used on the page, as well as other specific design
          requirements. <br />
          <br />
          <span className="font-titleBold">Budget:</span> Available budget for
          the website development. <br />
          <br />
          <span className="font-titleBold">Deadlines:</span> Deadlines for
          project completion.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ borderRadius: "6px", backgroundColor: "#18181C" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon className="text-white" />
            ) : (
              <AddIcon className="text-white" />
            )
          }
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{
            borderBottom: expanded === "panel4" ? "1px solid #9E9E9E" : "",
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          Will I receive support and maintenance after the website is created?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
          Yes, we provide support and maintenance after the website is created.
          Depending on your needs, you can make changes as required. Billing can
          be done either as a one-time payment or prepaid.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ borderRadius: "6px", backgroundColor: "#18181C" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <RemoveIcon className="text-white" />
            ) : (
              <AddIcon className="text-white" />
            )
          }
          aria-controls="panel5-content"
          id="panel5-header"
          sx={{
            borderBottom: expanded === "panel5" ? "1px solid #9E9E9E" : "",
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          What is a domain and how to buy/get a domain?
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
          A domain is a unique name used to identify a website on the internet.
          <br />
          <br />
          You can purchase a domain from various providers, and we can assist
          you with that. .
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        sx={{ borderRadius: "6px", backgroundColor: "#18181C" }}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel6" ? (
              <RemoveIcon className="text-white" />
            ) : (
              <AddIcon className="text-white" />
            )
          }
          aria-controls="panel6-content"
          id="panel6-header"
          sx={{
            borderBottom: expanded === "panel6" ? "1px solid #9E9E9E" : "",
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          Website Maintenance Simplified
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#9E9E9E", paddingTop: "20px" }}>
          Website maintenance involves regular updates to software, security
          monitoring, content updates, and performance optimization. Our
          dedicated team ensures your website remains secure, up-to-date, and
          running smoothly.
          <br />
          <br />
          We provide website maintenance services with straightforward pricing.
          For smaller projects, we provide fixed pricing, while larger projects
          receive custom quotes.
          <br />
          <br />
          Investing in website maintenance enhances user experience, protects
          your online reputation, and ensures your business's success. Let us
          handle the technical details while you focus on growing your business.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
