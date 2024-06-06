import Image from "next/image";
import Link from "next/link";
import "./style.css";
import VerticalLines from "./VerticalLines";
import Object from "./Object";
import Bubless from "./Bubless";
import SceletonOne from "./Sceleton/SceletonOne";
import SceletonVerticalImage from "./Sceleton/SceletonVerticalImage";
import SceletonCircle from "./Sceleton/SceletonCircle";
import SceletonReverse from "./Sceleton/SceletonReverse";
import SceletonChart from "./Sceleton/SceletonChart";
import SceletonLeftImage from "./Sceleton/SceletonLeftImage";
import SceletonFilter from "./Sceleton/SceletonFour";
import Sceleton2 from "./Sceleton/2";
import Sceleton3 from "./Sceleton/3";
import Sceleton4 from "./Sceleton/4";

function SectionOne() {
  return (
    <section className="h-screen w-screen flex flex-col items-center">
      <VerticalLines />
      <Bubless />
      <div className="container flex flex-col gap-8 mt-[200px]">
        <h1 className="text-[64px] flex justify-center text-center">
          Fuel Your Digital Evolution
        </h1>
        <div className="flex justify-center">
          <p className=" text-gray max-w-[577px] text-center">
            Unlock the full potential of your business with our bespoke web
            strategies, tailored to propel your growth and elevate your brand.
          </p>
        </div>
        <div className="flex justify-center">
          <button>
            <Link href="/contact" className="btn">
              Start Your Project
            </Link>
          </button>
        </div>
      </div>

      {/* sceleton */}
      <div className="container px-32 pt-24">
        <div className="flex gap-4 w-full h-[550px] m-auto bg-[#131415] rounded-[28px] p-8 relative left-0">
          <div className="w-1/3 bg-[#222228] rounded-[20px] p-4 flex items-center flex-col">
            <div className="w-16 h-16">
              <Image
                src="/images/logo_black.png"
                alt="Logo BootWeb"
                height={500}
                width={500}
              />
            </div>
            <hr className="bg-gray4 text-gray4 my-8 h-[1px] w-full" />
            <div className="flex flex-col gap-4 mb-12 items-start">
              <SceletonOne />
            </div>
            <SceletonVerticalImage />
          </div>
          <div className="w-1/3 flex gap-4 flex-col">
            <div className="h-1/2 bg-[#222228] rounded-[20px] p-4">
              <SceletonCircle />
            </div>
            <div className="h-1/2 bg-[#222228] rounded-[20px] p-4">
              <SceletonReverse />
              <hr className="bg-gray4 text-gray4 my-8 h-[1px] w-full" />
              <SceletonChart />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-3/4 bg-[#222228] rounded-[20px] p-4">
              <div className="mb-[20%]">
                <SceletonReverse />
              </div>
              <SceletonLeftImage />
              <div className="relative">
                <div className="absolute ">
                  <SceletonFilter />
                </div>
                <Sceleton2 />
                <Sceleton3 />
                <Sceleton4 />
              </div>
            </div>
            <div className="h-1/4 bg-[#222228] rounded-[20px] p-4"></div>
          </div>
        </div>
      </div>
      <div className=" -bottom-80 left-0 -z-10 w-screen absolute">
        <Object />
      </div>
    </section>
  );
}

export default SectionOne;
