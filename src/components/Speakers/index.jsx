import { motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import ProductModal from "../ProductModel";

export default function Speakers() {
  const speakers = [
    {
      id: 1,
      product: "Wireless Bluetooth Speaker",
      brand: "Bose",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697626320/Croma%20Assets/Communication/Speakers%20and%20Media%20Players/Images/273214_a7kr8r.png?tr=w-400",
      price: "₹9500",
      originalPrice: "₹12000",
      discount: "21%",
      description:
        "A portable Bluetooth speaker with deep, clear sound and strong bass, perfect for indoor and outdoor use.",
    },
    {
      id: 2,
      product: "Smart Speaker",
      brand: "Amazon",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730271304/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/301438_0_x5lek1.png?tr=w-400",
      price: "₹4000",
      originalPrice: "₹4999",
      discount: "20%",
      description:
        "A voice-controlled smart speaker with Alexa built-in, perfect for controlling smart home devices and streaming music.",
    },
    {
      id: 3,
      product: "Portable Speaker",
      brand: "JBL",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730269447/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/268832_0_b4l0hq.png?tr=w-400",
      price: "₹6999",
      originalPrice: "₹8499",
      discount: "17%",
      description:
        "A rugged, portable speaker with 12 hours of playtime and waterproof features for outdoor adventures.",
    },
    {
      id: 4,
      product: "Home Theater Speaker System",
      brand: "Sony",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684942550/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/263532_0_haxqbo.png?tr=w-400",
      price: "₹25000",
      originalPrice: "₹30000",
      discount: "17%",
      description:
        "A 5.1 channel home theater speaker system offering immersive sound quality with subwoofer support for a theater-like experience.",
    },
    {
      id: 5,
      product: "Bluetooth Speaker",
      brand: "Xiaomi",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675866261/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/251581_0_n2xlfo.png?tr=w-400",
      price: "₹1200",
      originalPrice: "₹1500",
      discount: "20%",
      description:
        "A compact and affordable Bluetooth speaker with 10 hours of battery life and good sound quality for everyday use.",
    },
    {
      id: 6,
      product: "Party Speaker",
      brand: "Philips",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718802710/Croma%20Assets/Computers%20Peripherals/Speakers%20and%20Media%20Players/Images/301439_0_awmdap.png?tr=w-400",
      price: "₹15999",
      originalPrice: "₹20000",
      discount: "20%",
      description:
        "A high-powered speaker with LED lights, deep bass, and multiple connectivity options for parties and gatherings.",
    },
    {
      id: 7,
      product: "Soundbar",
      brand: "Samsung",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675867261/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/231532_0_emnvus.png?tr=w-400",
      price: "₹8000",
      originalPrice: "₹10000",
      discount: "20%",
      description:
        "A sleek and stylish soundbar with Dolby Atmos support and wireless subwoofer for enhanced audio quality.",
    },
    {
      id: 8,
      product: "Wireless Speaker",
      brand: "LG",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1665448065/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/248463_0_x3ru6o.png?tr=w-400",
      price: "₹10999",
      originalPrice: "₹12999",
      discount: "15%",
      description:
        "A high-quality wireless speaker with superior sound, ideal for both indoors and outdoor use, with 10 hours of battery life.",
    },
    {
      id: 9,
      product: "Mini Bluetooth Speaker",
      brand: "Anker",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730268922/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/302460_0_ghr55f.png?tr=w-400",
      price: "₹1000",
      originalPrice: "₹1200",
      discount: "17%",
      description:
        "A pocket-sized Bluetooth speaker with impressive sound quality, perfect for on-the-go use.",
    },
    {
      id: 10,
      product: "Portable Sound System",
      brand: "Sony",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730268570/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/302458_0_nhjm3g.png?tr=w-400",
      price: "₹24999",
      originalPrice: "₹29999",
      discount: "17%",
      description:
        "A portable sound system with powerful bass and clear sound, ideal for outdoor events and parties.",
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
        {speakers.map((item) => (
          <div
            key={item.id}
            className="flex justify-start  items-center flex-col rounded-xl cursor-pointer gap-2"
            onClick={() => openModal(item)} // Open modal on product click
          >
            <div className="relative bg-[#f7f7f7]">
              <img
                src={item.img}
                alt={item.product}
                className="rounded-xl object-contain  "
              />
              <div className="absolute -bottom-2 right-0  border-green-600 border px-2 py-1 bg-white rounded-lg">
                <h1 className="text-sm">Add</h1>
              </div>
            </div>
            <h1 className="text-xs ">{item.product}</h1>
          </div>
        ))}
      </div>

      {
        <ProductModal isOpen={isModalOpen}
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={(product) => dispatch(productAdd(product))}
          getQuantity={(id) => cart.find(i => i.id === id)?.quantity ?? 0} />
      }
    </div>
  );
}
