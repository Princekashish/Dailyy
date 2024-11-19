import React from "react";
import { Link } from "react-router-dom";

export default function StoreCategories() {
  const Store = [
    {
      text: "Computer",
      img: "https://www.dailyy.in/Image/Mouse.webp",
      link: "/computer",
    },
    { text: "Medical", img: "/medicine.png", link: "/Medical" },
    {
      text: "Electrical",
      img: "https://www.dailyy.in/Image/boat.webp",
      link: "/electrical",
    },
    {
      text: "Appliances",
      img: "https://www.dailyy.in/Image/bluesmix.png",
      link: "/appliances",
    },
    {
      text: "Dry service",
      img: "/rb_52326.png",
      link: "/dryService",
    },
    {
      text: "stationery",
      img: "/rb_19882.png",
      link: "/stationery",
    },
  ];
  return (
    <div className="p-3  font-Lexend flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-semibold ">Shop by Store</h1>
        <div className="grid grid-cols-3 gap-2 mt-2 ">
          {Store.map((items, i) => {
            return (
              <Link key={i} to={items.link}>
                <div className=" rounded-2xl flex flex-col  justify-between gap-2  items-center p-2 ">
                  <div className="bg-[#f4f5f7] p-2 rounded-2xl ">
                    <img
                      src={items.img}
                      alt=""
                      className="h-[70px] object-contain"
                    />
                  </div>
                  <h1 className=" text-center text-sm">{items.text}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
