import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";

const initialState = {
  orders: [],
  loading: false,
  error: false,
};

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (asyncThunk) => {
    try {
      const res = await fetch(`${DB_URL}orders.json`);
      const data = Object.entries(await res.json());
      const formattedData = data.reduce((formatted, item) => {
        formatted.push({
          id: item[0],
          ...item[1],
        });
        return formatted;
      }, []);
      return formattedData;
    } catch (error) {
      return rejectWithValue("Oops there seems to be an error");
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.orders = payload;
    },
    [getOrders.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default ordersSlice.reducer;
