import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_SIGNIN, AUTH_SIGNUP } from "../../Constants/firebase";

const initialState = {
  user: {
    userID: "",
    email: "",
    token: "",
  },
  loading: false,
  error: "",
};

export const signUpAsync = createAsyncThunk(
  "auth/signUp",
  async (userInfo, asyncThunk) => {
    try {
      const res = await fetch(`${AUTH_SIGNUP}`, {
        method: "POST",
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          returnSecureToken: true,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue("Oops there seems to be an error");
    }
  }
);

export const signInAsync = createAsyncThunk(
  "auth/signIn",
  async (userInfo, asyncThunk) => {
    try {
      const res = await fetch(`${AUTH_SIGNIN}`, {
        method: "POST",
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          returnSecureToken: true,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue("Oops there seems to be an error");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
    },
  },
  extraReducers: {
    [signUpAsync.pending]: (state) => {
      state.loading = true;
    },
    [signUpAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.error) {
        state.error = payload.error.message;
      } else {
        state.error = "";
        state.user.userID = payload.localId;
        state.user.email = payload.email;
        state.user.token = payload.idToken;
      }
    },
    [signUpAsync.rejected]: (state) => {
      state.loading = false;
      state.error = "Error on signup";
    },
    [signInAsync.pending]: (state) => {
      state.loading = true;
    },
    [signInAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.error) {
        state.error = payload.error.message;
      } else {
        state.error = "";
        state.user.userID = payload.localId;
        state.user.email = payload.email;
        state.user.token = payload.idToken;
      }
    },
    [signInAsync.rejected]: (state) => {
      state.loading = false;
      state.error = "Error on signing in";
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
