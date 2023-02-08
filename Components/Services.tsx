"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
const LOGO =
  "https://gpsplus.tech/assets/upload/images/image_1636046810_2169.png";
const SERVICES = [
  {
    id: 0,
    title: "GPS/GSM Tracking Systems",
    image:
      "https://letstalkscience.ca/sites/default/files/styles/width_800px/public/2021-12/gps_on_phone.jpg?itok=oCW2o0MN",
    description:
      "Our GPS/GSM tracking system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control.",
  },
  {
    id: 1,
    title: "Fleet Management",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946195_9432.jpg",
    description:
      "Our fleet management system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control.",
  },
  {
    id: 3,
    title: "Fuel Monitor –> On Road + On Site Tankers",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946268_5001.jpeg",
    description:
      "Our fuel monitor system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control.",
  },
  {
    id: 4,
    title: "Cargo Monitoring",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946297_2078.jpg",
    description:
      "Our cargo monitoring system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control.",
  },
  {
    id: 5,
    title: "Pet Monitor And Tracking",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946353_6376.jpg",
    description:
      "Our pet monitor and tracking system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control.",
  },
  {
    id: 6,
    title: "Utility Machinery Monitoring And Tracking",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1636398892_2004.jpeg",
    description:
      "Our utility machinery monitoring and tracking system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control.",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="w-full h-auto  min-h-screen mb-8 flex flex-col  items-center justify-center"
    >
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
        Our Best Services
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
