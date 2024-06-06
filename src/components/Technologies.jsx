import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -7 },
  animate: {
    y: [7, -7],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl font-light my-20"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-xl"
        >
          <RiJavascriptFill className="text-yellow-500 text-6xl" />
        </motion.div>
        <motion.div
          variants={iconVar(4.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-xl"
        >
          <RiReactjsFill className="text-cyan-400 text-6xl" />
        </motion.div>
        <motion.div
          variants={iconVar(5.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-xl"
        >
          <TbBrandNextjs className=" text-6xl" />
        </motion.div>
        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-xl"
        >
          <FaHtml5 className="text-orange-600 text-6xl" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-xl"
        >
          <FaCss3 className="text-blue-600 text-6xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}
