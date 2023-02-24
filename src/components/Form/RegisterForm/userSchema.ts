import * as yup from "yup";
import { formDataInterface } from "./interface";

export const userSchema: yup.ObjectSchema<formDataInterface> = yup.object({
  name: yup
    .string()
    .min(2, "Name needs to have minimum two signs")
    .matches(/^[A-Za-z]+$/, "Thi field can have only letters and numbers")
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Password needs to be minimum six numbers")
    .max(18, "Password can have maximum eighteen numbers")
    .required(),
});
