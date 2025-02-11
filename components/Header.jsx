import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="w-32 h-32 rounded-full object-cover"
        ></Image>
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-end gap-2 text-2xl font-medium md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Muhammad Kaab
        <Image src={assets.hand_icon} alt="" className="w-6 mb-1"></Image>
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.8 }}
        className="text-3xl font-semibold sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer
      </motion.h1>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        Passionate about developing dynamic and scalable web applications using
        <strong> Next.js</strong> and <strong>React</strong>, with a strong
        foundation in
        <strong> SQL</strong> and <strong>MongoDB</strong> for robust data
        management. Dedicated to delivering efficient solutions through data
        structures and providing tailored, high-performance{" "}
        <strong>WordPress</strong> implementations. Proficient in a diverse
        range of programming languages, including
        <strong> C++, Java, JavaScript, and Python</strong>, and leveraging
        these skills to create innovative, optimized software solutions that
        meet a variety of technical challenges.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4"></Image>
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
