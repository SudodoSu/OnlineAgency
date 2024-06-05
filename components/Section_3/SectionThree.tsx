import Link from "next/link";
import Image from "next/image";

function SectionThree() {
  return (
    <section className="w-screen mt-16">
      <div className="flex gap-8 container items-center">
        <div className="w-1/2">
          <Image
            src="/images/circles.png"
            alt="Circles BoostWeb"
            width={678}
            height={678}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-5xl">
            We're here to guide and help you at all times
          </h1>
          <p>
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
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
