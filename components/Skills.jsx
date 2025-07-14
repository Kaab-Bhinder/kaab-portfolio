import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets";
import programmingIcon from "../assets/algorithm.png";
import reactIcon from "../assets/react.png";
import databaseIcon from "../assets/database.png";
import wordpressIcon from "../assets/wordpress.png";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiGreensock,
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiElementor,
  SiWoocommerce,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiData } from "react-icons/bi";
import { CgDatabase } from "react-icons/cg";
import { TbDatabase } from "react-icons/tb";
import { MdStorage } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import { PiDatabaseBold } from "react-icons/pi";
import { LuDatabase } from "react-icons/lu";
import { VscDatabase } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <img src="/algorithm.png" alt="Programming" className="w-10 h-10" />,
    skills: [
      {
        name: "JavaScript",
        percent: 90,
        icon: <BiData className="text-yellow-400" />,
      },
      {
        name: "Java",
        percent: 80,
        icon: <CgDatabase className="text-[#007396]" />,
      },
      {
        name: "Python",
        percent: 85,
        icon: <TbDatabase className="text-blue-400" />,
      },
      {
        name: "C++",
        percent: 70,
        icon: <MdStorage className="text-blue-600" />,
      },
    ],
  },
  {
    title: "Web Development Frameworks",
    icon: <img src="/react.png" alt="Web" className="w-10 h-10" />,
    skills: [
      {
        name: "React.js",
        percent: 90,
        icon: <PiDatabaseBold className="text-cyan-400" />,
      },
      {
        name: "Next.js",
        percent: 85,
        icon: <LuDatabase className="text-gray-200" />,
      },
      {
        name: "GSAP",
        percent: 70,
        icon: <VscDatabase className="text-green-500" />,
      },
    ],
  },
  {
    title: "Databases",
    icon: <img src="/database.png" alt="Database" className="w-10 h-10" />,
    skills: [
      {
        name: "MongoDB",
        percent: 80,
        icon: <BiData className="text-green-500" />,
      },
      {
        name: "SQL",
        percent: 75,
        icon: <CgDatabase className="text-blue-400" />,
      },
    ],
  },
  {
    title: "WordPress",
    icon: <img src="/wordpress.png" alt="WordPress" className="w-10 h-10" />,
    skills: [
      {
        name: "WordPress",
        percent: 85,
        icon: <MdStorage className="text-blue-400" />,
      },
      {
        name: "Elementor",
        percent: 80,
        icon: <AiOutlineDatabase className="text-pink-500" />,
      },
      {
        name: "WooCommerce",
        percent: 75,
        icon: <LuDatabase className="text-purple-400" />,
      },
    ],
  },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="w-full px-[12%] py-10 scroll-mt-20" id="skills">
      <h2 className="text-center text-5xl font-Ovo mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className="relative border-2 rounded-2xl shadow-lg overflow-hidden cursor-pointer group flex flex-col items-center justify-center min-h-[180px] transition-all duration-300"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{
              y: 8,
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)",
            }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center p-6 transition-all duration-300">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: hovered === idx ? 1.1 : 1 }}
                className="mb-3"
              >
                {cat.icon && cat.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center drop-shadow">
                {cat.title}
              </h3>
              <AnimatePresence>
                {hovered === idx && (
                  <motion.div
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full mt-2"
                  >
                    {cat.skills.map((skill) => (
                      <div key={`${idx}-${skill.name}`} className="mb-4">
                        <div className="flex justify-between mb-1 items-center">
                          <span className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm font-semibold">
                            {skill.icon}
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-xs font-semibold">
                            {skill.percent}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percent}%` }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="h-full bg-blue-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
