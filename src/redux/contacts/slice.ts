import { createSlice } from "@reduxjs/toolkit";
import { Contacts } from "./interfaces";
import { getAllContacts, addContact, deleteContact, changeContact } from "./thunk";

const initialState: Contacts = {
  contacts: [],
  loading: false,
  error: null,
};

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
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload: { id } }) => {
        state.loading = false;
        state.contacts = state.contacts.filter((contact) => contact.id !== id);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(changeContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.contacts = state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        );
      });
  },
});

export default contactsSlice.reducer;
