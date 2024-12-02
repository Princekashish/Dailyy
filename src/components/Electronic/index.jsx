import React from "react";

export default function Electronic() {
  const trending = [
    {
      items: "Earbuds",
      img: "/pngegg (20).png",
    },
    {
      items: "Speakers",
      img: "/pngegg (29).png",
    },
    {
      items: "Smartwatches",
      img: "/pngegg (30).png",
    },
    {
      items: "Heating Rods",
      img: "https://via.placeholder.com/150?text=Thermostats",
    },
    {
      items: "Juicers, Mixers",
      img: "https://via.placeholder.com/150?text=Trackers",
    },
    {
      items: "Coffee Maker",
      img: "https://via.placeholder.com/150?text=Trackers",
    },
    {
      items: "Electric cookeres",
      img: "https://via.placeholder.com/150?text=Trackers",
    },
  ];

  return (
    <div className="font-Lexend p-2">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-xs">shop by</h1>
        <p className="text-lg font-medium capitalize">Trending Catogeries</p>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {trending.map((items, i) => (
            <div key={i} className="flex justify-center items-center flex-col gap-1">
              <img src={items.img} alt="" className="rounded-xl  object-contain bg-[#f2f2f2]"/>
              <p className="text-center text-sm">{items.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
