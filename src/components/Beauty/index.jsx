import React, { useCallback, useEffect, useState } from "react";
import Pagination from "../../utils/Animated/Pagination";

export default function Beauty() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const service = [
    {
      img: "./rb_2264.png",
    },
    {
      img: "https://i.pinimg.com/736x/8d/78/ad/8d78adbb6d959d6a0e7bc4368cb4ab51.jpg",
    },
  ];
  const trending = [
    {
      text: "Earbuds",
      img: "/pngegg (20).png",
    },
    {
      text: "Speakers",
      img: "/pngegg (29).png",
    },
    {
      text: "Smartwatches",
      img: "/pngegg (30).png",
    },
    {
      text: "Heating Rods",
      img: "https://via.placeholder.com/150?text=Thermostats",
    },
  ];
  const topdeals = [
    {
      name: "Yves Saint Laurent Mon Paris ",
      price: 799.99,
      discount: 10,
      rating: 4.7,
      categories: ["Smartphone", "Electronics", "Mobile"],
      image:
        "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1098834/RfDWyJjJr-1098834_1.jpg",
    },
    {
      name: "Gucci Bloom ",
      price: 348.99,
      discount: 15,
      rating: 4.8,
      categories: ["Headphones", "Audio", "Electronics"],
      image:
        "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1120708/hZZG40Ga--8005610481005_1.jpg",
    },
    {
      name: "Creed Millesime Royal Oud ",
      price: 1099.0,
      discount: 5,
      rating: 4.9,
      categories: ["Laptop", "Computers", "Electronics"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/3/c/3c6350e3508441001121_1.jpg",
    },
  ];
  const homekitchen = [
    {
      name: "Lip cosmetics",
      price: 49.99,
      discount: 15,
      rating: 4.5,
      categories: ["Iron", "Home & Kitchen", "Appliances"],
      image:
        "https://hrd-live.cdn.scayle.cloud/images/7a8afc818137fbde121fd48bf1af087d.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    },
    {
      name: "Eye Makeup",
      price: 129.99,
      discount: 20,
      rating: 4.3,
      categories: ["Heating Rods & Geysers", "Home & Kitchen", "Appliances"],
      image:
        "https://hrd-live.cdn.scayle.cloud/images/5f38e619e987c9f78ba21e4ff1648ae8.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    },
    {
      name: "face cosmetics",
      price: 18.99,
      discount: 10,
      rating: 4.7,
      categories: ["Batteries", "Home & Kitchen", "Electronics"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61MBTC0YE0L._SL1500_.jpg",
    },
    {
      name: "Nailpaints & Remover",
      price: 15.99,
      discount: 25,
      rating: 4.8,
      categories: ["LED & Lamps", "Home & Kitchen", "Lighting"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      name: "Makeup tools",
      price: 39.99,
      discount: 15,
      rating: 4.6,
      categories: ["Electric Cookers", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/b8/1c/78/b81c78c138fff71157c30c55bac0c504.jpg",
    },
    {
      name: "Nails & lashes",
      price: 99.99,
      discount: 20,
      rating: 4.4,
      categories: ["Juicers & Mixers", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/07/15/73/071573d2954c3ac0d55d25592f71cb80.jpg",
    },
    {
      name: "Personal care tools",
      price: 149.99,
      discount: 10,
      rating: 4.6,
      categories: ["Coffee Maker", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/8e/79/dc/8e79dc31f0806e5e77c58ac9aab90506.jpg",
    },
    {
      name: "Fashion accessoris",
      price: 59.99,
      discount: 18,
      rating: 4.7,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image:
        "https://i.pinimg.com/736x/4e/44/d7/4e44d7ad4049f0061cab179f566a0f37.jpg",
    },
  ];
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % service.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <div className="font-Lexend mb-20 mt-3 p-2">
      <div className="flex flex-col justify-center items-center ">
        {/* <div className="bg-[url('./rb_2264.png')] bg-cover bg-center bg-no-repeat h-[23vh] w-full bg-[#f2f2f2] flex justify-start">
          <div className=" w-full flex justify-center items-center relative">
            <h1 className="text-lg absolute right-10">REPLEXX</h1>
          </div>
        </div> */}
        <div className="relative aspect-video h-[25vh] w-full">
        <Pagination
          totalSlides={service.length}
          currentSlide={currentIndex}
          duration={5000}
        />
        <div className="flex ">
          {service.map((src, index) => (
            <div key={index} className=" ">
              <div className="absolute top-0 w-full   h-[25vh] bg-black/20 rounded-2xl" />
              <img
                src={src.img}
                alt={`slide ${index + 1}`}
                fill
                className={`object-cover transition-opacity absolute top-0 w-full rounded-2xl h-[25vh] duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

        {/* top deals */}
        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">Half price store</h1>
          <div className="grid grid-cols-3  gap-5">
            {topdeals.map((items, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-start items-center gap-5 flex-wrap  "
                >
                  <div className="">
                    <img
                      src={items.image}
                      alt=""
                      className="h-[100px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-sm font-medium  ">{items.name}</h1>
                    <p className="text-xs ">rating {items.rating}</p>
                    <p className="text-xs ">{items.discount}%</p>
                    <p className="text-xs ">
                      MRP. <span className="text-sm ">{items.price}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-gray-100 flex flex-row gap-4 mt-4 py-1 shadow-sm rounded-lg">
            <h1 className="text-center w-full">see more</h1>
          </div>
        </div>

        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">
            Featured this week
          </h1>
          <div className="flex whitespace-nowrap gap-4 w-full overflow-hidden overflow-x-scroll no-scrollbar mt-4">
            <div className="flex whitespace-nowrap gap-3 w-full overflow-hidden overflow-x-scroll no-scrollbar mt-2">
              {trending.map((items, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center flex-col gap-1 "
                >
                  <div
                    className={`border-[2px] border-blue-400  flex flex-col relative gap-2 rounded-full overflow-hidden h-[90px]  w-[90px]`}
                    style={{
                      backgroundImage: `url(${items.img})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute top-0 bottom-0 w-full   bg-gradient-to-b from-black/10 to-black/50 border-2 border-white rounded-full " />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* home&&kitchen */}
        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">
            Makeup & cosmetics
          </h1>
          <div className="grid grid-cols-4  gap-3">
            {homekitchen.map((items, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center gap-5 flex-wrap  "
                >
                  <div className="">
                    <img
                      src={items.image}
                      alt=""
                      className="h-[100px] object-contain "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-sm font-medium  ">{items.name}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
