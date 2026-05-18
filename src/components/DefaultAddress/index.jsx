import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { RiTimerFlashLine } from "react-icons/ri";

export default function DefaultAddress({
  setDefaultAddress,
  handleLocationSelect,
  selectedLocation,
}) {
  const closeModal = () => {
    setDefaultAddress(false); 
  };

  const location = [
    { location: "Bodhgaya", image: "/bodhgahya.jpeg" },
  ];

  const handleLocationClick = (location) => {
    handleLocationSelect(location); // Call the parent function to set the selected location
    closeModal(); // Close the modal after selecting a location
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 h-screen">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.35, stiffness: 1 }}
            className="bg-white rounded-t-3xl p-5 w-full absolute bottom-0 h-[40vh]"
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
                  {location.map((loc, index) => {
                    const isSelected = selectedLocation === loc.location;
                    return (
                      <div
                        key={index}
                        className="relative h-[10vh] flex justify-center items-center flex-col rounded-2xl cursor-pointer overflow-hidden"
                        onClick={() => handleLocationClick(loc.location)} // Call the function when location is clicked
                      >
                        <div className="absolute top-0 w-full h-[10vh] bg-gradient-to-b from-black/10 to-black/90 rounded-2xl" />
                        
                        {isSelected && (
                          <div className="absolute inset-0 bg-black/40 z-20 top-0 rounded-2xl">
                            <span className="text-white bg-green-600 text-sm px-1 py-1 rounded-md">Selected</span>
                          </div>
                        )}

                        {loc.image && (
                          <img
                            src={loc.image}
                            alt=""
                            className="h-[80px] object-contain rounded-2xl"
                          />
                        )}
                        <p className="text-white absolute bottom-0 z-20 text-sm">
                          {loc.location}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <h1 className="text-center mt-10 text-[3em] font-semibold opacity-5">
                  Instants
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
