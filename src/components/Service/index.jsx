import { useState, useEffect, useCallback, useRef } from "react";
import Pagination from "../../utils/Animated/Pagination";
import { Link } from "react-router-dom";

export default function Service() {
  const service = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663047166207-fd717b9a0ba7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1678766818924-1c15a95c77be?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const servicelist = [
    { text: "All", img: "/groupall.png" , link : "/service"},
    { text: "Plumber", img: "/rb_136620.png" },
    { text: "Drying", img: "/rb_50594.png" },
    { text: "Electrician", img: "/rb_150265.png" },
    { text: "Plumber", img: "/rb_136620.png" },
    { text: "Drying", img: "/rb_50594.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % service.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);


  return (
    <div className="p-3 font-Lexend flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-semibold ">Service</h1>
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden overflow-x-scroll gap-1 no-scrollbar relative whitespace-nowrap w-full"
        >
          {servicelist.map((items, i) => (
            <Link to={items.link}
              key={i}
              className=" rounded-full  flex flex-col  justify-center gap-2 items-center   relative p-1"
            >
              <div className="bg-[#f4f5f7] w-[70px] h-[70px]  flex justify-center items-center rounded-full">
                {" "}
                <img
                  src={items.img}
                  alt=""
                  className=" h-[50px] w-[50px] object-contain"
                />
              </div>

              <h1 className="text-center text-xs z-10 ">{items.text}</h1>
            </Link>
          ))}

        </div>
      </div>

      <div className="relative aspect-video h-[20vh] ">
        <Pagination
          totalSlides={service.length}
          currentSlide={currentIndex}
          duration={5000}
        />
        <div className="flex ">
          {service.map((src, index) => (
            <div className=" ">
              <div className="absolute top-0 w-full   h-[20vh] bg-black/20 rounded-2xl" />
              <img
                src={src.img}
                alt={`slide ${index + 1}`}
                fill
                className={`object-cover transition-opacity absolute top-0 w-full rounded-2xl h-[20vh] duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
