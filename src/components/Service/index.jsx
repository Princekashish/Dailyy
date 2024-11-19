import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";

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
    { text: "Electrician", img: "/rb_150265.png" },
    { text: "Plumber", img: "/rb_136620.png" },
    { text: "Drying", img: "/rb_50594.png" },
    { text: "Electrician", img: "/rb_150265.png" },
    { text: "Plumber", img: "/rb_136620.png" },
    { text: "Drying", img: "/rb_50594.png" },
  ];

  // State to track whether the scroll position is past a certain point
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle scroll event
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition = scrollContainerRef.current.scrollLeft;

      // If the scroll position is at the far right (i.e., scrolled beyond a threshold)
      if (scrollPosition + clientWidth >= scrollWidth - 230) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="p-3 font-Lexend flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold ">Service</h1>
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden overflow-x-scroll gap-3 no-scrollbar relative p-2"
        >
          {servicelist.map((items, i) => (
            <div
              key={i}
              className=" rounded-2xl  flex flex-col  justify-center gap-2 items-center min-w-[85px] relative p-1"
            >
              <div className="bg-[#f4f5f7]  p-2 flex justify-center items-center rounded-2xl">
                {" "}
                <img
                  src={items.img}
                  alt=""
                  className="rounded-lg h-[70px] object-contain"
                />
              </div>

              <h1 className="text-center text-xs z-10 ">{items.text}</h1>
            </div>
          ))}

          {/* Conditionally render the motion div based on scroll position */}
          {!isScrolled && (
            <motion.div
              initial={{ x: -10 }} // Start position at 0 (centered)
              animate={{ x: 0 }} // End position at 0 (centered)
              transition={{
                type: "spring", // Smooth spring animation
                stiffness: 100, // Controls the stiffness of the spring
                damping: 25, // Controls the bounce damping
                duration: 0.25, // Duration for one loop (1 second)
              }}
              className="absolute right-0 top-0 bottom-0 m-auto w-10 h-10 flex items-center justify-center"
            >
              <ChevronsRight className="text-gray-300 z-10" />
            </motion.div>
          )}
        </div>
      </div>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-[20vh] rounded-xl"
      >
        {service.map((items, i) => {
          return (
            <div key={i} className="rounded-xl">
              <SwiperSlide>
                <img
                  src={items.img}
                  alt=""
                  className="rounded-xl object-cover"
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
