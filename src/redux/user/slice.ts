import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { getLogin, signUp, logOut, getCurrentUser } from "./thunk";
import { UserI, user, ErrorProps } from "./interfaces";

const initialState = {
  user: user,
  loading: false,
  error: null,
} as UserI;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLogin.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getLogin.fulfilled, (state, { payload }) => {
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.user.token = payload.token;
      state.loading = false;
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.message;
      }
      state.loading = false;
    });
    builder.addCase(signUp.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload: { user, token } }) => {
      state.loading = false;
      state.user.name = user.name;
      state.user.email = user.email;
      state.user.token = token;
    });
    builder.addCase(logOut.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.loading = false;
      state.user.name = "";
      state.user.email = "";
      state.user.token = "";
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload: { name, email } }) => {
      state.loading = false;
      state.user.name = name;
      state.user.email = email;
    });
    builder.addMatcher(isError, (state, action: PayloadAction<ErrorProps>) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      }
    });
  },
});

export default userSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
