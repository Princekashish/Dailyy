import { ChevronDown, ChevronUp, House, Truck } from "lucide-react";
import React from "react";
import {
  FaBoxOpen,
  FaHeadphones,
  FaShippingFast,
  FaUser,
} from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { RiGiftFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Hero() {
  const userAddres = [
    {
      city: "Delhi",
      address: "ConnetPlace near Park",
      pincode: "110001",
    },
  ];
  return (
    <div className=" pt-3 ">
      <div className="flex flex-col gap-3  ">
        <div className="text-white  pl-3 pr-3 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold leading-none ">Dailyy</h1>
          </div>
          <div className=" bg-gray-300 p-2 rounded-full flex justify-center items-center">
            <Link to={"/login"}>
              <FaUser size={20} color="black" />
            </Link>
          </div>
        </div>
        <div className="pl-3 pr-3 flex justify-between items-center text-white ">
          <div className=" flex flex-col  justify-start items-start gap-1">
            <div className="flex justify-center items-center  gap-2">
              <House color="white" size={20} />
              <div className="flex justify-center items-center gap-1">
                <h1 className="text-sm">Home</h1>
                <h1>
                  <ChevronDown />
                </h1>
              </div>
            </div>
            <div className="text-sm font-light">
              <p>{userAddres[0].address}....</p>
            </div>
          </div>
          <div>
            <h1 className="flex flex-col justify-end items-end gap-1">
              Delivery in <br />{" "}
              <span className="flex gap-2 text-yellow-500">
                {" "}
                <FaShippingFast size={25} />
                Mins
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
