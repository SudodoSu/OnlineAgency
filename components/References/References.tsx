import { FaLongArrowAltRight } from "react-icons/fa";
import SliderComponent from "./SliderComponent";

function References() {
  return (
    <section className="w-full mb-20 pt-20" id="references">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-5xl mb-5">References</h1>
          <p className="max-w-[40%]">
            Explore our portfolio of past projects showcased in the slider
            below.
          </p>
        </div>
        <div>
          <SliderComponent />
        </div>
      </div>
    </section>
  );
}

export default References;
