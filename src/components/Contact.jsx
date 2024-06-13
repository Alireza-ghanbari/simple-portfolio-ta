import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className=" border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 1.5 }}
        className="text-center font-light text-4xl my-10"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tight font-extralight">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
        >
          <a className="border-b">{CONTACT.email}</a>
        </motion.p>
      </div>
    </div>
  );
}
