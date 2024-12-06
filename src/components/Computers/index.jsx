import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import ScrollTop from "../../utils/ScreenTop";
import { Search, Share } from "lucide-react";
import Cart from "../Cart";

export default function Computer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const computer = [
    {
      items: "Keyboards",
      img: "https://arcticfox.com/cdn/shop/products/gamingkeyboardphoto2.jpg?v=1668688814",
      link: "/computer", // This should match the default route
    },
    {
      items: "Speakers",
      img: "speaker.webp  ",
      link: "/computer/speakers", // Correct relative path
    },
    {
      items: "Printers",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020678/Croma%20Assets/Computers%20Peripherals/Printers%20and%20Scanners/Images/197501_0_wioza6.png?tr=w-640",
      link: "/computer/printers", // Correct relative path
    },
    {
      items: "Keyboards",
      img: "/3b09c7cc-f6df-4390-aed6-5a8af18abd56.png",
      link: "/computers", // This should match the default route
    },
    {
      items: "Speakers",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730273019/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/246234_0_tw1qt9.png?tr=w-640",
      link: "/computer/speakerss", // Correct relative path
    },
    {
      items: "Printers",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020678/Croma%20Assets/Computers%20Peripherals/Printers%20and%20Scanners/Images/197501_0_wioza6.png?tr=w-640",
      link: "/computer/printerss", // Correct relative path
    },
  ];

  //https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
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
      <div className=" pt-2 w-full z-10 h-[25vh] flex flex-col justify-between  relative">
        <div className="relative ">
          <div className="flex fixed top-4  left-2 justify-start items-center p-2 gap-2 z-20 bg-white rounded-full">
            <Link
              to={"/"}
              className="flex justify-center items-center gap-2 text-sm  "
            >
              <IoArrowBack size={20} />
            </Link>
          </div>
          <div className=" flex justify-center items-center gap-4 fixed right-3   z-10 ">
            <div className="flex justify-center items-center rounded-full bg-white h-[35px] w-[35px]  ">
              <Search size={20} />
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full">
          <img
            src="/Screenshot 2024-12-04 013025.png"
            className="h-[25vh] w-full object-cover "
          />
        </div>
      </div>
      {/* Computer product list */}
      <div
        className={` flex flex-col justify-center items-center gap-5   z-20   ${
          isScrolled
            ? "bg-gradient-to-b from-[#F3F3E0] to-white"
            : "bg-gradient-to-b bg-white "
        } rounded-b-2xl sticky top-0 w-full bottom-0  shadow-sm `}
      >
        <div className="flex p-2  overflow-hidden w-full overflow-x-scroll   justify-start items-center gap-3 no-scrollbar ">
          {computer.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  py-2 border-b-black  min-w-[80px] transition-all duration-500 ease-out "
                  : "min-w-[80px] transition-all duration-300 ease-in-out py-2"
              }
              end={item.link === "/computer"} // Ensures that only the root path is active for "/computer"
            >
              <div
                className={`border-2 border-blue-300  flex flex-col relative gap-2 rounded-xl overflow-hidden h-[90px] `}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
               <div className="absolute top-0 w-full h-[90px] bg-gradient-to-b from-black/10 to-black/90 " />
                {/* <div className="border-2 border-black flex justify-center items-center rounded-full">
                  <img
                    src={item.img}
                    alt={item.items}
                    className="rounded-3xl p-2 object-contain "
                  />
                </div> */}
                <h1 className="text-sm text-center text-white  z-20 pt-2 font-medium  ">{item.items}</h1>
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
