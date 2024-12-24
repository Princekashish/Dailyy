import React from "react";

export default function Appliances() {
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
      name: "Dyson V11 Cordless Vacuum",
      price: 599.99,
      discount: 10,
      rating: 4.8,
      categories: ["Vacuum", "Appliances", "Cleaning"],
      image:
        "https://i.pinimg.com/736x/31/98/26/31982636f7edb569aa656337be892649.jpg",
    },
    {
      name: "KitchenAid Stand Mixer",
      price: 379.99,
      discount: 15,
      rating: 4.7,
      categories: ["Mixer", "Appliances", "Kitchen"],
      image:
        "https://i.pinimg.com/736x/ab/c9/ea/abc9ea8274b05391a1c727b6e346cbc9.jpg",
    },
    {
      name: "Instant Pot Duo 7-in-1 Pressure Cooker",
      price: 89.99,
      discount: 25,
      rating: 4.6,
      categories: ["Pressure Cooker", "Appliances", "Kitchen"],
      image:
        "https://i.pinimg.com/736x/d4/67/bd/d467bd4ed8a1f28ff55655b571789885.jpg",
    },
    {
      name: "Ninja Professional Blender",
      price: 99.99,
      discount: 20,
      rating: 4.7,
      categories: ["Blender", "Appliances", "Kitchen"],
      image:
        "https://i.pinimg.com/736x/e3/f2/09/e3f2094d247af6f2279c81e34454d2c9.jpg",
    },
    {
      name: "Breville Espresso Machine",
      price: 499.99,
      discount: 10,
      rating: 4.8,
      categories: ["Espresso Machine", "Appliances", "Kitchen"],
      image:
        "https://i.pinimg.com/736x/99/3c/09/993c097d6883418c9fef6265b57e0041.jpg",
    },
    {
      name: "Samsung 4-Door Refrigerator",
      price: 1999.99,
      discount: 5,
      rating: 4.6,
      categories: ["Refrigerator", "Appliances", "Kitchen"],
      image:
        "https://i.pinimg.com/736x/e0/52/7b/e0527b0488204ec858ae30cf8f3d48a2.jpg",
    },
  ];

  const homekitchen = [
    {
      name: "Vacuum Cleaners",

      image:
        "https://i.pinimg.com/736x/c8/2b/6c/c82b6c843c2780b9fad4bc6a47895ef5.jpg",
    },
    {
      name: "Mixers",

      image:
        "https://i.pinimg.com/736x/f3/91/50/f39150ec7eb1d406ea8e5aa7419e644f.jpg",
    },
    {
      name: "Pressure Cookers",

      image:
        "https://i.pinimg.com/736x/77/89/d5/7789d513ab87bd41cc03556df9f6cec8.jpg",
    },
    {
      name: "Blenders",

      image:
        "https://i.pinimg.com/736x/d5/67/9b/d5679b80c7e59273ab211fb479b55894.jpg",
    },
    {
      name: "Espresso Machines",

      image:
        "https://i.pinimg.com/736x/56/4f/a2/564fa2ab0d1c965bc3b87bd6018d6834.jpg",
    },
    {
      name: "Refrigerators",

      image:
        "https://i.pinimg.com/736x/50/78/20/5078206b9bb3aaf311db0991d0a8cfb1.jpg",
    },
    {
      name: "Air Fryers",

      image:
        "https://i.pinimg.com/736x/bb/12/31/bb1231a6711281e01bbe4f77f4d8bfd0.jpg",
    },
    {
      name: "Dehumidifiers",

      image:
        "https://i.pinimg.com/736x/db/45/6e/db456ef49acaad6053d216ec23189b89.jpg",
    },
    {
      name: "Microwaves",

      image:
        "https://i.pinimg.com/736x/e1/b6/98/e1b698b84d069ca72d7bc57c5152ed82.jpg",
    },
  ];

  return (
    <div className="font-Lexend mb-20">
      <div className="flex flex-col justify-center items-center p-2">
        <div className="bg-[url('https://airmulti.com.np/wp-content/uploads/2023/07/appliances.jpg')] rounded-xl bg-cover bg-center bg-no-repeat h-[23vh] w-full flex justify-start" />
        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">
            Featured this week
          </h1>
          <div className="flex whitespace-nowrap gap-3 w-full overflow-hidden overflow-x-scroll mt-4">
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
        </div>

        {/* Gift for new homes */}
        <div className="w-full mt-5 ">
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
        <div className="w-full mt-5 ">
          <h1 className="text-start font-semibold text-lg">
            Gift for new homes
          </h1>
          <div className="grid grid-cols-3 mt-2 gap-5">
            {homesGift.map((items, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col  items-center gap-5 flex-wrap  "
                >
                  <div className="flex justify-center items-center w-full bg-[#f9f9f9] rounded-xl">
                    <img
                      src={items.image}
                      alt=""
                      className="h-[100px] object-contain w-full"
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
          <div  className="bg-gray-100 flex flex-row gap-4 mt-4 py-1 shadow-sm rounded-lg">
            <h1 className="text-center w-full">see more</h1>
          </div>
        </div>

        {/* Explore a wide range of appliances */}
        <div className="w-full mt-5">
          <h1 className="text-start font-semibold text-lg ">
            Explore a wide range of appliances
          </h1>
          <div className="grid grid-cols-3  gap-2 mt-2">
            {homekitchen.map((items, i) => (
              <div
                key={i}
                className="flex justify-center items-center flex-col gap-1 "
              >
                <div
                  className={`  flex flex-col relative rounded-xl overflow-hidden h-[100px]  w-full`}
                  style={{
                    backgroundImage: `url(${items.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute top-0 bottom-0 w-full   bg-gradient-to-b from-black/10 to-black/80 border-2 border-white rounded-xl " />
                  {/* <div className="border-2 border-black flex justify-center items-center rounded-full">
                  <img
                    src={item.img}
                    alt={item.items}
                    className="rounded-3xl p-2 object-contain "
                  />
                </div> */}

                  <h1 className="text-sm text-center text-[#f2f2f2]  z-20 font-medium  absolute w-full bottom-2">
                    {items.name}
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
