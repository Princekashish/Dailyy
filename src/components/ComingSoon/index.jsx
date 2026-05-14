import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Sparkles, Layers } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="relative font-Lexend  flex flex-col items-center justify-center min-h-screen bg-white p-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10   p-10 rounded-3xl text-center max-w-lg w-full"
      >
        {/* Animated Illustration Group */}
        <div className="relative flex justify-center items-center h-40 mb-8">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20"
          >
            <div className="bg-gradient-to-tr from-green-700 to-green-500 p-5 rounded-2xl shadow-lg rotate-12">
              <Rocket size={48} className="text-white -rotate-12" />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute z-10 left-16 top-4 opacity-50"
          >
            <Sparkles size={32} className="text-green-400" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [-10, -5, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 right-14 bottom-2 opacity-60"
          >
            <Layers size={40} className="text-emerald-500" />
          </motion.div>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Exciting Things <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Are Coming</span>
        </h1>
        
        <p className="text-gray-600 mb-8 text-md leading-relaxed">
          We're crafting something special here. This page isn't ready yet, but we're working hard to launch it soon!
        </p>
        
        <Link
          to="/"
          className="group relative inline-flex items-center justify-center gap-2 bg-green-700 text-white font-medium py-3 px-8 rounded-xl overflow-hidden transition-all hover:bg-green-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="relative z-10">Return Home</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          />
        </Link>
      </motion.div>

      {/* Global CSS for blob animation (can be added directly here via inline style to keep it self-contained) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
};

export default ComingSoon;
