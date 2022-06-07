import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
};

export const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, { payload }) => {
      state.locations.push(payload);
    },
  },
  extraReducers: {},
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;
