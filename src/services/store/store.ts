import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./modules/restaurant/restaurant.slice";
import menuReducer from "./modules/restaurant/menu.slice";

export const store = configureStore({
    reducer: {
        restaurant: restaurantReducer,
        menu: menuReducer,
    },
});
