import { UserProps, UserI } from "./interfaces";
import { getOptions, getOptionsWithBody } from "./helpers";
const URL = "https://connections-api.herokuapp.com/users/";

export const fetchLogin = (user: UserProps) => {
  const options = getOptionsWithBody(user);
  return fetch(`${URL}login`, options);
};

export const fetchSignUp = (user: UserI) => {
  const options = getOptionsWithBody(user);
  return fetch(`${URL}signup`, options);
};

export const fetchLogout = (token: string) => {
  const options = getOptions(token, "POST");
  return fetch(`${URL}logout`, options);
};

export const fetchCurrentUser = (token: string) => {
  const options = getOptions(token, "GET");
  return fetch(`${URL}current`, options);
};
