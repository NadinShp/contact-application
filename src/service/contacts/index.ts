import { getOptions, getOptionsWithBody, getOptionChangeContact } from "../contacts/helpers";
import { newContactWithToken, changeContactWithToken } from "./interfaces";

const URL = "https://connections-api.herokuapp.com/contacts";

export function fetchALlContacts(token: string) {
  const options = getOptions(token, "GET");
  return fetch(URL, options);
}

export function fetchAddContact(newContact: newContactWithToken) {
  const { token, name, number } = newContact;
  const options = getOptionsWithBody({ name, number }, token);
  return fetch(URL, options);
}

export function fetchDeleteContact(id: string | null, token: string) {
  const options = getOptions(token, "DELETE");
  return fetch(`${URL}/${id}`, options);
}

export function fetchChangeContact(body: changeContactWithToken) {
  const { id, name, number, token } = body;
  const options = getOptionChangeContact({ name, number }, token);
  return fetch(`${URL}/${id}`, options);
}
