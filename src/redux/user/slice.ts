import { createSlice } from "@reduxjs/toolkit";
import { getLogin, signUp, logOut, getCurrentUser } from "./thunk";
import { UserI, user } from "./interfaces";

const initialState: UserI = {
  user: user,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLogin.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getLogin.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.name = payload.user.name;
        state.user.token = payload.token;
        state.loading = false;
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload: { user, token } }) => {
        state.loading = false;
        state.user.name = user.name;
        state.user.email = user.email;
        state.user.token = token;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user.name = "";
        state.user.email = "";
        state.user.token = "";
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload: { name, email } }) => {
        state.loading = false;
        state.user.name = name;
        state.user.email = email;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
