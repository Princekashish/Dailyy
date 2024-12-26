import React from "react";

export default function Electronic() {
  const trending = [
    {
      text: "Earbuds",
      img: "https://i.pinimg.com/736x/92/a6/3b/92a63bbd55ac374b9e1406b2dd762593.jpg",
    },
    {
      text: "Speakers",
      img: "https://i.pinimg.com/736x/7f/dc/2f/7fdc2f00b1790eccca942115870a28e3.jpg",
    },
    {
      text: "Smartwatches",
      img: "https://i.pinimg.com/736x/dc/12/50/dc12509dd64a0f0bd67b8f755737828c.jpg",
    },
    {
      text: "Heating Rods",
      img: "https://i.pinimg.com/736x/f9/26/cd/f926cd3f553d2a3048ad1a6fada56159.jpg",
    },
  ];
  const topdeals = [
    {
      name: "Samsung Galaxy S23",
      price: 799.99,
      discount: 10,
      rating: 4.7,
      categories: ["Smartphone", "Electronics", "Mobile"],
      image: "https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg",
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      price: 348.99,
      discount: 15,
      rating: 4.8,
      categories: ["Headphones", "Audio", "Electronics"],
      image:
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_wh1000xm5_s_wh_1000xm5_noise_canceling_wireless_over_ear_1652444420_1706394.jpg",
    },
    {
      name: "Apple MacBook Air M2",
      price: 1099.0,
      discount: 5,
      rating: 4.9,
      categories: ["Laptop", "Computers", "Electronics"],
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-config-202402?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1708371033110",
    },
  ];
  const homekitchen = [
    {
      name: "Philips Steam Iron",
      price: 49.99,
      discount: 15,
      rating: 4.5,
      categories: ["Iron", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/31/8f/0a/318f0a143e8aa0b3f6994d196691d0f0.jpg",
    },
    {
      name: "Heating Rods & Geyser",
      price: 129.99,
      discount: 20,
      rating: 4.3,
      categories: ["Heating Rods & Geysers", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/01/50/e4/0150e4010a3011df03d577025766b936.jpg",
    },
    {
      name: "Duracell AA Batteries",
      price: 18.99,
      discount: 10,
      rating: 4.7,
      categories: ["Batteries", "Home & Kitchen", "Electronics"],
      image:
        "https://i.pinimg.com/736x/97/b6/2f/97b62f6c6e7e06af6e8151949b1fde9c.jpg",
    },
    {
      name: "LED Bulb",
      price: 15.99,
      discount: 25,
      rating: 4.8,
      categories: ["LED & Lamps", "Home & Kitchen", "Lighting"],
      image:
        "https://i.pinimg.com/736x/49/d3/37/49d33759acfccaa7ac9ef5efc3cc3546.jpg",
    },
    {
      name: "Electric Cooker",
      price: 39.99,
      discount: 15,
      rating: 4.6,
      categories: ["Electric Cookers", "Home & Kitchen", "Appliances"],
      image: "https://i.pinimg.com/736x/d4/43/a4/d443a44264a13c74774097c8ec72fbdb.jpg",
    },
    {
      name: "Juicer & Mixer",
      price: 99.99,
      discount: 20,
      rating: 4.4,
      categories: ["Juicers & Mixers", "Home & Kitchen", "Appliances"],
      image: "https://i.pinimg.com/736x/cf/55/2a/cf552a3b9dd1f21c56d437bdb7c2f5ad.jpg",
    },
    {
      name: "Maker",
      price: 149.99,
      discount: 10,
      rating: 4.6,
      categories: ["Coffee Maker", "Home & Kitchen", "Appliances"],
      image: "https://i.pinimg.com/736x/bf/47/b0/bf47b08d4bddf92560ea07b5af6951e0.jpg",
    },
    {
      name: "Tool Kit & Accessories",
      price: 59.99,
      discount: 18,
      rating: 4.7,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image: "https://i.pinimg.com/736x/11/01/4b/11014b433d5dbceaafaaf4518e2ad13a.jpg",
    },
  ];

  return (
    <div className="font-Lexend p-2">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-xs">shop by</h1>
        <p className="text-lg font-medium capitalize">Trending Catogeries</p>
        <div className="flex whitespace-nowrap gap-4 w-full overflow-hidden overflow-x-scroll no-scrollbar mt-4">
          {trending.map((items, i) => (
            <div
              key={i}
              className="flex justify-center items-center flex-col gap-1 "
            >
              <div
                className={`border-[2px] border-blue-400  flex flex-col relative gap-2 rounded-full overflow-hidden h-[80px]  w-[80px]`}
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
        {/* top deals */}
        <div className="w-full mt-5">
          <h1 className="text-start font-semibold text-lg">Top deals</h1>
          <div className="grid grid-cols-3  gap-5">
            {topdeals.map((items, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center gap-5 flex-wrap  "
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

        {/* home&&kitchen */}
        <div className="w-full mt-5">
          <h1 className="text-start font-semibold text-lg">Home and kitchen</h1>
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
