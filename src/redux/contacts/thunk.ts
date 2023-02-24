import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, newContactWithToken, IdTokenContact, changeContactWithToken } from "./interfaces";
import {
  fetchALlContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchChangeContact,
} from "../../service/contacts";

export const getAllContacts = createAsyncThunk<Contact[], string, { rejectValue: string }>(
  "contacts/getAllContacts",
  async function (token, { rejectWithValue }) {
    const response = await fetchALlContacts(token);
    if (!response.ok) {
      return rejectWithValue("Server error. Try it late");
    }
    return (await response.json()) as Contact[];
  }
);

export const addContact = createAsyncThunk<Contact, newContactWithToken, { rejectValue: string }>(
  "contacts/addContact",
  async function (newContact, { rejectWithValue }) {
    const response = await fetchAddContact(newContact);
    if (!response.ok) {
      return rejectWithValue("Something is wrong. Try again");
    }
    return (await response.json()) as Contact;
  }
);

export const deleteContact = createAsyncThunk<Contact, IdTokenContact, { rejectValue: string }>(
  "contacts/deleteContact",
  async function (data, { rejectWithValue }) {
    const { id, token } = data;
    const response = await fetchDeleteContact(id, token);
    if (!response.ok) {
      return rejectWithValue("Something is wrong. Try it late again.");
    }
    return (await response.json()) as Contact;
  }
);

export const changeContact = createAsyncThunk<
  Contact,
  changeContactWithToken,
  { rejectValue: string }
>("contacts/changeContact", async function (body, { rejectWithValue }) {
  const response = await fetchChangeContact(body);
  if (!response.ok) {
    return rejectWithValue("Server error");
  }
  return (await response.json()) as Contact;
});
