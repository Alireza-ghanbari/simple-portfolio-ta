import React from "react";
import { EXPERIENCES } from "../constants";

export default function Experiences() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-4xl text-center my-20 font-light">Experiences</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="text-neutral-400 text-sm mb-2">{experience.year}</p>
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <h6 className="mb-2">
                {experience.role} - <span>{experience.company}</span>
              </h6>
              <p className="mb-4 font-extralight tracking-tight text-neutral-400 text-justify">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-800 font-medium tracking-wide text-[14pxz] hover:bg-neutral-800 hover:text-purple-700 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
