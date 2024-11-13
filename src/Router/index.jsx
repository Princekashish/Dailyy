import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import Layout from "../container/Layout";
import Login from "../components/Login";
import Electronic from "../components/Electronic";
import Grocery from "../components/Grocery";

const rout = createBrowserRouter([
  { path: "/", Component: Layout , children:[
    {path:"/",Component:Home },
    {path:"/electronic",Component:Electronic},
    {path:"/grocery",Component:Grocery},
  ]},
  {path:"/login",Component:Login}
  
]);

export default function Router() {
  return (
    <div>
      <RouterProvider router={rout} />
    </div>
  );
}
