import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAddress, fetchAddress, insertAddress } from "../../db";


const initialState = {
  locations: [],
  rowId: '',
  loading: false,
  error: null,
};

export const addLocationDb = createAsyncThunk(
  'location/addToDb',
  async (location, asyncThunk) => {
    try {
      const result = await insertAddress(
          location.title,
          location.id,
          location.picture,
          location.address,
      )
      console.log("Add location db result:");
      console.log(result);
      return "Record succesfully"
    } catch (error) {
      console.log(error.message);
      return asyncThunk.rejectWithValue("Error at writing address on db")
    }
  }
)

export const getLocations = createAsyncThunk(
  'location/getLocations',
  async(_, asyncThunk) => {
    try {
      const result = await fetchAddress()
      console.log("Resultado al traer los datos de la DB en el thunk");
      console.log(result);
      const data = result.rows._array
      return data
    } catch (error) {
      return asyncThunk.rejectWithValue("Error at fetching addresses on db")
    }
  }
)

export const removeLocationDb = createAsyncThunk(
  'location/deleteLocation',
  async(location, asyncThunk) => {
    try {
      const result = await deleteAddress(location.id)
      console.log("Delete location result");
      console.log(result);
      return `Item with id: ${location.id}, removed`
    } catch (error) {
      return asyncThunk.rejectWithValue("Error at deleting address on db")
    }
  }
)

export const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, { payload }) => {
      state.locations.push(payload);
    },
    removeLocation: (state, {payload}) => {
      state.locations = state.locations.filter(location => location.id !== payload.id)
    }
  },
  extraReducers: {
        [addLocationDb.pending]: (state) => {
            state.loading = true
        },
        [addLocationDb.fulfilled]: (state, {payload}) => {
            console.log(payload);
            state.loading = false
            state.error = null
            // state.rowId = payload
        },
        [addLocationDb.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [getLocations.pending]: (state) => {
            state.loading = true
        },
        [getLocations.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.error = null
            state.locations = payload
        },
        [getLocations.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [removeLocationDb.pending]: (state) => {
            state.loading = true
        },
        [removeLocationDb.fulfilled]: (state) => {
            state.loading = false
            state.error = null
            // state.locations = payload
        },
        [removeLocationDb.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        }
    },
});

export const { addLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
