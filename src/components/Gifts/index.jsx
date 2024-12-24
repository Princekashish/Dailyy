import React from "react";

function Gifts() {
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
      name: "IGP - Red single Rose Bouquet",
      price: 799.99,
      discount: 10,
      rating: 4.7,
      categories: ["Smartphone", "Electronics", "Mobile"],
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/e5327ef3-a8e3-47ce-ae97-6da3f24dd0b8.jpg",
    },
    {
      name: "Amul chocominis chocolate",
      price: 348.99,
      discount: 15,
      rating: 4.8,
      categories: ["Headphones", "Audio", "Electronics"],
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/images/products/sliding_image/23752a.jpg?ts=1722840893",
    },
    {
      name: "FnP1 Enchanted blue orchid bouquet",
      price: 1099.0,
      discount: 5,
      rating: 4.9,
      categories: ["Laptop", "Computers", "Electronics"],
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/app/assets/products/sliding_images/jpeg/73ab846a-b875-4b1a-a228-a3e94dc494f7.jpg?ts=1713528968",
    },
  ];
  const homesGift = [
    {
      name: "Modern Abstract Wall Art",
      price: 49.99,
      discount: 20,
      rating: 4.6,
      categories: ["Wall Art", "Home Decor", "Gifts"],
      image:
        "https://i.pinimg.com/736x/3b/21/8c/3b218cbff29937714f23cdaa1937e445.jpg",
    },
    {
      name: "Faux Fur Throw Blanket",
      price: 29.99,
      discount: 15,
      rating: 4.7,
      categories: ["Blankets", "Home Decor", "Gifts"],
      image:
        "https://i.pinimg.com/736x/ee/84/e2/ee84e24532ffb0ccf7232f3c7c05b713.jpg",
    },
    {
      name: "Ceramic Decorative Vases",
      price: 39.99,
      discount: 10,
      rating: 4.8,
      categories: ["Vases", "Home Decor", "Gifts"],
      image:
        "https://i.pinimg.com/736x/44/25/4e/44254edc4d8a14591f6cdd108a2e1515.jpg",
    },
    {
      name: "Scented Candles Gift Set",
      price: 24.99,
      discount: 25,
      rating: 4.5,
      categories: ["Candles", "Home Decor", "Gifts"],
      image:
        "https://i.pinimg.com/736x/b8/61/8f/b8618f8f12ad7609e76cce46796a3648.jpg",
    },
    {
      name: "Indoor Plant Pot with Stand",
      price: 34.99,
      discount: 18,
      rating: 4.6,
      categories: ["Planters", "Home Decor", "Gifts"],
      image:
        "https://i.pinimg.com/736x/eb/36/8b/eb368bf298fc1be4edd49489a6452dc8.jpg",
    },
    {
      name: "Personalized Welcome Mat",
      price: 19.99,
      discount: 30,
      rating: 4.7,
      categories: ["Doormats", "Home Decor", "Gifts"],
      image:
        "https://i.pinimg.com/736x/77/9c/b0/779cb0c0aa2df2255c4b0f2cbebf3fb5.jpg",
    },
  ];

  const homekitchen = [
    {
      name: "Artisanal gift sets",
      price: 49.99,
      discount: 15,
      rating: 4.5,
      categories: ["Iron", "Home & Kitchen", "Appliances"],
      image:
        "https://hrd-live.cdn.scayle.cloud/images/7a8afc818137fbde121fd48bf1af087d.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    },
    {
      name: "Bouquets & Plants",
      price: 129.99,
      discount: 20,
      rating: 4.3,
      categories: ["Heating Rods & Geysers", "Home & Kitchen", "Appliances"],
      image:
        "https://hrd-live.cdn.scayle.cloud/images/5f38e619e987c9f78ba21e4ff1648ae8.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    },
    {
      name: "Premium gifting",
      price: 18.99,
      discount: 10,
      rating: 4.7,
      categories: ["Batteries", "Home & Kitchen", "Electronics"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61MBTC0YE0L._SL1500_.jpg",
    },
    {
      name: "Beauty & Fashion",
      price: 15.99,
      discount: 25,
      rating: 4.8,
      categories: ["LED & Lamps", "Home & Kitchen", "Lighting"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      name: "Gadgets & application",
      price: 39.99,
      discount: 15,
      rating: 4.6,
      categories: ["Electric Cookers", "Home & Kitchen", "Appliances"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      name: "Home & living",
      price: 99.99,
      discount: 20,
      rating: 4.4,
      categories: ["Juicers & Mixers", "Home & Kitchen", "Appliances"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      name: "Indian sweets & dry Fruits",
      price: 149.99,
      discount: 10,
      rating: 4.6,
      categories: ["Coffee Maker", "Home & Kitchen", "Appliances"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      name: "Chocolate Packs",
      price: 59.99,
      discount: 18,
      rating: 4.7,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      name: "Kids & pet Gifting",
      price: 59.99,
      discount: 18,
      rating: 4.7,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
  ];
  return (
    <div className="font-Lexend mb-20">
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-[url('./credit-card-shopping-bags.png')] bg-cover bg-center bg-no-repeat h-[23vh] w-full bg-[#f2f2f2] flex justify-start">
          <div className=" w-full flex justify-center items-center relative">
            <div className="absolute top-5 flex flex-col justify-center items-center">
              <h1 className="text-sm ">Introduction</h1>
              <h1 className="text-lg font-semibold">E-Gift Card</h1>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">
            Featured this week
          </h1>
          <div className="flex whitespace-nowrap gap-4 w-full overflow-hidden overflow-x-scroll mt-4">
            {trending.map((items, i) => (
              <div
                key={i}
                className="flex justify-center items-center flex-col gap-1 "
              >
                <div
                  className={`border-[2.8px] border-blue-400  flex flex-col relative gap-2 rounded-2xl overflow-hidden h-[110px]  w-[100px]`}
                  style={{
                    backgroundImage: `url(${items.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute top-0 bottom-0 w-full   bg-gradient-to-b from-black/10 to-black/50 border-2 border-white rounded-xl " />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gift for new homes */}
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
                      className="h-[100px] object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-sm font-medium  ">{items.name}</h1>
                    <p className="text-xs ">rating {items.rating}</p>
                    <p className="text-xs ">{items.discount}% OFF</p>
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
            Gift for new homes
          </h1>
          <div className="grid grid-cols-3  gap-5">
            {homesGift.map((items, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-start items-center gap-5 flex-wrap  "
                >
                  <div className="">
                    <img
                      src={items.image}
                      alt=""
                      className="h-[100px] object-contain rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-sm font-medium  ">{items.name}</h1>
                    <p className="text-xs ">rating {items.rating}</p>
                    <p className="text-xs ">{items.discount}% OFF</p>
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

        {/* Explore a wide range of gifts */}
        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">
            Explore a wide range of gifts
          </h1>
          <div className="grid grid-cols-3  gap-2">
            {homekitchen.map((items, i) => (
              <div
                key={i}
                className="flex justify-center items-center flex-col gap-1 "
              >
               <div
                className={`  flex flex-col relative rounded-xl overflow-hidden h-[110px]  w-[110px]`}
                style={{
                  backgroundImage: `url(${items.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute top-0 bottom-0 w-full   bg-gradient-to-b from-black/10 to-black/40 border-2 border-white rounded-xl " />
                {/* <div className="border-2 border-black flex justify-center items-center rounded-full">
                  <img
                    src={item.img}
                    alt={item.items}
                    className="rounded-3xl p-2 object-contain "
                  />
                </div> */}

                <h1 className="text-sm text-center text-[#f2f2f2]  z-20 font-medium  absolute w-full bottom-2">
                  {items.text}
                </h1>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
