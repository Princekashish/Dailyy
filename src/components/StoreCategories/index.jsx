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
          <h1 className="text-xl font-semibold ">Shop by Store</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5 ">
          {Store.map((items, i) => {
            return (
              <Link key={i} to={items.link} className="flex flex-col gap-2">
                <div className=" rounded-2xl bg-[#f4f5f7]  flex flex-col  justify-between gap-2  items-center p-2 ">
                  <div className="p-2 rounded-2xl ">
                    <img
                      src={items.img}
                      alt=""
                      className="h-[70px] object-contain"
                    />
                  </div>
                </div>
                <h1 className=" text-center text-sm">{items.text}</h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
