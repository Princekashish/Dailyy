import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCategories() {
  const items = [
    {
      text: "Vegetables",
      img: "/vege.webp",
      link: "/vegetables-fruits",
    },
    {
      text: "Fruits",
      img: "/fruits-cppy.webp",
      link: "/fruits",
    },
    {
      text: "Drinks",
      img: "/drinks-cppy.webp",
      link: "/drink",
    },
    {
      text: "Snacks",
      img: "/snacks.webp",
      link: "/snacks",
    },
    { text: "Applicances", img: "/applicances.webp", link: "/appliances" },
    {
      text: "Gym",
      img: "/powder.webp",
      link: "/",
    },
    {
      text: "Personal Care",
      img: "/personal-care.webp",
      link: "/",
    },
    { text: "Bulk", img: "/Bulkorder.webp", link: "/" },
  ];

  return (
    <div className="p-3 mt-3 font-Lexend flex flex-col gap-3">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold ">Categories</h1>

        </div>
        <div className="grid grid-cols-4 gap-3 mt-2 ">
          {items.map((item, i) => {
            const isLastItem = i === items.length - 1; // Check if the item is the last one
            return (
              <Link to={item.link} key={i}>
                <div
                  className={`rounded-xl flex flex-col gap-[.5px] items-center ${isLastItem ? "  rounded-t-2xl " : "" // Apply col-span-2 to the 7th item (index 6)
                    }`}
                >
                  <div className="bg-[#f8fafc]  h-[80px] w-[80px]  flex justify-center items-center rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="h-[80px] w-[80px] object-contain"
                    />
                  </div>
                  <h1
                    className={`text-center text-xs ${isLastItem ? "text-start text-xs p-1 " : ""
                      }`}
                  >
                    {item.text}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
