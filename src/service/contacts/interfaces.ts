export type Header = {
  "Content-Type": string;
  Authorization: string;
};

export interface Options {
  method: string;
  headers: Header;
}

export interface AnswerAddContact extends Options {
  body: string;
}

export type newContactType = {
  name: string;
  number: string;
};

export type ChangeContactType = newContactType & { id: string | null };

export interface newContactWithToken {
  name: string;
  number: string;
  token: string;
}
export interface changeContactWithToken extends newContactWithToken {
  id: string | null;
}
