import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import workerData from "../../worker.json";
import { MapPin, Star } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";

export default function PlumberCart() {
  const { id } = useParams();
  const worker = workerData.plumber_services.find((worker) => worker.id === id);

  if (!worker) {
    return (
      <div>
        <h1>No user found</h1>
      </div>
    );
  }
  const Numbertaps = [
    { value: "1", price: 100 },
    { value: "2", price: 150 },
    { value: "4", price: 250 },
    { value: "more+", price: 300 },
  ];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDateSlot, setSelectedDateSlot] = useState(null);
  const [selectedTap, setSelectedTap] = useState(null);

  const timeSlots = [
    "9:30 AM",
    "10:30 AM",
    "11:30 AM",
    "1:00 PM",
    "3:00 PM",
    "5:00 PM",
    "5-30 PM",
  ];

  const dateSlots = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    if (i === 0) return "Today";
    if (i === 1) return "Tomorrow";
    return `${date.getDate()} ${date.toLocaleDateString("en-US", {
      month: "short",
    })}`;
  });

  return (
    <div className="flex flex-col relative min-h-screen">
      <div className="flex justify-between items-center p-3 z-10  w-full absolute top-0  ">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-black/25 rounded-full">
          <Link
            to={"/plumber"}
            className="flex justify-center items-center gap-2 text-sm "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        {/* <h1 className=" w-full text-center text-xl text-white/90">{worker.title}</h1> */}
      </div>
      <div className=" flex  flex-col justify-center gap-2 ">
        <img
          src={worker.image}
          alt={worker.name}
          className="  w-full h-[240px] object-cover"
        />
        <div className="flex justify-between items-start p-3">
          <div className="flex flex-col gap-2 w-full ">
            <div className="flex justify-between items-center">
              <h1 className={`font-medium text-lg`}>{worker.title}</h1>
              <h1 className="flex justify-center items-center gap-1 text-black/20 ">
                (20)jobs
                {worker.rating}
              </h1>
            </div>
            <p className="text-sm text-green-700">{worker.category}</p>
            <div className="flex w-full  flex-col text-black/30 justify-start items-start gap-1 text-sm">
              <p className="font-medium">Description</p>
              <h1>{worker.description}</h1>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-around items-center p-2 border-b-1 border-black/10">
      {Numbertaps.map((tap, i) => (
          <div
            key={i}
            onClick={() => setSelectedTap(tap.value)}  // Select by value (e.g., "1", "2", "4", "more+")
            className={`h-[80px] w-[80px] border duration-300 cursor-pointer rounded-xl flex justify-center items-center bg-cover bg-center bg-no-repeat relative ${
              selectedTap === tap.value
                ? "shadow-xl border-2 border-black "
                : "bg-black/10 text-black"
            }`}
            style={{ backgroundImage: `url(${worker.image})` }}
          >
            <div className="absolute top-0 bottom-0 w-full flex flex-col justify-center items-center bg-gradient-to-b from-black/10 to-black/90 border-2 border-white rounded-xl">
              <h1 className="text-white/80 text-sm">
                {tap.value}
                {i === Numbertaps.length - 1 ? "" : ` ${worker.title.split(" ")[0]}`}
              </h1>
              <p className="text-white/80 text-sm">₹{tap.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Select a Date Slot</h1>
        <div className="flex whitespace-nowrap overflow-hidden overflow-x-scroll no-scrollbar gap-4">
          {dateSlots.map((dateSlot, index) => (
            <button
              key={index}
              onClick={() => setSelectedDateSlot(dateSlot)}
              className={`p-2 rounded-lg px-5 py-2 duration-300 ${
                selectedDateSlot === dateSlot
                  ? "bg-green-700 text-white shadow-md "
                  : "bg-[#f4f4f4] text-black"
              }`}
            >
              {dateSlot}
            </button>
          ))}
        </div>
      </div>
      <div className="p-3  flex flex-col gap-4">
        <h1 className="text-lg font-medium">Select a Time Slot</h1>
        <div className="grid grid-cols-3 gap-4">
          {timeSlots.map((timeSlot, index) => (
            <button
              key={index}
              onClick={() => setSelectedTimeSlot(timeSlot)}
              className={`p-2 rounded-lg px-5 py-2 duration-300  ${
                selectedTimeSlot === timeSlot
                  ? "bg-green-700 text-white shadow-md "
                  : "bg-[#f4f4f4] text-black"
              }`}
            >
              {timeSlot}
            </button>
          ))}
        </div>
      </div>
      <button className="uppercase bg-green-700 w-full fixed bottom-0 py-4 text-white">
        Book now
      </button>
    </div>
  );
}
