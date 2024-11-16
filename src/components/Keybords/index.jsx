import { motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import ScrollTop from "../../utils/ScreenTop";

export default function Keybords() {
  const keyboards = [
    {
      id: 1,
      product: "Mechanical Keyboard",
      brand: "Logitech",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699607324/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302593_aem4mg.png?tr=w-400",
      price: "₹1500", // price in INR
      originalPrice: "₹1200", // Discounted Price in INR
      discount: "20%", // Discount Percentage
      description:
        "A high-performance mechanical keyboard with customizable RGB lighting, perfect for gamers and professionals alike.",
    },
    {
      id: 2,
      product: "Wireless Keyboard",
      brand: "Microsoft",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1695715114/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/301496_jpokyk.png?tr=w-400",
      price: "₹800",
      originalPrice: "₹640",
      discount: "20%",
      description:
        "A wireless keyboard with a sleek design and responsive keys, perfect for home or office use.",
    },
    {
      id: 3,
      product: "Ergonomic Keyboard",
      brand: "Microsoft",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697625614/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/169717_jffthy.png?tr=w-640",
      price: "₹900",
      originalPrice: "₹675",
      discount: "25%",
      description:
        "Ergonomically designed to reduce strain on wrists, this keyboard is perfect for long hours of typing and office work.",
    },
    {
      id: 4,
      product: "RGB Gaming Keyboard",
      brand: "Corsair",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017829/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/273929_0_gryjv7.png?tr=w-640",
      price: "₹1800",
      originalPrice: "₹1500",
      discount: "25%",
      description:
        "A gaming keyboard with vibrant RGB lighting and programmable keys for an immersive gaming experience.",
    },
    {
      id: 5,
      product: "Compact Keyboard",
      brand: "Razer",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1714042445/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302590_0_db4e6g.png?tr=w-640",
      price: "₹1300",
      originalPrice: "₹1100",
      discount: "15%",
      description:
        "A compact, portable keyboard with mechanical switches, ideal for minimal desk setups and on-the-go use.",
    },
    {
      id: 6,
      product: "Quiet Keyboard",
      brand: "Logitech",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694400784/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/300625_yqnjhw.png?tr=w-640",
      price: "₹500",
      originalPrice: "₹380",
      discount: "24%",
      description:
        "A whisper-quiet keyboard with low-profile keys, perfect for office use or late-night typing sessions.",
    },
    {
      id: 7,
      product: "Mechanical Keypad",
      brand: "Keychron",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694400583/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/300623_bdtkw3.png?tr=w-400",
      price: "₹800",
      originalPrice: "₹600",
      discount: "25%",
      description:
        "A compact mechanical keypad with responsive switches, perfect for gamers or those who need a more ergonomic typing experience.",
    },
    {
      id: 8,
      product: "Gaming Keypad",
      brand: "Redragon",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681404541/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/203511_0_fvannx.png?tr=w-400",
      price: "₹700",
      originalPrice: "₹525",
      discount: "25%",
      description:
        "A mechanical gaming keypad with customizable keys and RGB lighting for a personalized gaming setup.",
    },
    {
      id: 9,
      product: "Multimedia Keyboard",
      brand: "HP",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858009/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302591_0_boeouv.png?tr=w-400",
      price: "₹700",
      originalPrice: "₹500",
      discount: "29%",
      description:
        "A multimedia keyboard with dedicated media keys and a quiet typing experience, great for home entertainment systems.",
    },
    {
      id: 10,
      product: "Bluetooth Keyboard",
      brand: "Apple",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712052669/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/241393_0_ar9req.png?tr=w-400",
      price: "₹1200",
      originalPrice: "₹1000",
      discount: "17%",
      description:
        "A sleek and portable Bluetooth keyboard from Apple, designed for wireless use with MacBooks and iPads.",
    },
  ];

  // State to manage the modal visibility and selected product
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product); // Set the clicked product
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Reset the selected product
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 p-3 mt-5">
        {keyboards.map((item) => (
          <div
            key={item.id}
            className="flex justify-center gap-1 items-center flex-col rounded-xl cursor-pointer"
            onClick={() => openModal(item)} // Open modal on product click
          >
            <img
              src={item.img}
              alt={item.product}
              className="rounded-xl object-contain bg-[#f2f2f2]"
            />
            <h1 className="text-xs text-center">{item.product}</h1>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50  z-50  ">
        
          <div className="flex justify-center items-center ">
            <button
              onClick={closeModal}
              className="mt-5 p-2 bg-[#484848]  text-white rounded-full relative top-[120px]"
            >
              <X />
            </button>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                stiffness: 1,
              }}
              className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[65vh] "
            >
              <h2 className="text-xl font-semibold">
                {selectedProduct.product}
              </h2>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.product}
                className="mt-3 w-full h-48 object-contain rounded-xl"
              />
              <p className="mt-3 text-sm">Brand: {selectedProduct.brand}</p>
              <div className=" flex justify-between items-center ">
                <div className="flex  justify-start items-center gap-2">
                  <p className="text-lg mt-2 font-semibold">
                    {selectedProduct.originalPrice}
                  </p>
                  <div className="flex justify-end items-end gap-1">
                    <p className="text-xs line-through text-[#605e5e] pt-2">
                      {selectedProduct.price}
                    </p>
                    <p className="text-xs text-blue-400">
                      {selectedProduct.discount} OFF
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center bg-zinc-100 border px-3 gap-2 py-2 rounded-lg">
                  <button className="text-sm font-medium ">Add to cart</button>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-sm text-[#6a6969]">{selectedProduct.description}</h1>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
