import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  productAdd,
  productRemove,
  selectCartTotal,
} from "../../Redux/Feature/Cart/CartSlice";
import Checkout from "../Checkout";

export default function Cart({ bottom }) {
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux state

  const [viewCart, setViewCart] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  // Check if cart has any items
  const hasItemsInCart = cart.length > 0;
  const price = useSelector(selectCartTotal);

  // Only show the first two items
  const firstTwoItems = cart.slice(0, 2);
  const closeModal = () => {
    setViewCart(false); // Close the modal
  };
  const handleRemoveFromCart = (item) => {
    dispatch(productRemove(item));
  };
  const handleAddToCart = (item) => {
    dispatch(productAdd(item));
  };
  const handleConfirmOrder = () => {
    console.log("true");
    setCheckout(!checkout);
    setViewCart(false);
  };
  const handleproduct = (item) => {
    setViewCart(false);
    setSelectedProduct(item); // Set the selected product
  };
  const productModal = () => {
    setSelectedProduct(false);
  };
  return (
    <div
      className={`fixed ${bottom} left-0 right-0 text-center z-20   p-4  flex items-center justify-center `}
    >
      <div
        onClick={() => setViewCart((pre) => !pre)}
        className={`flex justify-center items-center ${
          hasItemsInCart ? "bg-[#276c13] " : "hidden"
        } px-2 py-2 gap-2 rounded-full text-white`}
      >
        {/* Show the first two items' images */}
        <div className="relative flex justify-center items-center ">
          {firstTwoItems.map((item, index) => (
            <img
              key={item.id}
              src={item.img}
              alt={item.product}
              className={`w-10 h-10 object-cover rounded-full bg-white ${
                index === 0
                  ? "z-10  border-[2px] border-[#29541e]"
                  : "-ml-5 z-20 border-[2px] border-[#29541e]"
              }`}
            />
          ))}
        </div>

        {/* If the cart has items, show item count and "View Cart" button */}
        {hasItemsInCart && (
          <div className="flex  items-center justify-center gap-3">
            <div className="flex flex-col-reverse ">
              <h1 className="text-xs uppercase font-light ">
                {cart.length > 1
                  ? `${cart.length} Items`
                  : `${cart.length} Item`}
              </h1>
              {/* Button to view cart page */}
              <h1 className=" mt-2 text-sm">View Cart</h1>
            </div>
            <div className="flex justify-center items-center rounded-full bg-[#216011] p-3">
              <ChevronRight size={20} />
            </div>
          </div>
        )}
      </div>

      {/* viewCart */}
      {viewCart && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 h-screen  z-20 ">
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                stiffness: 1,
              }}
              className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[85vh]  "
            >
              <div className="flex flex-col gap-5 ">
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2">
                    <RiTimerFlashLine size={30} />
                    <div className="text-start flex flex-col justify-start items-start">
                      <h1 className="text-lg font-semibold ">
                        {" "}
                        Delivey in Minutes
                      </h1>
                      <p className="text-sm">Shipment of {cart.length} items</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-1 bg-black/10   rounded-full "
                  >
                    <X />
                  </button>
                </div>
                <div className="flex flex-col justify-between gap-5">
                  <div className=" h-[40vh] overflow-hidden overflow-y-scroll flex flex-col gap-3 no-scrollbar">
                    {cart.map((items) => (
                      <div
                        key={items.id}
                        className=" flex justify-between items-center "
                      >
                        <div className="flex justify-start items-center gap-2">
                          <div
                            onClick={() => handleproduct(items)}
                            className=" p-2 border rounded-3xl  border-gray-300 w-[80px] h-[80px] flex justify-center items-center"
                          >
                            <img
                              src={items.img}
                              alt=""
                              className="h-[80px] object-contain"
                            />
                          </div>
                          <div className="flex flex-col justify-start items-start gap-1">
                            <h1 className="text-sm">{items.name}</h1>
                            <p className="text-sm font-bold">₹{items.price}</p>
                          </div>
                        </div>

                        <div className="flex  border border-green-600 rounded-md p-1 bg-green-600 text-white gap-2">
                          <button
                            onClick={() => handleRemoveFromCart(items.id)}
                            className="text-lg font-medium "
                          >
                            <Minus size={15} />
                          </button>
                          <h1 className="text-sm font-medium">
                            {items.quantity}
                          </h1>
                          <button
                            onClick={() => handleAddToCart(items)}
                            className="text-lg font-medium"
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-col justify-start items-start mt-1 ">
                    <h1 className=" font-semibold text-lg">Order Details</h1>
                    <div className="bg-[#f8f8f8] rounded-xl h-[15vh] w-full  mt-2">
                      <div className="flex flex-col gap-1  rounded-lg p-3">
                        <div className="flex justify-between items-center font-semibold">
                          <h1 className="text-start ">Items Total</h1>
                          <p>₹{price}</p>
                        </div>
                        <div className="flex justify-between items-center ">
                          <h1 className="text-start ">Delivery Charge</h1>
                          <p className="text-green-600">Free</p>
                        </div>
                        <div className="flex justify-between items-center ">
                          <h1 className="text-start ">Packing Charge</h1>
                          <p className="text-green-600">Free</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <h1 className="text-green-600 text-sm font-semibold">
                        Total
                      </h1>
                      <p className="font-semibold text-lg ">₹{price + 20}</p>
                    </div>
                    <div
                      onClick={handleConfirmOrder}
                      className="bg-green-600  px-2 py-3  rounded-xl  "
                    >
                      <button className="text-white uppercase text-sm tracking-tight font-bold ">
                        Confirm order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 h-screen  z-20 ">
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                stiffness: 1,
              }}
              className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[50vh]  "
            >
              <div className="flex flex-col gap-5 ">
                <div className="flex justify-between items-center relative">
                  <button
                    onClick={productModal}
                    className="p-1 bg-black/10   rounded-full absolute right-0 top-1 "
                  >
                    <X />
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={selectedProduct.img}
                    alt=""
                    className=" w-full h-40 object-contain rounded-xl"
                  />
                  <div className="flex justify-between flex-col ">
                    <div className="flex justify-between items-center ">
                      <div className="flex justify-start items-center gap-2">
                        <p className="text-lg mt-2 font-semibold">
                          ₹{selectedProduct.price}
                        </p>
                        <div className="flex justify-end items-end gap-1">
                          <p className="text-xs line-through text-[#605e5e] pt-2">
                            ₹{selectedProduct.originalPrice}
                          </p>
                          <p className="text-xs text-blue-400 ">
                            {selectedProduct.discount} OFF
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-start">
                      <h1 className="text-sm text-[#6a6969]">
                        {selectedProduct.description}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div>{checkout && <Checkout price={price} />}</div>
    </div>
  );
}
