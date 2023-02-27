export interface UserInterface {
  token: string;
  name: string;
  email: string;
}

export const user: UserInterface = {
  name: "",
  email: "",
  token: "",
};

export interface UserI {
  user: UserInterface;
  loading: boolean;
  error: string | null | any | unknown;
}

export type UserProp = {
  email: string;
  password: string;
};

export type UserRegister = {
  name: string;
  email: string;
};

export interface UserRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface UserRInterface {
  user: UserRegister;
  token: string;
}
