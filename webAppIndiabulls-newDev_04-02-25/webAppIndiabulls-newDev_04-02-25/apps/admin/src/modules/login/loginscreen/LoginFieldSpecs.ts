import { z } from "zod";

export const LoginFields = {
  EMAIL: "email",
  PASSWORD: "password",
  // SELECT: "select",
};
export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
      message: "Invalid email address",
    }),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters" }),
  // .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  // .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
  // .regex(/\d/, { message: "Must contain at least one number" })
  // .regex(/[^a-zA-Z0-9]/, {
  //   message: "Must contain at least one special character",
  // }),
  // clientName: z.enum(["Torus", "Bigul", "Dhani"], {
  //   errorMap: () => ({ message: "Please select a valid client" }),
  // }),
});
export const CLIENT_OPTIONS: Array<"Torus" | "Bigul" | "Dhani"> = [
  "Torus",
  "Bigul",
  "Dhani",
];

export const FormMapping = {
  // [LoginFields.SELECT]: {
  //   name: "clientName" as const,
  //   type: "select",
  //   placeholder: "Select Client",
  //   heading: "Client Name",
  //   options: CLIENT_OPTIONS,
  // },
  [LoginFields.EMAIL]: {
    name: "username" as const,
    type: "text",
    placeholder: "Email",
    heading: "Email",
  },
  [LoginFields.PASSWORD]: {
    name: "password" as const,
    type: "password",
    placeholder: "Password",
    heading: "Password",
  },
};

export const LoginFormFields = [
  // FormMapping[LoginFields.SELECT],
  FormMapping[LoginFields.EMAIL],
  FormMapping[LoginFields.PASSWORD],
];
