import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../requests/api";

export const fetchAsyncRestaurant: any = createAsyncThunk(
  "restaurants/fetchAsyncRestaurant",
  async () => {
    const response = await api.get("");
    return response.data;
  }
);

const initialState = {
  restaurants: [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurants: (state: any, { payload }) => {
      state.restaurants = payload;
    },
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
  },
});

export const { addRestaurants } = restaurantSlice.actions;
export const getAllRestaurants = (state: any) => state.restaurant;
export default restaurantSlice.reducer;
