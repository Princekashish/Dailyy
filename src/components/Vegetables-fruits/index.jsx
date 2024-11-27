import { Minus, Plus, Search, Share } from "lucide-react";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productAdd, productRemove } from "../../Redux/Feature/Cart/CartSlice";
import Cart from "../Cart";

export default function Vegetables_fruits() {
  const vegetable = [
    {
      id: 1,
      name: "Tomato",
      category: "Vegetables",
      price: "30",
      img: "/totomt.png",
      description:
        "Fresh and juicy tomatoes, perfect for salads, curries, and sauces.",
      discount: "10%", // Example discount
    },
    {
      id: 2,
      name: "Potato",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (3).png",
      description:
        "Starchy and versatile, used in curries, fries, and mashed potatoes.",
      discount: "5%", // Example discount
    },
    {
      id: 3,
      name: "Onion",
      category: "Vegetables",
      price: "20",
      img: "/pngegg (4).png",
      description:
        "A must-have ingredient in every kitchen, adds flavor to dishes.",
      discount: "15%", // Example discount
    },
    {
      id: 4,
      name: "Carrot",
      category: "Vegetables",
      price: "50",
      img: "/pngegg (5).png",
      description:
        "Crunchy and sweet, great for salads, soups, and stir-fries.",
      discount: "8%", // Example discount
    },
    {
      id: 5,
      name: "Cucumber",
      category: "Vegetables",
      price: "25",
      img: "/pngegg (6).png",
      description: "Refreshing and hydrating, ideal for salads and juices.",
      discount: "12%", // Example discount
    },
    {
      id: 6,
      name: "Cauliflower",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (7).png",
      description:
        "A versatile vegetable, perfect for curries, soups, and as a low-carb alternative.",
      discount: "10%", // Example discount
    },
    {
      id: 7,
      name: "Spinach",
      category: "Vegetables",
      price: "40",
      img: "/pngegg (8).png",
      description:
        "Packed with vitamins, ideal for salads, soups, and as a side dish.",
      discount: "7%", // Example discount
    },
    {
      id: 8,
      name: "Brinjal (Eggplant)",
      category: "Vegetables",
      price: "45",
      img: "/pngegg (9).png",
      description:
        "Tender and flavorful, used in curries, grills, and as a main dish.",
      discount: "5%", // Example discount
    },
    {
      id: 9,
      name: "Green Bell Pepper",
      category: "Vegetables",
      price: "55",
      img: "/pngegg (10).png",
      description:
        "Crisp and mildly sweet, adds a vibrant color to your dishes.",
      discount: "6%", // Example discount
    },
    {
      id: 10,
      name: "Beans (Green)",
      category: "Vegetables",
      price: "60",
      img: "/pngegg (11).png",
      description:
        "Crunchy and nutritious, great in stir-fries, soups, and salads.",
      discount: "9%", // Example discount
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
    <div className="">
      <div className="  flex justify-between items-center p-3 fixed top-0 w-full bg-white">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
          <Link
            to={"/grocery"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        <div>
          <h1>Vegetables</h1>
        </div>

        <div className="flex justify-center items-center rounded-full bg-black/10 h-[35px] w-[35px]  ">
          <Search size={20} />
        </div>
      </div>
      <div className="mt-16">
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
                      <img
                        src={vegitable.img}
                        alt=""
                        className="bg-[#f2f2f2] h-[120px] rounded-2xl object-contain"
                      />
                      {itemQuantity === 0 ? (
                        <div
                          onClick={() => handleAddToCart(vegitable)}
                          className="absolute -bottom-2 right-0 border-green-600 border px-1 py-1 bg-white rounded-lg cursor-pointer"
                        >
                          <h1 className="text-green-600 text-xs uppercase font-semibold">
                            Add
                          </h1>
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
      <div>
        <Cart bottom={"bottom-2"} />
      </div>
    </div>
  );
}
