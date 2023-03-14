import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Contact,
  newContactWithToken,
  IdTokenContact,
  changeContactWithToken,
  FetchContactError,
} from "./interfaces";
import {
  fetchALlContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchChangeContact,
} from "../../service/contacts";

export const getAllContacts = createAsyncThunk<
  Contact[],
  string,
  { rejectValue: FetchContactError }
>("contacts/getAllContacts", async function (token, thunkApi) {
  const response = await fetchALlContacts(token);
  if (!response.ok) {
    return thunkApi.rejectWithValue({ message: response.statusText });
  }
  return (await response.json()) as Contact[];
});

export const addContact = createAsyncThunk<
  Contact,
  newContactWithToken,
  { rejectValue: FetchContactError }
>("contacts/addContact", async function (newContact, thunkApi) {
  const response = await fetchAddContact(newContact);
  if (!response.ok) {
    return thunkApi.rejectWithValue({ message: response.statusText });
  }
  return (await response.json()) as Contact;
});

export const deleteContact = createAsyncThunk<
  Contact,
  IdTokenContact,
  { rejectValue: FetchContactError }
>("contacts/deleteContact", async function (data, thunkApi) {
  const { id, token } = data;
  const response = await fetchDeleteContact(id, token);
  if (!response.ok) {
    return thunkApi.rejectWithValue({ message: response.statusText });
  }
  return (await response.json()) as Contact;
});

export const changeContact = createAsyncThunk<
  Contact,
  changeContactWithToken,
  { rejectValue: FetchContactError }
>("contacts/changeContact", async function (body, thunkApi) {
  const response = await fetchChangeContact(body);
  if (!response.ok) {
    return thunkApi.rejectWithValue({ message: response.statusText });
  }
  return (await response.json()) as Contact;
});
