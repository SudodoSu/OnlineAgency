import Link from "next/link";
import Circle from "./Circle";
import RadialPoint from "./RadialPoint";
import Image from "next/image";

function SectionThree() {
  return (
    <section className="w-screen mt-16">
      <div className="flex gap-8 container items-center">
        <div className="w-1/2 relative">
          <div className="w-14 h-14 absolute left-[45%] bottom-[46%]">
            <Image
              src="/images/logo_black.png"
              alt="Boost Web Logo"
              width={500}
              height={500}
            />
          </div>
          <Circle />
          <div className="absolute top-1/2 right-[9.5%]">
            <RadialPoint />
          </div>
          <div className="absolute top-[25%] left-1/2">
            <RadialPoint />
          </div>
          <div className="absolute top-[57.5%] xl:top-[60%] left-[35%]">
            <RadialPoint />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-5xl">Guiding You to Success at Every Turn</h1>
          <p>
            Successful web design focuses on meeting the needs and preferences
            of users. User research, usability testing, and feedback mechanisms
            are essential for creating intuitive and engaging experiences.
          </p>
          <button className="flex">
            <Link href="/contact" className="btn">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
