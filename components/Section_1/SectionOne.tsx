import Link from "next/link";
import React from "react";

function SectionOne() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container flex flex-col gap-4">
        <h1 className="text-[64px] flex justify-center leading-[80px] text-center">
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
    </section>
  );
}

export default SectionOne;
