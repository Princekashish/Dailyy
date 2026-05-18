import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
 
export default function ProductModal({
  isOpen,     
  product,       
  onClose,       
  onAddToCart,   
  getQuantity,   
}) {
  if (!isOpen || !product) return null;
 
  const inCart = getQuantity(product.id) > 0;
 
  const name =
    product.product || product.title || product.name || "";
 
  const image =
    product.images?.[0] || product.img || product.image || "";
 
  const hasOriginalPrice =
    product.originalPrice && Number(product.originalPrice) > 0;
 
  const hasDiscount =
    product.discount &&
    String(product.discount).trim() !== "" &&
    String(product.discount).trim() !== "0";
 
  const hasDescription =
    product.description &&
    String(product.description).trim() !== "";
 
  return (
    <AnimatePresence>
      {isOpen && (
        // ── Backdrop ──
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 60,
            display: "flex",
            alignItems: "flex-end",
          }}
          onClick={onClose}
        >
          {/* ── Sheet ── */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "24px 24px 0 0",
              display: "flex",
              flexDirection: "column",
              maxHeight: "75vh",
              paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Drag handle */}
            <div
              style={{
                width: 36,
                height: 4,
                borderRadius: 99,
                backgroundColor: "#e5e7eb",
                margin: "12px auto 8px",
                flexShrink: 0,
              }}
            />
 
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                borderRadius: 999,
                backgroundColor: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                zIndex: 10,
                flexShrink: 0,
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
              }}
            >
              <X size={18} strokeWidth={2} />
            </button>
 
            {/* ── Scrollable body ── */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                padding: "0 20px",
              }}
              className="no-scrollbar"
            >
              {/* Title */}
              <h2
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#14532d",
                  lineHeight: 1.4,
                  paddingRight: 44,
                  marginBottom: 14,
                }}
              >
                {name}
              </h2>
 
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "clamp(130px, 35vw, 200px)",
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: 10,
                  }}
                />
              </div>
 
              {/* Price row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{ fontSize: 18, fontWeight: 700, color: "#14532d" }}
                >
                  ₹{product.price}
                </span>
 
                {hasOriginalPrice && (
                  <span
                    style={{
                      fontSize: 13,
                      textDecoration: "line-through",
                      color: "#9ca3af",
                    }}
                  >
                    ₹{product.originalPrice}
                  </span>
                )}
 
                {hasDiscount && (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#15803d",
                      backgroundColor: "#f0fdf4",
                      padding: "3px 8px",
                      borderRadius: 6,
                    }}
                  >
                    {product.discount} OFF
                  </span>
                )}
              </div>
 
              {/* Description */}
              {hasDescription && (
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.6,
                    marginBottom: 8,
                  }}
                >
                  {product.description}
                </p>
              )}
            </div>
 
            {/* ── Sticky CTA ── */}
            <div
              style={{
                flexShrink: 0,
                padding: "12px 20px 0",
                borderTop: "1px solid #f3f4f6",
              }}
            >
              <button
                onClick={() => {
                  if (!inCart) onAddToCart(product);
                }}
                disabled={inCart}
                style={{
                  width: "100%",
                  padding: "15px 0",
                  borderRadius: 14,
                  border: "none",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: 0.2,
                  cursor: inCart ? "not-allowed" : "pointer",
                  backgroundColor: inCart ? "#d1d5db" : "#15803d",
                  boxShadow: inCart
                    ? "none"
                    : "0 4px 16px rgba(21,128,61,0.28)",
                  transition: "background-color 0.2s",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {inCart ? "✓ Already in Cart" : "Add to Cart"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}