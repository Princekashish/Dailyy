import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero";

export default function Layout() {
  return (
    <div>
      <div className="bg-green-700"> 
      <Hero />
      <Header />
      </div>
      <Outlet />
    </div>
  );
}
