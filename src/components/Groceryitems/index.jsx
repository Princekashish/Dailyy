import { div } from "framer-motion/client";
import React from "react";

export default function Grocery() {
  const Grocery = [
    {
      id: 1,
      name: "Carrots",
      category: "Vegetables",
      quantity: 1,
      unit: "kg",
      price_per_unit: 40,
      total_price: 40,
    },
    {
      id: 2,
      name: "Tomatoes",
      category: "Vegetables",
      quantity: 1,
      unit: "kg",
      price_per_unit: 30,
      total_price: 30,
    },
    {
      id: 3,
      name: "Broccoli",
      category: "Vegetables",
      quantity: 0.5,
      unit: "kg",
      price_per_unit: 80,
      total_price: 40,
    },
    {
      id: 4,
      name: "Spinach",
      category: "Vegetables",
      quantity: 0.5,
      unit: "kg",
      price_per_unit: 20,
      total_price: 10,
    },
    {
      id: 5,
      name: "Cucumbers",
      category: "Vegetables",
      quantity: 1,
      unit: "kg",
      price_per_unit: 25,
      total_price: 25,
    },
  ];

  return (
    <div className="p-5 mt-5 font-Lexend flex flex-col gap-5">
      <div>
        {Grocery.map((items) => {
          return <div key={items.id}>
            <h1>{items.name}</h1>
            <p>{items.unit}</p>
            <h1>{items.total_price}</h1>
          </div>;
        })}
      </div>
    </div>
  );
}
