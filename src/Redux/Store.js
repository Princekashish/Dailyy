import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Feature/Cart/CartSlice";
import orderReducer from "./Feature/Order/OrderSlice";
import authReducer from "./Feature/Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer,
  },
});
