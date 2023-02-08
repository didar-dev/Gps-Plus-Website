"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import SERVICES from "./Services.json";
export default function Services() {
  return (
    <div className="w-full h-auto  min-h-screen mb-8 flex flex-col  items-center justify-center">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-4xl font-black text-center my-6"
      >
        Our Services
      </motion.h1>
      <div className="sm:w-3/4 w-screen p-4 gap-6 flex flex-row flex-wrap justify-center items-center">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView={`visible${index}`}
            viewport={{ once: true }}
            variants={{
              visible0: { opacity: 1, y: 0, transition: { delay: 0.3 } },
              visible1: { opacity: 1, y: 0, transition: { delay: 0.6 } },
              visible2: { opacity: 1, y: 0, transition: { delay: 0.9 } },
              visible3: { opacity: 1, y: 0, transition: { delay: 1.1 } },
              visible4: { opacity: 1, y: 0, transition: { delay: 1.4 } },
              visible5: { opacity: 1, y: 0, transition: { delay: 1.7 } },
              visible6: { opacity: 1, y: 0, transition: { delay: 2 } },
              hidden: { opacity: 0, y: 30 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="sm:w-[440px] w-full sm:h-[230px] h-[250px] bg-white rounded-lg shadow-lg flex flex-row  border border-gray-200"
          >
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-[170px]  object-cover rounded-lg"
              src={service.image}
              alt="GpsPlus"
            />
            <div className="w-full flex flex-col justify-start items-start p-2">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
                transition={{ type: "spring", stiffness: 120 }}
                className="sm:text-xl text-lg font-semibold"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
                transition={{ type: "spring", stiffness: 120 }}
                className="sm:text-[14px] text-[12px] font-normal text-gray-500"
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
