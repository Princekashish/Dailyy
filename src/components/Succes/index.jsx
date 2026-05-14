import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Package, ArrowLeft, Bike } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sucess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderedItems = [], paymentId, totalPrice } = location.state || {};
  
  const [deliveryMinutes, setDeliveryMinutes] = useState(15);
  const [showFullDetails, setShowFullDetails] = useState(false);

  useEffect(() => {
    if (orderedItems.length === 0) {
      navigate("/");
    } else {
      // Show only success checkmark for 3 seconds, then reveal details
      const timer = setTimeout(() => {
        setShowFullDetails(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [orderedItems, navigate]);

  if (orderedItems.length === 0) return null;

  // Calculate product sum in case totalPrice is not provided correctly, but prefer totalPrice
  const productsTotal = orderedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalPaidAmount = totalPrice || productsTotal;

  return (
    <div className="min-h-screen bg-white flex flex-col font-Lexend relative">
      {/* Header */}
      <div className="bg-white p-5 flex items-center gap-4 sticky top-0 z-10 border-b border-gray-50">
        <button onClick={() => navigate("/")} className="text-gray-800 hover:text-black transition-colors">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h1 className="text-xl font-medium tracking-tight text-gray-900">Order Confirmed</h1>
      </div>

      <div className="flex-1 p-6 pb-32 w-full flex flex-col">
        
        {/* Animated Success Checkmark (Visible for a few seconds, then fades out) */}
        <AnimatePresence>
          {!showFullDetails && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <CheckCircle size={48} className="text-green-700" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight text-center">Payment Successful!</h2>
              <p className="text-gray-500 font-light mt-2 text-center">Your order has been placed securely.</p>
              {paymentId && (
                <p className="text-xs text-gray-400 mt-2 font-mono bg-gray-50 px-3 py-1 rounded-full">
                  Txn ID: {paymentId}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>


        {/* Revealed details after delay */}
        <AnimatePresence>
          {showFullDetails && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Minimalist Delivery Status / Rider */}
              <div className="bg-white rounded-3xl p-6 border border-green-100 relative overflow-hidden shadow-sm shadow-green-900/5">
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">{deliveryMinutes} <span className="text-lg text-gray-400 font-normal">mins</span></h3>
                    <p className="text-green-700 text-sm font-medium flex items-center gap-2">
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      ></motion.span>
                      Assigning rider soon...
                    </p>
                  </div>
                  
                  {/* Moving Bike Icon */}
                  <div className="bg-green-50 p-4 rounded-2xl relative">
                    <motion.div
                      animate={{ x: [-2, 2, -2], y: [0, -1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Bike size={32} className="text-green-700" strokeWidth={1.5} />
                    </motion.div>
                    {/* Animated dashed line to simulate movement */}
                    <motion.div 
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 border-b-[1.5px] border-dashed border-green-300"
                      animate={{ x: [-6, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Ultra-Minimalist Order Details */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm shadow-gray-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <Package size={20} className="text-gray-400" strokeWidth={1.5} />
                  <h3 className="font-medium text-gray-800 tracking-tight">Order Details</h3>
                  <span className="ml-auto text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">{orderedItems.length} items</span>
                </div>
                
                <div className="flex flex-col gap-1 mb-2">
                  {orderedItems.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center py-3 border-b border-gray-50 last:border-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex justify-center items-center p-2">
                        <img src={item.images[0] || item.image || "/placeholder.png"} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-normal text-gray-900 text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-gray-400 font-light mt-0.5">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-medium text-gray-900 text-sm">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-light text-gray-500 text-sm">Total Paid Amount</span>
                  <span className="font-bold text-xl text-green-700 tracking-tight">
                    ₹{finalPaidAmount}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixed Bottom Action */}
      <AnimatePresence>
        {showFullDetails && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="fixed bottom-0 left-0 w-full p-6 bg-white border-t border-gray-50 z-20 "
          >
            <button
              onClick={() => navigate("/")}
              className="w-full flex justify-center bg-green-700 hover:bg-green-800 text-white font-medium py-4 rounded-full shadow-lg shadow-green-700/20 active:scale-[0.98] transition-all"
            >
              Continue Shopping
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
