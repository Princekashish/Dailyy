import React, { useEffect, useState } from "react";
import Router from "./Router";
import GrocerySplashScreen from "./components/GrocerySplace"; // Splash Screen Component
import { motion } from "framer-motion";
import Signup_Installation from "./components/SignUp&Installation";


function App() {
  const [isLoading, setIsLoading] = useState(true); // For splash screen loading state
  const [showPopup, setShowPopup] = useState(false); // State to control showing the Signup_Installation component

  useEffect(() => {
    // Simulate a page refresh/load
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide splash screen after 3 seconds
      setShowPopup(true); // Show the popup after splash screen
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <GrocerySplashScreen />; // Show splash screen while loading
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-Lexend"
    >
      {/* Render the Router after the splash screen */}

      <Router />

      {/* Conditionally render the Signup_Installation popup */}
      {showPopup && <Signup_Installation setShowPopup={setShowPopup} />}
    </motion.div>
  );
}

export default App;
