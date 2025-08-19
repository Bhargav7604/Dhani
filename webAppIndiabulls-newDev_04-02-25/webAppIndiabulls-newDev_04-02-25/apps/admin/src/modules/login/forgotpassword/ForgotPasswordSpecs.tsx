import { z } from "zod";

export const ForgotPasswordFields = {
  EMAIL: "email",
};
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
});
export const FormMapping = {
  [ForgotPasswordFields.EMAIL]: {
    name: "email",
    type: "text",
    placeholder: "Email",
    heading: "Registerd Email",
  },
};

export const ForgotFormFields = [FormMapping[ForgotPasswordFields.EMAIL]];
