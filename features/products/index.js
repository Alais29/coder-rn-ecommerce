import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../data/products";

const initialState = {
  products: PRODUCTS,
  productsByCategory: [],
  productSelected: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsByCategory: (state, action) => {
      const productsFiltered = state.products.filter(
        (product) => product.categoria === action.payload
      );
      state.productsByCategory = productsFiltered;
    },
    setProductSelected: (state, action) => {
      const productSelected = state.productsByCategory.find(
        (product) => product.id === action.payload
      );
      state.productSelected = productSelected;
    },
  },
});

export const { setProductsByCategory, setProductSelected } =
  productsSlice.actions;

export default productsSlice.reducer;
