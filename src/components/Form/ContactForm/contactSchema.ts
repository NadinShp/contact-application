import { object, string, InferType } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = object({
  name: string()
    .min(2, "Name needs to have minimum two signs")
    .max(25, "Name can have maximum eighteen numbers")
    .required(),
  number: string().matches(phoneRegExp, "Phone number is not valid").required(),
});

export interface Contact extends InferType<typeof contactSchema> {
  name: string;
  number: string;
}

export interface ContactFormProps {
  closeModal: (id: null) => void;
}
