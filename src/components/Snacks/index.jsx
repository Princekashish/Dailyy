import React, { useState, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";
import axios from "axios";
import { API_BASE_URL } from "../../utils/api";
import Pageloader from "../../utils/Animated/Pageloader";
import ProductModal from "../ProductModel";

export default function Snacks() {
  const [vegetable, setVegetable] = useState([]);

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/v1/product/snacks`);
        setVegetable(res.data);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
      }
    };
    fetchVegetables();
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
    dispatch(productRemove(item.id));
  };
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-3  font-Lexend ">
      <div className="mt-10  ">
        <div>
          {vegetable.length === 0 ? (
            <Pageloader />
          ) : (
            <div className="grid grid-cols-3 gap-3 p-3 mb-14">
              {vegetable.map((vegitable) => {
                const itemQuantity = getCartItemQuantity(vegitable._id || vegitable.id);
                return (
                  <div
                    key={vegitable._id || vegitable.id}
                    className="relative flex flex-col gap-1 justify-center items-center  "
                  >
                    <div className="relative ">
                      <div className="h-[100px] bg-[#f4f4f4]   rounded-full  w-[100px] flex justify-center items-center">
                        <img
                          src={vegitable.images?.[0] || vegitable.image}
                          onClick={() => openModal({ ...vegitable, id: vegitable._id || vegitable.id })}
                          alt=""
                          className=" h-[60px] object-contain"
                        />
                      </div>
                      {itemQuantity === 0 ? (
                        <div
                          onClick={() => handleAddToCart({ ...vegitable, id: vegitable._id || vegitable.id })}
                          className="absolute -bottom-1 right-0 border-green-700 border px-1 py-1 bg-white rounded-lg cursor-pointer opacity-60"
                        >
                          <Plus size={18} />
                        </div>
                      ) : (
                        <div className="absolute opacity-60 cursor-pointer -bottom-2 right-0 border-green-600 border px-2 py-1 bg-white rounded-lg flex gap-2 vegitables-center">
                          <button
                            onClick={() => handleRemoveFromCart({ id: vegitable._id || vegitable.id })}
                            className="text-lg font-medium"
                          >
                            <Minus size={15} />
                          </button>
                          <h1 className="text-sm font-medium">
                            {itemQuantity}
                          </h1>
                          <button
                            onClick={() => handleAddToCart({ ...vegitable, id: vegitable._id || vegitable.id })}
                            className="text-lg font-medium"
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center items-center flex-col    p-1">
                      <h1 className="text-[12px] line-clamp-2">{vegitable.title}</h1>
                      <p className="text-sm font-semibold text-start w-full">
                        ₹{vegitable.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
