import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="w-screen bg-gray2 py-12">
        <div className="container flex justify-between">
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
          <div className="w-1/2">
            <h3>Sections</h3>
            <div className="flex justify-between">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen py-12">
        <div className="container flex justify-between">
          <p>All Rights Reservd BoostWeb.io 2024</p>
          <ul className="flex gap-4">
            <li>
              <a href="">tweeter</a>
            </li>
            <li>
              <a href="">tweeter</a>
            </li>
            <li>
              <a href="">tweeter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
