"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col bg-[#F5F5F5] min-h-screen justify-center items-center mx-auto"
    >
      <div className="sm:w-3/4 grid h-2/2 grid-cols-1 md:grid-cols-2  md:mx-auto">
        <div className="w-full flex flex-col justify-center ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileDrag={{ scale: 1.1 }}
            transition={{ delay: 0.5 }}
            className="text-xl my-2  text-[#0470b8] px-4 sm:p-0"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="sm:text-5xl text-3xl font-black
             text-[#050505] px-4 sm:p-0"
          >
            5 years+ Experience
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 m-2 sm:p-0"
          >
            GPS+ is a technological company branch of Polyjob in the field of
            GPS/ GPRS /GSM & monitoring and security services.
            <br />
            <br /> We bring more than 5 years of experience in the field.
            <br /> Our business developer team aims to widen the range of
            <br />
            <br /> technological service in the country by having agencies from
            multiple European & Asian technological companies.nies.
          </motion.p>
        </div>
        <div className="w-full sm:w-full flex flex-col items-center mt-4 sm:mt-0 justify-center relative h-96">
          <motion.img
            animate={{ x: [0, 20, -20, 20, -20, 20, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 22, repeat: Infinity }}
            className="sm:h-[370px] sm:w-[370px] h-[240px] w-[240px] rounded-xl shadow-2xl  top-0 right-0"
            src="https://gpsplus.tech/assets/upload/images/image_1635945079_4108.jpg"
            alt="Image 1"
          />
        </div>
      </div>
    </div>
  );
}
