"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { MdContactSupport } from "react-icons/md";
import { useRouter } from "next/navigation";
export default function Navbar({}) {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white ">
      {(open) => (
        <div>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-24">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <HiMenu className="block h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-start ml-10 items-center">
                <div className="flex flex-shrink-0 items-left">
                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="flex items-center justify-center"
                  >
                    <img
                      className="block bg-red h-[40px] w-[110px] lg:hidden"
                      src="../images/Logo.png"
                      alt="GPS Plus"
                    />
                  </button>
                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="flex items-center justify-center"
                  >
                    <img
                      className="hidden  h-[60px] w-[220px] lg:block"
                      src="../images/Logo.png"
                      alt="GPS Plus"
                    />
                  </button>
                </div>
                <div className="hidden sm:block ">
                  <div className="flex flex-row space-x-2 align-center justify-center">
                    <button
                      className={
                        "text-black text-decoration-none  px-3 py-2 rounded-md text-md"
                      }
                      onClick={() => {
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      About
                    </button>
                    <button
                      className={
                        "text-black text-decoration-none  px-3 py-2 rounded-md text-md"
                      }
                      onClick={() => {
                        document
                          .getElementById("services")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Services
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="bg-[#24a6e4] text-white font-black gap-1 py-2 px-4 rounded-full transition duration-500 ease-in-out transform shadow-lg flex flex-row items-center hover:bg-[#24a6e4] ">
                    <MdContactSupport className="text-white text-2xl" />
                    <a
                      onClick={() => {
                        router.push("/Contact");
                      }}
                    >
                      Contact Us
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col items-center mt-2">
              <button
                className={
                  "text-black text-decoration-none  px-3 py-2 rounded-md text-md"
                }
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </button>
              <button
                className={
                  "text-black text-decoration-none  px-3 py-2 rounded-md text-md"
                }
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Services
              </button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
