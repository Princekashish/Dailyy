import { Link } from "react-router-dom";

export default function ProductCategories() {
  const items = [
    {
      text: "Grocery items",
      img: "/pngeggveg.png",
      link: "/grocery",
    },
    {
      text: "Personal Care",
      img: "/pngegg (27).png",
      link: "/personal-care",
    },
    {
      text: "Cloths",
      img: "/pngegg (26).png",
      link: "/cloths",
    },
    {
      text: "Beauty",
      img: "/pngegg (2).png",
      link: "/beauty",
    },
    { text: "Party Essential", img: "/rb_4295.png", link: "/party-essential" },
    { text: "Essential", img: "/rb_26894.png", link: "/essential" },
    {
      text: "Skin care",
      img: "/skincare.png",
      link: "/",
    },
    {
      text: "Quick store",
      img: "https://example.com/images/atta-rice-dal.jpg",
      link: "/",
    },
  ];

  return (
    <div className="p-3 mt-3 font-Lexend flex flex-col gap-3">
      <div>
        <h1 className="text-xl font-semibold">Categories</h1>
        <div className="grid grid-cols-4 gap-3 mt-2">
          {items.map((item, i) => {
            const isLastItem = i === items.length - 1; // Check if the item is the last one
            return (
              <Link to={item.link} key={i}>
                <div
                  className={`rounded-xl flex flex-col gap-2 items-center ${
                    isLastItem ? " bg-yellow-300 rounded-t-2xl " : "" // Apply col-span-2 to the 7th item (index 6)
                  }`}
                >
                  <div className="bg-[#f4f5f7] h-[90px] w-full flex justify-center items-center rounded-2xl">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="h-[90px] object-contain text-[10px]"
                    />
                  </div>
                  <h1 className={`text-center text-sm ${isLastItem?"text-start text-xs p-1 ":""}`}>{item.text}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
