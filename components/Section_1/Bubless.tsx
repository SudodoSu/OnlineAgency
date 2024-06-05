"use client";
import { motion } from "framer-motion";

function Bubless() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], scale: 1.1 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 13,
          repeatDelay: 2,
          ease: "easeOut",
        }}
        className="rounded-full bg-gradient-gray-radial  w-24 h-24 absolute top-1/3 right-48 -z-10 blur-md"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], scale: 1.1 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 13,
          repeatDelay: 2,
          ease: "easeOut",
        }}
        className="rounded-full bg-gradient-gray-radial  w-[538px] h-[538px] absolute top-[50px] blur-3xl -z-10 opacity-40"
      ></motion.div>
      <motion.div className="rounded-full bg-gradient-gray-radial  w-[130px] h-[130px] absolute top-[45%] -z-10 left-60 blur-md"></motion.div>
      <motion.div className="rounded-full bg-gradient-gray-radial  w-16 h-16 absolute top-[70px] left-[45%] -z-10 blur-md"></motion.div>
    </>
  );
}

export default Bubless;
