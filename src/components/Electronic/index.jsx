import React from "react";

export default function Electronic() {
  const trending = [
    {
      items: "Earbuds",
      img: "https://via.placeholder.com/150?text=Earbud",
    },
    {
      items: "Speakers",
      img: "https://via.placeholder.com/150?text=Speakers",
    },
    {
      items: "Smartwatches",
      img: "https://via.placeholder.com/150?text=Smartwatches",
    },
    {
      items: "Thermostats",
      img: "https://via.placeholder.com/150?text=Thermostats",
    },
    {
      items: "Trackers",
      img: "https://via.placeholder.com/150?text=Trackers",
    },
    {
      items: "Trackers",
      img: "https://via.placeholder.com/150?text=Trackers",
    },
  ];

  return (
    <div className="font-Lexend p-2">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-xs">shop by</h1>
        <p className="text-lg font-medium capitalize">Trending Catogeries</p>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {trending.map((items, i) => (
            <div key={i} className="flex justify-center items-center flex-col gap-1">
              <img src={items.img} alt="" className="rounded-xl"/>
              <p className="text-center text-sm">{items.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
