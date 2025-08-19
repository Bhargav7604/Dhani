import { z } from "zod";
import { StrategyAPIResponse } from "../../../readytodeploy/services/AllStrategiesServiceTypes";

export interface FormCompProps {
  control: any;
  errors: any;
  watch?: any;
  getValues?: any;
  setValues?: any;
}
export interface PositionBuilderProps {
  control: any;
  errors: any;
  watch?: any;
  getValues?: any;
  setValues?: any;
  handleAddRow?: any;
}

export interface StateType {
  showLeg: boolean;
  savedStrategy: StrategyAPIResponse | [];
  legError?: string;
  isSubmitClicked?: boolean;
  isLegDataValid?: boolean;
  duplicateLegPopup?: string | null;
}

export interface LegRefsProps {
  getFormData: () => void;
  triggerValidation: () => Promise<boolean>;
}

export interface EditDIYFormProps {
  isEasyStrategyTemplate?: boolean;
}

const timeRegex = /^([01]?\d|2[0-3]):[0-5]\d$/;

const timeInMinutes = (time: any) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const NoCodeStrategySchema = (isLive: boolean | null) =>
  z
    .object({
      strategyId: z.number().optional(),
      strategyName: z
        .string()
        .min(3, "Strategy Name is required")
        .max(30, "Maximum 30 characters allowed"),
      index: z.string().nonempty("Underlying is required"),
      capital: z.preprocess(
        (value) => (typeof value === "string" ? Number(value) : value),
        z
          .number({
            required_error: "Capital is required",
            invalid_type_error: "Capital must be a number, not alphabets",
          })
          .positive("Capital must be a above zero")
          .gt(0, "Capital must be greater than zero")
          .max(900000000000000, "value should not exceed 900000000000000")
      ),
      strategyType: z
        .string({
          invalid_type_error: "Strategy Type is required",
        })
        .nonempty("Strategy Type is required"),
      executionType: z
        .string({
          invalid_type_error: "Execution Type is required",
        })
        .nonempty("Execution Type is required"),
      entryDays: z.any().optional(),
      entryTime: z
        .string()
        .regex(timeRegex, "Invalid time format")
        .nonempty("Entry time is required")
        .refine(
          (time) => {
            const minutes = timeInMinutes(time);
            return minutes >= 9 * 60 + 15 && minutes <= 15 * 60 + 29; // Between 09:15 and 15:15
          },
          { message: "Entry time must be between 09:15 and 15:29" }
        ),
      exitTime: z
        .string()
        .regex(timeRegex, "Invalid time format")
        .nonempty("Exit time is required")
        .refine(
          (time) => {
            const minutes = timeInMinutes(time);
            return minutes >= 9 * 60 + 15 && minutes <= 15 * 60 + 29; // Between 09:15 and 15:15
          },
          { message: "Exit time must be between 09:15 and 15:29" }
        ),
      exitExpiry: z.string().optional(),
      exitAfterDays: z.union([z.string(), z.number()]).optional(),
      profitMTMDropDown: z.string().optional(),
      profitMTMToggle: z.boolean().optional(),
      profitMTMValue: z.preprocess(
        (value) => {
          if (value === "" || value === null) return null;
          return typeof value === "string" ? Number(value) : value;
        },
        z
          .number({
            required_error: "Profit MTM is required",
            invalid_type_error: "Must be a number, not alphabets",
          })
          .max(900000000000000, "Value should not exceed 900000000000000")
          .nullable()
          .optional()
      ),
      stopLossMTMDropDown: z.string().optional(),
      stopLossMTMToggle: z.boolean().optional(),
      stopLossMTMValue: z.preprocess(
        (value) => {
          if (value === "" || value === null) return null;
          return typeof value === "string" ? Number(value) : value;
        },
        z
          .number({
            required_error: "StopLoss MTM is required",
            invalid_type_error: "must be a number, not alphabets",
          })
          .max(900000000000000, "Value should not exceed 900000000000000")
          .nullable()
          .optional()
      ),
    })
    .superRefine((leg, ctx) => {
      const [entryHour, entryMinute] = leg.entryTime.split(":").map(Number);
      const [exitHour, exitMinute] = leg.exitTime.split(":").map(Number);
      const entryTotalMinutes = entryHour * 60 + entryMinute;
      const exitTotalMinutes = exitHour * 60 + exitMinute;

      // this is for the validation of the exit time that should be after the entry time
      if (exitTotalMinutes <= entryTotalMinutes) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            exitTotalMinutes === entryTotalMinutes
              ? "Entry and Exit time cannot be the same"
              : "Exit time cannot be earlier than entry time",
          path: ["exitTime"],
        });
      }

      // Profit MTM validations
      if (leg.profitMTMToggle) {
        if (!leg.profitMTMDropDown) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "dropdown is required",
            path: ["profitMTMDropDown"],
          });
        }

        const profitValue = Number(leg.profitMTMValue);
        if (
          leg.profitMTMValue === undefined ||
          isNaN(profitValue) ||
          profitValue <= 0
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "value must be greater than 0",
            path: ["profitMTMValue"],
          });
        }
      }

      // StopLoss MTM validations
      if (leg.stopLossMTMToggle) {
        if (!leg.stopLossMTMDropDown) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "dropdown is required",
            path: ["stopLossMTMDropDown"],
          });
        }

        const stopLossValue = Number(leg.stopLossMTMValue);

        if (
          leg.stopLossMTMValue === undefined ||
          isNaN(stopLossValue) ||
          stopLossValue <= 0
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "value must be greater than 0",
            path: ["stopLossMTMValue"],
          });
        }

        if (
          leg.stopLossMTMDropDown === "PercentOfCapital" &&
          stopLossValue > 100
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "value cannot exceed 100",
            path: ["stopLossMTMValue"],
          });
        }
      }
    })
    .superRefine((data, ctx) => {
      if (isLive === false && data.executionType === "LiveTrading") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["executionType"],
          message: "Cannot switch to live trading",
        });
      }
    });

export type FormDataTypes = z.infer<ReturnType<typeof NoCodeStrategySchema>>;
