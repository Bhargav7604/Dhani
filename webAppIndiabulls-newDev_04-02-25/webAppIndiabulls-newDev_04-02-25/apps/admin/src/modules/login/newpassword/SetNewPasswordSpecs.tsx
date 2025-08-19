import { z } from "zod";

export const SetNewPasswordFields = {
  NEW_PASSWORD: "newPassword",
  CONFIRM_PASSWORD: "confirmPassword",
};
export const setPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
      .regex(/\d/, { message: "Must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
export const SetNewPasswordFieldMapping = {
  [SetNewPasswordFields.NEW_PASSWORD]: {
    name: "password",
    label: "New Password",
    placeholder: "Enter new password",
    type: "password",
  },
  [SetNewPasswordFields.CONFIRM_PASSWORD]: {
    name: "confirmPassword",
    label: "Confirm New Password",
    placeholder: "Re-enter new password",
    type: "password",
  },
};

export const SetNewPasswordFormFields = [
  SetNewPasswordFieldMapping[SetNewPasswordFields.NEW_PASSWORD],
  SetNewPasswordFieldMapping[SetNewPasswordFields.CONFIRM_PASSWORD],
];
