"use client";
import { servicesData } from "@/lib/services";
import { useState } from "react";

function ServicesList() {
  const [Hovered, setHovered] = useState<[boolean, number]>([false, -1]);

  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {servicesData.data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered([true, index])}
          onMouseLeave={() => setHovered([false, -1])}
          className="px-8 py-16 rounded-[20px] flex flex-col justity-center items-center text-center bg-gray2"
        >
          <div
            className={`p-8 rounded-[30px] max-w-[104px] max-h-[104px] ${
              Hovered[0] && index == Hovered[1] ? "bg-gradient" : "bg-gray3"
            } mb-10 `}
          >
            {item.path}
          </div>
          <h2 className="mb-4 text-xl">{item.title}</h2>
          <p className="text-sm">{item.des}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
