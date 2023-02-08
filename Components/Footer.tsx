"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
const LOGO = "http://localhost:3000/static/media/Logo.bd2f03299d8a32200475.png";
const SERVICES = [
  {
    id: 0,
    title: "GPS/GSM Tracking Systems",
    image:
      "https://letstalkscience.ca/sites/default/files/styles/width_800px/public/2021-12/gps_on_phone.jpg?itok=oCW2o0MN",
    description:
      "Our GPS/GSM tracking system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control. Try it out today and see the benefits for yourself!",
  },
  {
    id: 1,
    title: "Fleet Management",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946195_9432.jpg",
    description:
      "Our fleet management system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control. Try it out today and see the benefits for yourself!",
  },
  {
    id: 3,
    title: "Fuel Monitor –> On Road + On Site Tankers",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946268_5001.jpeg",
    description:
      "Our fuel monitor system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control. Try it out today and see the benefits for yourself!",
  },
  {
    id: 4,
    title: "Cargo Monitoring",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946297_2078.jpg",
    description:
      "Our cargo monitoring system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control. Try it out today and see the benefits for yourself!",
  },
  {
    id: 5,
    title: "Pet Monitor And Tracking",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1635946353_6376.jpg",
    description:
      "Our pet monitor and tracking system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control. Try it out today and see the benefits for yourself!",
  },
  {
    id: 6,
    title: "Utility Machinery Monitoring And Tracking",
    image:
      "https://gpsplus.tech/assets/upload/images/services/image_1636398892_2004.jpeg",
    description:
      "Our utility machinery monitoring and tracking system is the ultimate solution for businesses looking to optimize their fleet management and asset tracking. With real-time location updates and customizable alerts, our platform makes it easy to stay informed and in control. Try it out today and see the benefits for yourself!",
  },
];

export default function Footer() {
  return (
    <div className="bg-[#010230] ">
      <div className="sm:w-3/4 h-2/2 p-6 flex flex-col justify-center items-center bg-[#010230] mx-auto">
        <div className="border-b-2 border-white w-full mb-8 opacity-20"></div>
        <div className="grid grid-cols-1 sm:p-0 p-5 gap-6 md:grid-cols-4 w-full h-2/1">
          <div className="flex flex-col justify-start ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-4xl  text-white font-black mb-4 sm:p-0"
            >
              Gps Plus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-md text-white"
            >
              GpsPlus is a branch of PolyJob company with in the fields of fleet
              management and tracking systems services across Iraq both for
              civilians and governmental usage.
            </motion.p>
          </div>
          <div className="flex flex-col justify-start ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-2xl  text-white font-black mb-4 sm:p-0"
            >
              Company
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-md text-white hover:text-[#f7f7f7] hover:cursor-pointer"
            >
              <motion.li className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  ">
                Home
              </motion.li>
              <motion.li className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  ">
                About Us
              </motion.li>
              <motion.li className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  ">
                Contact Us
              </motion.li>
            </motion.ul>
          </div>
          <div className="flex flex-col justify-start ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-2xl  text-white font-black mb-4 sm:p-0"
            >
              Services
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-md text-white hover:text-[#f7f7f7]"
            >
              {SERVICES.map((service) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  "
                >
                  {service.title}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="flex flex-col justify-start ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-2xl  text-white font-black mb-4 sm:p-0"
            >
              Contact Info
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-md text-white hover:text-[#f7f7f7]"
            >
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  "
              >
                Mail : info@gpsplus.com
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  "
              >
                Call : +964 780 995 9595
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-md text-white hover:text-[#f7f7f7] m-2 hover:cursor-pointer  "
              >
                Address : Zargata District, Sulaymaniyah Kurdistan, 46001, Iraq
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className="border-t-2 border-white w-full my-4 opacity-20"></div>
        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm  text-white sm:p-0"
          >
            CopyRight &copy; 2021, All Rights Reserved By GpsPlus
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm  text-white sm:p-0"
          >
            Developed by
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              onClick={() => window.open("https://didar.dev")}
              whileHover={{ scale: 1.1 }}
              className="text-[#fa9e14] cursor-pointer"
            >
              Didar.dev
            </motion.span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
