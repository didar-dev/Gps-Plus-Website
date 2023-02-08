"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";

const BESTSERVICES = [
  {
    id: 0,
    title: "Security",
    image:
      "https://gpsplus.tech/assets/upload/images/image_1635944787_9247.svg",
    description: "Your data is safe and secure with us.",
  },
  {
    id: 1,
    title: "Specialist",
    image:
      "https://gpsplus.tech/assets/upload/images/image_1635944787_8436.svg",
    description: "We deliver best services to your needs.",
  },
  {
    id: 2,
    title: "Support",
    image:
      "https://gpsplus.tech/assets/upload/images/image_1636839116_9063.png",
    description: "we are always here to help you, 24/7.",
  },
];

export default function Header() {
  return (
    <div className="flex flex-col min-h-screen justify-start items-center mx-auto">
      <div className="sm:w-3/4 grid h-2/2 grid-cols-1 md:grid-cols-2  md:mx-auto">
        <div className="w-full flex flex-col justify-center ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileDrag={{ scale: 1.1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl mb-5 font-black text-[#0470b8] p-4 sm:p-0"
          >
            GpsPlus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl p-4 sm:p-0 text-gray-400"
          >
            GpsPlus is a branch of PolyJob company with in the fields of fleet
            management and tracking systems services across Iraq both for
            civilians and governmental usage.
          </motion.p>
        </div>
        <div className="w-full flex flex-col items-center justify-center  ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.img
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120 }}
              className=" h-3/4 w-full object-contain"
              src="../Images/Header.png"
              alt="GpsPlus"
            />
          </motion.div>
        </div>
      </div>
      <div
        className="mb-4 p-4 sm:p-0 w-3/4 md:w-1/2
       bg-[#f7f7f7] flex flex-row flex-wrap justify-center items-start rounded-2xl shadow-lg"
      >
        {BESTSERVICES.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="sm:w-1/3 w-full flex flex-col justify-center items-center p-4"
          >
            <motion.div className="p-2">
              <motion.img
                initial={{ rotate: 360 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.2 }}
                className="sm:w-20 sm:h-20 w-14 h-14 object-contain m-2"
                src={service.image}
                alt={service.title}
              />
            </motion.div>

            <div className="flex flex-col justify-center items-center max-w-[250px]">
              <h1 className="sm:text-2xl text-xl font-bold text-[#0470b8] text-center">
                {service.title}
              </h1>
              <p
                className="sm:text-lg text-sm text-gray-400 text-center
              "
              >
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
