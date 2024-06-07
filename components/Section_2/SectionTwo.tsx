import ServicesList from "./ServicesList";

function SectionTwo() {
  return (
    <section className="w-screen pt-[400px]" id="services">
      <div className="container">
        <div className="text-left flex flex-col gap-4 mb-8">
          <h1 className="text-5xl">Services</h1>
          <p className="max-w-[577px]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>
        <ServicesList />
      </div>
    </section>
  );
}

export default SectionTwo;
