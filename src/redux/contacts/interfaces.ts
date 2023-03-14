export interface Contact {
  id: string | null;
  name: string;
  number: string;
}

export interface Contacts {
  contacts: Contact[];
  loading: boolean;
  error: string | null | undefined;
}

export interface newContactInterface {
  name: string;
  number: string;
}
export interface newContactWithToken {
  name: string;
  number: string;
  token: string;
}
export interface IdTokenContact {
  id: string | null;
  token: string;
}
export interface changeContactWithToken extends newContactWithToken {
  id: string | null;
}
export type FetchContactError = {
  message: string;
};
