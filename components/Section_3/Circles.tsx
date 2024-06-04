"use client";
import { motion } from "framer-motion";

const CircularHrList: React.FC = () => {
  return (
    <div className="relative h-[200px] w-[200px]">
      <ul className="flex justify-center items-center absolute h-full w-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={` bg-transparent border-[1px] border-gray w-[${
              i * 10
            }px] h-[${i * 10}px] rounded-full absolute`}
            style={{
              transform: `rotate(${(i * 360) / 12}deg) translate(0, -50%)`, // Rotate each <hr> to form a circle
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default CircularHrList;
