import React from "react";

export default function StoreCategories() {
  const Store = [
    { text: "Computer", img: "https://www.dailyy.in/Image/Mouse.webp" },
    { text: "Medical", img: "/medicine.png" },
    { text: "Electrical", img: "https://www.dailyy.in/Image/boat.webp" },
    {
      text: "Bartan & Appliances",
      img: "https://www.dailyy.in/Image/bluesmix.png",
    },
    {
      text: "Clean and Dry service",
      img: "https://www.dailyy.in/Image/washinemachines.webp",
    },
  ];
  return (
    <div className="p-5 font-Lexend flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-semibold ">Shop by Store</h1>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {Store.map((items, i) => {
            return (
              <div className="bg-[#f4f5f7] rounded-xl flex flex-col justify-between  items-center p-2 h-[130px]">
                <h1 className=" text-center text-sm">{items.text}</h1>
                <img
                  src={items.img}
                  alt=""
                  className="h-[80px] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
