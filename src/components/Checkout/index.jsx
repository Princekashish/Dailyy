import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ChevronUp, Minus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Checkout({ price }) {
  const [viewcart, setViewCart] = useState(true);
  const [payment, setPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentOptions, setPaymentOptions] = useState(false); // Added state for payment options
  const [user, setUser] = useState("");
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");
  const [qrCodeVisible, setQrCodeVisible] = useState(false);
  const closeModal = () => {
    setViewCart(false); // Close the modal
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

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      // If user is not logged in, redirect to login page
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

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
              className="bg-white   rounded-t-3xl p-5 w-full absolute bottom-0 h-[85vh]  "
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
                <form className="flex flex-col gap-4   overflow-hidden overflow-y-scroll h-[80vh] no-scrollbar">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-start">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="py-2 px-3 border rounded-lg font-light text-gray-600"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="number" className="text-start">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      placeholder="Your Phone Number"
                      value={user?.phoneNumber || ""}
                      className="py-2 px-3 border rounded-lg font-light"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-start">
                      Flat,House no.., Building, Apartment
                    </label>
                    <input
                      id="address"
                      className="py-2 px-3 border rounded-lg"
                      required
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="address" className="text-start">
                      Landmark
                    </label>
                    <input
                      id="address"
                      className="py-2 px-3 border rounded-lg"
                      placeholder="E.g. near apollo hospital"
                      required
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="text-start">
                      Current Location (Google Maps Link)
                    </label>
                    <input
                      type="url"
                      id="location"
                      className="py-2 px-3 border rounded-lg"
                      placeholder="Google Maps Link"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handlepayment}
                    className="bg-black rounded-xl text-white font-bold  py-3  mb-20"
                  >
                    Submit
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
                    </div>
                  </div>
                  <div className="mt-10 flex justify-between items-center ">
                    <div className="flex flex-col justify-start items-start">
                      <div
                        className="flex justify-center items-center gap-2"
                        onClick={togglePaymentOptions}
                      >
                        <h1 className="uppercase text-sm ">Pay using</h1>
                        <ChevronUp size={15} />
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <h1 className="text-lg font-semibold">₹ {price}</h1>
                        <p>{selectedPayment}</p>
                      </div>
                    </div>
                    <button className="bg-green-700 w-1/2 py-3 text-white rounded-xl">
                      {" "}
                      Pay
                    </button>
                  </div>
                </motion.div>
              </div>
              {paymentOptions && (
                <div className="">
                  {/** Payment Options */}
                  <div className="flex flex-col gap-2 absolute min-h-[13vh] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 p-5 justify-between items-start rounded-2xl">
                    <label className="flex gap-3 justify-between items-center">
                      UPI
                      <input
                        type="radio"
                        name="payment"
                        value="UPI"
                        onChange={(e) => handlePaymentOption(e.target.value)}
                      />
                    </label>
                    {selectedPayment === "UPI" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.45 }}
                        className="h-[10vh]"
                      >
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="py-2 px-3 w-full border border-gray-300 rounded-xl outline-none font-light"
                          placeholder="UPI ID"
                        />
                        <button
                          onClick={validateUPI}
                          className=" text-sm text-start w-full text-blue-700 p-2 "
                        >
                          Validate UPI
                        </button>

                        {/** Error message if validation fails */}
                        {error && (
                          <p className="text-red-500 text-sm text-start mt-[-10px]">
                            {error}
                          </p>
                        )}
                      </motion.div>
                    )}
                    <label className="flex gap-3 justify-between items-center">
                      COD (Cash on delivery)
                      <input
                        type="radio"
                        name="payment"
                        value="COD"
                        onChange={(e) => handlePaymentOption(e.target.value)}
                      />
                    </label>
                    <label className="flex gap-3 justify-between items-center">
                      Scan QR code
                      <input
                        type="radio"
                        name="payment"
                        value="QR Code"
                        onChange={(e) => handlePaymentOption(e.target.value)}
                      />
                    </label>

                    {qrCodeVisible && (
                      <div className="mt-5 flex justify-center items-center flex-col">
                        <img
                          src="/qrcode.jpg" // Replace with the actual path to the QR code image
                          alt="QR Code"
                          className="w-32 h-32"
                        />
                        <p className="text-center mt-2">
                          Scan this QR code to make payment
                        </p>
                      </div>
                    )}
                  </div>

                  {/** UPI Input Box */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
