export interface UserProps {
  email: string;
  password: string;
}
export interface UserI extends UserProps {
  name: string;
}
export type headerMain = {
  "Content-Type": string;
};

export type headersWithTokenType = headerMain & { Authorization: string };

export interface OptionsI {
  method: string;
  headers: headersWithTokenType;
}
export interface OptionsWithBody {
  method: string;
  headers: headerMain;
  body: string;
}
