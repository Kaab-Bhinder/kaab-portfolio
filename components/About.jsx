import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 10, delay: 0.5 }}
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20 overflow-x-hidden max-w-full"
      id="about"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Intoduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full lg:flex-row lg:items-start lg:justify-start gap-6 sm:gap-10 md:gap-20 my-10 md:my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 md:mb-20 w-48 sm:w-64 md:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 w-full max-w-2xl"
        >
          <p className="mb-10 font-Ovo text-base sm:text-lg leading-relaxed text-justify sm:text-left">
            I’m <strong>Muhammad Kaab Bhinder</strong>, doing{" "}
            <strong>Bachelor of Computer Science (BSCS)</strong>. Currently, I
            am focused on refining my expertise in <strong>React</strong> and{" "}
            <strong>Next.js</strong> by working on various projects aimed at
            creating scalable and practical solutions. My passion extends to
            experimenting with <strong>GSAP</strong> animations, where I
            specialize in bringing 3D effects to life and enhancing the
            interactivity of websites. In addition to my front-end development
            skills, I have a strong foundation in <strong>WordPress</strong>{" "}
            development, where I enjoy crafting user-friendly, dynamic websites.
            I am also expanding my knowledge in backend development with{" "}
            <strong>MongoDB</strong> and <strong>MySQL</strong>, further
            strengthening my understanding of database management systems. I am
            proficient in multiple programming languages, including{" "}
            <strong>JavaScript</strong>, <strong>C++</strong>, and{" "}
            <strong>Java</strong>, which allow me to solve complex problems and
            build efficient, optimized solutions. I believe in the power of
            continuous learning, staying curious, and constantly evolving as a
            developer to contribute meaningfully to the web development field.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <motion.li
                  whileInView={{ scale: 1.05 }}
                  key={index}
                  className="border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                >
                  <Image
                    className="w-7 mt-3"
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/50">
                    {description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <div className="w-full flex justify-center">
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto mt-6 mb-2 p-4 rounded-2xl border border-gray-300 dark:border-white/20"
            >
              {toolsData.map(({ tool, title }, ind) => {
                return (
                  <motion.li
                    whileHover={{
                      scale: 1.12,
                      boxShadow: "0 4px 24px 0 rgba(80,120,255,0.10)",
                    }}
                    className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-gray-300 dark:border-white/20 cursor-pointer bg-white/70 dark:bg-[#23243a]/30 shadow-md hover:shadow-xl transition-all duration-300"
                    key={ind}
                  >
                    <Image
                      src={tool}
                      alt="Tool"
                      title={title}
                      className="w-10 sm:w-12 mb-1"
                    />
                    <span className="text-xs text-center mt-1 text-gray-700 dark:text-white/80 font-semibold block">
                      {title}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
