import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const changeContactSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name needs to have minimum two signs")
    .max(25, "Name can have maximum eighteen numbers")
    .required(),
  number: yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
});

export interface ChangeContact extends yup.InferType<typeof changeContactSchema> {
  name: string;
  number: string;
}

export interface ChangeContactProps {
  id: string | null;
  name: string;
  number: string;
}
export interface ChangeContactInterface {
  contact: ChangeContactProps;
  closeModal: (id: string | null) => void;
  token: string;
}
