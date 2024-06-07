"use client";
import { motion } from "framer-motion";
import "./style.css";
import { useEffect, useState } from "react";

const VerticalLines: React.FC = () => {
  const [n, setN] = useState<number>(12);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    let n = 12;

    if (windowWidth > 1024) {
      n = 14;
    } else if (windowWidth > 768) {
      n = 12;
    } else if (windowWidth > 576) {
      n = 10;
    } else if (windowWidth > 375) {
      n = 8;
    } else if (windowWidth > 320) {
      n = 6;
    } else {
      n = 4;
    }

    setN(n);
  }, []);

  return (
    <div className="relative h-screen w-screen -z-20">
      <ul className="flex justify-evenly absolute gap-10 top-0 left-0 h-screen w-screen opacity-30">
        {Array.from({ length: n }).map((_, i) => (
          <motion.hr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="h-full w-[1px] bg-gradient-gray-linear"
            key={i}
          />
        ))}
      </ul>
    </div>
  );
};

export default VerticalLines;
