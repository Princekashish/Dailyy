import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import Layout from "../container/Layout";
// import Login from "../components/Login";
import Electronic from "../components/Electronic";
import Grocery from "../components/Grocery";
import Computer from "../components/Computers";
import Keybords from "../components/Keybords";
import Speakers from "../components/Speakers";
import Printers from "../components/Printers";
import Vegetables_fruits from "../components/Vegetables-fruits";
import UserAccount from "../components/UserAccount";
import Stationery from "../components/Stationery";
import GroceryItems from "../components/Groceryitems_Veg&Fruits";
import Exotics_Fruits from "../components/Exotics_Fruits";
import Appliances from "../components/Appliances";
import Gifts from "../components/Gifts";
import Cancle from "../components/Cancel";
import Sucess from "../components/Succes";
import Plumber from "../components/Plumber";
import ServiceSearch from "../components/ServiceSearch";
import PlumberCart from "../components/PlumberCart";
import SearchProduct from "../components/SearchProduct";
import ComingSoon from "../components/ComingSoon";
import PaymentMethod from "../components/PaymentMethod";
import Drink from "../components/Drink";
import Fruits from "../components/Fruits";
import FruitsLayout from "../components/FruitsLayout";
import DrinkLayout from "../components/DrinkLayout";
import SnacksLayout from "../components/SnacksLayout";
import Snacks from "../components/Snacks";
import GymLayout from "../components/GymLayout";
import Gym from "../components/Gym";
import PersonalCareLayout from "../components/PersonalCareLayout";
import BulkLayout from "../components/BulkLayout";
import Bulk from "../components/Bulk";
import PersonalCare from "../components/PersonalCare";


const rout = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/electronic", Component: Electronic },
      { path: "/grocery", Component: Grocery },
      { path: "/appliances", Component: Appliances },
      { path: "/gift", Component: Gifts },
    ],
  },
  // { path: "/login", Component: Login },
  {
    path: "/vegetables-fruits",
    Component: Vegetables_fruits,
    children: [
      { path: "", Component: GroceryItems },
      { path: "bakery-biscuits", Component: Exotics_Fruits },
    ],
  },

  {
    path: "/fruits",
    Component: FruitsLayout,
    children: [
      { path: "", Component: Fruits },
    ],
  },

  {
    path: "/drink",
    Component: DrinkLayout,
    children: [
      { path: "", Component: Drink },
    ],
  },
  {
    path: "/snacks",
    Component: SnacksLayout,
    children: [
      { path: "", Component: Snacks },
    ],
  },
  {
    path: "/gym",
    Component: GymLayout,
    children: [
      { path: "", Component: Gym },
    ],
  },
  {
    path: "/personal-care",
    Component: PersonalCareLayout,
    children: [
      { path: "", Component: PersonalCare },
    ],
  },
  {
    path: "/bulk",
    Component: BulkLayout,
    children: [
      { path: "", Component: Bulk },
    ],
  },
  {
    path: "/computer",
    Component: Computer,
    children: [
      { path: "", Component: Keybords }, // Empty path for the default component
      { path: "speakers", Component: Speakers }, // Correct relative path
      { path: "printers", Component: Printers },
    ],
  },
  {
    path: "/stationery",
    Component: Stationery,
    children: [
      { path: "", Component: Keybords }, // Empty path for the default component
      { path: "speakers", Component: Speakers }, // Correct relative path
      { path: "printers", Component: Printers },
    ],
  },
  { path: "/create_account", Component: UserAccount },
  { path: "/success", Component: Sucess },
  { path: "/cancel", Component: Cancle },
  { path: "/plumber", Component: Plumber },
  { path: "/service/search", Component: ServiceSearch },
  { path: "/search", Component: SearchProduct },

  { path: "/plumber/:id", Component: PlumberCart },
  { path: "/payment-method", Component: PaymentMethod },
  { path: "*", Component: ComingSoon },
]);

export default function Router() {
  return (
    <div>
      <RouterProvider router={rout} />
    </div>
  );
}
