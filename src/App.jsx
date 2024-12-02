import React, { useEffect, useState } from "react";
import Router from "./Router";
import GrocerySplashScreen from "./components/GrocerySplace";
import { motion } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a page refresh/load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <GrocerySplashScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-Lexend "
    >
      <Router />
    </motion.div>
  );
}

export default App;
