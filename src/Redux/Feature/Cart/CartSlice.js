import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Store cart items here
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productAdd(state, action) {
      // Check if the item already exists in the cart (based on ID)
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        // If item already exists, increase the quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If it doesn't exist, add the item with quantity 1
        const itemWithQuantity = { ...action.payload, quantity: 1 };
        state.items.push(itemWithQuantity);
      }
    },

    productRemove(state, action) {
      // Find the index of the item to remove (based on ID)
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItemIndex >= 0) {
        // Decrease quantity if greater than 1
        if (state.items[existingItemIndex].quantity > 1) {
          state.items[existingItemIndex].quantity -= 1;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },

    productRemoveComplete(state, action) {
      // Completely remove the item from the cart
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      // Clears the entire cart
      state.items = [];
    },
  },
});

// Selector to calculate the total cart price
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const { productAdd, productRemove, productRemoveComplete, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;
