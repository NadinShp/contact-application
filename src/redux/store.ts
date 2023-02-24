import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user/slice";
import contactsSlice from "./contacts/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    user: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
