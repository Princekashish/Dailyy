import React from "react";

export default function Electronic() {
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
        "https://images.philips.com/is/image/philipsconsumer/ad22e0b4bf03495594caad28016cfdd1?wid=1400&hei=1400&$pnglarge$",
    },
    {
      name: "Heating Rods & Geyser",
      price: 129.99,
      discount: 20,
      rating: 4.3,
      categories: ["Heating Rods & Geysers", "Home & Kitchen", "Appliances"],
      image:
        "https://kitchenmela.in/wp-content/uploads/2021/10/Havells-Instanio-3-Litr-3KW-Water-Heater-Geyser.jpg",
    },
    {
      name: "Duracell AA Batteries",
      price: 18.99,
      discount: 10,
      rating: 4.7,
      categories: ["Batteries", "Home & Kitchen", "Electronics"],
      image:
        "https://www.duracellsingapore.com/cdn/shop/files/202408_DRC_Ultra-AA5_Thumbnail_Duracell_V1_D_300x.jpg?v=1729091918",
    },
    {
      name: "LED Bulb",
      price: 15.99,
      discount: 25,
      rating: 4.8,
      categories: ["LED & Lamps", "Home & Kitchen", "Lighting"],
      image:
        "https://ae-pic-a1.aliexpress-media.com/kf/HTB19A_rMVXXXXX.XXXXq6xXFXXXf.jpg_220x220q75.jpg_.avif",
    },
    {
      name: "Electric Cooker",
      price: 39.99,
      discount: 15,
      rating: 4.6,
      categories: ["Electric Cookers", "Home & Kitchen", "Appliances"],
      image: "https://example.com/black-decker-electric-cooker.jpg",
    },
    {
      name: "Juicer & Mixer",
      price: 99.99,
      discount: 20,
      rating: 4.4,
      categories: ["Juicers & Mixers", "Home & Kitchen", "Appliances"],
      image: "https://example.com/hamilton-beach-juicer-mixer.jpg",
    },
    {
      name: "Maker",
      price: 149.99,
      discount: 10,
      rating: 4.6,
      categories: ["Coffee Maker", "Home & Kitchen", "Appliances"],
      image: "https://example.com/nespresso-essenza-mini.jpg",
    },
    {
      name: "Tool Kit & Accessories",
      price: 59.99,
      discount: 18,
      rating: 4.7,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image: "https://example.com/bosch-tool-kit.jpg",
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
                className={`border-[2.8px] border-blue-400  flex flex-col relative gap-2 rounded-full overflow-hidden h-[80px]  w-[80px]`}
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
