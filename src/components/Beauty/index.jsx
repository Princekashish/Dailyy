import React, { useCallback, useEffect, useState } from "react";
import Pagination from "../../utils/Animated/Pagination";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";

export default function Beauty() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const service = [
    {
      img: "https://i.pinimg.com/736x/a7/93/48/a7934811fc4c68adf22750cd4cbb608c.jpg",
    },
    {
      img: "https://i.pinimg.com/736x/79/94/dc/7994dc13d73d8e5852d753cc9a834312.jpg",
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
      id: "YSL-001",
      name: "Yves Saint Laurent Mon Paris",
      price: 799.99,
      categories: ["Smartphone", "Electronics", "Mobile"],
      img:
        "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1098834/RfDWyJjJr-1098834_1.jpg",
    },
    {
      id: "GUCCI-002",
      name: "Gucci Bloom",
      price: 348.99,
      categories: ["Headphones", "Audio", "Electronics"],
      img:
        "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1120708/hZZG40Ga--8005610481005_1.jpg",
    },
    {
      id: "CREED-003",
      name: "Creed Millesime Royal Oud",
      price: 1099.0,
      categories: ["Laptop", "Computers", "Electronics"],
      img:
        "https://images-static.nykaa.com/media/catalog/product/3/c/3c6350e3508441001121_1.jpg",
    },
  ];

  const homekitchen = [
    {
      id: "COSM-001",
      name: "Lip cosmetics",
      price: 49.99,
      categories: ["Iron", "Home & Kitchen", "Appliances"],
      image:
        "https://hrd-live.cdn.scayle.cloud/images/7a8afc818137fbde121fd48bf1af087d.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    },
    {
      id: "MAKEUP-002",
      name: "Eye Makeup",
      price: 129.99,
      categories: ["Heating Rods & Geysers", "Home & Kitchen", "Appliances"],
      image:
        "https://hrd-live.cdn.scayle.cloud/images/5f38e619e987c9f78ba21e4ff1648ae8.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    },
    {
      id: "COSM-003",
      name: "Face cosmetics",
      price: 18.99,
      categories: ["Batteries", "Home & Kitchen", "Electronics"],
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61MBTC0YE0L._SL1500_.jpg",
    },
    {
      id: "NAIL-004",
      name: "Nailpaints & Remover",
      price: 15.99,
      categories: ["LED & Lamps", "Home & Kitchen", "Lighting"],
      image:
        "https://images-static.nykaa.com/media/catalog/product/6/d/6d3af2d8904245701086_3.jpg",
    },
    {
      id: "MAKEUP-005",
      name: "Makeup tools",
      price: 39.99,
      categories: ["Electric Cookers", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/b8/1c/78/b81c78c138fff71157c30c55bac0c504.jpg",
    },
    {
      id: "NAIL-006",
      name: "Nails & lashes",
      price: 99.99,
      categories: ["Juicers & Mixers", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/07/15/73/071573d2954c3ac0d55d25592f71cb80.jpg",
    },
    {
      id: "CARE-007",
      name: "Personal care tools",
      price: 149.99,
      categories: ["Coffee Maker", "Home & Kitchen", "Appliances"],
      image:
        "https://i.pinimg.com/736x/8e/79/dc/8e79dc31f0806e5e77c58ac9aab90506.jpg",
    },
    {
      id: "FASH-008",
      name: "Fashion accessories",
      price: 59.99,
      categories: ["Tools & Accessories", "Home & Kitchen", "DIY"],
      image:
        "https://i.pinimg.com/736x/4e/44/d7/4e44d7ad4049f0061cab179f566a0f37.jpg",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % service.length);
  }, []);

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
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

        {/* top deals */}
        <div className="w-full mt-5 p-2">
          <h1 className="text-start font-semibold text-lg">Half price store</h1>
          <div className="grid grid-cols-3  gap-5">
            {topdeals.map((items, i) => {
              const itemQuantity = getCartItemQuantity(items.id);
              return (
                <div
                  key={i}
                  className="flex flex-col justify-start items-center gap-5 flex-wrap  "
                >
                  <div className="relative">
                    <div className="bg-[#f9f9f9] rounded-full h-[80px] w-[80px] flex justify-center items-center overflow-hidden">
                      <img
                        src={items.img}
                        onClick={() => openModal(items)}
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
                      <div className="absolute opacity-60 cursor-pointer -bottom-2 right-0 border-green-600 border px-2 py-1 bg-white rounded-lg flex gap-2 vegitables-center">
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
                  <div className="flex flex-col ">
                    <h1 className="text-sm text-[#5d5d5d] ">
                      {items.name.length > 10
                        ? `${items.name.substring(0, 12)}...`
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
                        ? `${items.name.substring(0, 19)}...`
                        : items.name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[60] ">
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, stiffness: 1 }}
              className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[50vh] flex flex-col justify-between "
            >
              <div>
                <button
                  onClick={closeModal}
                  className="mt-5 p-2 bg-[#f2f2f2]  rounded-full absolute right-5 top-0 "
                >
                  <X size={20} />
                </button>
                <h2 className="text-xl font-semibold">
                  {selectedProduct.product}
                </h2>
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.product}
                  className=" w-full h-40 object-contain rounded-xl"
                />
                <div className="flex justify-between items-center ">
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-lg mt-2 font-semibold">
                      ₹{selectedProduct.price}
                    </p>
                    <div className="flex justify-end items-end gap-1">
                      <p className="text-xs line-through text-[#605e5e] pt-2">
                        ₹{selectedProduct.originalPrice}
                      </p>
                      <p className="text-xs text-blue-400">
                        {selectedProduct.discount} OFF
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="text-sm text-[#6a6969]">
                    {selectedProduct.description}
                  </h1>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(selectedProduct)} // Add to cart in the modal
                className={`flex justify-center items-center text-white border px-3 gap-2 py-3 rounded-xl mt-5 w-full  ${
                  getCartItemQuantity(selectedProduct.id) > 0
                    ? "bg-black opacity-50 cursor-not-allowed" // Change background to black if added
                    : "bg-green-700"
                }`}
                disabled={getCartItemQuantity(selectedProduct.id) > 0} // Disable the button if the product is in the cart
              >
                <h1 className="text-sm font-medium">
                  {getCartItemQuantity(selectedProduct.id) > 0
                    ? "View Cart"
                    : "Add to Cart"}
                </h1>
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
