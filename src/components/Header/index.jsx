import { motion } from "framer-motion";
import { NotepadText, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaBoxOpen, FaHeadphones, FaTools } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { RiGiftFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [categoryList, setCategoryList] = useState(false);
  const [serviceList, setServiceList] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    ` Search for "milk" delivery in Minutes`
  );
  const categorieRef = useRef();

  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux state
  const hasItemsInCart = cart.length > 0;

  const handleCategory = () => {
    setCategoryList(!categoryList);
  };

  const closeCategory = (e) => {
    if (categorieRef.current === e.target) {
      setCategoryList(false);
    }
    if (categorieRef.current === e.target) {
      setServiceList(false);
    }
  };
  const handleServicelist = () => {
    setServiceList(!serviceList);
  };
  const navitems = [
    {
      icon: <FaBoxOpen size={25} />,
      text: "All",
      path: "/",
    },
    {
      icon: <FaHeadphones size={25} />,
      text: "Electronics",
      path: "/electronic",
    },
    {
      icon: (
        <img
          src="/output-onlinepngtools (1).png"
          alt="Grocery Icon"
          className="h-[25px] "
        />
      ),
      text: "Grocery",
      path: "/grocery",
    },
    {
      icon: <SiBuymeacoffee size={25} />,
      text: "Coffee",
      path: "/coffee",
    },
    {
      icon: (
        <img
          src="/output-onlinepngtools (2).png"
          alt="Beauty Icon"
          className="h-[25px] "
        />
      ),
      text: "Beauty",
      path: "/beauty",
    },
    {
      icon: <GiWashingMachine size={25} />,
      text: "Appliances",
      path: "/appliances",
    },
    {
      icon: <RiGiftFill size={25} />,
      text: "Gift",
      path: "/gift",
    },
  ];

  const categorymenu = [
    { text: "Grocery", img: "/pngeggvegble.png", link: "/grocery" },
    { text: "Personal care", img: "/pngegg (27).png", link: "/personal-care" },
    { text: "Clothes", img: "/pngegg (26).png", link: "/cloths" },
    { text: "Beauty", img: "/pngegg (2).png", link: "/beauty" },
    { text: "Skin care", img: "/skincare.png", link: "/" },
    {
      text: "Party ",
      img: "https://i.pinimg.com/736x/15/8e/15/158e1589baea6660d22ecdfa0d90d11e.jpg",
      link: "/party-essential",
    },
    { text: "Essential", link: "/" },
    {
      text: "Computer",
      img: "https://i.pinimg.com/736x/c0/8f/6d/c08f6d5e88f6ad47499f8161bc56fcdb.jpg",
      link: "/computer",
    },
    { text: "Medical", link: "/" },
    { text: "Electrical", link: "/" },
    { text: "Appliances", link: "/" },
    { text: "service", link: "/" },
    { text: "Stationery", link: "/" },
    { text: "Electrician", link: "/" },
    { text: "Plumber", link: "/" },
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
    { text: "cleaner", link: "/" },
    { text: "Machanic", link: "/" },
    { text: "Laundry", link: "/" },
  ];

  return (
    <div className="pt-2">
      <div className="flex flex-col gap-1 sticky top-0 ">
        <div className="p-3 relative">
          {" "}
          {/* Added relative positioning */}
          <input
            type="text"
            placeholder={placeholder}
            className="py-3 px-2 outline-none rounded-xl w-full transition-all duration-500 placeholder-opacity-0 placeholder:font-light tracking-tight pl-10" // Added padding-left for icon
          />
          {/* Positioned Search icon */}
          <Search
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex gap-8 justify-start items-center font-Lexend overflow-hidden overflow-x-scroll text-white no-scrollbar pl-5 pr-2 py-1">
          {navitems.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] rounded-sm" : "border-none"
                }
              >
                <div className="flex justify-center items-center flex-col gap-1">
                  {item.icon}
                  <p className="text-sm">{item.text}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <button
        onClick={handleCategory}
        className="bg-black/20 backdrop-blur-md  rounded-full fixed bottom-7 gap-1 right-5 z-[20] px-3 py-3 flex justify-center items-center flex-col"
      >
        <NotepadText className="" size={25} />
      </button>

      <button
        onClick={handleServicelist}
        className="bg-black/20 backdrop-blur-md   rounded-full fixed bottom-7 gap-1 left-5 z-[20] px-3 py-3 flex justify-center items-center flex-col"
      >
        <FaTools size={25} />
      </button>
      {categoryList && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 h-screen">
          <div
            ref={categorieRef}
            onClick={closeCategory}
            className="flex justify-center items-center h-screen"
          >
            <motion.div
              initial={{
                x: 100, // Start from right
                y: 100, // Start from bottom
                opacity: 0, // Start with 0 opacity
                scale: 0.5, // Optional: Start smaller for the smooth zoom-in effect
              }}
              animate={{
                x: 0, // Move to the center horizontally
                y: 0, // Move to the center vertically
                opacity: 1, // Fade in as it moves
                scale: 1, // Scale to full size
              }}
              exit={{
                x: "100%", // Exit to the right
                y: "100%", // Exit to the bottom
                opacity: 0, // Fade out
                scale: 0.6, // Optionally scale down when exiting
              }}
              transition={{
                duration: 0.4, // Longer duration for smooth effect
                ease: "easeOut", // Smooth easing for a nice transition
              }}
              className="bg-white p-5 w-[80%] h-[60vh] overflow-hidden overflow-y-scroll rounded-3xl no-scrollbar grid grid-cols-3  gap-3"
            >
              {categorymenu.map((item, i) => {
                return (
                  <NavLink
                    onClick={() => setCategoryList(false)}
                    to={item.link}
                    key={i}
                    className={`flex justify-center items-center flex-col`}
                  >
                    <div className="bg-[#f9f9f9]  h-[70px] w-[70px] rounded-full overflow-hidden flex justify-center items-center">
                      <img
                        src={item.img}
                        alt=""
                        className="object-contain h-[50px]"
                      />
                    </div>
                    <h1 className=" text-xs text-center capitalize">
                      {item.text}
                    </h1>
                  </NavLink>
                );
              })}
            </motion.div>
          </div>
        </div>
      )}
      {serviceList && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 h-screen">
          <div
            ref={categorieRef}
            onClick={closeCategory}
            className="flex justify-center items-center h-screen"
          >
            <motion.div
              initial={{
                x: "-30%", // Start from right
                y: "40%", // Start from bottom
                opacity: 0, // Start with 0 opacity
                scale: 0.5, // Optional: Start smaller for the smooth zoom-in effect
              }}
              animate={{
                x: 0, // Move to the center horizontally
                y: 0, // Move to the center vertically
                opacity: 1, // Fade in as it moves
                scale: 1, // Scale to full size
              }}
              exit={{
                x: "-100%", // Exit to the right
                y: "-100%", // Exit to the bottom
                opacity: 0, // Fade out
                scale: 0.6, // Optionally scale down when exiting
              }}
              transition={{
                duration: 0.4, // Longer duration for smooth effect
                ease: "easeOut", // Smooth easing for a nice transition
              }}
              className="bg-white p-5 w-[80%] h-[60vh] overflow-hidden overflow-y-scroll rounded-3xl no-scrollbar grid grid-cols-3  gap-3"
            >
              {sericemenu.map((item, i) => {
                return (
                  <NavLink
                    onClick={() => setCategoryList(false)}
                    to={item.link}
                    key={i}
                    className={`flex justify-center items-center flex-col`}
                  >
                    <div className="bg-[#f9f9f9]  h-[70px] w-[70px] rounded-full overflow-hidden flex justify-center items-center">
                      <img
                        src={item.img}
                        alt=""
                        className="object-contain h-[60px]"
                      />
                    </div>
                    <h1 className=" text-xs text-center capitalize">
                      {item.text}
                    </h1>
                  </NavLink>
                );
              })}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
