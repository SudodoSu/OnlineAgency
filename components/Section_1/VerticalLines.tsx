"use client";
import { motion } from "framer-motion";
import "./style.css";

const VerticalLines: React.FC = () => {
  return (
    <div className="relative h-screen w-screen -z-20">
      <ul className="flex justify-evenly absolute gap-10 top-0 left-0 h-screen w-screen opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
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
