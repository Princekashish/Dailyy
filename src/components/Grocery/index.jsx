import React from "react";
import { Link } from "react-router-dom";

export default function Grocery() {
  const groceryCategories = [
    {
      category: "Vegetables & Fruits",
      link: "/vegetables-fruits",
      image: "/pngeggveg.png",
      items: [
        "Tomatoes",
        "Potatoes",
        "Onions",
        "Carrots",
        "Apples",
        "Bananas",
        "Oranges",
      ],
    },
    {
      category: "Atta, Rice & Dal",
      link: "/atta-rice-dal",
      image: "/pngegg (19).png",
      items: [
        "Wheat Flour (Atta)",
        "Rice (Basmati, Sona Masoori)",
        "Lentils (Toor Dal, Masoor Dal)",
        "Chana Dal",
        "Moong Dal",
      ],
    },
    {
      category: "Oil, Ghee & Masala",
      link: "/oil-ghee-masala",
      image: "/pngegg (13).png",
      items: [
        "Vegetable Oil",
        "Mustard Oil",
        "Olive Oil",
        "Ghee",
        "Turmeric",
        "Chili Powder",
        "Garam Masala",
        "Cumin Seeds",
        "Coriander Powder",
      ],
    },
    {
      category: "Dairy, Bread & Eggs",
      link: "/dairy-bread-eggs",
      image: "/pngegg (14).png",
      items: [
        "Milk",
        "Curd (Yogurt)",
        "Butter",
        "Cheese",
        "Paneer",
        "Cream",
        "White Bread",
        "Whole Wheat Bread",
        "Brown Bread",
        "Eggs",
      ],
    },

    {
      category: "Bakery & Biscuits",
      link: "/bakery-biscuits",
      image: "/pngegg (15).png",
      items: ["Cakes", "Cookies", "Biscuits", "Bread Rolls", "Patties"],
    },
    {
      category: "Dry Fruits & Cereals",
      link: "/dry-fruits-cereals",
      image: "/pngegg (18).png",
      items: [
        "Almonds",
        "Cashews",
        "Pistachios",
        "Raisins",
        "Walnuts",
        "Oats",
        "Cornflakes",
        "Muesli",
      ],
    },
    {
      category: "Chicken, Meat & Fish",
      link: "/chicken-meat-fish",
      image: "/pngegg (17).png",
      items: [
        "Chicken Breast",
        "Chicken Legs",
        "Mutton",
        "Pork",
        "Fish (Salmon, Rohu)",
        "Shrimp",
      ],
    },
    {
      category: "Kitchenware, Appliances",
      link: "/kitchenware-appliances",
      image: "/pngegg (16).png",
      items: [
        "Cooking Pots",
        "Frying Pan",
        "Pressure Cooker",
        "Blender",
        "Microwave",
        "Refrigerator",
        "Toaster",
        "Mixie",
      ],
    },
  ];
  const snaksDrinksCategories = [
    {
      category: "Chips & Namkeen",
      img: "/pngegg (12).png",
      items: [
        { name: "Lays Classic", img: "path/to/lays-classic.jpg" },
        {
          name: "Kurkure Masala Munch",
          img: "path/to/kurkure-masala-munch.jpg",
        },
        {
          name: "Haldiram's Aloo Bhujia",
          img: "path/to/haldirams-aloo-bhujia.jpg",
        },
      ],
    },
    {
      category: "Sweets & Chocolates",
      img: "/pngegg (1).png",
      items: [
        { name: "Dairy Milk Chocolate", img: "path/to/dairy-milk.jpg" },
        { name: "Gulab Jamun", img: "path/to/gulab-jamun.jpg" },
        { name: "Ladoo", img: "path/to/ladoo.jpg" },
      ],
    },
    {
      category: "Drinks & Juices",
      img: "/pngegg (41).png",
      items: [
        {
          name: "Tropicana Orange Juice",
          img: "path/to/tropicana-orange-juice.jpg",
        },
        { name: "Peach Iced Tea", img: "path/to/peach-iced-tea.jpg" },
        { name: "Coca-Cola", img: "path/to/coca-cola.jpg" },
      ],
    },
    {
      category: "Tea, Coffee & Milk Drink",
      img: "/pngegglatte.png",
      items: [
        { name: "Nescafé Classic Coffee", img: "path/to/nescafe-coffee.jpg" },
        { name: "Tata Tea Premium", img: "path/to/tata-tea-premium.jpg" },
        { name: "Amul Milk Drink", img: "path/to/amul-milk-drink.jpg" },
      ],
    },
    {
      category: "Instant Food",
      img: "/pngegg (42).png",
      items: [
        {
          name: "Maggi Instant Noodles",
          img: "path/to/maggi-instant-noodles.jpg",
        },
        { name: "Knorr Soup", img: "path/to/knorr-soup.jpg" },
        { name: "Quaker Oats", img: "path/to/quaker-oats.jpg" },
      ],
    },
    {
      category: "Sauces & Spreads",
      img: "/pngegg (39).png",
      items: [
        {
          name: "Kissan Tomato Ketchup",
          img: "path/to/kissan-tomato-ketchup.jpg",
        },
        { name: "Peanut Butter", img: "path/to/peanut-butter.jpg" },
        { name: "Mayonnaise", img: "path/to/mayonnaise.jpg" },
      ],
    },
    {
      category: "Pam Corner",
      img: "/pngegg (43).png",
      items: [
        { name: "Pringles Sour Cream", img: "path/to/pringles-sour-cream.jpg" },
        { name: "Jackfruit Chips", img: "path/to/jackfruit-chips.jpg" },
        { name: "Cashew Nuts", img: "path/to/cashew-nuts.jpg" },
      ],
    },
    {
      category: "Ice Creams & More",
      img: "/pngegg (40).png",
      items: [
        {
          name: "Baskin Robbins Vanilla",
          img: "path/to/baskin-robbins-vanilla.jpg",
        },
        {
          name: "Kwality Walls Cornetto",
          img: "path/to/kwality-walls-cornetto.jpg",
        },
        {
          name: "Amul Vanilla Ice Cream",
          img: "path/to/amul-vanilla-ice-cream.jpg",
        },
      ],
    },
  ];

  return (
    <div className="p-3 mt-3 font-Lexend flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-semibold ">Grocery & Kitchen</h1>
        <div>
          {groceryCategories.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-4 gap-3  mt-2 ">
              {groceryCategories.map((category, index) => (
                <Link key={index} to={category.link}>
                  <div className="flex justify-center items-center flex-col ">
                    <img
                      src={category.image}
                      alt=""
                      className="bg-[#f2f2f2] rounded-full h-[70px] w-[70px] object-contain "
                    />
                    <h1 className=" text-center text-xs flex  tracking-tight">
                      {category.category}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold ">Snacks & Drinks</h1>
        <div>
          {snaksDrinksCategories.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-4 gap-3  mt-2 ">
              {snaksDrinksCategories.map((category, index) => (
                <div key={index} >
                  <div className="flex justify-center items-center flex-col">
                  <img
                    src={category.img}
                    alt=""
                    className="bg-[#f2f2f2] rounded-full h-[70px] w-[70px] object-contain"
                  />
                  </div>
                  <h1 className=" text-center text-xs flex  tracking-tight">
                    {category.category}
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
