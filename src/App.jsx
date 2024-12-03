import React, { useEffect, useState } from "react";
import Router from "./Router";
import GrocerySplashScreen from "./components/GrocerySplace"; // Splash Screen Component
import { motion } from "framer-motion";
import Signup_Installation from "./components/SignUp&Installation"; // Popup Component

function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [showPopup, setShowPopup] = useState(false); 

  useEffect(() => {
    // Simulate a page refresh/load
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide splash screen
      setShowPopup(true); // Show the popup after 3 seconds
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
      <Router />
      {/* Show the signup popup after splash screen */}
      {showPopup && <Signup_Installation setShowPopup={setShowPopup} />}
    </motion.div>
  );
}

export default App;
