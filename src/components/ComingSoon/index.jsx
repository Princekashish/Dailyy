import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 font-Lexend">

      {/* App wordmark */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-black italic tracking-tight text-green-700 mb-12 opacity-60"
      >
        instants
      </motion.p>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex flex-col items-center text-center gap-3"
      >
        {/* Headline */}
        <h1 className="text-4xl leading-none tracking-tight font-bold text-[#c0c0c0]">
          We are coming{" "}
          <motion.span
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            ❤️
          </motion.span>
        </h1>

        {/* Sub-line */}
        <p className="text-[#d3d3d3] text-xl px-1">
          We Deliver smile...
        </p>

        {/* Subtle animated dots */}
        <div className="flex gap-1.5 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-green-700 opacity-30"
            />
          ))}
        </div>
      </motion.div>

      {/* Return home — minimal ghost style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16"
      >
        <Link
          to="/"
          className="text-sm text-[#c0c0c0] hover:text-green-700 transition-colors duration-200 tracking-wide"
        >
          ← back to home
        </Link>
      </motion.div>

    </div>
  );
};

export default ComingSoon;