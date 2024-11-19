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

    { text: "Party Essential", img: "	/rb_4295.png" },
    { text: "Essential", img: "	/rb_26894.png" },
  ];

  return (
    <div className="p-3 mt-3 font-Lexend flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-semibold ">Categories</h1>
        <div className="grid grid-cols-3  mt-2  p-1 gap-3">
          {items.map((items, i) => {
            return (
              <div
                key={i}
                className=" rounded-xl   flex flex-col gap-2 items-center  "
              >
                <div className="bg-[#f4f5f7] h-[90px] w-full flex justify-center items-center rounded-2xl">
                  <img
                    src={items.img}
                    alt=""
                    className=" h-[90px] object-contain "
                  />
                </div>
                <h1 className=" text-center text-sm">{items.text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
