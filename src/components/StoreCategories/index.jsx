import React from "react";
import { Link } from "react-router-dom";

export default function StoreCategories() {
  const Store = [
    {
      text: "Computer",
      img: "/Computer.avif",
      link: "/computer",
    },
    {
      text: "Medical",
      img: "/Medical.avif",
      link: "/Medical",
    },
    // {
    //   text: "Electrical",
    //   img: "/Electrical.avif",
    //   link: "/electrical",
    // },
    // {
    //   text: "Appliances",
    //   img: "/Appliances.avif",
    //   link: "/appliances",
    // },
    // {
    //   text: "Dry service",
    //   img: "/Service.avif",
    //   link: "/dryService",
    // },
    {
      text: "stationery",
      img: "/Stationery.avif",
      link: "/stationery",
    },
  ];
  return (
    <div className="p-3  font-Lexend flex flex-col gap-3">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold ">Shop by Store</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2 ">
          {Store.map((items, i) => {
            return (
              <Link key={i} to={items.link} className="flex flex-col  ">
                <div
                  className={` flex flex-col relative rounded-xl  overflow-hidden h-[70px] `}
                  style={{
                    backgroundImage: `url(${items.img})`,
                    backgroundPosition: "right",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute top-0 bottom-0 w-full   bg-gradient-to-l from-black/10 to-black/50 " />
                  {/* <div className="border-2 border-black flex justify-center items-center rounded-full">
                  <img
                    src={item.img}
                    alt={item.items}
                    className="rounded-3xl p-2 object-contain "
                  />
                </div> */}

                  <h1 className="text-sm flex justify-center items-center text-[#f2f2f2]   z-20 font-medium   h-full ">
                    {items.text}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
