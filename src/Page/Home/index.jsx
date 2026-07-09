import React, { useState } from "react";
import ProductCategories from "../../components/ProductCategories";
import StoreCategories from "../../components/StoreCategories";
import Service from "../../components/Service";
import NewProduct from "../../components/NewProduct";
import OTPLoginModal from "../../components/OTPLoginModal";
import { useSelector } from "react-redux";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // dismissed = user manually closed the modal this session
  const [dismissed, setDismissed] = useState(false);

  // Show modal if: not logged in AND not manually dismissed
  const showLogin = !isLoggedIn && !dismissed;

  return (
    <div className="">
      <ProductCategories />
      <Service />
      <StoreCategories />
      <NewProduct />

      {showLogin && (
        <OTPLoginModal onClose={() => setDismissed(true)} />
      )}
    </div>
  );
}
