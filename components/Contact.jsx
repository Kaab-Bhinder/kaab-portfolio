"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "297b9753-f5af-4754-a24d-3fa6ffcd0a0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[4%] py-16 scroll-mt-20"
      id="contact"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 space-y-8 px-6 py-10 bg-white dark:bg-[#18192a] rounded-2xl shadow-lg flex flex-col items-center md:items-start"
        >
          <h1 className="text-2xl font-semibold text-indigo-800 dark:text-blue-300 mb-4 flex items-center gap-2">
            Contact Details
          </h1>
          <div className="flex flex-col gap-6 w-full mt-6">
            <div className="flex flex-col items-start gap-1">
              <span className="text-base text-gray-500 dark:text-gray-400 font-semibold">
                Phone
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                +92 318 0943134
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-base text-gray-500 dark:text-gray-400 font-semibold">
                Email
              </span>
              <a
                href="mailto:kaabbhinder28@gmail.com"
                className="text-lg text-gray-700 dark:text-gray-300 underline"
              >
                kaabbhinder28@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-base text-gray-500 dark:text-gray-400 font-semibold">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/muhammad-kaab-bhinder-a5b663332/"
                target="_blank"
                className="text-lg text-gray-700 dark:text-gray-300 underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 px-2"
        >
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            onSubmit={onSubmit}
            className="w-full max-w-lg bg-white dark:bg-[#18192a] rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 dark:border-gray-700 relative"
          >
            <div className="flex flex-col gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#23243a] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-200"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#23243a] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-200"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#23243a] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-200"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="py-3 px-8 flex items-center gap-2 bg-[#11001F] text-white font-bold rounded-full mx-auto shadow-lg hover:bg-[#2a004a] duration-300 dark:text-white dark:bg-[#11001F] dark:hover:bg-[#2a004a]"
              type="submit"
            >
              Submit now
              <Image
                src={assets.right_arrow_white}
                alt="right arrow"
                width={16}
                height={16}
              />
            </motion.button>
            <p className="mt-2 text-center text-indigo-700 dark:text-blue-300 font-semibold min-h-[24px]">
              {result}
            </p>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
