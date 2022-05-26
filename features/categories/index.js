import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../data/categories";

const initialState = {
  categories: CATEGORIES,
  categorySelected: {},
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.categorySelected = action.payload;
    },
  },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
