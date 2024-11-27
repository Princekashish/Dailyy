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
      image: "https://example.com/images/atta-rice-dal.jpg",
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
      image: "https://example.com/images/oil-ghee-masala.jpg",
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
      image: "https://example.com/images/dairy.jpg",
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
      image: "https://example.com/images/bakery-biscuits.jpg",
      items: ["Cakes", "Cookies", "Biscuits", "Bread Rolls", "Patties"],
    },
    {
      category: "Dry Fruits & Cereals",
      link: "/dry-fruits-cereals",
      image: "https://example.com/images/dry-fruits-cereals.jpg",
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
      image: "https://www.dailyy.in/Image/mainchicken.png",
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
      image: "https://example.com/images/kitchenware-appliances.jpg",
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
      img: "path/to/cookies-biscuits-image.jpg",
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
      img: "path/to/cookies-biscuits-image.jpg",
      items: [
        { name: "Dairy Milk Chocolate", img: "path/to/dairy-milk.jpg" },
        { name: "Gulab Jamun", img: "path/to/gulab-jamun.jpg" },
        { name: "Ladoo", img: "path/to/ladoo.jpg" },
      ],
    },
    {
      category: "Drinks & Juices",
      img: "path/to/cookies-biscuits-image.jpg",
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
      img: "path/to/cookies-biscuits-image.jpg",
      items: [
        { name: "Nescafé Classic Coffee", img: "path/to/nescafe-coffee.jpg" },
        { name: "Tata Tea Premium", img: "path/to/tata-tea-premium.jpg" },
        { name: "Amul Milk Drink", img: "path/to/amul-milk-drink.jpg" },
      ],
    },
    {
      category: "Instant Food",
      img: "path/to/cookies-biscuits-image.jpg",
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
      img: "path/to/cookies-biscuits-image.jpg",
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
      img: "path/to/cookies-biscuits-image.jpg",
      items: [
        { name: "Pringles Sour Cream", img: "path/to/pringles-sour-cream.jpg" },
        { name: "Jackfruit Chips", img: "path/to/jackfruit-chips.jpg" },
        { name: "Cashew Nuts", img: "path/to/cashew-nuts.jpg" },
      ],
    },
    {
      category: "Ice Creams & More",
      img: "path/to/cookies-biscuits-image.jpg",
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
                  <div>
                    <img
                      src={category.image}
                      alt=""
                      className="bg-[#f2f2f2] rounded-3xl h-[80px] object-contain"
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
                <div key={index}>
                  <img
                    src={category.img}
                    alt=""
                    className="bg-[#f2f2f2] rounded-3xl h-[80px] object-contain"
                  />
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
