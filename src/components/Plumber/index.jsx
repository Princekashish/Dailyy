import {
  Banknote,
  Calendar,
  Filter,
  Flame,
  MapPin,
  Search,
  Star,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Plumberworkers from "../../worker.json";
import { TiArrowSortedDown, TiStarFullOutline } from "react-icons/ti";
import { motion } from "framer-motion";
import { MdVerifiedUser } from "react-icons/md";
import ScrollTop from "../../utils/ScreenTop";


export default function Plumber() {
 const [filterview, SetFilterview] = useState(false);
  const filterRef = useRef();
  const navigate = useNavigate();

  const closeFilter = (e) => {
    if (filterRef.current === e.target) {
      SetFilterview(false);
    }
  };

  //array object
  const filteroption = [
    { name: "Most Popular", icon: <Flame /> },
    { name: "Rating", icon: <Star /> },
    { name: "Price (High to Low)", icon: <Banknote /> },
    { name: "Price (Low to High)", icon: <Banknote /> },
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <ScrollTop />
      <div className="flex justify-between items-center p-2 bg-green-700  w-full h-[8vh] ">
        <div className="flex justify-start items-center p-2 gap-2 z-10 bg-white/40  rounded-full">
          <Link
            to={"/"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-medium text-white/90 uppercase">
            Plumber
          </h1>
        </div>
        <div
          onClick={() => navigate("/service/search")}
          className="flex justify-center items-center rounded-full bg-white/40 h-[35px] w-[35px] "
        >
          <Search size={20} />
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3">
        <div className="flex justify-between items-center  rounded-lg ">
          {/* <button
            onClick={() => SetFilterview((pre) => !pre)}
            className="px-2 py-2 gap-1 border border-black/10  text-sm rounded-full capitalize flex justify-center items-center"
          >
            sort by <TiArrowSortedDown size={20} />
          </button> */}
        </div>
        {/* list of workers */}
        <div className="flex flex-col gap-4">
          {Plumberworkers.plumber_services.map((plumber) => {
            return (
              <Link
                to={`/plumber/${plumber.id}`}
                key={plumber.id}
                className="border border-black/20 rounded-2xl p-3 flex flex-col gap-3 justify-center "
              >
                <div className="flex justify-between items-center gap-3   ">
                  <img
                    src={plumber.img}
                    alt=""
                    className="h-[85px] w-[85px] rounded-full object-cover"
                  />

                  <div className="text-start  w-full flex flex-col gap-[5px] ">
                    <h1 className="font-semibold">{plumber.name}</h1>
                    <p className="font-light text-sm flex justify-start items-center gap-1">
                      <span className="text-blue-500">
                        <MdVerifiedUser size={20} />
                      </span>
                      {plumber.jobsCompleted} Job completed near you
                    </p>
                    <h1 className="text-black/50 text-sm">
                      {plumber.description.length > 15
                        ? `${plumber.description.substring(0, 31)}...`
                        : plumber.description}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-around items-center capitalize border-t pt-3">
                  <div className="flex gap-1">
                    <h3 className="font-light text-sm">Disc</h3>
                  </div>
                  <div className="flex gap-1">
                    <Banknote size={20} />
                    <h3 className="font-light text-sm">₹{plumber.price} </h3>
                  </div>
                  <div className="flex justify-center items-center  ">
                    <button
                     
                      className="px-3 py-1 border border-green-600 relative left-5 rounded-lg"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {filterview && (
        <div
          ref={filterRef}
          onClick={closeFilter}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[60] "
        >
          <div className="flex justify-center items-center ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, stiffness: 1 }}
              className="bg-[#f4f4f4] rounded-t-3xl p-5 w-full absolute bottom-0 h-[42vh] flex flex-col justify-between  "
            >
              <div className="flex flex-col gap-2 justify-between   h-full">
                <h1 className="text-center text-lg font-semibold px-3 py-4 border-b-2">
                  Sorted by
                </h1>
                <div className="flex flex-col gap-3 justify-center ">
                  {filteroption.map((option, i) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-start items-center gap-1"
                      >
                        {option.icon}
                        <h1 className="text-base font-light">{option.name}</h1>
                      </div>
                    );
                  })}
                </div>
                <button className="bg-black text-white py-3 rounded-full">
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
