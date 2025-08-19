import { z } from "zod";

export const LegCompSchema = z
  .object({
    legSegment: z.string().nonempty("open type should not be empty"),
    legPosition: z.string().nonempty("Leg position is required"),
    legOptionType: z.union([z.string(), z.null()]).optional(),
    legLots: z.string().nonempty("Leg lots are required"),
    legExpiry: z.string().nonempty("Leg expiry is required"),
    legStrikeSelection: z.union([z.string(), z.null()]).optional(),
    legStrikeType: z.union([z.string(), z.null()]).optional(),
    legStrikeSelectionValue: z
      .union([z.string(), z.number(), z.null()])
      .optional(),
    legTGTToggle: z.boolean().optional(),
    legTGTDropDown: z.string().optional(),
    legTGTValue: z.preprocess(
      (value) => (typeof value === "string" ? Number(value) : value),
      z
        .number()
        .max(900000000000000, "value should not exceed 900000000000000")
        .optional()
    ),
    legSLToggle: z.boolean().optional(),
    legSLDropDown: z.string().optional(),
    legSLValue: z.preprocess(
      (value) => (typeof value === "string" ? Number(value) : value),
      z.number().optional()
    ),
    legTSLToggle: z.boolean().optional(),
    legTSLDropDown: z.string().optional(),
    legTSLValue: z.preprocess(
      (value) => (typeof value === "string" ? Number(value) : value),
      z.number().optional()
    ),
    legTDValue: z.preprocess(
      (value) =>
        value === "" || value === null || isNaN(Number(value))
          ? undefined
          : Number(value),
      z
        .number()
        .max(900000000000000, "value should not exceed 900000000000000")
        .optional()
    ),
  })
  .superRefine((leg, ctx) => {
    const lowerStrike = leg.legStrikeSelection?.toLowerCase();
    const isDefinedStrike = [
      "spotatm",
      "futureatm",
      "syntheticatm",
      "others",
    ].includes(lowerStrike ?? "");

    if (leg.legSegment !== "FUTURE") {
      // Option Type
      if (!leg.legOptionType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Leg option type is required",
          path: ["legOptionType"],
        });
      }

      // Strike Selection
      if (!leg.legStrikeSelection) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Leg strike selection is required",
          path: ["legStrikeSelection"],
        });
      }

      // Strike Type if selection is ATM/OTHERS type
      if (isDefinedStrike) {
        if (!leg.legStrikeType || leg.legStrikeType === "") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Strike type is required",
            path: ["legStrikeType"],
          });
        }
      } else {
        if (
          leg.legStrikeSelectionValue === undefined ||
          leg.legStrikeSelectionValue === null ||
          leg.legStrikeSelectionValue === ""
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Strike selection value is required",
            path: ["legStrikeSelectionValue"],
          });
        }
      }
    }

    // TGT validation
    if (leg.legTGTToggle) {
      if (!leg.legTGTDropDown) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TGT dropdown selection is required",
          path: ["legTGTDropDown"],
        });
      }
      if (leg.legTGTValue === undefined || leg.legTGTValue < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TGT value must be at least 1",
          path: ["legTGTValue"],
        });
      }
    }

    // SL validation
    if (leg.legSLToggle) {
      if (!leg.legSLDropDown) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SL dropdown selection is required",
          path: ["legSLDropDown"],
        });
      }
      if (leg.legSLValue === undefined || leg.legSLValue < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SL value must be at least 1",
          path: ["legSLValue"],
        });
      }
      if (
        leg.legSLDropDown === "PercentOfEntryPrice" &&
        leg.legSLValue !== undefined &&
        leg.legSLValue > 100
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "SL value cannot exceed 100 for PercentOfEntryPrice",
          path: ["legSLValue"],
        });
      }
    }

    // TSL validation
    if (leg.legTSLToggle) {
      if (!leg.legTSLDropDown) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TSL dropdown selection is required",
          path: ["legTSLDropDown"],
        });
      }
      if (leg.legTSLValue === undefined || leg.legTSLValue < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TSL value must be at least 1",
          path: ["legTSLValue"],
        });
      }
      if (leg.legTDValue === undefined || leg.legTDValue < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "TD value is required when TSL is enabled",
          path: ["legTDValue"],
        });
      }
      if (
        ["PercentOfEntry", "PercentOfSl"].includes(leg.legTSLDropDown || "") &&
        leg.legTSLValue !== undefined &&
        leg.legTSLValue > 100
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "TSL value cannot exceed 100 when using PercentOfEntry or PercentOfSl",
          path: ["legTSLValue"],
        });
      }
    }
  });


export type LegFormDataTypes = z.infer<typeof LegCompSchema>;

export interface LegDataArrayProps {
  legSegment: string;
  legPosition: string;
  legOptionType?: string | null;
  legLots: string;
  legExpiry: string;
  legStrikeSelection?: string | null;
  legStrikeType?: string | null;
  legStrikeSelectionValue?: string | number | null;
  legTGTToggle?: boolean;
  legTGTDropDown?: string;
  legTGTValue?: number;
  legSLToggle?: boolean;
  legSLDropDown?: string;
  legSLValue?: number;
  legTSLToggle?: boolean;
  legTSLDropDown?: string;
  legTSLValue?: number;
  legTDValue?: number;
}

