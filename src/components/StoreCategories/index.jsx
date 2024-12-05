import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function StoreCategories() {
  const Store = [
    {
      text: "Computer",
      img: "/pngegg (36).png",
      link: "/computer",
    },
    { text: "Medical", img: "/medicine.png", link: "/Medical" },
    {
      text: "Electrical",
      img: "/pngegg (37).png",
      link: "/electrical",
    },
    {
      text: "Appliances",
      img: "/pngegg (38).png",
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
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold ">Shop by Store</h1>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5 ">
          {Store.map((items, i) => {
            return (
              <Link key={i} to={items.link} className="flex flex-col ">
                <div className=" rounded-2xl  flex flex-col  justify-between  items-center p-2 h-[120px] ">
                  <div className="p-2 rounded-2xl    bg-[#f8f8f8]">
                    <img
                      src={items.img}
                      alt=""
                      className=" object-cover h-[80px]"
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
