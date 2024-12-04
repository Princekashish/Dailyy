import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react"; // Added useRef

export default function Signup_Installation({ setShowPopup }) {
  const popupRef = useRef(null); // Reference for the popup container

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close the popup if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopup]);



  const handleInstallClick = () => {
    if (window.DeferredPrompt) {
      window.DeferredPrompt.prompt(); // Show the install prompt for PWA
    } else {
      alert("Web app installation is not supported.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <motion.div
        ref={popupRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, stiffness: 1 }}
        className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[45vh] overflow-hidden"
      >
        <div className="bg-[url('/rb_14931.png')] bg-cover bg-no-repeat bg-center h-[35vh] relative">
          <div className="flex absolute -bottom-10 justify-center gap-5 w-full rounded-lg">
            <div className="w-full flex justify-center items-center rounded-lg bg-green-700">
              <button
                onClick={handleInstallClick} // Trigger the install flow
                className="text-white px-3 py-3 rounded-lg"
              >
                Install Web App
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
