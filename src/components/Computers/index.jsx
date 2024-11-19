import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import ScrollTop from "../../utils/ScreenTop";
import { Search, Share } from "lucide-react";
import Cart from "../Cart";

export default function Computer() {
  const computer = [
    {
      items: "Keyboards",
      img: "/3b09c7cc-f6df-4390-aed6-5a8af18abd56.png",
      link: "/computer", // This should match the default route
    },
    {
      items: "Speakers",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730273019/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/246234_0_tw1qt9.png?tr=w-640",
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

  return (
    <div className="font-Lexend relative ">
      <ScrollTop />
      <div className="sticky top-0 pt-2 w-full bg-white  z-10">
        <div className="relative">
          <div className="flex absolute  left-2 justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
            <Link
              to={"/"}
              className="flex justify-center items-center gap-2 text-sm  "
            >
              <IoArrowBack size={20} />
            </Link>
          </div>
          <div className=" flex justify-center items-center gap-4 absolute right-3    ">
            <div className="flex justify-center items-center rounded-full bg-black/10 h-[35px] w-[35px]  ">
              <Search size={20} />
            </div>
            <div className="flex justify-center items-center rounded-full bg-black/10 h-[35px] w-[35px] ">
              <Share size={20} />
            </div>
          </div>
        </div>

        {/* Computer product list */}
        <div className=" flex flex-col justify-center items-center gap-5 bg-white  p-2   mt-10">
          <h1 className="text-center text-lg border-b border-b-black">
            Shop by Categories
          </h1>
          <div className="flex p-2  overflow-hidden w-full overflow-x-scroll   justify-start items-center gap-3 no-scrollbar">
            {computer.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "  border-b-2  p-1 duration-1000 transition-all ease-out border-b-black   min-w-[80px]" : "   min-w-[80px]"
                }
                end={item.link === "/computer"} // Ensures that only the root path is active for "/computer"
              >
                <div className="flex flex-col gap-2">
                  <div className="bg-[#f4f5f7]   flex justify-center items-center rounded-full">
                    <img
                      src={item.img}
                      alt={item.items}
                      className="rounded-3xl p-2 h-[80px] object-contain"
                    />
                  </div>
                  <h1 className="text-xs text-center">{item.items}</h1>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {/* Outlet for nested routes */}
      <div className="mb-[8vh]">
        <Outlet />
      </div>
      <div>
        <Cart bottom={"bottom-2"}/>
      </div>
    </div>
  );
}
