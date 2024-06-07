import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="w-full bg-gray2 py-12">
        <div className="container flex justify-between flex-col sm:flex-row  gap-8 sm:gap-0">
          <div>
            <div className="w-14 mb-5">
              <Image
                src="/images/logo.png"
                alt="Logo BoostWeb"
                width={500}
                height={500}
              />
            </div>
            <p className="text-sm max-w-[300px]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
          </div>
          <div>
            <h3 className="mb-6 font-semibold text-2xl">Quick Links</h3>
            <div className="flex justify-between">
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="/#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#references" className="hover:underline">
                    References
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    Faq
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen py-6">
        <div className="container flex justify-between text-sm">
          <p>All Rights Reservd BoostWeb.io 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
