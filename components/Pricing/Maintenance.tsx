import { MaintenancePricing } from "@/lib/Maintenance";

function Maintenance() {
  return (
    <section className="w-full py-20 sm:py-40">
      <div className="container">
        <div className="mb-6 sm:mb-10">
          <h1 className="text-center sm:text-left text-4xl sm:text-5xl mb-5">
            Maintenance Pricing
          </h1>
          <p className="lg:max-w-[40%]">
            Explore our maintenance packages created to optimize performance and
            security for your website
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MaintenancePricing.data.map((item, index) => (
            <div
              key={index}
              className="px-8 py-10 bg-gray2 rounded-[20px] flex flex-col justify-between gap-5"
            >
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl text-center">{item.title}</h1>
                <hr className="text-gray" />
                <div className="flex flex-col gap-6 ">
                  <ul className="flex flex-col gap-4 ">
                    {item.des.map((des, i) => (
                      <li key={i} className="text-gray flex gap-2 items-center">
                        {des.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-white text-3xl sm:text-5xl font-titleBold">
                ${item.price}
                <span className="text-gray text-lg">/mo</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Maintenance;
