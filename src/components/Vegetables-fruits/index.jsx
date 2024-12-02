import { Minus, Plus, Search, Share } from "lucide-react";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";
import Cart from "../Cart";
import { motion } from "framer-motion";
import ScrollTop from "../../utils/ScreenTop";

export default function Vegetables_fruits() {
  const vegetable = [
    {
      id: 1907,
      name: "Tomato",
      category: "Vegetables",
      price: "30",
      img: "/totomt.png",
      description:
        "Fresh and juicy tomatoes, perfect for salads, curries, and sauces.",
      discount: "10%", // Example discount
    },
    {
      id: 24324,
      name: "Potato",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (3).png",
      description:
        "Starchy and versatile, used in curries, fries, and mashed potatoes.",
      discount: "5%", // Example discount
    },
    {
      id: 3423423,
      name: "Onion",
      category: "Vegetables",
      price: "20",
      img: "/pngegg (4).png",
      description:
        "A must-have ingredient in every kitchen, adds flavor to dishes.",
      discount: "15%", // Example discount
    },
    {
      id: 452345,
      name: "Carrot",
      category: "Vegetables",
      price: "50",
      img: "/pngegg (5).png",
      description:
        "Crunchy and sweet, great for salads, soups, and stir-fries.",
      discount: "8%", // Example discount
    },
    {
      id: 51234,
      name: "Cucumber",
      category: "Vegetables",
      price: "25",
      img: "/pngegg (6).png",
      description: "Refreshing and hydrating, ideal for salads and juices.",
      discount: "12%", // Example discount
    },
    {
      id: 61234,
      name: "Cauliflower",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (7).png",
      description:
        "A versatile vegetable, perfect for curries, soups, and as a low-carb alternative.",
      discount: "10%", // Example discount
    },
    {
      id: 71234,
      name: "Spinach",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (8).png",
      description:
        "Packed with vitamins, ideal for salads, soups, and as a side dish.",
      discount: "7%", // Example discount
    },
    {
      id: 84321,
      name: "Brinjal (Eggplant)",
      category: "Vegetables",
      price: "45",
      img: "/pngegg (9).png",
      description:
        "Tender and flavorful, used in curries, grills, and as a main dish.",
      discount: "5%", // Example discount
    },
    {
      id: 91234,
      name: "Green Bell Pepper",
      category: "Vegetables",
      price: "55",
      img: "/pngegg (10).png",
      description:
        "Crisp and mildly sweet, adds a vibrant color to your dishes.",
      discount: "6%", // Example discount
    },
    {
      id: 101234,
      name: "Beans (Green)",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (11).png",
      description:
        "Crunchy and nutritious, great in stir-fries, soups, and salads.",
      discount: "9%", // Example discount
    },
    {
      id: 1907,
      name: "Tomato",
      category: "Vegetables",
      price: "30",
      img: "/totomt.png",
      description:
        "Fresh and juicy tomatoes, perfect for salads, curries, and sauces.",
      discount: "10%", // Example discount
    },
    {
      id: 24324,
      name: "Potato",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (3).png",
      description:
        "Starchy and versatile, used in curries, fries, and mashed potatoes.",
      discount: "5%", // Example discount
    },
    {
      id: 3423423,
      name: "Onion",
      category: "Vegetables",
      price: "20",
      img: "/pngegg (4).png",
      description:
        "A must-have ingredient in every kitchen, adds flavor to dishes.",
      discount: "15%", // Example discount
    },
    {
      id: 452345,
      name: "Carrot",
      category: "Vegetables",
      price: "50",
      img: "/pngegg (5).png",
      description:
        "Crunchy and sweet, great for salads, soups, and stir-fries.",
      discount: "8%", // Example discount
    },
    {
      id: 51234,
      name: "Cucumber",
      category: "Vegetables",
      price: "25",
      img: "/pngegg (6).png",
      description: "Refreshing and hydrating, ideal for salads and juices.",
      discount: "12%", // Example discount
    },
    {
      id: 61234,
      name: "Cauliflower",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (7).png",
      description:
        "A versatile vegetable, perfect for curries, soups, and as a low-carb alternative.",
      discount: "10%", // Example discount
    },
    {
      id: 71234,
      name: "Spinach",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (8).png",
      description:
        "Packed with vitamins, ideal for salads, soups, and as a side dish.",
      discount: "7%", // Example discount
    },
    {
      id: 84321,
      name: "Brinjal (Eggplant)",
      category: "Vegetables",
      price: "45",
      img: "/pngegg (9).png",
      description:
        "Tender and flavorful, used in curries, grills, and as a main dish.",
      discount: "5%", // Example discount
    },
    {
      id: 91234,
      name: "Green Bell Pepper",
      category: "Vegetables",
      price: "55",
      img: "/pngegg (10).png",
      description:
        "Crisp and mildly sweet, adds a vibrant color to your dishes.",
      discount: "6%", // Example discount
    },
    {
      id: 101234,
      name: "Beans (Green)",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (11).png",
      description:
        "Crunchy and nutritious, great in stir-fries, soups, and salads.",
      discount: "9%", // Example discount
    },
    {
      id: 1907,
      name: "Tomato",
      category: "Vegetables",
      price: "30",
      img: "/totomt.png",
      description:
        "Fresh and juicy tomatoes, perfect for salads, curries, and sauces.",
      discount: "10%", // Example discount
    },
    {
      id: 24324,
      name: "Potato",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (3).png",
      description:
        "Starchy and versatile, used in curries, fries, and mashed potatoes.",
      discount: "5%", // Example discount
    },
    {
      id: 3423423,
      name: "Onion",
      category: "Vegetables",
      price: "20",
      img: "/pngegg (4).png",
      description:
        "A must-have ingredient in every kitchen, adds flavor to dishes.",
      discount: "15%", // Example discount
    },
    {
      id: 452345,
      name: "Carrot",
      category: "Vegetables",
      price: "50",
      img: "/pngegg (5).png",
      description:
        "Crunchy and sweet, great for salads, soups, and stir-fries.",
      discount: "8%", // Example discount
    },
    {
      id: 51234,
      name: "Cucumber",
      category: "Vegetables",
      price: "25",
      img: "/pngegg (6).png",
      description: "Refreshing and hydrating, ideal for salads and juices.",
      discount: "12%", // Example discount
    },
    {
      id: 61234,
      name: "Cauliflower",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (7).png",
      description:
        "A versatile vegetable, perfect for curries, soups, and as a low-carb alternative.",
      discount: "10%", // Example discount
    },
    {
      id: 71234,
      name: "Spinach",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (8).png",
      description:
        "Packed with vitamins, ideal for salads, soups, and as a side dish.",
      discount: "7%", // Example discount
    },
    {
      id: 84321,
      name: "Brinjal (Eggplant)",
      category: "Vegetables",
      price: "45",
      img: "/pngegg (9).png",
      description:
        "Tender and flavorful, used in curries, grills, and as a main dish.",
      discount: "5%", // Example discount
    },
    {
      id: 91234,
      name: "Green Bell Pepper",
      category: "Vegetables",
      price: "55",
      img: "/pngegg (10).png",
      description:
        "Crisp and mildly sweet, adds a vibrant color to your dishes.",
      discount: "6%", // Example discount
    },
    {
      id: 101234,
      name: "Beans (Green)",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (11).png",
      description:
        "Crunchy and nutritious, great in stir-fries, soups, and salads.",
      discount: "9%", // Example discount
    },
  ];
  const productlist = [
    {
      category: "All",
      link: "/vegetables-fruits",
      image: "/pngegg (22).png",
    },
    {
      category: "Fresh vegetables",
      link: "/atta-rice-dal",
      image: "/pngegg (21).png",
    },
    {
      category: "Fresh Fruits",
      link: "/oil-ghee-masala",
      image: "/pngegg (13).png",
    },
    {
      category: "Exotics",
      link: "/dairy-bread-eggs",
      image: "/pngegg (23).png",
    },

    {
      category: "Coriander & Other",
      link: "/bakery-biscuits",
      image: "/pngegg (24).png",
    },
    {
      category: "Flowers & Leaves",
      link: "/dry-fruits-cereals",
      image: "/pngegg (18).png",
    },
    {
      category: "Seasonal",
      link: "/chicken-meat-fish",
      image: "/pngegg (25).png",
    },
    {
      category: "Freshly cut & sprouts",
      link: "/kitchenware-appliances",
      image: "/pngegg (16).png",
    },
    {
      category: "Frozen veg",
      link: "/kitchenware-appliances",
      image: "/pngegg (16).png",
    },
    {
      category: "Certifies Organic",
      link: "/kitchenware-appliances",
      image: "/pngegg (16).png",
    },
  ];

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

  return (
    <div className="flex flex-col justify-between items-center relative ">
      <ScrollTop />
      <div className="  flex justify-between items-center p-3 z-10 fixed top-0 w-full bg-white">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
          <Link
            to={"/grocery"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        <div>
          <h1 className="text-xl">Vegetables</h1>
        </div>

        <div className="flex justify-center items-center rounded-full bg-black/10 h-[35px] w-[35px]  ">
          <Search size={20} />
        </div>
      </div>

      {/* listing */}
      <div className="mt-20 mb-40">
        <div>
          {vegetable.length === 0 ? (
            <div>
              <h1>Loading......</h1>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 p-3">
              {vegetable.map((vegitable) => {
                const itemQuantity = getCartItemQuantity(vegitable.id);
                return (
                  <div key={vegitable.id} className="relative">
                    <div className="relative">
                      <div className="h-[120px] border border-[#f2f2f2] rounded-2xl flex justify-center items-center">
                        <img
                          src={vegitable.img}
                          alt=""
                          className=" h-[80px] object-contain"
                        />
                      </div>
                      {itemQuantity === 0 ? (
                        <div
                          onClick={() => handleAddToCart(vegitable)}
                          className="absolute -bottom-1 right-0 border-green-700 border px-1 py-1 bg-white rounded-lg cursor-pointer"
                        >
                          <Plus size={18} />
                        </div>
                      ) : (
                        <div className="absolute cursor-pointer -bottom-2 right-0 border-green-600 border px-2 py-1 bg-white rounded-lg flex gap-2 vegitables-center">
                          <button
                            onClick={() => handleRemoveFromCart(vegitable)}
                            className="text-lg font-medium"
                          >
                            <Minus size={15} />
                          </button>
                          <h1 className="text-sm font-medium">
                            {itemQuantity}
                          </h1>
                          <button
                            onClick={() => handleAddToCart(vegitable)}
                            className="text-lg font-medium"
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-start items-start flex-col   p-1">
                      <h1 className="text-sm ">{vegitable.name}</h1>
                      <p className="text-xs font-semibold ">
                        ₹{vegitable.price}/Kg
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* cartitems */}
      <div>
        <Cart bottom={"bottom-24"} />
      </div>

      <div className="bg-green-700 h-[11vh]  bottom-0 fixed w-full overflow-x-scroll overflow-hidden rounded-t-3xl scroll-smooth no-scrollbar">
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex h-[80px] p-3  whitespace-nowrap w-[200%] gap-4  overflow-hidden"
        >
          {productlist.map((items) => {
            return (
              <NavLink
                key={items.id}
                to={items.link}
                className={
                  ({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-b from-yellow-300 to-yellow-100 rounded-xl flex justify-center items-center w-[90px] "
                      : "w-[90px]  bg-white rounded-xl flex justify-center items-center" // Apply yellow and white gradient when active
                }
              >
                <div className="  ">
                  <motion.img
                    src={items.image}
                    alt={items.name}
                    className={`object-contain h-[70px] `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </NavLink>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
