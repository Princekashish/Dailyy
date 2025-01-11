// this is a splash screen of page
import { ShoppingBasket, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function GrocerySplashScreen() {
  return (
    <div className="fixed inset-0 bg-green-700 flex flex-col items-center justify-center ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-green-700 mb-4"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 ,duration:0.25}}
          src="/dailyylogo.png"
          alt=""
          className="h-[150px] w-[150px]"
        ></motion.img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-green-600 mb-4"
      >
        <img
          src="/blob_9d04d2ef1f-Photoroom.png"
          alt=""
          className="absolute bottom-0 -right-28  opacity-5"
        />
      </motion.div>
    </div>
  );
}
