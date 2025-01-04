import { CircleUserRound, Search } from "lucide-react";
import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ServicePage() {
  const navigate = useNavigate();
  const popularservice = [
    {
      name: "Painting the house",
      image:
        "https://i.pinimg.com/736x/9b/41/3b/9b413b5c24e9e030b1746763ab2cd0f6.jpg",
    },
    {
      name: "Cleaning the house",
      image:
        "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Painting the house",
      image:
        "https://i.pinimg.com/736x/9b/41/3b/9b413b5c24e9e030b1746763ab2cd0f6.jpg",
    },
    {
      name: "Cleaning the house",
      image:
        "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Painting the house",
      image:
        "https://i.pinimg.com/736x/9b/41/3b/9b413b5c24e9e030b1746763ab2cd0f6.jpg",
    },
    {
      name: "Cleaning the house",
      image:
        "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
   
  ];
  return (
    <div className="">
      {/* hear of service page */}
      <div className="flex  flex-col justify-around items-center bg-[#5B1FA6] h-[20vh] p-3 gap-">
        <div className="flex justify-between items-center w-full ">
          <div className="flex justify-start items-center text-white gap-2">
            <CircleUserRound />
            <p>Good Afternoon, Panday ji</p>
          </div>
          <MdOutlineNotificationsActive size={25} color="white" />
        </div>
        <div className=" w-full flex relative gap-3">
          <input
            type="text"
            onClick={() => navigate("/service/search")}
            placeholder='Search for "Indoor cleaning"'
            className="py-2 px-2 border-2 border-black/10 font-light  outline-none rounded-3xl w-full transition-all duration-500 placeholder-opacity-0 placeholder:font-light tracking-tight pl-14" // Added padding-left for icon
          />
          {/* Positioned Search icon */}
          <Search
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={25}
          />
        </div>
      </div>

      {/* populore service */}
      <div className=" flex flex-col gap-2">
        <h1 className="font-medium text-lg tracking-tighter p-3">
          Popular Services on Dailyy
        </h1>
        <div className="flex whitespace-nowrap overflow-hidden overflow-x-scroll no-scrollbar gap-5 pl-3">
          {popularservice.map((popular, i) => (
            <div key={i} className="flex flex-col justify-center gap-1 items-center ">
              <img src={popular.image} alt="" className="min-w-[208px] h-[131px] object-cover rounded-2xl"/>
              <h1 className="font-light text-sm text-start w-full">{popular.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
