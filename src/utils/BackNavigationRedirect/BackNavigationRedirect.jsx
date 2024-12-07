import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation

export default function BackNavigationRedirect() {
  const [backCount, setBackCount] = useState(0); // Track back count
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    const handlePopState = () => {
      // Only increment backCount if the user is actually going back
      setBackCount((prev) => prev + 1);
    };

    // Add event listener for 'popstate' (when going back in browser history)
    window.addEventListener("popstate", handlePopState);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    // If the user has pressed back 1 time, redirect them
    if (backCount === 1) {
      console.log("Going back 0 time, redirecting to home");
      navigate("/"); // Redirect to home page
      setBackCount(0); // Reset backCount to avoid continuous redirection
    }
  }, [backCount, navigate]);

  return null; // This component doesn’t need to render anything
}
