import { motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";

export default function Keyboards() {
  const keyboards = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      brand: "Logitech",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699607324/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302593_aem4mg.png?tr=w-400",
      originalPrice: "1500", // price in INR
      price: "1200", // Discounted Price in INR
      discount: "20%", // Discount Percentage
      description:
        "A high-performance mechanical keyboard with customizable RGB lighting, perfect for gamers and professionals alike.",
    },
    {
      id: 2,
      name: "Wireless Keyboard",
      brand: "Microsoft",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695715114/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/301496_jpokyk.png?tr=w-400",
      originalPrice: "800",
      price: "640",
      discount: "20%",
      description:
        "A wireless keyboard with a sleek design and responsive keys, perfect for home or office use.",
    },
    {
      id: 3,
      name: "Ergonomic Keyboard",
      brand: "Microsoft",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625614/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/169717_jffthy.png?tr=w-640",
      originalPrice: "900",
      price: "675",
      discount: "25%",
      description:
        "Ergonomically designed to reduce strain on wrists, this keyboard is perfect for long hours of typing and office work.",
    },
    {
      id: 4,
      name: "RGB Gaming Keyboard",
      brand: "Corsair",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017829/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/273929_0_gryjv7.png?tr=w-640",
      originalPrice: "1800",
      price: "1500",
      discount: "25%",
      description:
        "A gaming keyboard with vibrant RGB lighting and programmable keys for an immersive gaming experience.",
    },
    {
      id: 5,
      name: "Compact Keyboard",
      brand: "Razer",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714042445/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302590_0_db4e6g.png?tr=w-640",
      originalPrice: "1300",
      price: "1100",
      discount: "15%",
      description:
        "A compact, portable keyboard with mechanical switches, ideal for minimal desk setups and on-the-go use.",
    },
    {
      id: 6,
      name: "Quiet Keyboard",
      brand: "Logitech",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694400784/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/300625_yqnjhw.png?tr=w-640",
      originalPrice: "500",
      price: "380",
      discount: "24%",
      description:
        "A whisper-quiet keyboard with low-profile keys, perfect for office use or late-night typing sessions.",
    },
    {
      id: 7,
      name: "Mechanical Keypad",
      brand: "Keychron",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694400583/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/300623_bdtkw3.png?tr=w-400",
      originalPrice: "800",
      price: "600",
      discount: "25%",
      description:
        "A compact mechanical keypad with responsive switches, perfect for gamers or those who need a more ergonomic typing experience.",
    },
    {
      id: 8,
      name: "Gaming Keypad",
      brand: "Redragon",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681404541/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/203511_0_fvannx.png?tr=w-400",
      originalPrice: "700",
      price: "525",
      discount: "25%",
      description:
        "A mechanical gaming keypad with customizable keys and RGB lighting for a personalized gaming setup.",
    },
    {
      id: 9,
      name: "Multimedia Keyboard",
      brand: "HP",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858009/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302591_0_boeouv.png?tr=w-400",
      originalPrice: "700",
      price: "500",
      discount: "29%",
      description:
        "A multimedia keyboard with dedicated media keys and a quiet typing experience, great for home entertainment systems.",
    },
    {
      id: 10,
      name: "Bluetooth Keyboard",
      brand: "Apple",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712052669/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/241393_0_ar9req.png?tr=w-400",
      originalPrice: "1200",
      price: "1000",
      discount: "17%",
      description:
        "A sleek and portable Bluetooth keyboard from Apple, designed for wireless use with MacBooks and iPads.",
    },
  ];

  // State to manage modal visibility and selected product
  const [Keybord, iskeybord] = useState(keyboards);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const openModal = (product) => {
    setSelectedProduct(product); // Set the clicked product
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Reset the selected product
  };

  const handleAddToCart = (item) => {
    dispatch(productAdd(item));
  };

  const handleRemoveFromCart = (item) => {
    console.log("enter");
    dispatch(productRemove(item.id));
  };

  const getCartItemQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
      {Keybord < 0 ? (
        <div>
          <h1>Loading.........</h1>
        </div>
      ) : (
        <div>
          {/* Grid of products */}
          <div className="grid grid-cols-3 gap-5 p-3 mt-5">
            {Keybord.map((item) => {
              const itemQuantity = getCartItemQuantity(item.id); // Get the quantity of this item in the cart

              return (
                <div
                  key={item.id}
                  className="flex justify-between gap-3 items-center flex-col rounded-xl cursor-pointer relative "
                >
                  <div className="relative bg-[#f7f7f7] rounded-xl flex justify-center items-center">
                    <img
                      src={item.img}
                      onClick={() => openModal(item)} // Open modal with selected product
                      alt={item.product}
                      className="rounded-xl object-contain "
                    />
                    {/* Conditionally show "Add to Cart" or quantity controls */}
                    {itemQuantity === 0 ? (
                      <div
                        onClick={() => handleAddToCart(item)}
                        className="absolute -bottom-2 right-0 border-green-600 border px-1 py-1 bg-white rounded-lg"
                      >
                        <Plus size={20} />
                      </div>
                    ) : (
                      <div className="absolute -bottom-2 right-0 border-green-600 border px-2 py-1 bg-white rounded-lg flex gap-2 items-center">
                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          className="text-lg font-medium"
                        >
                          <Minus size={15} />
                        </button>
                        <h1 className="text-sm font-medium">{itemQuantity}</h1>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="text-lg font-medium"
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-sm text-start ">{item.name}</h1>
                    <p className="text-sm font-semibold tracking-wide">₹{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal */}
          {isModalOpen && selectedProduct && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50">
              <div className="flex justify-center items-center ">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25, stiffness: 1 }}
                  className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[55vh]"
                >
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
                  <p className="mt-3 text-sm">Brand: {selectedProduct.brand}</p>
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

                  <button
                    onClick={() => handleAddToCart(selectedProduct)} // Add to cart in the modal
                    className={`flex justify-center items-center text-white border px-3 gap-2 py-3 rounded-xl mt-5 w-full ${
                      getCartItemQuantity(selectedProduct.id) > 0
                        ? "bg-black opacity-50 cursor-not-allowed" // Change background to black if added
                        : "bg-green-700"
                    }`}
                    disabled={getCartItemQuantity(selectedProduct.id) > 0} // Disable the button if the product is in the cart
                  >
                    <h1 className="text-sm font-medium">
                      {getCartItemQuantity(selectedProduct.id) > 0
                        ? "Already Added"
                        : "Add to Cart"}
                    </h1>
                  </button>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
