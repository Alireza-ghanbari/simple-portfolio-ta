import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center my-20 font-light"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="rounded mb-6"
              />
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }} className="w-full lg:w-3/4 max-w-xl">
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 font-extralight tracking-tight text-neutral-400 text-justify">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-800 font-medium tracking-wide text-[14pxz] hover:bg-neutral-800 hover:text-purple-700 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
