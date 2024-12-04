import React, { useEffect, useState } from "react";
import ScrollTop from "../../utils/ScreenTop";
import { Search } from "lucide-react";
import { IoArrowBack } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import Cart from "../Cart";
import { div } from "framer-motion/client";

export default function Stationery() {
  const [isScrolled, setIsScrolled] = useState(false);

  const Bookimg = [
    { img: "43641.jpg" },
    { img: "18143977.jpg" },
    { img: "39832183.jpg" },
    { img: "41881472.jpg" },
    { img: "39832183.jpg" },
  ];
  const stationery = [
    {
      items: "Books",
      img: "/43641.jpg",  // Example image for books
      link: "/stationery/books", // Link to the books section
    },
    {
      items: "Notebooks",
      img: "/18143977.jpg",  // Example image for notebooks
      link: "/stationery/notebooks", // Link to the notebooks section
    },
    {
      items: "Pens",
      img: "/rb_19882.png",  // Example image for pens
      link: "/stationery/pens",  // Link to the pens section
    },
    {
      items: "Markers",
      img: "/images/markers.png",  // Example image for markers
      link: "/stationery/markers", // Link to the markers section
    },
    {
      items: "Pencils",
      img: "/43641.jpg",  // Example image for pencils
      link: "/stationery/pencils", // Link to the pencils section
    },
    {
      items: "Erasers",
      img: "/images/erasers.png",  // Example image for erasers
      link: "/stationery/erasers", // Link to the erasers section
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 200; // Adjust scroll position threshold
      setIsScrolled(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="font-Lexend relative ">
      <ScrollTop />
      <div className=" pt-2 w-full z-10 h-[40vh] flex flex-col justify-between  relative bg-gradient-to-b from-[#A8EFC5] to-[#C8F5DA]">
        <div className="relative ">
          <div className="flex fixed top-4  left-2 justify-start items-center p-2 gap-2 z-20 bg-white rounded-full">
            <Link
              to={"/"}
              className="flex justify-center items-center gap-2 text-sm  "
            >
              <IoArrowBack size={20} />
            </Link>
          </div>
          <div className=" flex justify-center items-center gap-4 absolute right-3   z-10 ">
            <div className="flex justify-center items-center rounded-full bg-white h-[35px] w-[35px]  ">
              <Search size={20} />
            </div>
          </div>
        </div>
        <div className="absolute top-5 flex flex-col justify-center items-center w-full h-full gap-5">
          <div className="flex justify-center items-center gap-5">
            <img src={Bookimg[0].img} alt="Book Image" className="h-[120px]" />
            <img src={Bookimg[1].img} alt="Book Image" className="h-[120px]" />
          </div>
          <div className="flex justify-center items-center gap-5">
            <img src={Bookimg[2].img} alt="Book Image" className="h-[120px]" />
            <img src={Bookimg[3].img} alt="Book Image" className="h-[120px]" />
            <img src={Bookimg[4].img} alt="Book Image" className="h-[120px]" />
          </div>
        </div>
      </div>
      {/* Computer product list */}
      <div
        className={` flex flex-col justify-center items-center gap-5   z-20   ${
          isScrolled
            ? "bg-gradient-to-b from-[#F3F3E0] to-white"
            : "bg-gradient-to-b from-[#C8F5DA] to-white/10"
        } rounded-b-2xl sticky top-0 w-full bottom-0 `}
      >
        <div className="flex p-2  overflow-hidden w-full overflow-x-scroll   justify-start items-center gap-3 no-scrollbar ">
          {stationery.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  py-2 border-b-black  min-w-[80px] transition-all duration-500 ease-out "
                  : "min-w-[80px] transition-all duration-300 ease-in-out py-2"
              }
              end={item.link === "/stationery"}
            >
              <div className="flex flex-col gap-2">
                <div className="bg-white   flex justify-center items-center rounded-full">
                  <img
                    src={item.img}
                    alt={item.items}
                    className=" p-2 h-[80px] object-contain"
                  />
                </div>
                <h1 className="text-sm text-center">{item.items}</h1>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Outlet for nested routes */}
      <div className="pb-[8vh] ">
        <Outlet />
      </div>
      <div>
        <Cart bottom={"bottom-2"} />
      </div>
    </div>
  );
}
