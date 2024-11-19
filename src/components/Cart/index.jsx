import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // For linking to the cart page
import {
  productAdd,
  productRemove,
  selectCartTotal,
} from "../../Redux/Feature/Cart/CartSlice";

export default function Cart({ bottom }) {
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux state

  const [viewCart, setViewCart] = useState(false);
  const dispatch = useDispatch();

  // Check if cart has any items
  const hasItemsInCart = cart.length > 0;
  const price = useSelector(selectCartTotal);
  console.log(price);
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
  return (
    <div
      className={`fixed ${bottom} left-0 right-0 text-center z-20   p-4  flex items-center justify-center`}
    >
      <div
        onClick={() => setViewCart((pre) => !pre)}
        className={`flex justify-center items-center ${
          hasItemsInCart ? "bg-[#276c13]" : " "
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

      {viewCart && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50  z-50  ">
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                stiffness: 1,
              }}
              className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[85vh] "
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
                    className="p-1 bg-[#484848]  text-white rounded-full "
                  >
                    <X />
                  </button>
                </div>
                <div className=" h-[40vh] overflow-hidden overflow-y-scroll flex flex-col gap-5">
                  {cart.map((items) => (
                    <div
                      key={items.id}
                      className=" flex justify-between items-center "
                    >
                      <div className=" p-2 border rounded-xl border-gray-300">
                        <img src={items.img} alt="" className="h-[60px]" />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-1">
                        <h1 className="text-sm">{items.product}</h1>
                        <p className="text-sm font-bold">{items.price}</p>
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
                        <p>{price}</p>
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
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
