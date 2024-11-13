import React from "react";

export default function ProductCategories() {
  const items = [
    { text: "Grocery items", img: "https://www.dailyy.in/Image/groceryy.png" },
    { text: "Personal Care", img: "	https://www.dailyy.in/Image/whispers.png" },
    { text: "Cloths", img: "	https://www.dailyy.in/Image/otshirt.webp" },
    {
      text: "Fish,Chicken & more",
      img: "https://www.dailyy.in/Image/mainchicken.png",
    },
    { text: "Fast Food", img: "	https://www.dailyy.in/Image/chowmin.png" },
    { text: "Party Essential", img: "	/pngegg.png" },
  ];

  return (
    <div className="p-5  font-Lexend flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-semibold ">Product Catogery</h1>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {items.map((items, i) => {
            return (
              <div className="bg-[#f4f5f7] rounded-xl  flex flex-col justify-between  items-center p-2  ">
                <h1 className=" text-center text-sm">{items.text}</h1>
                <img
                  src={items.img}
                  alt=""
                  className=" h-[40px] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
