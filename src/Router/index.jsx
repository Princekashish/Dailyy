import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import Layout from "../container/Layout";
import Login from "../components/Login";
import Electronic from "../components/Electronic";
import Grocery from "../components/Grocery";
import Computer from "../components/Computers";
import Keybords from "../components/Keybords";
import Speakers from "../components/Speakers";
import Printers from "../components/Printers";
import Vegetables_fruits from "../components/Vegetables-fruits";

const rout = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/electronic", Component: Electronic },
      { path: "/grocery", Component: Grocery },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/vegetables-fruits", Component: Vegetables_fruits },
  {
    path: "/computer",
    Component: Computer,
    children: [
      { path: "", Component: Keybords }, // Empty path for the default component
      { path: "speakers", Component: Speakers }, // Correct relative path
      { path: "printers", Component: Printers }, // Correct relative path
    ],
  },
]);

export default function Router() {
  return (
    <div>
      <RouterProvider router={rout} />
    </div>
  );
}
