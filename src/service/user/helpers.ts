import { UserProps, UserI, OptionsWithBody, OptionsI } from "./interfaces";

export function getOptions(token: string, method: string): OptionsI {
  return {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
export function getOptionsWithBody(body: UserProps | UserI): OptionsWithBody {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  };
}
