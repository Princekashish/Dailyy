import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../utils/api";
import { Minus, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";
import Pageloader from "../../utils/Animated/Pageloader";

export default function Grocery() {
  // const groceryCategories = [
  //   {
  //     category: "Vegetables & Fruits",
  //     link: "/vegetables-fruits",
  //     image: "/pngeggveg.png",
  //     items: [
  //       "Tomatoes",
  //       "Potatoes",
  //       "Onions",
  //       "Carrots",
  //       "Apples",
  //       "Bananas",
  //       "Oranges",
  //     ],
  //   },
  //   {
  //     category: "Atta, Rice & Dal",
  //     link: "/atta-rice-dal",
  //     image: "/pngegg (19).png",
  //     items: [
  //       "Wheat Flour (Atta)",
  //       "Rice (Basmati, Sona Masoori)",
  //       "Lentils (Toor Dal, Masoor Dal)",
  //       "Chana Dal",
  //       "Moong Dal",
  //     ],
  //   },
  //   {
  //     category: "Oil, Ghee & Masala",
  //     link: "/oil-ghee-masala",
  //     image: "/pngegg (13).png",
  //     items: [
  //       "Vegetable Oil",
  //       "Mustard Oil",
  //       "Olive Oil",
  //       "Ghee",
  //       "Turmeric",
  //       "Chili Powder",
  //       "Garam Masala",
  //       "Cumin Seeds",
  //       "Coriander Powder",
  //     ],
  //   },
  //   {
  //     category: "Dairy, Bread & Eggs",
  //     link: "/dairy-bread-eggs",
  //     image: "/pngegg (14).png",
  //     items: [
  //       "Milk",
  //       "Curd (Yogurt)",
  //       "Butter",
  //       "Cheese",
  //       "Paneer",
  //       "Cream",
  //       "White Bread",
  //       "Whole Wheat Bread",
  //       "Brown Bread",
  //       "Eggs",
  //     ],
  //   },

  //   {
  //     category: "Bakery & Biscuits",
  //     link: "/bakery-biscuits",
  //     image: "/pngegg (15).png",
  //     items: ["Cakes", "Cookies", "Biscuits", "Bread Rolls", "Patties"],
  //   },
  //   {
  //     category: "Dry Fruits & Cereals",
  //     link: "/dry-fruits-cereals",
  //     image: "/pngegg (18).png",
  //     items: [
  //       "Almonds",
  //       "Cashews",
  //       "Pistachios",
  //       "Raisins",
  //       "Walnuts",
  //       "Oats",
  //       "Cornflakes",
  //       "Muesli",
  //     ],
  //   },
  //   {
  //     category: "Chicken, Meat & Fish",
  //     link: "/chicken-meat-fish",
  //     image: "/pngegg (17).png",
  //     items: [
  //       "Chicken Breast",
  //       "Chicken Legs",
  //       "Mutton",
  //       "Pork",
  //       "Fish (Salmon, Rohu)",
  //       "Shrimp",
  //     ],
  //   },
  //   {
  //     category: "Kitchenware, Appliances",
  //     link: "/kitchenware-appliances",
  //     image: "/pngegg (16).png",
  //     items: [
  //       "Cooking Pots",
  //       "Frying Pan",
  //       "Pressure Cooker",
  //       "Blender",
  //       "Microwave",
  //       "Refrigerator",
  //       "Toaster",
  //       "Mixie",
  //     ],
  //   },
  // ];
  // const snaksDrinksCategories = [
  //   {
  //     category: "Chips & Namkeen",
  //     img: "/pngegg (12).png",
  //     items: [
  //       { name: "Lays Classic", img: "path/to/lays-classic.jpg" },
  //       {
  //         name: "Kurkure Masala Munch",
  //         img: "path/to/kurkure-masala-munch.jpg",
  //       },
  //       {
  //         name: "Haldiram's Aloo Bhujia",
  //         img: "path/to/haldirams-aloo-bhujia.jpg",
  //       },
  //     ],
  //   },
  //   {
  //     category: "Sweets & Chocolates",
  //     img: "/pngegg (1).png",
  //     items: [
  //       { name: "Dairy Milk Chocolate", img: "path/to/dairy-milk.jpg" },
  //       { name: "Gulab Jamun", img: "path/to/gulab-jamun.jpg" },
  //       { name: "Ladoo", img: "path/to/ladoo.jpg" },
  //     ],
  //   },
  //   {
  //     category: "Drinks & Juices",
  //     img: "/pngegg (41).png",
  //     items: [
  //       {
  //         name: "Tropicana Orange Juice",
  //         img: "path/to/tropicana-orange-juice.jpg",
  //       },
  //       { name: "Peach Iced Tea", img: "path/to/peach-iced-tea.jpg" },
  //       { name: "Coca-Cola", img: "path/to/coca-cola.jpg" },
  //     ],
  //   },
  //   {
  //     category: "Tea, Coffee & Milk Drink",
  //     img: "/pngegglatte.png",
  //     items: [
  //       { name: "Nescafé Classic Coffee", img: "path/to/nescafe-coffee.jpg" },
  //       { name: "Tata Tea Premium", img: "path/to/tata-tea-premium.jpg" },
  //       { name: "Amul Milk Drink", img: "path/to/amul-milk-drink.jpg" },
  //     ],
  //   },
  //   {
  //     category: "Instant Food",
  //     img: "/pngegg (42).png",
  //     items: [
  //       {
  //         name: "Maggi Instant Noodles",
  //         img: "path/to/maggi-instant-noodles.jpg",
  //       },
  //       { name: "Knorr Soup", img: "path/to/knorr-soup.jpg" },
  //       { name: "Quaker Oats", img: "path/to/quaker-oats.jpg" },
  //     ],
  //   },
  //   {
  //     category: "Sauces & Spreads",
  //     img: "/pngegg (39).png",
  //     items: [
  //       {
  //         name: "Kissan Tomato Ketchup",
  //         img: "path/to/kissan-tomato-ketchup.jpg",
  //       },
  //       { name: "Peanut Butter", img: "path/to/peanut-butter.jpg" },
  //       { name: "Mayonnaise", img: "path/to/mayonnaise.jpg" },
  //     ],
  //   },
  //   {
  //     category: "Pam Corner",
  //     img: "/pngegg (43).png",
  //     items: [
  //       { name: "Pringles Sour Cream", img: "path/to/pringles-sour-cream.jpg" },
  //       { name: "Jackfruit Chips", img: "path/to/jackfruit-chips.jpg" },
  //       { name: "Cashew Nuts", img: "path/to/cashew-nuts.jpg" },
  //     ],
  //   },
  //   {
  //     category: "Ice Creams & More",
  //     img: "/pngegg (40).png",
  //     items: [
  //       {
  //         name: "Baskin Robbins Vanilla",
  //         img: "path/to/baskin-robbins-vanilla.jpg",
  //       },
  //       {
  //         name: "Kwality Walls Cornetto",
  //         img: "path/to/kwality-walls-cornetto.jpg",
  //       },
  //       {
  //         name: "Amul Vanilla Ice Cream",
  //         img: "path/to/amul-vanilla-ice-cream.jpg",
  //       },
  //     ],
  //   },
  // ];

  const [vegetable, setVegetable] = useState([]);

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/v1/product/grocery`);
        setVegetable(res.data);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
      }
    };
    fetchVegetables();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const getCartItemQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  const handleAddToCart = (item) => {
    dispatch(productAdd(item));
  };
  const handleRemoveFromCart = (item) => {
    console.log("enter");
    dispatch(productRemove(item.id));
  };
  const openModal = (product) => {
    setSelectedProduct(product); // Set the clicked product
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProduct(null); // Reset the selected product
  };

  

  return (
    // <div className="p-3 mt-3 font-Lexend flex flex-col gap-3">
    //   <div>
    //     <h1 className="text-xl font-semibold ">Grocery & Kitchen</h1>
    //     <div>
    //       {groceryCategories.length === 0 ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <div className="grid grid-cols-4 gap-3  mt-2 ">
    //           {groceryCategories.map((category, index) => (
    //             <Link key={index} to={category.link}>
    //               <div className="flex justify-center items-center flex-col ">
    //                 <img
    //                   src={category.image}
    //                   alt=""
    //                   className="bg-[#f2f2f2] rounded-full h-[70px] w-[70px] object-contain "
    //                 />
    //                 <h1 className=" text-center text-xs flex  tracking-tight">
    //                   {category.category}
    //                 </h1>
    //               </div>
    //             </Link>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   <div>
    //     <h1 className="text-xl font-semibold ">Snacks & Drinks</h1>
    //     <div>
    //       {snaksDrinksCategories.length === 0 ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <div className="grid grid-cols-4 gap-3  mt-2 ">
    //           {snaksDrinksCategories.map((category, index) => (
    //             <div key={index} >
    //               <div className="flex justify-center items-center flex-col">
    //               <img
    //                 src={category.img}
    //                 alt=""
    //                 className="bg-[#f2f2f2] rounded-full h-[70px] w-[70px] object-contain"
    //               />
    //               </div>
    //               <h1 className=" text-center text-xs flex  tracking-tight">
    //                 {category.category}
    //               </h1>
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="p-3  font-Lexend ">
      <div className="  ">
        <div>
          {vegetable.length === 0 ? (
           <Pageloader/>
          ) : (
            <div className="grid grid-cols-3 gap-3 p-3 mb-14">
              {vegetable.map((vegitable) => {
                const itemQuantity = getCartItemQuantity(vegitable._id || vegitable.id);
                return (
                  <div
                    key={vegitable._id || vegitable.id}
                    className="relative flex flex-col gap-1 justify-center items-center  "
                  >
                    <div className="relative ">
                      <div className="h-[100px] bg-[#f4f4f4]   rounded-full  w-[100px] flex justify-center items-center">
                        <img
                          src={vegitable.images?.[0] || vegitable.image}
                          onClick={() => openModal({ ...vegitable, id: vegitable._id || vegitable.id })}
                          alt=""
                          className=" h-[60px] object-contain"
                        />
                      </div>
                      {itemQuantity === 0 ? (
                        <div
                          onClick={() => handleAddToCart({ ...vegitable, id: vegitable._id || vegitable.id })}
                          className="absolute -bottom-1 right-0 border-green-700 border px-1 py-1 bg-white rounded-lg cursor-pointer opacity-60"
                        >
                          <Plus size={18} />
                        </div>
                      ) : (
                        <div className="absolute opacity-60 cursor-pointer -bottom-2 right-0 border-green-600 border px-2 py-1 bg-white rounded-lg flex gap-2 vegitables-center">
                          <button
                            onClick={() => handleRemoveFromCart({ id: vegitable._id || vegitable.id })}
                            className="text-lg font-medium"
                          >
                            <Minus size={15} />
                          </button>
                          <h1 className="text-sm font-medium">
                            {itemQuantity}
                          </h1>
                          <button
                            onClick={() => handleAddToCart({ ...vegitable, id: vegitable._id || vegitable.id })}
                            className="text-lg font-medium"
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center items-center flex-col    p-1">
                      <h1 className="text-xs line-clamp-2">{vegitable.title}</h1>
                      <p className="text-sm font-semibold text-start w-full">
                        ₹{vegitable.price}
                      </p>



                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[60] ">
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, stiffness: 1 }}
              className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[50vh] flex flex-col justify-between "
            >
              <div>
                <button
                  onClick={closeModal}
                  className="mt-5 p-2 bg-[#f2f2f2]  rounded-full absolute right-5 top-0 "
                >
                  <X size={20} />
                </button>
                <h2 className="text-xl font-semibold">
                  {selectedProduct.product || selectedProduct.title || selectedProduct.name}
                </h2>
                <img
                  src={selectedProduct.images?.[0] || selectedProduct.img || selectedProduct.image}
                  alt={selectedProduct.product || selectedProduct.title || selectedProduct.name}
                  className=" w-full h-40 object-contain rounded-xl"
                />
                <div className="flex justify-between items-center ">
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-lg mt-2 font-semibold">
                      ₹{selectedProduct.price}
                    </p>
                    <div className="flex justify-end items-end gap-1">
                      <p className="text-xs line-through text-[#605e5e] pt-2">
                        ₹{selectedProduct.originalPrice}
                      </p>
                      <p className="text-xs text-blue-400">
                        {selectedProduct.discount} OFF
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="text-sm text-[#6a6969]">
                    {selectedProduct.description}
                  </h1>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(selectedProduct)} // Add to cart in the modal
                className={`flex justify-center items-center text-white border px-3 gap-2 py-3 rounded-xl mt-5 w-full  ${getCartItemQuantity(selectedProduct.id) > 0
                  ? "bg-black opacity-50 cursor-not-allowed" // Change background to black if added
                  : "bg-green-700"
                  }`}
                disabled={getCartItemQuantity(selectedProduct.id) > 0} // Disable the button if the product is in the cart
              >
                <h1 className="text-sm font-medium">
                  {getCartItemQuantity(selectedProduct.id) > 0
                    ? "Already Added"
                    : "Add to Cart"}
                </h1>
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
