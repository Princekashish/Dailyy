import React from "react";
import {
  FaBoxOpen,
  FaHeadphones,
  FaUser,
} from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { RiGiftFill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className=" pt-5 ">
      <div className="flex flex-col gap-6  ">
        <div className="text-white  pl-3 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold leading-none ">Dailyy</h1>
            <p className="text-sm  pl-1">Delivery in minutes</p>
          </div>
          <div className="pr-3">
           <Link to={"/login"}>
           <FaUser size={30} />
           </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
}
