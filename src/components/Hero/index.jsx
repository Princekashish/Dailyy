import { ChevronDown, House } from "lucide-react";
import React, { useState } from "react";
import { FaUser, FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
import DefaultAddress from "../DefaultAddress";


export default function Hero() {
  const [defaultAddress, setDefaultAddress] = useState(false); // To show/hide the modal
  const [userAddress, setUserAddress] = useState({
    city: "Delhi",
    address: "ConnetPlace near Park",
    pincode: "110001",
  });

  // Function to handle address selection
  const handleLocationSelect = (location) => {
    setUserAddress({
      city: location,
      address: `${location} address (example)`, // Update this based on the selected location
      pincode: "110001", // You can set pincode dynamically or leave it static
    });
  };

  const handleDefaultAddress = () => {
    setDefaultAddress(!defaultAddress);
  };

  return (
    <div className="pt-3">
      
      <div className="flex flex-col gap-3">
        <div className="text-white pl-3 pr-3 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold leading-none">Dailyy</h1>
          </div>
          <div className="bg-gray-300 p-2 rounded-full flex justify-center items-center">
            <Link to={"/login"}>
              <FaUser size={20} color="black" />
            </Link>
          </div>
        </div>
        <div className="pl-3 pr-3 flex justify-between items-center text-white">
          <div className="flex flex-col justify-start items-start gap-1">
            <div
              onClick={handleDefaultAddress}
              className="flex justify-center items-center gap-2 cursor-pointer"
            >
              <House color="white" size={20} />
              <div className="flex justify-center items-center gap-1">
                <h1 className="text-sm">Home</h1>
                <h1>
                  <ChevronDown />
                </h1>
              </div>
            </div>
            <div className="text-sm font-light">
              <p>{userAddress.address}....</p>
            </div>
          </div>
        </div>
      </div>

      {defaultAddress && (
        <DefaultAddress
          setDefaultAddress={setDefaultAddress}
          handleLocationSelect={handleLocationSelect} // Pass the function to handle location select
        />
      )}
    </div>
  );
}
