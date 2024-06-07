import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="w-full mb-20 pt-20" id="faq">
      <div className="container flex flex-col items-center">
        <div className="mb-8">
          <h1 className="text-center text-4xl sm:text-5xl">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
