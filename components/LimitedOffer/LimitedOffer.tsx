import Link from "next/link";
import World from "./World";

function LimitedOffer() {
  return (
    <section className="w-full">
      <div className="container ">
        <div className="bg-gradient flex flex-col sm:grid grid-cols-2 rounded-[40px] relative">
          <div className="flex flex-col gap-6 p-8 justify-center relative z-20">
            <div className="flex flex-col gap-6">
              <span>Limited Offer!</span>
              <h1 className="text-4xl sm:text-5xl">
                Get free website & free hosting{" "}
              </h1>
            </div>
            <div className="flex">
              <button className="text-white bg-black flex items-center py-1.5 rounded-md font-poppins text-sm px-[28px] leading-7 cursor-pointer">
                <Link href="#contact">Start</Link>
              </button>
            </div>
          </div>
          <div className="py-8 sm:relative absolute w-1/2 sm:w-full sm:right-auto right-0 sm:bottom-auto -bottom-1/2 ">
            <World />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LimitedOffer;
