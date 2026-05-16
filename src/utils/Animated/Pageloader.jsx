import { motion } from "framer-motion";

export default function Pageloader() {
  return (
    <div className="h-[60vh]  flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-8 h-8 rounded-full  border-4 border-white/20 border-t-black"
      />
    </div>
  );
}