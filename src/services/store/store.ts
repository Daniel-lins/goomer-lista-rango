import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./modules/restaurant/restaurant.slice";

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});
