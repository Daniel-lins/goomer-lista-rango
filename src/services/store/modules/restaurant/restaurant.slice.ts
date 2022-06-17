import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../requests/api";

export const fetchAsyncRestaurant: any = createAsyncThunk(
    "restaurants/fetchAsyncRestaurant",
    async () => {
        const response = await api.get("");
        return response.data;
    }
);

export interface RestaurantData {
    id: string;
    name: string;
    adress: string;
    image: string;
    hours: [
        {
            from: number;
            to: number;
            days: [];
        }
    ];
}

export const fetchAsyncRestaurantDetail: any = createAsyncThunk(
    "restaurants/fetchAsyncRestaurantDetail",
    async (id) => {
        const response = await api.get(`${id}`);
        return response.data;
    }
);

const initialState = {
    restaurants: <RestaurantData>(<unknown>[]),
    selectRestaurant: {},
    FilterdRestaurants: [],
};

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
        addRestaurants: (state: any, { payload }) => {
            state.restaurants = payload;
        },
        // consoleRestaurant: (state: any, { payload }) => {
        //   console.log(state.restaurants) = payload;
        // },
    },

    extraReducers: {
        [fetchAsyncRestaurant.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncRestaurant.fulfilled]: (state: any, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, restaurants: payload };
        },
        [fetchAsyncRestaurant.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncRestaurantDetail.fulfilled]: (state: any, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectRestaurant: payload };
        },
    },
});

export const { addRestaurants } = restaurantSlice.actions;
// export const { consoleRestaurant } = restaurantSlice.actions;
export const { removeSelectedRestaurant }: any = restaurantSlice.actions;
export const getAllRestaurants = (state: any) => state.restaurant;
export const getselectRestaurant = (state: any) =>
    state.restaurant.selectRestaurant;
export default restaurantSlice.reducer;
