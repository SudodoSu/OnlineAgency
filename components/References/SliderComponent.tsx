"use client";
import { ReferencesSlider } from "@/lib/ReferencesSlider";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {ReferencesSlider.data.map((item, index) => (
          <div key={index} className="">
            <div key={index} className="flex items-end mx-2 rounded-md">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={1150}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
