import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Package, ArrowLeft, Bike, MapPin, ChevronRight, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Success() {

  const G = {
  primary: "#15803d",
  dark:    "#166534",
  deeper:  "#14532d",
  light:   "#f0fdf4",
  light2:  "#dcfce7",
  mid:     "#86efac",
  bg:      "#f0fdf4",
  text:    "#14532d",
};

  const location = useLocation();
  const navigate = useNavigate();
  const { orderedItems = [], paymentId, totalPrice } = location.state || {};

  const [deliveryMinutes, setDeliveryMinutes] = useState(15);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(1);
  const totalBanners = 9;

  useEffect(() => {
    if (orderedItems.length === 0) {
      navigate("/");
    } else {
      const timer = setTimeout(() => setShowFullDetails(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [orderedItems, navigate]);

  if (orderedItems.length === 0) return null;

  const productsTotal = orderedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const finalPaidAmount = totalPrice || productsTotal;
  const savedAmount = Math.round(finalPaidAmount * 0.08);

  return (
    <div
      className="min-h-screen flex flex-col font-sans relative overflow-x-hidden"
      style={{ backgroundColor: "#f3f3f7", fontFamily: "'DM Sans', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ── Animated Success Overlay ── */}
      <AnimatePresence>
        {!showFullDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ backgroundColor: "#fff" }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
             
              transition={{ duration: 1.3, times: [0, 0.6, 1] }}
              className="absolute w-56 h-56 rounded-full"
              style={{ backgroundColor: G.primary }}
            />

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute top-16 text-2xl font-black italic tracking-tight"
              style={{ color: G.primary }}
            >
              instants
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="w-24 h-24 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: G.light }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.22, type: "spring", stiffness: 260, damping: 14 }}
              >
                <CheckCircle size={48} strokeWidth={1.8} style={{ color: G.primary }} />
              </motion.div>
            </motion.div>

            <h2 className="text-2xl font-bold text-center tracking-tight" style={{ color: G.text }}>
              Payment Successful!
            </h2>
            <p className="text-sm mt-2 text-center" style={{ color: "#888" }}>
              Your order has been placed securely.
            </p>
            {paymentId && (
              <p
                className="text-xs mt-3 font-mono px-4 py-1.5 rounded-full"
                style={{ color: G.primary, backgroundColor: G.light }}
              >
                Txn ID: {paymentId}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Content ── */}
      <AnimatePresence>
        {showFullDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col"
          >
            {/* ── BANNER / AD CARD ── */}
            <div
              className="relative w-full overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${G.dark} 55%, ${G.dark})` }}
            >
              {/* Back button */}
              <button
                onClick={() => navigate("/")}
                className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
              >
                <ArrowLeft size={18} color="#fff" strokeWidth={2} />
              </button>

              {/* Banner visual */}
              <div className="pt-12 pb-5 px-5 flex flex-col items-center text-center">
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Order Confirmed ✓
                </p>
                <h1
                  className="text-xl font-semibold mt-1 leading-snug"
                  style={{ color: "#fff" }}
                >
                  Preparing your order
                </h1>

                {/* Fake map illustration */}
                {/* <div
                  className="mt-4 w-full rounded-2xl overflow-hidden relative"
                  style={{
                    height: 50,
                    background: "linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 40%, #81c784 100%)",
                  }}
                > */}
                  {/* Road */}
                  {/* <div
                    className="absolute"
                    style={{
                      top: "50%",
                      left: 0,
                      right: 0,
                      height: 22,
                      backgroundColor: "#e0e0e0",
                      transform: "translateY(-50%) rotate(-8deg) scaleX(1.3)",
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      top: "30%",
                      left: 0,
                      right: 0,
                      height: 18,
                      backgroundColor: "#eeeeee",
                      transform: "rotate(15deg) scaleX(1.4)",
                    }}
                  /> */}
                  {/* Store pin */}
                  {/* <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute flex flex-col items-center"
                    style={{ left: "18%", top: "28%" }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: G.primary }}>
                      <span className="text-white text-sm font-black ">I</span>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full mt-0.5"
                      style={{ backgroundColor: "#008236" }}
                    />
                  </motion.div> */}
                  {/* Home pin */}
                  {/* <div
                    className="absolute flex flex-col items-center"
                    style={{ right: "18%", bottom: "20%" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <span className="text-lg">🏠</span>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full mt-0.5"
                      style={{ backgroundColor: "#555" }}
                    />
                  </div> */}
                  {/* Animated rider */}
                  {/* <motion.div
                    animate={{ x: [0, 90, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute"
                    style={{ left: "22%", top: "48%" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shadow"
                      style={{ backgroundColor: `${G.primary}`}}
                    >
                      <Bike size={16} color="#fff" strokeWidth={2} />
                    </div>
                  </motion.div> */}
                  {/* Dashed path */}
                  {/* <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 300 160"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 60 80 Q 150 40 240 110"
                      stroke="#7b2ff7"
                      strokeWidth="2"
                      strokeDasharray="6,5"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg> */}
                {/* </div> */}
              </div>

              {/* Dot indicators */}
              {/* <div className="flex justify-center gap-1.5 pb-4">
                {Array.from({ length: totalBanners }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all"
                    style={{
                      width: i === currentBannerIndex ? 20 : 6,
                      height: 6,
                      backgroundColor: i === currentBannerIndex ? "#fff" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div> */}
            </div>

            {/* ── DELIVERY STATUS CARD ── */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-3 -mt-4 rounded-3xl overflow-hidden shadow-xl"
              style={{ backgroundColor: "#fff", zIndex: 10, position: "relative" }}
            >
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base font-medium" style={{ color: "#888" }}>
                      Arriving in
                    </p>
                    <p
                      className="text-5xl font-bold leading-none mt-1"
                       style={{ color: G.primary }}
                    >
                      {deliveryMinutes}{" "}
                      <span className="text-2xl font-semibold">mins</span>
                    </p>
                    {/* <p className="text-base font-semibold mt-2" style={{ color: "#1a1a2e" }}>
                      Your order is on the way
                    </p> */}
                  </div>
                  {/* Pulsing indicator */}
                 <div className="bg-green-50 p-4 rounded-2xl relative">
                    <motion.div
                      animate={{ x: [-2, 2, -2], y: [0, -1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Bike size={32} className="text-green-700" strokeWidth={1.5} />
                    </motion.div>
                    {/* Animated dashed line to simulate movement */}
                    <motion.div 
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 border-b-[1.5px] border-dashed border-green-300"
                      animate={{ x: [-6, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  className="mt-4 w-full rounded-full overflow-hidden"
                 style={{ height: 4, backgroundColor: G.light2 }}
                >
                  <motion.div
                    initial={{ width: "15%" }}
                    animate={{ width: "5%" }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                   style={{ backgroundColor: G.primary }}
                  />
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "#f3f3f7" }} />

              {/* Delivery partner */}
              <div className="px-5 py-4 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base shadow"
                 style={{ background: `linear-gradient(135deg, ${G.primary}, ${G.mid})` }}
                >
                  R
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm" style={{ color: "#1a1a2e" }}>
                    Rider Assigning soon
                  </p>
                  <p className="text-xs" style={{ color: "#888" }}>
                    Delivery Partner
                  </p>
                </div>
                {/* <button
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#f3f3f7" }}
                >
                  <span className="text-base">📞</span>
                </button> */}
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "#f3f3f7" }} />

              {/* Order summary chip */}
              {/* <button className="w-full px-5 py-4 flex items-center gap-3 text-left">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#f3f3f7" }}
                >
                  <Package size={18} style={{ color: "#7b2ff7" }} strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
                    {orderedItems.length} Item{orderedItems.length > 1 ? "s" : ""}
                    {savedAmount > 0 && (
                      <span
                        className="ml-2 font-semibold"
                        style={{ color: "#22c55e", fontSize: 12 }}
                      >
                        ₹{savedAmount} saved
                      </span>
                    )}
                  </p>
                  <p className="text-xs mt-0.5 truncate" style={{ color: "#888", maxWidth: 220 }}>
                    Delivering to: 233 &amp; 4 floor, Royal Residen...
                  </p>
                </div>
                <ChevronRight size={18} style={{ color: "#bbb" }} />
              </button> */}
            </motion.div>

            {/* ── ORDER ITEMS ── */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mx-3 mt-3 rounded-3xl overflow-hidden shadow-sm"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="px-5 pt-5 pb-2 flex items-center justify-between">
                <h3 className="font-semibold text-base" style={{ color: "#1a1a2e" }}>
                  Order Details
                </h3>
                {paymentId && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-mono"
                    style={{ backgroundColor: "#f3f3f7", color: "#888" }}
                  >
                    #{paymentId.slice(-6)}
                  </span>
                )}
              </div>

              <div className="px-5 pb-2">
                {orderedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-3"
                    style={{
                      borderBottom:
                        index < orderedItems.length - 1 ? "1px solid #f3f3f7" : "none",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center p-2 flex-shrink-0"
                      style={{ backgroundColor: "#f8f8f8" }}
                    >
                      <img
                        src={item.images?.[0] || item.image || "/placeholder.png"}
                        alt={item.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium line-clamp-1"
                        style={{ color: "#1a1a2e" }}
                      >
                        {item.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#aaa" }}>
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-semibold flex-shrink-0" style={{ color: "#1a1a2e" }}>
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mx-5 mb-5 mt-2 rounded-2xl px-4 py-3 flex justify-between items-center"
                 style={{ backgroundColor: G.light }}
              >
                <span className="text-sm font-medium" style={{ color: G.primary }}>
                  Total Paid
                </span>
                <span className="text-xl font-bold"style={{ color: G.primary }}>
                  ₹{finalPaidAmount}
                </span>
              </div>
            </motion.div>

            {/* ── Gift / Rewards chip ── */}
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mx-3 mt-3 rounded-2xl px-4 py-3.5 flex items-center gap-3"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #a855f7, #7b2ff7)" }}
              >
                <Gift size={18} color="#fff" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
                  You earned Zcoins!
                </p>
                <p className="text-xs" style={{ color: "#888" }}>
                  Redeem on your next order
                </p>
              </div>
              <ChevronRight size={18} style={{ color: "#bbb" }} />
            </motion.div> */}

            {/* Bottom spacing for fixed button */}
            <div className="h-28" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed CTA ── */}
      <AnimatePresence>
        {showFullDetails && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="fixed bottom-0 left-0 w-full px-4 pb-6 pt-3 z-20"
            style={{ backgroundColor: "#f3f3f7" }}
          >
            <button
              onClick={() => navigate("/")}
              className="w-full py-4 rounded-2xl font-semibold text-base text-white transition-all active:scale-[0.97]"
              style={{
                background: `linear-gradient(135deg, ${G.primary}, ${G.dark})`,
                boxShadow: "0 8px 24px rgba(21,128,61,0.32)",
              }}
            >
              Continue Shopping
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}