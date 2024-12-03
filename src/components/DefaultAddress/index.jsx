import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { RiTimerFlashLine } from "react-icons/ri";

export default function DefaultAddress({
  setDefaultAddress,
  handleLocationSelect,
}) {
  const closeModal = () => {
    setDefaultAddress(false); // Close the modal by setting the state to false
  };

  const location = [
    { location: "Delhi", img: "/pngegg (31).png" },
    { location: "Mumbai", img: "/pngegg (32).png" },
    { location: "Kolkata", img: "/pngegg (33).png" },
    { location: "Bangalore", img: "/pngegg (34).png" },
    { location: "Hyderabad", img: "/pngegg (35).png" },
    { location: "Ahmedabad" },
    { location: "Chandigarh" },
    { location: "Lucknow" },
  ];

  const handleLocationClick = (location) => {
    handleLocationSelect(location); // Call the parent function to set the selected location
    closeModal(); // Close the modal after selecting a location
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.35, stiffness: 1 }}
            className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[65vh]"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-2">
                  <div className="text-start flex flex-col justify-start items-start">
                    <h1 className="text-lg font-semibold">Location</h1>
                    <p className="text-sm">Delivery in Minutes</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1 bg-black/10 rounded-full"
                >
                  <X />
                </button>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-2">
                  {location.map((location, index) => {
                    return (
                      <div
                        key={index}
                        className="relative h-[10vh] flex justify-center items-center flex-col "
                        onClick={() => handleLocationClick(location.location)} // Call the function when location is clicked
                      >
                        <div className="absolute top-0 w-full h-[10vh] bg-gradient-to-b from-black/10 to-black/90 rounded-2xl" />
                        {location.img && (
                          <img
                            src={location.img}
                            alt=""
                            className="h-[80px] object-contain"
                          />
                        )}
                        <p className="text-white absolute bottom-0 z-10 text-sm">
                          {location.location}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <h1 className="text-center mt-10 text-[3em] font-semibold opacity-5">
                  Dailyy
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
