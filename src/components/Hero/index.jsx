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
    address: "gulzarbagh near post-office",
    pincode: "824231",
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
                <h1 className="text-xl font-semibold">19 minutes</h1>
                <h1>
                  <ChevronDown />
                </h1>
              </div>
            </div>
            <div className="text-sm font-light">
              <p>{userAddress.address}....</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 pr-3">
            <h1 className="text-3xl font-bold leading-none">Dailly</h1>
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
