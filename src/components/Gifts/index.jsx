import React, { useState, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";
import axios from "axios";
import { API_BASE_URL } from "../../utils/api";
import Pageloader from "../../utils/Animated/Pageloader";

export default function Gifts() {
  const [vegetable, setVegetable] = useState([]);

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/v1/product/gift`);
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
    <div className="p-3  font-Lexend ">
      <div className="mt-10  ">
        <div>
          {vegetable.length === 0 ? (
           <Pageloader/>
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
                      <h1 className="text-[12px] ">{vegitable.title}</h1>
                      <p className="text-sm font-semibold text-start w-full">
                        ₹{vegitable.price}/Kg
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
                  {selectedProduct.product || selectedProduct.title || selectedProduct.name}
                </h2>
                <img
                  src={selectedProduct.images?.[0] || selectedProduct.img || selectedProduct.image}
                  alt={selectedProduct.product || selectedProduct.title || selectedProduct.name}
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
                className={`flex justify-center items-center text-white border px-3 gap-2 py-3 rounded-xl mt-5 w-full  ${getCartItemQuantity(selectedProduct.id) > 0
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
  );
}
