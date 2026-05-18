import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  productAdd,
  productRemove,
  selectCartTotal,
} from "../../Redux/Feature/Cart/CartSlice";
import Checkout from "../Checkout";

export default function Cart({ bottom }) {
  const cart = useSelector((state) => state.cart.items);
  const [homeServicesVisible, setHomeServicesVisible] = useState(2);
  const [viewCart, setViewCart] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // console.log(selectedProduct);

  const dispatch = useDispatch();

  const homeServices = cart.filter((item) => item.serviceType === "homeService");
  const products = cart.filter((item) => item.serviceType !== "homeService");

  const hasItemsInCart = cart.length > 0;
  const price = useSelector(selectCartTotal);

  const firstTwoItems = cart.slice(0, 2);
  const closeModal = () => setViewCart(false);
  const handleRemoveFromCart = (item) => dispatch(productRemove(item));
  const handleAddToCart = (item) => dispatch(productAdd(item));
  const handleConfirmOrder = () => {
    // console.log("true");
    setCheckout(!checkout);
    setViewCart(false);
  };
  const handleproduct = (item) => {
    setViewCart(false);
    setSelectedProduct(item);
  };
  const productModal = () => setSelectedProduct(false);

  const deliveryCharge = 0;
  const handlingCharge = 0;
  const total = price + deliveryCharge + handlingCharge;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      setHomeServicesVisible(homeServices.length);
    } else {
      setHomeServicesVisible(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Floating Cart Pill ── */}
      <div
        onClick={() => setViewCart((pre) => !pre)}
        className={`fixed z-20 ${hasItemsInCart ? "flex" : "hidden"}`}
        style={{
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(50%",
          maxWidth: 360,
          backgroundColor: "#15803d",
          borderRadius: 999,
          padding: "10px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 8px 24px rgba(21,128,61,0.35)",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {/* Item thumbnails */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {firstTwoItems.map((item, index) => (
            <img
              key={item.id || item._id}
              src={item.images?.[0] || item.image || item.img || item[0]}
              alt={item.product}
              style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                objectFit: "cover",
                backgroundColor: "#fff",
                border: "2px solid #166534",
                marginLeft: index === 0 ? 0 : -10,
                zIndex: index === 0 ? 1 : 2,
                position: "relative",
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Label */}
        {hasItemsInCart && (
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5, lineHeight: 1 }}>
                {cart.length > 1 ? `${cart.length} Items` : `${cart.length} Item`}
              </p>
              <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginTop: 2, lineHeight: 1 }}>
                View Cart
              </p>
            </div>
            <ChevronRight size={18} color="#fff" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {/* ── Cart Bottom Sheet ── */}
      {viewCart && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 30,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "24px 24px 0 0",
              padding: "20px 20px 0 20px",
              /* iOS safe-area bottom inset */
              paddingBottom: "env(safe-area-inset-bottom, 20px)",
              maxHeight: "88vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <RiTimerFlashLine size={28} color="#15803d" />
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#14532d", lineHeight: 1.2 }}>
                    Delivery in Minutes
                  </p>
                  <p style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                    Shipment of {cart.length} item{cart.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  backgroundColor: "rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  flexShrink: 0,
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Scrollable item list */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                marginBottom: 12,
              }}
              className="no-scrollbar"
            >
              {/* Products */}
              {products.length > 0 && (
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    padding: 16,
                    marginBottom: 12,
                    border: homeServices.length > 0 ? "1px solid #f0fdf4" : "none",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  {homeServices.length > 0 && (
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #f3f4f6", paddingBottom: 8, marginBottom: 12 }}>
                      Products &amp; Groceries
                    </p>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {products.map((items) => (
                      <CartItem
                        key={items.id}
                        items={items}
                        onTap={() => handleproduct(items)}
                        onAdd={() => handleAddToCart(items)}
                        onRemove={() => handleRemoveFromCart(items.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Home Services */}
              {homeServices.length > 0 && (
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    padding: 16,
                    marginBottom: 12,
                    border: "1px solid #f0fdf4",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <p style={{ fontSize: 10, fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #f3f4f6", paddingBottom: 8, marginBottom: 12 }}>
                    Home Services
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {homeServices.slice(0, homeServicesVisible).map((items) => (
                      <CartItem
                        key={items.id}
                        items={items}
                        onTap={() => handleproduct(items)}
                        onAdd={() => handleAddToCart(items)}
                        onRemove={() => handleRemoveFromCart(items.id)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bill Summary — pinned at bottom */}
            <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 14, paddingBottom: 4 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#14532d", marginBottom: 10 }}>Bill Summary</p>
              <div style={{ backgroundColor: "#f8fafb", borderRadius: 14, padding: "10px 14px", marginBottom: 14 }}>
                <BillRow label="Items Total" value={`₹${Number(price).toLocaleString("en-IN")}`} />
                <BillRow label="Delivery Charge" value={deliveryCharge > 0 ? `₹${deliveryCharge}` : "Free"} green={deliveryCharge === 0} />
                <BillRow label="Handling Charge" value={handlingCharge === 0 ? "Free" : `₹${handlingCharge}`} green={handlingCharge === 0} last />
              </div>

              {/* Total + CTA row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "max(16px, env(safe-area-inset-bottom, 16px))",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#15803d" }}>Total</span>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "#14532d" }}>₹{Number(total).toLocaleString("en-IN")}</span>
                </div>
                <button
                  onClick={handleConfirmOrder}
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    padding: "13px 22px",
                    borderRadius: 14,
                    border: "none",
                    boxShadow: "0 4px 14px rgba(21,128,61,0.3)",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── Product Detail Sheet ── */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-30 flex items-end bg-black/50"
          onClick={productModal}
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[75vh] w-full flex-col overflow-hidden rounded-t-[24px] bg-white pb-[calc(16px+env(safe-area-inset-bottom,0px))]"
          >
            {/* ── Drag handle ── */}
            <div className="mx-auto mt-3 mb-1 h-1 w-9 shrink-0 rounded-full bg-gray-200" />

            {/* ── Close button ── */}
            <button
              onClick={productModal}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-black/10 [WebkitTapHighlightColor:transparent]"
            >
              <X size={18} strokeWidth={2} />
            </button>

            {/* ── Scrollable body ── */}
            <div
              className="no-scrollbar flex-1 overflow-y-auto px-5 pt-2 [WebkitOverflowScrolling:touch]"
            >
              {/* Product name */}
              {(selectedProduct.title ||
                selectedProduct.name ||
                selectedProduct.product) && (
                  <h2 className="mb-3 pr-11 text-[15px] font-bold leading-[1.4] text-green-900">
                    {selectedProduct.title ||
                      selectedProduct.name ||
                      selectedProduct.product}
                  </h2>
                )}

              {/* Image */}
              <div className="mb-3.5 flex h-[clamp(120px,38vw,200px)] w-full items-center justify-center overflow-hidden rounded-2xl ">
                <img
                  src={
                    selectedProduct.images?.[0] ||
                    selectedProduct.img ||
                    selectedProduct.image
                  }
                  alt={selectedProduct.title || selectedProduct.name || ""}
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* Price row */}
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
                {selectedProduct.price && (
                  <span className="text-[18px] font-bold text-green-900">
                    ₹{selectedProduct.price}
                  </span>
                )}

                {selectedProduct.originalPrice &&
                  Number(selectedProduct.originalPrice) > 0 && (
                    <span className="text-[12px] text-gray-400 line-through">
                      ₹{selectedProduct.originalPrice}
                    </span>
                  )}

                {selectedProduct.discount &&
                  String(selectedProduct.discount).trim() !== "" &&
                  String(selectedProduct.discount).trim() !== "0" && (
                    <span className="rounded-md bg-green-50 px-2 py-[3px] text-[11px] font-semibold text-green-700">
                      {selectedProduct.discount} OFF
                    </span>
                  )}
              </div>

              {/* Description */}
              {selectedProduct.description &&
                String(selectedProduct.description).trim() !== "" && (
                  <p className="mb-2 text-[13px] leading-[1.6] text-gray-500">
                    {selectedProduct.description}
                  </p>
                )}
            </div>
          </motion.div>
        </div>
      )}

      <div>{checkout && <Checkout price={total} />}</div>
    </>
  );
}

/* ── Shared sub-components ── */

function CartItem({ items, onTap, onAdd, onRemove }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
      {/* Thumbnail */}
      <button
        onClick={onTap}
        style={{
          width: 58,
          height: 58,
          borderRadius: 14,
          border: "1px solid #f0fdf4",
          backgroundColor: "#fafafa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 6,
          flexShrink: 0,
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <img
          src={items.images?.[0] || items.image || items.img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </button>

      {/* Name + price */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 13, fontWeight: 500, color: "#14532d", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {(items.title || items.name || "").length > 18
            ? `${(items.title || items.name || "").substring(0, 18)}…`
            : items.title || items.name}
        </p>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#14532d", marginTop: 3 }}>
          ₹{items.price}
        </p>
      </div>

      {/* Stepper */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f0fdf4",
          borderRadius: 10,
          padding: "3px 4px",
          gap: 2,
          flexShrink: 0,
        }}
      >
        <button
          onClick={onRemove}
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            backgroundColor: "#fff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
          }}
        >
          <Minus size={14} strokeWidth={2.5} color="#15803d" />
        </button>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#166534", minWidth: 20, textAlign: "center" }}>
          {items.quantity}
        </span>
        <button
          onClick={onAdd}
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            backgroundColor: "#fff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
          }}
        >
          <Plus size={14} strokeWidth={2.5} color="#15803d" />
        </button>
      </div>
    </div>
  );
}

function BillRow({ label, value, green = false, last = false }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: last ? 0 : 6,
        marginBottom: last ? 0 : 6,
        borderBottom: last ? "none" : "1px solid #f3f4f6",
      }}
    >
      <span style={{ fontSize: 13, color: "#555" }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: green ? "#15803d" : "#222" }}>{value}</span>
    </div>
  );
}