import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function Signup_Installation({ setShowPopup }) {
  const popupRef = useRef(); // Reference for the popup container
  const [deferredPrompt, setDeferredPrompt] = useState(null); // Store the install prompt event
  const [isInstalled, setIsInstalled] = useState(false); // Track installation status

  useEffect(() => {
    // Check if the app is already installed (standalone mode)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Event listener to detect clicks outside of the popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close the popup if clicked outside
      }
    };

    // Event listener for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default browser prompt
      console.log("beforeinstallprompt event fired"); // Debugging step
      setDeferredPrompt(e); // Store the prompt event for later use
    };

    // Event listener to detect when the app is installed
    const handleAppInstalled = () => {
      setIsInstalled(true); // Mark app as installed
      setShowPopup(false); // Optionally close the popup after installation
    };

    // Add event listeners for beforeinstallprompt and appinstalled
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [setShowPopup]);

  // Handle install button click
  const handleDownloadClick = () => {
    console.log("Install button clicked"); // Debugging
    if (deferredPrompt) {
      console.log("Prompt available, showing the prompt..."); // Debugging
      deferredPrompt.prompt(); // Show the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA installation");
        } else {
          console.log("User dismissed the PWA installation");
        }
        setDeferredPrompt(null); // Reset the deferred prompt after use
      });
    } else {
      console.log("No deferred prompt available"); // Debugging message
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
        className="bg-green-700 rounded-t-3xl p-5 w-full absolute bottom-0 h-[40vh] overflow-hidden bg-[url('https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center"
      >
        <div className=" h-full relative ">
        <h1 className="text-white text-center">Welcome to Dailyy - Minutes Delivey app</h1>
          <div className="flex absolute  bottom-0 justify-center gap-5 w-full rounded-lg">
            <div className="w-full flex justify-center items-center rounded-lg bg-white absolute bottom-0 ">
              {!isInstalled && (
                <button
                  onClick={handleDownloadClick}
                  className="px-3 py-3 rounded-lg"
                >
                  Install Web App
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
