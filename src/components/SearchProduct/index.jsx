import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";
import Cart from "../Cart";
import axios from "axios";

export default function SearchProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchTerm.trim()) {
        setProducts([]);
        return;
      }
      try {
        const url = `https://dailly-server.onrender.com/api/v1/product?title=${searchTerm}`;
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Use a small delay to debounce typing and avoid spamming API requests
    fetchProducts();
  }, [searchTerm]);

  const handleAddToCart = (product) => {
    dispatch(
      productAdd({
        ...product,
        id: product._id || product.id,
      })
    );
  };

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="font-Lexend  min-h-screen bg-gray-50 pb-[10vh]">
      <div className="sticky top-0 bg-white p-4 shadow-sm ">
        <div className="flex items-center bg-gray-100 rounded-xl px-2 py-1">
          <button onClick={handleBack} className="p-2 text-gray-700 hover:text-black transition-colors">
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <div className="flex-1 flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-2 bg-transparent outline-none text-gray-800 placeholder-gray-400 font-light"
              autoFocus
            />
            <Search size={20} className="text-gray-400 mr-3" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {!searchTerm.trim() ? (
          <div className="col-span-2 flex flex-col items-center justify-center py-20 text-gray-400">
            <Search size={48} className="mb-4 text-gray-300" strokeWidth={1.5} />
            <p className="text-center">Search for your favorite products,<br />or sponsored by this.</p>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => {
            const cartItem = cartItems.find(
              (item) => item.id === (product._id || product.id)
            );
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div key={product._id} className="bg-white rounded-3xl p-2.5 border border-gray-50 flex flex-col hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300">
                <div className="h-[120px] w-full rounded-2xl bg-gray-50/50 flex justify-center items-center mb-3 overflow-hidden group">
                  <img src={product.images?.[0]} alt={product.title} className="h-4/5 object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 px-1.5 pb-1">
                  <div className="flex-1">
                    <h3 className="text-[13px] font-medium text-gray-900 line-clamp-2 leading-snug mb-1">{product.title}</h3>
                    <p className="text-[11px] text-gray-400 font-light truncate">{product.description || "1 unit"}</p>
                  </div>
                  <div className="flex items-end justify-between mt-3">
                    <div className="flex flex-col">
                      <span className="font-bold text-[15px] text-gray-900 leading-none mb-1">₹{Number(product.price).toLocaleString("en-IN")}</span>
                      <span className="text-[10px] text-gray-400 line-through leading-none">₹{product.mrp}</span>
                    </div>

                    <div className="w-[76px]">
                      {quantity > 0 ? (
                        <div className="flex items-center justify-between bg-green-50 rounded-xl h-8 px-1">
                          <button
                            onClick={() =>
                              dispatch(productRemove(product))
                            }
                            className="w-6 h-6 flex items-center justify-center bg-white text-green-700 rounded-lg shadow-sm hover:bg-green-100 transition-colors font-medium text-lg pb-0.5"
                          >
                            -
                          </button>
                          <span className="flex-1 text-center font-bold text-green-800 text-xs">
                            {quantity}
                          </span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="w-6 h-6 flex items-center justify-center bg-white text-green-700 rounded-lg shadow-sm hover:bg-green-100 transition-colors font-medium text-lg pb-0.5"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full h-8 bg-white border border-green-600 hover:bg-green-50 text-green-700 rounded-xl text-xs font-bold transition-colors flex items-center justify-center uppercase tracking-wide"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-2 text-center py-10 text-gray-500">
            No products found matching "{searchTerm}"
          </div>
        )}
      </div>

      <div className="fixed bottom-4 left-0 right-0">
        <Cart bottom={"bottom-0"} />
      </div>
    </div>
  );
}
