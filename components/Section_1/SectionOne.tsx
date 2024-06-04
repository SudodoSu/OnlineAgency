import Image from "next/image";
import Link from "next/link";
import "./style.css";
import VerticalLines from "./VerticalLines";

function SectionOne() {
  return (
    <section className="h-screen w-screen flex flex-col items-center">
      <VerticalLines />
      <div className="rounded-full bg-gradient-gray-radial  w-24 h-24 absolute top-1/3 right-48 -z-10 blur-md"></div>
      <div className="rounded-full bg-gradient-gray-radial  w-[538px] h-[538px] absolute top-[50px] blur-3xl -z-10 opacity-40"></div>
      <div className="rounded-full bg-gradient-gray-radial  w-[130px] h-[130px] absolute top-[45%] -z-10 left-60 blur-md"></div>
      <div className="rounded-full bg-gradient-gray-radial  w-16 h-16 absolute top-[70px] left-[45%] -z-10 blur-md"></div>
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

        <button className="flex justify-center">
          <Link href="/contact" className="btn">
            Start Your Project
          </Link>
        </button>
      </div>

      {/* sceleton */}
      <div className="container px-32 pt-24">
        <div className="flex gap-4 w-full h-[550px] m-auto bg-[#131415] rounded-[28px] p-8 relative left-0">
          <div className="w-1/3 bg-[#222228] rounded-[20px] p-4">
            <Image
              src="/images/sceleton.png"
              alt="Sceleton BootWeb"
              height={20}
              width={146}
            />
            <Image
              src="/images/sceleton.png"
              alt="Sceleton BootWeb"
              height={20}
              width={146}
            />
            <Image
              src="/images/sceleton.png"
              alt="Sceleton BootWeb"
              height={20}
              width={146}
            />
            <Image
              src="/images/sceleton.png"
              alt="Sceleton BootWeb"
              height={20}
              width={146}
            />
            <Image
              src="/images/sceleton.png"
              alt="Sceleton BootWeb"
              height={20}
              width={146}
            />
            <Image
              src="/images/sceleton_with_image.png"
              alt="Sceleton with imate BootWeb"
              height={20}
              width={146}
            />
          </div>
          <div className="w-1/3 flex gap-4 flex-col ">
            <div className="h-1/2 bg-[#222228] rounded-[20px] p-4">
              <Image
                src="/images/sceleton.png"
                alt="Sceleton BootWeb"
                height={20}
                width={146}
              />
              <Image
                src="/images/sceleton_circle.png"
                alt="Sceleton circle BootWeb"
                height={20}
                width={146}
              />
            </div>
            <div className="h-1/2 bg-[#222228] rounded-[20px] p-4">
              <Image
                src="/images/sceleton.png"
                alt="Sceleton BootWeb"
                height={20}
                width={146}
              />
              <Image
                src="/images/sceleton_circle.png"
                alt="Sceleton circle BootWeb"
                height={20}
                width={146}
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-3/4 bg-[#222228] rounded-[20px] p-4">
              <Image
                src="/images/sceleton.png"
                alt="Sceleton BootWeb"
                height={20}
                width={146}
              />
              <Image
                src="/images/sceleton_circle.png"
                alt="Sceleton circle BootWeb"
                height={20}
                width={146}
              />
            </div>
            <div className="h-1/4 bg-[#222228] rounded-[20px] p-4"></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-80 left-0 -z-10">
        <Image
          src="/images/object.png"
          alt="Object"
          className="w-screen h-[450px]"
          width={1440}
          height={475}
        ></Image>
      </div>
    </section>
  );
}

export default SectionOne;
