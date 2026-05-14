import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../Redux/Feature/Cart/CartSlice";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CreditCard, Banknote, CheckCircle2, Circle } from "lucide-react";

export default function PaymentMethod() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartss = useSelector((state) => state.cart.items);
  const price = location.state?.price || 0;

  const [paymentType, setPaymentType] = useState("UPI"); // 'UPI' or 'COD'


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleOnlinePayment = async () => {

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const amountInPaise = Math.round(Number(price) * 100);
      const options = {
        key: import.meta.env.VITE_RAZORPAY_TEST_KEY || "YOUR_TEST_KEY_HERE",
        amount: amountInPaise,
        currency: "INR",
        name: "Dailly",
        description: "Payment for your order",
        image: "/logo.png",
        handler: function (response) {
          const orderedItems = [...cartss];
          dispatch(clearCart());
          navigate("/success", { state: { orderedItems, paymentId: response.razorpay_payment_id, method: "UPI", totalPrice: price } });
        },
        prefill: {
          name: "Dailly Customer",
          email: "customer@dailly.com",
          contact: "9999999999",
        },
        theme: {
          color: "#15803d",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        alert("Payment Failed! Reason: " + response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.error("Payment process failed:", error.message);
    }
  };

  const handleCODPayment = () => {
    const orderedItems = [...cartss];
    dispatch(clearCart());
    navigate("/success", { state: { orderedItems, paymentId: "COD-" + Date.now(), method: "COD", totalPrice: price } });
  };

  const handleConfirmPayment = () => {
    if (paymentType === "COD") {
      handleCODPayment();
    } else {
      handleOnlinePayment();
    }
  };

  if (!price && cartss.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <p className="mb-4 text-gray-500 font-light">Your cart is empty.</p>
        <button onClick={() => navigate("/")} className="bg-green-700 text-white px-8 py-3 rounded-full text-sm">Return Home</button>
      </div>
    );
  }

  return (
    <div className="font-Lexend min-h-screen bg-white flex flex-col">
      {/* Minimal Header */}
      <div className="bg-white px-6 py-5 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-gray-800 hover:text-black transition-colors">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        <h1 className="text-xl font-medium tracking-tight text-gray-900">Payment</h1>
      </div>

      <div className="px-6 flex-1 flex flex-col gap-10 mt-2">
        {/* Sleek Total Display */}
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-sm text-gray-400 font-light mb-1">Total to pay</p>
          <h2 className="text-5xl font-semibold text-gray-900 tracking-tight">₹{price}</h2>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 ml-1">Select Method</h3>
          
          <div className="flex flex-col gap-3">
            {/* UPI Option */}
            <label className={`relative flex flex-col p-5 rounded-3xl transition-all cursor-pointer ${paymentType === "UPI" ? "bg-green-50/50 ring-1 ring-green-600/20" : "bg-gray-50 hover:bg-gray-100/80"}`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-2xl ${paymentType === "UPI" ? "bg-white text-green-700 shadow-sm" : "bg-white text-gray-400"}`}>
                    <CreditCard size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className={`block font-medium ${paymentType === "UPI" ? "text-green-900" : "text-gray-700"}`}>Pay Online</span>
                    <span className="text-xs text-gray-400 mt-0.5 block font-light">UPI, Cards, Netbanking</span>
                  </div>
                </div>
                <div>
                  {paymentType === "UPI" ? (
                    <CheckCircle2 size={24} className="text-green-600" strokeWidth={1.5} />
                  ) : (
                    <Circle size={24} className="text-gray-300" strokeWidth={1} />
                  )}
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={paymentType === "UPI"}
                  onChange={() => setPaymentType("UPI")}
                  className="hidden"
                />
              </div>
            </label>

            {/* COD Option */}
            <label className={`relative flex items-center justify-between p-5 rounded-3xl transition-all cursor-pointer ${paymentType === "COD" ? "bg-green-50/50 ring-1 ring-green-600/20" : "bg-gray-50 hover:bg-gray-100/80"}`}>
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-2xl ${paymentType === "COD" ? "bg-white text-green-700 shadow-sm" : "bg-white text-gray-400"}`}>
                  <Banknote size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span className={`block font-medium ${paymentType === "COD" ? "text-green-900" : "text-gray-700"}`}>Cash on Delivery</span>
                  <span className="text-xs text-gray-400 mt-0.5 block font-light">Pay when it arrives</span>
                </div>
              </div>
              <div>
                {paymentType === "COD" ? (
                  <CheckCircle2 size={24} className="text-green-600" strokeWidth={1.5} />
                ) : (
                  <Circle size={24} className="text-gray-300" strokeWidth={1} />
                )}
              </div>
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentType === "COD"}
                onChange={() => setPaymentType("COD")}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Minimal Sticky Bottom Button */}
      <div className="p-6 bg-white pb-8">
        <button
          onClick={handleConfirmPayment}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-4 rounded-full flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          {paymentType === "COD" ? "Confirm Order" : `Pay ₹${price}`}
        </button>
      </div>
    </div>
  );
}
