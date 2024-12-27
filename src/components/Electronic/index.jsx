import React, { useCallback, useEffect, useState } from "react";
import Pagination from "../../utils/Animated/Pagination";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";

export default function Electronic() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const service = [
    {
      img: "https://i.pinimg.com/736x/79/0f/da/790fda67de0f8d31aba1562bcd804004.jpg",
    },
    {
      img: "https://i.pinimg.com/736x/64/eb/04/64eb0407c26eabbf62e03b6eeffdbfdf.jpg",
    },
  ];
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
      id: "SAMS-001",
      name: "Samsung Galaxy S23",
      price: 799.99,
      categories: ["Smartphone", "Electronics", "Mobile"],
      img: "https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg",
    },
    {
      id: "SONY-002",
      name: "Sony WH-1000XM5 Headphones",
      price: 348.99,
      categories: ["Headphones", "Audio", "Electronics"],
      img:
        "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_wh1000xm5_s_wh_1000xm5_noise_canceling_wireless_over_ear_1652444420_1706394.jpg",
    },
    {
      id: "APPLE-003",
      name: "Apple MacBook Air M2",
      price: 1099.0,
      categories: ["Laptop", "Computers", "Electronics"],
      img:
        "https://i.pinimg.com/736x/39/fe/74/39fe7479f2670d490066c4d0eb93422b.jpg",
    },
  ];

  const homekitchen = [
    {
      name: "Philips Steam Iron",
      price: 49.99,
      discount: 15,
      rating: 4.5,
      categories: ["Iron", "Home & Kitchen", "Appliances"],
      image: "./pngeggiron.png",
    },
    {
      name: "Heating Rods & Geyser",
      price: 129.99,
      discount: 20,
      rating: 4.3,
      categories: ["Heating Rods & Geysers", "Home & Kitchen", "Appliances"],
      image: "./pngeggheater.png",
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
      image:
        "https://i.pinimg.com/736x/d4/43/a4/d443a44264a13c74774097c8ec72fbdb.jpg",
    },
    {
      name: "Juicer & Mixer",
      price: 99.99,
      discount: 20,
      rating: 4.4,
      categories: ["Juicers & Mixers", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/cf/55/2a/cf552a3b9dd1f21c56d437bdb7c2f5ad.jpg",
    },
    {
      name: "Maker",
      price: 149.99,
      discount: 10,
      rating: 4.6,
      categories: ["Coffee Maker", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/bf/47/b0/bf47b08d4bddf92560ea07b5af6951e0.jpg",
    },
    {
      name: "Tool Kit & Accessories",
      price: 59.99,
      discount: 18,
      rating: 4.7,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image:
        "https://i.pinimg.com/736x/11/01/4b/11014b433d5dbceaafaaf4518e2ad13a.jpg",
    },
  ];
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % service.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const getCartItemQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  const handleAddToCart = (item) => {
    dispatch(productAdd(item));
  };
  const handleRemoveFromCart = (item) => {
    console.log("enter");
    dispatch(productRemove(item.id));
  };
  const openModal = (product) => {
    setSelectedProduct(product); // Set the clicked product
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Reset the selected product
  };

  return (
    <div className="font-Lexend p-2">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative aspect-video h-[22vh] w-full">
          <Pagination
            totalSlides={service.length}
            currentSlide={currentIndex}
            duration={3000}
          />
          <div className="flex ">
            {service.map((src, index) => (
              <div key={index} className=" ">
                <div className="absolute top-0 w-full   h-[22vh] bg-black/20 rounded-2xl" />
                <img
                  src={src.img}
                  alt={`slide ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity absolute top-0 w-full rounded-2xl h-[22vh] duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex  whitespace-nowrap gap-4 w-full overflow-hidden overflow-x-scroll no-scrollbar mt-4">
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
          <div className="grid grid-cols-3  gap-5 place-content-center">
            {topdeals.map((items, i) => {
              const itemQuantity = getCartItemQuantity(items.id);
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center gap-3  "
                >
                  <div className="relative">
                    <div className="bg-[#f9f9f9] rounded-full h-[80px] w-[80px] flex justify-center items-center overflow-hidden">
                      <img
                        src={items.img}
                        alt=""
                        className=" object-contain h-[60px]   "
                      />
                    </div>
                    {itemQuantity === 0 ? (
                      <div
                        onClick={() => handleAddToCart(items)}
                        className="absolute -bottom-1 right-0 border-green-700 border px-1 py-1 bg-white rounded-lg cursor-pointer opacity-60"
                      >
                        <Plus size={18} />
                      </div>
                    ) : (
                      <div className="absolute opacity-60 cursor-pointer -bottom-2 right-0 border-green-600 border px-2 py-1 bg-white rounded-lg flex gap-2 ">
                        <button
                          onClick={() => handleRemoveFromCart(items)}
                          className="text-lg font-medium"
                        >
                          <Minus size={15} />
                        </button>
                        <h1 className="text-sm font-medium">{itemQuantity}</h1>
                        <button
                          onClick={() => handleAddToCart(items)}
                          className="text-lg font-medium"
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col  ">
                    <h1 className="text-sm text-[#5d5d5d] ">
                      {items.name.length > 10
                        ? `${items.name.substring(0, 19)}...`
                        : items.name}
                    </h1>
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
                  className="flex flex-col justify-center items-center gap-3  "
                >
                  <div className="bg-[#f9f9f9] rounded-full h-[80px] w-[80px] flex justify-center items-center overflow-hidden">
                    <img
                      src={items.image}
                      alt=""
                      className=" object-contain h-[60px]   "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-sm text-[#5d5d5d] ">
                      {items.name.length > 10
                        ? `${items.name.substring(0, 15)}...`
                        : items.name}
                    </h1>
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
