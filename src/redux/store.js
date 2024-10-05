import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./createBasket/CreateBasket";

export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});
