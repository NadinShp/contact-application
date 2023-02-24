import { Options, AnswerAddContact, newContactType } from "./interfaces";

export function getOptions(token: string, method: string): Options {
  return {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export function getOptionsWithBody(body: newContactType, token: string): AnswerAddContact {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
}

export function getOptionChangeContact(body: newContactType, token: string): AnswerAddContact {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
}
