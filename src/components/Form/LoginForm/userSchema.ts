import { object, string, InferType } from "yup";

export const userSchema = object({
  email: string().email("must be a valid email").required(),
  password: string().required().max(18).min(6, "must be at least 6 characters long"),
});

export interface User extends InferType<typeof userSchema> {
  email: string;
  password: string;
}
