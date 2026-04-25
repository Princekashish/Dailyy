import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Package, ArrowLeft, Clock } from "lucide-react";

export default function Sucess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderedItems = [], paymentId } = location.state || {};
  
  // Example estimated time calculation (e.g., random between 10-25 mins)
  const [deliveryMinutes, setDeliveryMinutes] = useState(15);

  useEffect(() => {
    if (orderedItems.length === 0) {
      // If someone visits /success directly without ordering, redirect them home
      navigate("/");
    }
  }, [orderedItems, navigate]);

  if (orderedItems.length === 0) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-Lexend">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex items-center gap-3">
        <button onClick={() => navigate("/")} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Order Confirmed</h1>
      </div>

      <div className="flex-1 p-4 pb-24 max-w-lg mx-auto w-full">
        {/* Success Banner */}
        <div className="bg-green-600 rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center shadow-lg shadow-green-200 mb-6 mt-4">
          <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm">
            <CheckCircle size={48} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-1">Payment Successful!</h2>
          <p className="text-green-100 text-sm">Your order has been placed securely.</p>
          {paymentId && (
            <p className="text-xs bg-white/10 px-3 py-1 rounded-full mt-3">
              Txn ID: {paymentId}
            </p>
          )}
        </div>

        {/* Delivery Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6 flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <Clock size={28} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Arriving in {deliveryMinutes} minutes</h3>
            <p className="text-sm text-gray-500">Your order is being packed</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-50 bg-gray-50/50 flex items-center gap-2">
            <Package size={20} className="text-gray-600" />
            <h3 className="font-bold text-gray-800">Order Items ({orderedItems.length})</h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            {orderedItems.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex justify-center items-center p-2 border border-gray-100">
                  <img src={item.img || item.image || "/placeholder.png"} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm line-clamp-2">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                </div>
                <div className="font-bold text-gray-900">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center">
            <span className="font-medium text-gray-600">Total Amount</span>
            <span className="font-bold text-xl text-gray-900">
              ₹{orderedItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] z-20">
        <button
          onClick={() => navigate("/")}
          className="w-full max-w-lg mx-auto flex justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_12px_rgba(22,163,74,0.3)] active:scale-[0.98] transition-all text-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
