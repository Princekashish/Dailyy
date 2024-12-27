import React, { useCallback, useEffect, useState } from "react";
import Pagination from "../../utils/Animated/Pagination";

export default function Coffee() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const service = [
    {
      img: "./rb_2149225899.png",
    },
    {
      img: "https://i.pinimg.com/736x/4c/f5/24/4cf5242188d8dfc8d4cfe46da2ba729e.jpg",
    },
  ];
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
  const Bestseller = [
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
      img: "https://i.pinimg.com/736x/68/c2/40/68c240f5797946566996da6780c9b61e.jpg",
    },
    {
      text: "Ready to Eat",
      img: "https://www.sarapnow.com/cdn/shop/products/pocket-latte-chocolate-pocket-latte-ready-to-eat-coffee-dark-roast-29543929184343.jpg?v=1664474093&width=1400",
    },
  ];
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % service.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="p-3 mt-3 font-Lexend flex flex-col gap-3 mb-20">
      {/* <div className="bg-[url('./rb_2149225899.png')] bg-cover bg-center bg-no-repeat h-[20vh]  bg-[#f2f2f2] rounded-3xl flex justify-start">
        <div className=" w-1/2 flex justify-center items-center">
          <h1 className="text-lg">New Coffee</h1>
        </div>
      </div> */}
      <div className="relative aspect-video h-[25vh] w-full">
        <Pagination
          totalSlides={service.length}
          currentSlide={currentIndex}
          duration={3000}
        />
        <div className="flex ">
          {service.map((src, index) => (
            <div key={index} className=" ">
              <div className="absolute top-0 w-full   h-[22vh] bg-black/20 rounded-2xl" />
              <img
                src={src.img}
                alt={`slide ${index + 1}`}
                fill
                className={`object-cover transition-opacity absolute top-0 w-full rounded-2xl h-[22vh] duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* bestseller */}
      <div className="w-full mt-2">
        <h1 className="text-start font-semibold text-lg">
          Handcrafted Curations
        </h1>
        <div className="grid grid-cols-4  gap-3 mt-2">
          {Bestseller.map((items, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center gap-5  flex-col "
              >
                <div className="h-[80px] w-[80px] rounded-full bg-[#f4f4f4] flex justify-center items-center overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="h-[60px] object-contain "
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

      {/* drink */}
      <div className="w-full mt-2">
        <h1 className="text-start font-semibold text-lg">Drink</h1>
        <div className="grid grid-cols-4  gap-3 mt-2">
          {coffee.map((items, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center gap-5  flex-col "
              >
                <div className="h-[80px] w-[80px] rounded-full bg-[#f4f4f4] flex justify-center items-center overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="h-[60px] object-contain "
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
      {/* foods */}
      <div className="w-full mt-2">
        <h1 className="text-start font-semibold text-lg">Foods</h1>
        <div className="grid grid-cols-4  gap-3 mt-2">
          {coffee.map((items, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center gap-5  flex-col "
              >
                <div className="h-[80px] w-[80px] rounded-full bg-[#f4f4f4] flex justify-center items-center overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="h-[60px] object-contain "
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

      <div className="w-full mt-2">
        <h1 className="text-start font-semibold text-lg">Coffee at Home</h1>
        <div className="grid grid-cols-4  gap-3 mt-2">
          {coffee.map((items, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center gap-5  flex-col "
              >
                <div className="h-[80px] w-[80px] rounded-full bg-[#f4f4f4] flex justify-center items-center overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="h-[60px] object-contain "
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
