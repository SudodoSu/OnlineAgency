import ServicesList from "./ServicesList";

function SectionTwo() {
  return (
    <section className="w-full pt-[400px] z-30" id="services">
      <div className="container">
        <div className="text-left flex flex-col gap-4 mb-8">
          <h1 className="text-5xl z-30">Services</h1>
          <p className="max-w-[577px] z-30">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>
        <div className="z-30">
          <ServicesList />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
