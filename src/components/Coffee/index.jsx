import React from "react";

export default function Coffee() {
  const coffee = [
    {
      text: "Bestseller",
      img: "https://www.pngmart.com/files/4/Coffee-Cup-PNG-HD.png",
    },
    {
      text: "Drinks",
      img: "https://www.pngmart.com/files/15/Latte-Cappuccino-Transparent-Background.png",
    },
    {
      text: "Foods",
      img: "https://www.pngmart.com/files/23/Subway-PNG-File.png",
    },
    {
      text: "Coffee At Home",
      img: "https://millilitre.my/wp-content/uploads/2021/06/House-blend-drip-bag.jpg",
    },
    {
      text: "Ready to Eat",
      img: "https://www.sarapnow.com/cdn/shop/products/pocket-latte-chocolate-pocket-latte-ready-to-eat-coffee-dark-roast-29543929184343.jpg?v=1664474093&width=1400",
    },
  ];
  return (
    <div className="p-3 mt-3 font-Lexend flex flex-col gap-3">
      <div className="bg-[url('./rb_2149225899.png')] bg-cover bg-center bg-no-repeat h-[20vh]  bg-[#f2f2f2] rounded-3xl flex justify-start">
        <div className=" w-1/2 flex justify-center items-center">
          <h1 className="text-lg">New Coffee</h1>
        </div>
      </div>
      <div className="w-full mt-2">
        <h1 className="text-start font-semibold text-lg">
          Handcrafted Curations
        </h1>
        <div className="flex whitespace-nowrap w-full  overflow-hidden overflow-x-scroll gap-3 mt-2">
          {coffee.map((items, i) => {
            return (
              <div
                key={i}
                className="flex flex-col justify-center items-center gap-5 flex-wrap  "
              >
                <div className="h-[90px] w-[90px] rounded-full bg-[#f4f4f4] flex justify-center items-center">
                  <img
                    src={items.img}
                    alt=""
                    className="h-[70px] object-contain "
                  />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-sm font-medium  ">{items.text}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
