import React from "react";
import { Link } from "react-router-dom";

export default function StoreCategories() {
  const Store = [
    {
      text: "Computer",
      img: "https://madisonliquidators.com/images/blog/gmdskl5.jpg",
      link: "/computer",
    },
    {
      text: "Medical",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/Medical",
    },
    {
      text: "Electrical",
      img: "https://images.unsplash.com/photo-1676630444903-163fe485c5d1?q=80&w=2852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/electrical",
    },
    {
      text: "Appliances",
      img: "https://images.unsplash.com/photo-1722050676498-4aecbdce0d38?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/appliances",
    },
    {
      text: "Dry service",
      img: "https://plus.unsplash.com/premium_photo-1677849925689-4abcf415c5f2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/dryService",
    },
    {
      text: "stationery",
      img: "https://images.unsplash.com/photo-1567219934540-9f75f7b87552?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
