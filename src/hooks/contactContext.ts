import { createContext, useContext } from "react";

export interface ContactContentInterface {
  contactToggleShowModal: (id: string | null) => void;
  token: string;
}
export const ContactContent = createContext<ContactContentInterface>({
  contactToggleShowModal: (id) => {},
  token: "",
});

export const useContactContent = () => useContext(ContactContent);
