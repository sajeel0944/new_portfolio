"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// Import necessary shadcn/ui components
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

function Navber() {
  const [activeSection, setActiveSection] = useState("home");
  const [display, setdisplay] = useState<boolean>(true);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-purple-400"
          >
            Dev<span className="text-white">.Sajeel</span>
          </motion.div>

          <div
            className={`${display ? "hidden" : "block"} md:flex space-x-8 sm:w-[40%] w-[50%] [@media(max-width:768px)]:pl-5 [@media(max-width:768px)]:py-28 [@media(max-width:768px)]:h-[30rem] [@media(max-width:768px)]:bg-indigo-950 [@media(max-width:768px)]:rounded-r-3xl  [@media(max-width:768px)]:absolute [@media(max-width:768px)]:left-0 [@media(max-width:768px)]:top-[77px] [@media(max-width:768px)]:space-y-5 [@media(max-width:768px)]:flex-col md:items-center `}
          >
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <div key={item}>
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize ${
                    activeSection === item ? "text-purple-400" : "text-gray-300"
                  } hover:text-purple-400 hover:font-semibold transition-colors`}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setActiveSection(item)}
                >
                  {item}
                </motion.a>
              </div>
            ))}
          </div>

          <Link href={"/picture/sajeelcv.pdf"}>
            <div
              className={`${display ? "hidden" : "block"} md:flex items-center space-x-4 [@media(max-width:768px)]:absolute [@media(max-width:768px)]:top-[500px] [@media(max-width:768px)]:left-5`}
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Download className="mr-1 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </Link>

          <Image
            src={"/picture/three-row-icon.png"}
            alt=""
            width={30}
            height={30}
            className={`cursor-pointer md:hidden `}
            onClick={() => {
              setdisplay(!display);
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Navber;
