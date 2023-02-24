import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSignUp, fetchLogin, fetchLogout, fetchCurrentUser } from "../../service/user";
import { UserProp, UserRegister, UserRegisterData, UserRInterface } from "./interfaces";

export const getLogin = createAsyncThunk<UserRInterface, UserProp, { rejectValue: string }>(
  "user/getLogin",
  async function (user, { rejectWithValue }) {
    const response = await fetchLogin(user);
    if (!response.ok) {
      return rejectWithValue("Something is wrong");
    }
    return (await response.json()) as UserRInterface;
  }
);

export const signUp = createAsyncThunk<UserRInterface, UserRegisterData, { rejectValue: string }>(
  "user/signUp",
  async function (user, { rejectWithValue }) {
    const response = await fetchSignUp(user);
    if (!response.ok) {
      return rejectWithValue("Server error");
    }
    return (await response.json()) as UserRInterface;
  }
);

export const logOut = createAsyncThunk<{}, string, { rejectValue: string }>(
  "user/logOut",
  async function (token, { rejectWithValue }) {
    const response = await fetchLogout(token);
    if (response.status !== 200) {
      return rejectWithValue("Server error.");
    }
    return (await response.json()) as {};
  }
);

export const getCurrentUser = createAsyncThunk<UserRegister, string, { rejectValue: string }>(
  "user/getCurrentUser",
  async function (token, { rejectWithValue }) {
    const response = await fetchCurrentUser(token);
    if (!response.ok) {
      return rejectWithValue("Server error");
    }
    return (await response.json()) as UserRegister;
  }
);
