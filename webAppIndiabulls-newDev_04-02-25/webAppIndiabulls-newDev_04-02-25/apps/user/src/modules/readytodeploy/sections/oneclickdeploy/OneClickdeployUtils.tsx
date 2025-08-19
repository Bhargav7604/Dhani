import { z } from "zod";

export const OneClickDeployPopUpSchema = (isLive: boolean | null) => z
  .object({
    multiplier: z.union([
      z.string().min(1, "Multiplier is required"),
      z.number().positive("Multiplier must be positive"),
    ]),
    executionType: z.string({
      required_error: "Execution Type is required",
    }),
  })
  .superRefine(
    (data, ctx) => {
      if (isLive === false && data.executionType === "LiveTrading") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["executionType"],
          message: "Cannot switch to live trading",
        });
      }
    }
  );


export type OneClickFormDataTypes = z.infer<ReturnType<typeof OneClickDeployPopUpSchema>>;
