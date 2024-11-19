import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Feature/Cart/CartSlice";
import orderReducer from "./Feature/Order/OrderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});
