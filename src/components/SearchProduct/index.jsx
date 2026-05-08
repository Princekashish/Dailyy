import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { productAdd } from "../../Redux/Feature/Cart/CartSlice";
import Cart from "../Cart";
import axios from "axios";

export default function SearchProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([])
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = searchTerm
          ? `https://dailly-server.onrender.com/api/v1/product?title=${searchTerm}`
          : "https://dailly-server.onrender.com/api/v1/product";
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Use a small delay to debounce typing and avoid spamming API requests
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleAddToCart = (product) => {
    dispatch(
      productAdd({
        id: product._id,
        name: product.title,
        price: product.price,
        image: product.images?.[0],
        weight: product.description || "",
        originalPrice: product.mrp,
      })
    );
  };

  return (
    <div className="font-Lexend min-h-screen bg-gray-50 pb-[10vh]">
      <div className="sticky top-0 bg-white z-50 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2">
            <IoArrowBack size={24} />
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-xl outline-none"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-[120px] bg-gray-50 flex justify-center items-center p-2">
                <img src={product.images?.[0]} alt={product.title} className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <p className="text-xs text-gray-500 mb-1">{product.description}</p>
                <h3 className="text-sm font-medium line-clamp-2 leading-tight flex-1">{product.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold text-sm">₹{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{product.mrp}</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-3 w-full py-1.5 border border-green-600 text-green-600 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          ))
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
