import { Minus, Plus, Search, Share, X } from "lucide-react";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollTop from "../../utils/ScreenTop";
import Cart from "../Cart";
export default function Vegetables_fruits() {
  const productlist = [
    {
      category: "Exotics",
      link: "/vegetables-fruits",
      image: "/pngegg (23).png",
    },

    {
      category: "Coriander & Other",
      link: "/vegetables-fruits/bakery-biscuits",
      image: "/pngegg (24).png",
    },
    {
      category: "Flowers & Leaves",
      link: "/vegetables-fruits/dry-fruits-cereals",
      image: "/pngegg (18).png",
    },
    {
      category: "Seasonal",
      link: "/vegetables-fruits/chicken-meat-fish",
      image: "/pngegg (25).png",
    },
    {
      category: "Freshly cut & sprouts",
      link: "/vegetables-fruits/kitchenware-appliances",
      image: "/pngegg (16).png",
    },
    {
      category: "Frozen veg",
      link: "/vegetables-fruits/kitchenware-appliances",
      image: "/pngegg (16).png",
    },
    {
      category: "Certifies Organic",
      link: "/vegetables-fruits/kitchenware-appliances",
      image: "/pngegg (16).png",
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center relative ">
      <ScrollTop />
      <div className="  flex justify-between items-center p-3 z-10 fixed top-0 w-full bg-white">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
          <Link
            to={"/grocery"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        <div>
          <h1 className="text-xl">Vegetables & Fruits...</h1>
        </div>

        <div className="flex justify-center items-center rounded-full bg-black/10 h-[35px] w-[35px]  ">
          <Search size={20} />
        </div>
      </div>

      {/* listing */}

      <Outlet />
      {/* cartitems */}
      <div>
        <Cart bottom={"bottom-24"} />
      </div>

      <div className="bg-green-800 h-[11vh]  bottom-0 fixed w-full overflow-x-scroll overflow-hidden rounded-t-3xl scroll-smooth no-scrollbar">
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex h-[80px] p-3  whitespace-nowrap w-[200%] gap-4  overflow-hidden "
        >
          {productlist.map((items) => {
            return (
              <NavLink
                key={items.id}
                to={items.link}
                end={items.link === "/vegetables-fruits"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white w-[65px] h-[65px]  rounded-full flex justify-center items-center transition-all duration-300 scale-110"
                    : "w-[65px] h-[65px]  bg-white/90 rounded-full flex justify-center items-center transition-all duration-300 scale-90"
                }
              >
                {({ isActive }) => (
                  <div>
                    <motion.img
                      src={items.image}
                      alt={items.name}
                      className="object-contain h-[70px] transition-all duration-300 "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        transform: isActive
                          ? "translateY(0px) "
                          : "translateY(0) scale(1)", // Apply zoom and move up when active
                      }}
                    />
                  </div>
                )}
              </NavLink>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
