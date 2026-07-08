import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/config/Firebase";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/Feature/Auth/AuthSlice";
import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function OTPLoginModal({ onClose }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(loginSuccess(user));
      onClose();
    } catch (err) {
      console.error("Google Login Error:", err);
      setError("Failed to login with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-[60]"
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <motion.div
        key="sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 320 }}
        className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-3xl p-6 pb-12 md:w-1/3 md:mx-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Logo + heading */}
        <div className="flex flex-col items-center mb-6 gap-1">
          <img src="/dailyylogo.png" alt="Dailyy" className="h-14 w-14 mb-1" />
          <h2 className="text-xl font-bold text-gray-800">
            Login / Sign Up
          </h2>
          <p className="text-sm text-gray-400 text-center">
            Get everything delivered in minutes
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-2 mb-4">
            <p className="text-red-600 text-xs text-center">{error}</p>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-white border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <FcGoogle size={20} />
          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        <p className="text-[10px] text-gray-400 text-center mt-4 leading-relaxed">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span> &{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
