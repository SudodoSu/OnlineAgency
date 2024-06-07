import FaqSection from "@/components/Faq/FaqSection";
import References from "@/components/References/References";
import SectionOne from "@/components/Section_1/SectionOne";
import SectionTwo from "@/components/Section_2/SectionTwo";
import SectionThree from "@/components/Section_3/SectionThree";
import SectionFour from "@/components/Section_4/SectionFour";
import React from "react";

function page() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FaqSection />
      <References />
      <SectionFour />
    </main>
  );
}

export default page;
