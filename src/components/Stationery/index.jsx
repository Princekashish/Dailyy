import React, { useEffect, useState } from "react";
import ScrollTop from "../../utils/ScreenTop";
import { Search } from "lucide-react";
import { IoArrowBack } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import Cart from "../Cart";
import { div } from "framer-motion/client";
import ComingSoon from "../ComingSoon";

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
      img: "https://images.unsplash.com/photo-1631206630000-2885ed0b00f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Example image for markers
      link: "/stationery/markers", // Link to the markers section
    },
    {
      items: "Pencils",
      img: "/43641.jpg",  // Example image for pencils
      link: "/stationery/pencils", // Link to the pencils section
    },
    {
      items: "Erasers",
      img: "https://images.unsplash.com/photo-1667532447990-51c6704ef358?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Example image for erasers
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

      
      {/* <div className=" pt-2 w-full z-10 h-[40vh] flex flex-col justify-between  relative bg-gradient-to-b from-[#A8EFC5] to-[#C8F5DA]">
       
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
      </div> */}
      {/* Computer product list */}
      {/* <div
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
                <div className="bg-white overflow-hidden  flex justify-center items-center rounded-full">
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
      </div> */}
      {/* Outlet for nested routes */}
      {/* <div className="pb-[8vh] ">
        <Outlet />
      </div> */}

     <ComingSoon/>

      <div>
        <Cart bottom={"bottom-2"} />
      </div>
    </div>
  );
}
