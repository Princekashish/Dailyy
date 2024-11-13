import React from "react";
import Hero from "../../components/Hero";
import ProductCategories from "../../components/ProductCategories";
import StoreCategories from "../../components/StoreCategories";
import Header from "../../components/Header";
import Service from "../../components/Service";
import NewProduct from "../../components/NewProduct";

export default function Home() {
  return (
    <div>
      <ProductCategories />
      <Service/>
      <StoreCategories />
      <NewProduct/>
    </div>
  );
}
