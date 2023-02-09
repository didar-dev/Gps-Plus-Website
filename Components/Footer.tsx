"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SERVICES from "../app/Services/Services.json";
export default function Footer() {
  const router = useRouter();
  return (
    <div className="bg-[#010230]">
      <div className="sm:w-3/4 h-2/2 p-6 flex flex-col justify-center items-center bg-[#010230] mx-auto">
        <div className="border-b-2 border-white w-full mb-8 opacity-20"></div>
        <div className="grid grid-cols-1 sm:p-0 p-5 gap-6 md:grid-cols-4 w-full h-2/1">
          <div className="flex flex-col justify-start ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl  text-white font-black mb-4 sm:p-0"
            >
              Gps Plus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
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
              transition={{ delay: 0.3 }}
              className="text-2xl  text-white font-black mb-4 sm:p-0"
            >
              Company
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-md text-white hover:text-[#f7f7f7] hover:cursor-pointer"
            >
              <motion.li
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="text-md text-white hover:text-[#f7f7f7] my-2 hover:cursor-pointer  "
              >
                Home
              </motion.li>
              <motion.li
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView();
                }}
                className="text-md text-white hover:text-[#f7f7f7] my-2 hover:cursor-pointer  "
              >
                About Us
              </motion.li>
              <motion.li
                onClick={() => {
                  router.push("/Contact");
                }}
                className="text-md text-white hover:text-[#f7f7f7] my-2 hover:cursor-pointer  "
              >
                Contact Us
              </motion.li>
            </motion.ul>
          </div>
          <div className="flex flex-col justify-start ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl  text-white font-black mb-4 sm:p-0"
            >
              Services
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-md text-white hover:text-[#f7f7f7]"
            >
              {SERVICES.map((service) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-md text-white hover:text-[#f7f7f7] my-2 hover:cursor-pointer  "
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView();
                  }}
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
              transition={{ delay: 0.3 }}
              className="text-2xl  text-white font-black mb-4 sm:p-0"
            >
              Contact Info
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-md text-white hover:text-[#f7f7f7]"
            >
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-md text-white my-2"
              >
                Mail : info@gpsplus.com
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-md text-white my-2"
              >
                Call : +964 780 995 9595
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-md text-white my-2"
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
            transition={{ delay: 0.3 }}
            className="text-sm  text-white sm:p-0"
          >
            CopyRight &copy; 2021{" "}
            <span className="text-[#fa9e14]">Gps Plus</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm  text-white sm:p-0"
          >
            Developed by
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
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
