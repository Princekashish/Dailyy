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
  const Numbertaps = ["1 Tap", "2 Tap", "4 Tap", "more+"];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDateSlot, setSelectedDateSlot] = useState(null);

  const timeSlots = [
    "8-9",
    "9-10",
    "10-11",
    "11-12",
    "12-1",
    "1-2",
    "2-3",
    "3-4",
    "4-5",
    "5-6",
    "6-7",
    "7-8",
  ];

  const dateSlots = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return `${date.getDate()} ${date.toLocaleDateString("en-US", {
      weekday: "short",
    })}`;
  });

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center p-3 z-10  w-full ">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-black/20 rounded-full">
          <Link
            to={"/plumber"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        {/* <h1 className=" w-full text-center text-xl text-white/90">{worker.title}</h1> */}
      </div>
      <div className=" flex  flex-col justify-center gap-2 p-3">
        <img
          src={worker.image}
          alt={worker.name}
          className="rounded-2xl h-[300px] w-full object-cover"
        />
        <div className="flex justify-between items-start ">
          <div className="flex flex-col gap-2 w-full ">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium">{worker.title}</h1>
              <h1 className="flex justify-center items-center gap-1 text-black/20 ">
                (20)jobs
                {worker.rating}
              </h1>
            </div>
            <p className="text-sm text-blue-500">{worker.category}</p>
            <div className="flex w-full  flex-col text-black/30 justify-start items-start gap-1 text-sm">
              <p className="font-medium">Description</p>
              <h1>{worker.description}</h1>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-around items-center p-2 border-b-1 border-black/10">
        {Numbertaps.map((taps, i) => (
          <div
            key={i}
            className="h-[80px] w-[80px] border border-green-700 rounded-xl flex justify-center items-center bg-[url('https://i.pinimg.com/736x/11/06/6d/11066d1a505bfe5deb2f6d386c2b14b5.jpg')] bg-cover bg-center bg-no-repeat relative"
          >
            <div className="absolute top-0 bottom-0 w-full flex justify-center items-center   bg-gradient-to-b from-black/10 to-black/90 border-2 border-white rounded-xl ">
              <h1 className="text-white/80 "> {taps}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Select a Date Slot</h1>
        <div className="flex whitespace-nowrap overflow-hidden overflow-x-scroll gap-4">
          {dateSlots.map((dateSlot, index) => (
            <button
              key={index}
              onClick={() => setSelectedDateSlot(dateSlot)}
              className={`p-2 rounded-xl px-3 py-2 ${
                selectedDateSlot === dateSlot
                  ? "bg-green-700 text-white "
                  : "bg-black/10 text-black"
              }`}
            >
              {dateSlot}
            </button>
          ))}
        </div>
      </div>
      <div className="p-3  flex flex-col gap-4">
        <h1 className="text-lg font-medium">Select a Time Slot</h1>
        <div className="flex whitespace-nowrap overflow-hidden overflow-x-scroll gap-4">
          {timeSlots.map((timeSlot, index) => (
            <button
              key={index}
              onClick={() => setSelectedTimeSlot(timeSlot)}
              className={`p-2 rounded-xl px-3 py-2 ${
                selectedTimeSlot === timeSlot
                  ? "bg-green-700 text-white "
                  : "bg-gray-200 text-black"
              }`}
            >
              {timeSlot}
            </button>
          ))}
        </div>
      </div>

      <button className="uppercase bg-green-700 w-full sticky bottom-0 py-4 text-white">
        Book now
      </button>
    </div>
  );
}
