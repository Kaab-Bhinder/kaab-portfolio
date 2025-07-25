import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="services"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        We deliver tailored web solutions with a strong focus on innovation,
        performance, and customer satisfaction. Our expertise spans modern
        frontend development, scalable backend systems, and seamless user
        experiences, ensuring high-quality, result-driven outcomes. Let me know
        if you'd like any refinements!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10 sm:"
      >
        {serviceData.map(({ icon, title, description }, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
              key={index}
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="dark:text-white text-lg my-4 text-gray-700">
                {title}
              </h3>
              <p className="dark:text-white/80 text-sm text-gray-600 leading-5">
                {description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
