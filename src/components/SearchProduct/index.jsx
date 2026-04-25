import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { productAdd } from "../../Redux/Feature/Cart/CartSlice";
import Cart from "../Cart";

export default function SearchProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      image: "https://arcticfox.com/cdn/shop/products/gamingkeyboardphoto2.jpg?v=1668688814",
      name: "Gaming Keyboard",
      originalPrice: "₹1500",
      price: "₹1200",
      weight: "1 kg",
      isAdded: false,
    },
    {
      id: 2,
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730273019/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/246234_0_tw1qt9.png?tr=w-640",
      name: "Bluetooth Speaker",
      originalPrice: "₹4999",
      price: "₹4000",
      weight: "500 g",
      isAdded: false,
    },
    {
      id: 3,
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020678/Croma%20Assets/Computers%20Peripherals/Printers%20and%20Scanners/Images/197501_0_wioza6.png?tr=w-640",
      name: "Laser Printer",
      originalPrice: "₹12000",
      price: "₹9500",
      weight: "3 kg",
      isAdded: false,
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/41D8F4Y6JTL._SY445_SX342_.jpg",
      name: "Wireless Mouse",
      originalPrice: "₹800",
      price: "₹640",
      weight: "200 g",
      isAdded: false,
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/c0/8f/6d/c08f6d5e88f6ad47499f8161bc56fcdb.jpg",
      name: "Desktop Monitor",
      originalPrice: "₹8499",
      price: "₹6999",
      weight: "4 kg",
      isAdded: false,
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71cflgAolqL._SX679_.jpg",
      name: "Apple iPhone 15 Pro",
      originalPrice: "₹134900",
      price: "₹124900",
      weight: "187 g",
      isAdded: false,
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/61M5w4HMIJL._SX679_.jpg",
      name: "Samsung Galaxy S24 Ultra",
      originalPrice: "₹134999",
      price: "₹129999",
      weight: "232 g",
      isAdded: false,
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/51bAUNV7K-L._SX679_.jpg",
      name: "Sony WH-1000XM5",
      originalPrice: "₹34990",
      price: "₹29990",
      weight: "250 g",
      isAdded: false,
    }
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(
      productAdd({
        id: product.id,
        name: product.name,
        price: parseInt(product.price.replace("₹", "")),
        image: product.image,
        weight: product.weight,
        originalPrice: parseInt(product.originalPrice.replace("₹", "")),
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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-[120px] bg-gray-50 flex justify-center items-center p-2">
                <img src={product.image} alt={product.name} className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <p className="text-xs text-gray-500 mb-1">{product.weight}</p>
                <h3 className="text-sm font-medium line-clamp-2 leading-tight flex-1">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold text-sm">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
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
