import { motion } from "framer-motion";
import { Minus, X } from "lucide-react";
import React, { useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";

export default function Checkout() {
  const [viewCart, setViewCart] = useState(false);
  const closeModal = () => {
    setViewCart(false); // Close the modal
  };
  return (
    <>
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
                    className="p-1 bg-black/10   rounded-full "
                  >
                    <X />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
