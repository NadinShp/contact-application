import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSignUp, fetchLogin, fetchLogout, fetchCurrentUser } from "../../service/user";
import { UserProp, UserRegister, UserRegisterData, UserRInterface, ErrorProps } from "./interfaces";

export const getLogin = createAsyncThunk<UserRInterface, UserProp, { rejectValue: ErrorProps }>(
  "user/getLogin",
  async function (user, thunkApi) {
    const response = await fetchLogin(user);
    if (!response.ok) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as UserRInterface;
  }
);

export const signUp = createAsyncThunk<
  UserRInterface,
  UserRegisterData,
  { rejectValue: ErrorProps }
>("user/signUp", async function (user, thunkApi) {
  const response = await fetchSignUp(user);
  if (!response.ok) {
    return thunkApi.rejectWithValue({ message: response.statusText });
  }
  return (await response.json()) as UserRInterface;
});

export const logOut = createAsyncThunk<{}, string, { rejectValue: ErrorProps }>(
  "user/logOut",
  async function (token, thunkApi) {
    const response = await fetchLogout(token);
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as {};
  }
);

export const getCurrentUser = createAsyncThunk<UserRegister, string, { rejectValue: ErrorProps }>(
  "user/getCurrentUser",
  async function (token, thunkApi) {
    const response = await fetchCurrentUser(token);
    if (!response.ok) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    return (await response.json()) as UserRegister;
  }
);
