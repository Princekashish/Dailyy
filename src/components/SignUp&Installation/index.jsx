import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

export default function Signup_Installation({ setShowPopup }) {
  const handleClose = () => {
    setShowPopup(false);
    console.log("closing");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50"
    >
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, stiffness: 1 }}
          className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[45vh]"
        >
          <button
            onClick={handleClose}
            className="text-sm py-1 font-light bg-black/45 text-white rounded-full absolute right-5 top-4 px-5  cursor-pointer z-50"
          >
            Skip
          </button>
          <div className="bg-[url('/rb_14931.png')] bg-cover bg-no-repeat bg-center h-[35vh] relative">
            <div className="flex absolute -bottom-10 justify-center gap-5 w-full rounded-lg">
              <div className="w-full flex justify-center items-center rounded-lg bg-green-700 ">
                <button className=" text-white px-3 py-3 rounded-lg">
                  Login
                </button>
              </div>
              <div className="w-full flex justify-center items-center rounded-lg bg-green-700 ">
                <button className=" text-white px-3 py-3 rounded-lg">
                  Install web app
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
