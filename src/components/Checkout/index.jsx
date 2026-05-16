import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ChevronUp, Minus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../Redux/Feature/Cart/CartSlice";

export default function Checkout({ price }) {
  const cartss = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [viewcart, setViewCart] = useState(true);
  const [payment, setPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentOptions, setPaymentOptions] = useState(false); // Added state for payment options
  const [user, setUser] = useState("");
  const [addressData, setAddressData] = useState({
    name: "",
    number: user?.phoneNumber || "",
    address: "",
    landmark: "",
    location: ""
  });
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  const handleAddressChange = (e) => {
    setAddressData({ ...addressData, [e.target.id]: e.target.value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Address Data:", addressData);
    handlepayment();
  };
  const closeModal = () => {
    setViewCart(false); // Close the modal
    setPayment(false); // Close the payment modal
  };
  const handlepayment = () => {
    setPayment(!payment);
    setViewCart(false);
  };

  const handlePaymentOption = (option) => {
    setSelectedPayment(option);
    setQrCodeVisible(false); // Hide QR code by default
    if (option === "COD") {
      setPaymentOptions(false); // Hide the payment options when COD is selected
    } else if (option === "QR Code") {
      setQrCodeVisible(true); // Show the QR code if "Scan QR Code" is selected
    } else {
      setPaymentOptions(true); // Show payment options if not COD or QR Code
    }
  };

  const togglePaymentOptions = () => {
    // Defined togglePaymentOptions function
    setPaymentOptions(!paymentOptions);
  };
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (!storedUser) {
  //     // If user is not logged in, redirect to login page
  //     navigate("/login");
  //   } else {
  //     setUser(storedUser);
  //   }
  // }, [navigate]);

  // Validate UPI ID
  const validateUPI = () => {
    const upiRegex = /^[a-zA-Z0-9._%-]+@(?:[a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/; // Simple UPI regex pattern
    if (upiRegex.test(upiId)) {
      setError(""); // Clear error if valid
      alert("UPI ID is valid!");
    } else {
      setError("Invalid UPI ID");
    }
  };
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    try {
      const res = await loadRazorpayScript();

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      // Convert price to number and handle potential NaN
      const amountInPaise = Math.round(Number(price) * 100);

      const options = {
        // You can put your test key here directly, or use an env variable
        key: import.meta.env.VITE_RAZORPAY_TEST_KEY || "YOUR_TEST_KEY_HERE", 
        amount: amountInPaise, 
        currency: "INR",
        name: "Instants",
        description: "Test Transaction",
        image: "/logo.png", // Make sure this path exists or replace with your actual logo
        handler: function (response) {
          const orderedItems = [...cartss];
          dispatch(clearCart());
          closeModal();
          navigate("/success", { state: { orderedItems, paymentId: response.razorpay_payment_id } });
        },
        prefill: {
          name: "Test User", // Ideally dynamically populated from user state
          email: "test.user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#15803d", // Tailwind green-700 to match your app theme
        },
      };

      const paymentObject = new window.Razorpay(options);
      
      paymentObject.on('payment.failed', function (response){
        alert("Payment Failed! Reason: " + response.error.description);
      });

      paymentObject.open();
    } catch (error) {
      console.error("Payment process failed:", error.message);
    }
  };

  return (
    <>
      {viewcart && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50  z-50  ">
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.25, stiffness: 1 }}
              className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[77vh]  "
            >
              <div className="flex flex-col gap-5 ">
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2">
                    <RiTimerFlashLine size={30} />
                    <div className="text-start flex flex-col justify-start items-start">
                      <h1 className="text-lg font-semibold "> Your Address</h1>
                      <p className="text-sm">Delivey in Minutes</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-1 bg-black/10   rounded-full "
                  >
                    <X />
                  </button>
                </div>
                <form onSubmit={handleAddressSubmit} className="flex flex-col gap-4 overflow-hidden overflow-y-scroll h-[80vh] no-scrollbar pb-20">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-start text-sm font-medium text-gray-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      value={addressData.name}
                      onChange={handleAddressChange}
                      className="py-2.5 px-3 border border-gray-200 bg-gray-50 rounded-xl font-light text-gray-800 outline-none focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="number" className="text-start text-sm font-medium text-gray-700">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      placeholder="Your Phone Number"
                      value={addressData.number}
                      onChange={handleAddressChange}
                      className="py-2.5 px-3 border border-gray-200 bg-gray-50 rounded-xl font-light text-gray-800 outline-none focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="address" className="text-start text-sm font-medium text-gray-700">
                      Flat, House no., Building, Apartment
                    </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="e.g., Flat 101, Green View Apt"
                      value={addressData.address}
                      onChange={handleAddressChange}
                      className="py-2.5 px-3 border border-gray-200 bg-gray-50 rounded-xl font-light text-gray-800 outline-none focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                      
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="landmark" className="text-start text-sm font-medium text-gray-700">
                      Landmark
                    </label>
                    <input
                      type="text"
                      id="landmark"
                      placeholder="e.g., Near Apollo Hospital"
                      value={addressData.landmark}
                      onChange={handleAddressChange}
                      className="py-2.5 px-3 border border-gray-200 bg-gray-50 rounded-xl font-light text-gray-800 outline-none focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                      
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 mb-2">
                    <label htmlFor="location" className="text-start text-sm font-medium text-gray-700">
                      Current Location (Google Maps Link)
                    </label>
                    <input
                      type="url"
                      id="location"
                      placeholder="https://maps.google.com/..."
                      value={addressData.location}
                      onChange={handleAddressChange}
                      className="py-2.5 px-3 border border-gray-200 bg-gray-50 rounded-xl font-light text-gray-800 outline-none focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-green-900/20 transition-all flex items-center justify-center uppercase tracking-wider text-sm mt-2"
                  >
                    Proceed to Payment
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      <div>
        {payment && (
          <div className="relative">
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50  z-50  ">
              <div className="flex justify-center items-center ">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.25, stiffness: 1 }}
                  className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[25vh]   "
                >
                  <div className="flex flex-col gap-5 ">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-start items-center gap-2 flex-col">
                        <div className="text-start flex flex-col justify-start items-start">
                          <h1 className="text-lg font-semibold "> Payment</h1>
                          <p className="text-sm">Delivey in Minutes</p>
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
                  <div className="mt-10 flex justify-between items-center ">
                    <div className="flex flex-col justify-start items-start">
                      <div
                        className="flex justify-center items-center gap-2"
                      // onClick={togglePaymentOptions}
                      >
                        <h1 className="uppercase text-sm ">Total amount</h1>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h1 className="text-lg font-semibold">₹ {price}</h1>
                        <p>{selectedPayment}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        closeModal();
                        navigate("/payment-method", { state: { price } });
                      }}
                      className="bg-green-700 w-1/2 py-3 text-white rounded-xl"
                    >
                      {" "}
                      Proceed to Pay
                    </button>
                  </div>
                </motion.div>
              </div>
             
            </div>
          </div>
        )}
      </div>
    </>
  );
}
