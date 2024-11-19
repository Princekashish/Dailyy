import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero";
import Cart from "../../components/Cart";

export default function Layout() {
  return (
    <div>
      <div className="bg-green-700">
        <Hero />
        <Header />
      </div>
     <div className="mb-[7vh]">
     <Outlet />
     </div>
      <div className="absolute bottom-10 ">
        <Cart bottom={"bottom-2"} />
      </div>
    </div>
  );
}
