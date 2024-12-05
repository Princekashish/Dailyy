import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function Signup_Installation({ setShowPopup }) {
  const popupRef = useRef(); // Reference for the popup container
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the install prompt event
  const [isInstalled, setIsInstalled] = useState(false); // Track installation status

  useEffect(() => {
    // Define event listeners for A2HS
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close the popup if clicked outside
      }
    };

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent default browser prompt
      setDeferredPrompt(e); // Store the prompt event
    };

    const handleAppInstalled = () => {
      setIsInstalled(true); // Mark app as installed
      setShowPopup(false); // Optionally close the popup after installation
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [setShowPopup]);

  // Handle install button click
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Trigger the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome); // Log user choice (accepted/rejected)
        setDeferredPrompt(null); // Clear the stored prompt event
      });
    } else {
      alert("Web app installation is not supported.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[60] flex justify-center items-center "
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
              {!isInstalled ? (
                <button
                  onClick={handleInstallClick}
                  className="text-white px-3 py-3 rounded-lg"
                >
                  Install Web App
                </button>
              ) : (
                <span className="text-white">App Installed</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
