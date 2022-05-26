import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories";
import productsReducer from "../features/products";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});
