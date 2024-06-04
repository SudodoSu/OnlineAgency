import { servicesData } from "@/lib/services";

function SectionTwo() {
  return (
    <section className="w-screen mt-[300px]">
      <div className="container">
        <div className="text-left flex flex-col gap-4 mb-8">
          <h1 className="text-5xl">Services</h1>
          <p className="max-w-[577px]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
        </div>
        <div className="grid gap-8 grid-cols-3 ">
          {servicesData.data.map((item, index) => (
            <div
              key={index}
              className="px-8 py-16 rounded-[20px] flex flex-col justity-center items-center text-center bg-gray2"
            >
              <div className="p-4 rounded-[30px] max-w-[104px] max-h-[104px] bg-gray3 mb-10 ">
                {item.path}
              </div>
              <h2 className="mb-4 text-xl">{item.title}</h2>
              <p className="text-sm">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
