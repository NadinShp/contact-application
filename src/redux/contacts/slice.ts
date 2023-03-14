import { createSlice, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { Contacts, FetchContactError } from "./interfaces";
import { getAllContacts, addContact, deleteContact, changeContact } from "./thunk";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
} as Contacts;

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload: { id } }) => {
        state.loading = false;
        state.contacts = state.contacts.filter((contact) => contact.id !== id);
      })
      .addCase(changeContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        );
      })
      .addMatcher(isError, (state, action: PayloadAction<FetchContactError>) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.message;
        }
      });
  },
});

export default contactsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
