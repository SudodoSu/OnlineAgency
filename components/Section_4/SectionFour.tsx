import Image from "next/image";
import ContactForm from "./Form";
import Globe from "./Globe";

function SectionFour() {
  return (
    <section className="w-screen relative pt-20" id="contact">
      <div className="container flex gap-8">
        <div className="w-1/2 relative">
          <Globe />
          <div className="rounded-full bg-gradient-gray-radial  w-24 h-24 absolute -bottom-10 -right-5git  -z-10 blur-md"></div>
          <div className="rounded-full bg-gradient-gray-radial  w-16 h-16 absolute -top-5 -left-10 -z-10 blur-md"></div>
        </div>
        <div className="w-1/2">
          <h2 className="text-5xl mb-5">Get In Toush</h2>
          <p>
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
