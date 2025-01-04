import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import workerData from "../../worker.json";
import { MapPin, Star } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";

export default function WorkerCart() {
  const { id } = useParams();
  const worker = workerData.find((worker) => worker.id === parseInt(id));

  if (!worker) {
    return (
      <div>
        <h1>No user found</h1>
      </div>
    );
  }

  const Workersections = [
    { title: "About", link: "/about" },
    { title: "Service", link: "/service" },
    { title: "Review", link: "/review" },
  ];

  return (
    <div className="flex flex-col p-3 gap-5 ">
      <div className="flex justify-between items-center  z-10  w-full bg-white">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
          <Link
            to={"/plumber"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        <h1 className=" w-full text-center text-xl">Booking</h1>
      </div>
      <div className=" flex  flex-col justify-center gap-2">
        <img
          src={worker.image}
          alt={worker.name}
          className="rounded-2xl h-[300px] w-full object-cover"
        />
        <div className="flex justify-between items-start ">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">{worker.name}</h1>
            <p className="text-sm text-blue-500">Appliance Technician</p>
            <h1 className="flex justify-start items-center gap-1 ">
              <MapPin size={20} />
              {worker.location} - {worker.availability}
            </h1>
          </div>
          <div>
            <h1 className="flex justify-center items-center gap-1 text-yellow-600 ">
              <TiStarFullOutline size={20} />
              {worker.rating}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 border-b-1 border-black/10">
       {
        Workersections.map((section,i)=>{
            return(
                <NavLink key={i}>
                    <h1>{section.title}</h1>
                </NavLink>
            )
        })
       }
      </div>
    </div>
  );
}
