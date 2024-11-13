import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="  ">
      <div className=" relative  flex justify-center items-center">
        <img
          src="https://img.freepik.com/premium-vector/online-order-courier-bike-delivers-fresh-vegetables-fruits-from-virtual-grocery-market_229680-856.jpg?w=1060"
          alt=""
          className="h-[360px] "
        />
        <div className="flex absolute top-2 left-2 justify-start items-center p-2 gap-2 ">
          <IoArrowBack />
          <Link to={"/"}>
            <h1>Back</h1>
          </Link>
        </div>
      </div>
      <div className="flex  flex-col justify-center items-center  gap-10">
        <div className="">
          <h1 className="text-2xl">delivery in minutes</h1>
        </div>
        <div className=" w-full p-5 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              className=" w-full px-3 py-3 outline-none border border-black rounded-lg"
              placeholder="+91 XXXXXXXXXXXX"
            />
          </div>
          <button className="w-full px-3 py-3 outline-none border bg-black text-white border-black rounded-lg">
            continue
          </button>
        </div>
      </div>
    </div>
  );
}
