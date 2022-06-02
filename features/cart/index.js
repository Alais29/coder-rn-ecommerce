import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";

const initialState = {
  products: [],
  orderCreated: {},
  loadingOrder: false,
  errorOrder: false,
};

export const confirmPurchaseAsync = createAsyncThunk(
  "cart/confirmPurchase",
  async (items, asyncThunk) => {
    try {
      const res = await fetch(`${DB_URL}orders.json`, {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toLocaleDateString(),
          items,
        }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue("Oops there seems to be an error");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productExistsInCart = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (productExistsInCart) {
        state.products.map((item) => {
          if (item.id === productExistsInCart.id) {
            item.quantity++;
          }
          return item;
        });
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: () => {},
    emptyCart: (state) => {
      state.products = [];
    },
  },
  extraReducers: {
    [confirmPurchaseAsync.pending]: (state) => {
      state.loadingOrder = true;
    },
    [confirmPurchaseAsync.fulfilled]: (state, { payload }) => {
      state.orderCreated = payload;
      state.loadingOrder = false;
    },
    [confirmPurchaseAsync.rejected]: (state) => {
      state.loadingOrder = false;
      state.errorOrder = true;
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
