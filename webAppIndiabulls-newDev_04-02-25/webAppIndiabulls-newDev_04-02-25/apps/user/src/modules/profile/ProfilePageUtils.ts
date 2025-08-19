import { z } from "zod";

export const ProfilePageSchema = z.object({
  clientID: z.string().optional(),
  clientName: z.string().optional(),
  address: z.string().optional(),
  mobileNumber: z.string().optional(),
  emailId: z.string().optional(),
  platform: z.string().optional(),
  minProfit: z.preprocess(
    (value) => (typeof value === "string" ? Number(value) : value), // Convert string to number
    z
      .number({
        required_error: "Min profit is required",
        invalid_type_error: "must be a number, not alphabets",
      })
      .gt(-1, "Min profit should start from 0")
  ),
  maxLoss: z.preprocess(
    (value) => (typeof value === "string" ? Number(value) : value), // Convert string to number
    z
      .number({
        required_error: "Max Loss is required",
        invalid_type_error: "must be a number, not alphabets",
      })
      .gt(-1, "Max Loss should start from 0")
  ),
});

export type ProfileFormDatatypes = z.infer<typeof ProfilePageSchema>;

export interface ProfileDetailsProps {
  control?: any;
  errors?: any;
}

export interface MinMaxDetailsProps {
  control?: any;
  errors?: any;
  onSubmit?: () => void;
}

export interface InitialStateType {
  toaster: {
    status: boolean;
    message: string;
  } | null;
}
