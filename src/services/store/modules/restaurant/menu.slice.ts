import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../requests/api";
import { IMenu } from "../../../../interfaces/menu";

export const fetchAsyncMenu: any = createAsyncThunk(
  "menu/fetchAsyncMenu",
  async (id) => {
    const response = await api.get(`${id}/menu`);
    return response.data;
  }
);

const initialState = {
  Menus: <any>(<unknown>[]),
  selectRestaurant: {},
  FilterdMenu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addRestaurants: (state: any, { payload }) => {
      state.menu = payload;
    },
  },

  extraReducers: {
    [fetchAsyncMenu.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMenu.fulfilled]: (state: any, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, restaurants: payload };
    },
    [fetchAsyncMenu.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { addMenus }: any = menuSlice.actions;
export const { removeSelectedMenu }: any = menuSlice.actions;
export const getAllMenus = (state: any) => state.menu;
export const getselectMenu = (state: any) => state.menu.selectRestaurant;
export default menuSlice.reducer;
