import { ChevronDown, House } from "lucide-react";
import React, { useState } from "react";
import { FaUser, FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
import DefaultAddress from "../DefaultAddress";
import { RiMotorbikeLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";


export default function Hero() {
  const [defaultAddress, setDefaultAddress] = useState(false); // To show/hide the modal
  const [userAddress, setUserAddress] = useState({
    city: "Bodhgaya",
    address: "current location",
  });

  // Function to handle address selection
  const handleLocationSelect = (location) => {
    setUserAddress({
      city: location,
      address: `${location}`, 
      pincode: "110001",
    });
  };

  const handleDefaultAddress = () => {
    setDefaultAddress(!defaultAddress);
  };

  return (
    <div className="pt-6 ">
      
      <div className="flex flex-col gap-3">
        <div className="pl-3 pr-3 flex justify-between items-center text-white">
          <div className="flex flex-col justify-start items-start gap-1">
            <div
              onClick={handleDefaultAddress}
              className="flex justify-center items-center gap-2 cursor-pointer"
            >
              {/* <House color="white" size={20} /> */}
              <MdDeliveryDining color="white" size={28} />
              <div className="flex justify-center items-center gap-1">
                <h1 className="text-xl font-semibold">Delivery</h1>
                <h1>
                  <ChevronDown />
                </h1>
              </div>
            </div>
            <div className="text-sm font-light">
              <p>{userAddress.city}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 pr-3">
            <h1 className="text-2xl font-bold leading-none italic">Instants</h1>
          </div>
        </div>
      </div>

      {defaultAddress && (
        <DefaultAddress
          setDefaultAddress={setDefaultAddress}
          handleLocationSelect={handleLocationSelect} // Pass the function to handle location select
          selectedLocation={userAddress.city}
        />
      )}
    </div>
  );
}
