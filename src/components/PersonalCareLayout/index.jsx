import { Minus, Plus, Search, Share, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollTop from "../../utils/ScreenTop";
import Cart from "../Cart";
export default function PersonalCareLayout() {
  const [showBottomBar, setShowBottomBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setShowBottomBar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowBottomBar(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center relative ">
      <ScrollTop />
      <div className="flex justify-between items-center p-3 z-10 fixed top-0 w-full bg-white">
        <div className=" flex gap-3 justify-center items-center">
          <div className="z-10 bg-black/10 rounded-full flex justify-start items-center p-2 gap-2">
            <Link
              to={"/"}
              className="flex justify-center items-center gap-2 text-sm  "
            >
              <IoArrowBack size={20} />
            </Link>
          </div>
          <div>
            <h1 className="text-md">Personal Care</h1>
          </div>
        </div>


        <Link  to={"/search"}  className="flex justify-center items-center rounded-full bg-black/10 h-[35px] w-[35px]  ">
          <Search size={20} />
        </Link>
      </div>

      {/* listing */}

      <Outlet />
      {/* cartitems */}
      <div>
        <Cart bottom={"bottom-24"} />
      </div>
    </div>
  );
}
