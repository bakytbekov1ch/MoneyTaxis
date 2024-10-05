import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    remove: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
