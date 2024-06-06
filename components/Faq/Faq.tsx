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
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#ffffff" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#ffffff" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            backgroundColor: "#18181C",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails sx={{ color: "#ffffff" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
