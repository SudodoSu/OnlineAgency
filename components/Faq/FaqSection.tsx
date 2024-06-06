import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="w-screen mb-40">
      <div className="container flex flex-col items-center">
        <div className="mb-8">
          <h1 className="text-5xl">Freqfently Asked Questions</h1>
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
