import { motion } from "framer-motion";
import { Search } from "lucide-react";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { div } from "framer-motion/client";

export default function ServiceSearch() {
  const services = [
    "indoor cleaning",
    "plumbing drain repair",
    "Electrical help",
    "interior painting",
    "packing and unpacking",
    "home repairs",
    "laundry service",
  ];
  const sericemenu = [
    {
      text: "Pluber",
      img: "https://www.kindpng.com/picc/m/298-2986970_prestige-plumbing-plumber-cartoon-hd-png-download.png",
      link: "/plumber",
    },
    {
      text: "carpanter ",
      img: "https://www.pngkey.com/png/detail/113-1137967_building-services-carpenter-images-for-kids.png",
      link: "/party-essential",
    },
    { text: "welider", link: "/" },
    {
      text: "contractor",
      img: "https://i.pinimg.com/736x/c0/8f/6d/c08f6d5e88f6ad47499f8161bc56fcdb.jpg",
      link: "/computer",
    },
    { text: "Electrician", link: "/" },
    { text: "Painter", link: "/" },
    { text: "cleaner", link: "/" },
    { text: "Machanic", link: "/" },
    { text: "Laundry", link: "/" },
  ];
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-gray-100 h-screen "
    >
      <div className="p-3 relative flex justify-between ">
        <Link
          to={"/"}
          className="flex justify-center items-center gap-2 text-sm  "
        >
          <IoArrowBack size={25} />
        </Link>

        <div className=" w-[90%] flex relative gap-3">
          <input
            type="text"
            placeholder='Search for "Indoor cleaning"'
            className="py-3 px-1o border-2 border-black/10 font-light  outline-none rounded-3xl w-full transition-all duration-500 placeholder-opacity-0 placeholder:font-light tracking-tight pl-14" // Added padding-left for icon
          />
          {/* Positioned Search icon */}
          <Search
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={25}
          />
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3 justify-center">
        <h1 className="font-semibold text-base">Popular Searches</h1>
        <div className="flex flex-wrap gap-4">
          {services.map((popular, i) => {
            return (
              <h1
                key={i}
                className="border font-light text-sm capitalize border-black/20 px-3 py-3 rounded-full flex justify-center items-center"
              >
                {popular} <GoArrowUpRight size={20} />
              </h1>
            );
          })}
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3 justify-center">
        <h1 className="font-semibold text-base">Top service on dailyy</h1>
        <div className="flex whitespace-nowrap overflow-hidden overflow-x-scroll no-scrollbar gap-4">
          {sericemenu.map((popular, i) => {
            return (
              <div key={i} className="flex flex-col gap-1 justify-center items-center">
                <img src={popular.img} alt="" className="border border-black/10 rounded-full h-[70px] min-w-[70px] object-contain"/>

                <h1 className=" font-light text-sm capitalize flex justify-center items-center">
                  {popular.text} 
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
