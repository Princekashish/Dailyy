import { div } from "framer-motion/client";
import { icons } from "lucide-react";
import React from "react";
import { FaBoxOpen, FaHeadphones } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { RiGiftFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
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
      text: "Application",
      path: "/application",
    },
    {
      icon: <RiGiftFill size={25} />,
      text: "Gift",
      path: "/gift",
    },
  ];

  return (
    <div className="pt-2 ">
      <div className="flex flex-col gap-1  sticky top-0">
        <div className="p-3">
          <input
            type="text"
            placeholder="Search for Sweets, Diyas, Grocery & More"
            className="py-3 px-2 outline-none rounded-xl w-full"
          />
        </div>
        <div className="flex gap-8 justify-start items-center font-Lexend overflow-hidden overflow-x-scroll text-white no-scrollbar pl-5  pr-2 py-1 ">
          {navitems.map((item, i) => {
            return (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "border-b-[4px] rounded-sm  " : "border-none"
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
    </div>
  );
}
