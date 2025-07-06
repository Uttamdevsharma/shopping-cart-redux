import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const item = state.find(p => p.id === action.payload.id);
      item
        ? item.quantity++
        : state.push({ ...action.payload, quantity: 1 });
    }
  }
  
});

export const { addToCart } = cartSlice.actions;
export default cartSlice;
