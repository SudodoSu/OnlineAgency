"use client";
import { motion } from "framer-motion";

function Bubless() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 0.4,
          ease: "easeInOut",
        }}
        className="rounded-full bg-gradient-gray-radial  w-16 md:w-24 h-16 md:h-24 absolute top-1/3 right-20 md:right-48 -z-10 blur-md"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
        className="rounded-full bg-gradient-gray-radial  w-52 md:w-[538px] h-52 md:h-[538px] absolute top-[100px] md:top-[50px] blur-3xl -z-10 opacity-40"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 2.5,
          ease: "easeInOut",
        }}
        className="rounded-full bg-gradient-gray-radial  w-20 md:w-[130px] h-20 md:h-[130px] absolute top-[45%] -z-10 left-[10%] md:left-60 blur-md"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 3,

          ease: "easeInOut",
        }}
        className=" rounded-full bg-gradient-gray-radial  w-10 md:w-16 h-10 md:h-16 absolute top-[70px] left-[45%] -z-10 blur-md"
      ></motion.div>
    </>
  );
}

export default Bubless;
