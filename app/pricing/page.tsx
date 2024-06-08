import FaqSection from "@/components/Faq/FaqSection";
import Maintenance from "@/components/Pricing/Maintenance";
import Pricing from "@/components/Pricing/Pricing";
import SectionFour from "@/components/Section_4/SectionFour";

function page() {
  return (
    <main>
      <Pricing />
      <Maintenance />
      <FaqSection />
      <SectionFour />
    </main>
  );
}

export default page;
