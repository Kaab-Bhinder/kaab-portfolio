import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { CardSpotlight } from "./ui/card-spotlight";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="work"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Explore my work and see how I transform ideas into impactful digital
        solutions. From web development to seamless user experiences, my
        portfolio showcases projects that highlight creativity, precision, and
        innovation. Let’s build something amazing together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10 dark:text-black"
      >
        {workData.map((project, ind) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              }}
              transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#18192a] border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-end min-h-[340px] h-full transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-300"
              key={ind}
            >
              <div className="group perspective w-full h-full">
                <motion.div
                  className="relative w-full h-full preserve-3d transition-transform group-hover:rotate-y-180"
                  style={{ minHeight: 340 }}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#18192a] border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-end backface-hidden">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      width={400}
                      height={240}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="relative z-20 p-5 w-full flex flex-col items-center justify-center text-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2 drop-shadow-lg hover:underline">
                          {project.title}
                        </h2>
                      </a>
                      <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 drop-shadow">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border rounded-full border-gray-500 dark:bg-white dark:text-black transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-800 mt-2"
                      >
                        View Project
                        <Image
                          src={assets.send_icon}
                          alt="send icon"
                          width={20}
                          height={20}
                        />
                      </a>
                    </div>
                  </div>
                  {/* Back Face */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#18192a] border border-blue-400 dark:border-blue-300 flex flex-col items-center justify-center backface-hidden p-6"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <h2 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-2 text-center">
                      {project.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">
                      {project.details}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-20"
                    >
                      <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-full border-gray-500 dark:bg-white dark:text-black transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-800">
                        View Project
                        <Image
                          src={assets.send_icon}
                          alt="send icon"
                          width={20}
                          height={20}
                        />
                      </button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href="https://github.com/Kaab-Bhinder"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
