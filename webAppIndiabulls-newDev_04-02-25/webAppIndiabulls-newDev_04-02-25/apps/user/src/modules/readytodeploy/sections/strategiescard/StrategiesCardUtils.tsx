import { z } from "zod";
import { StrategyAPIResponse } from "../../services/AllStrategiesServiceTypes";

const timeRegex = /^([01]?\d|2[0-3]):[0-5]\d$/;

const timeInMinutes = (time: any) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const DeployPopUpSchema = (isLive: boolean | null) =>
  z
    .object({
      atmType: z.string().nonempty("ATM Type is required"),
      multiplier: z.union([
        z.string().nonempty("Multiplier is required"),
        z.number().positive("Multiplier is required"),
      ]),
      underlying: z.string().nonempty("underlying is required"),
      order: z.string().min(1, "Order is required"),
      executionType: z.string().min(1, "Execution Type is required"),
      entryDays: z.any().optional(),
      entryTime: z
        .string()
        .regex(timeRegex, "Invalid time format")
        .nonempty("Entry time is required")
        .refine(
          (time) => {
            const minutes = timeInMinutes(time);
            return minutes >= 9 * 60 + 15 && minutes <= 15 * 60 + 29;
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
            return minutes >= 9 * 60 + 15 && minutes <= 15 * 60 + 29;
          },
          { message: "Exit time must be between 09:15 and 15:29" }
        ),
      expiry: z.string().nonempty("expiry is required"),

      profitMTMDropDown: z.string().optional(),
      profitMTMToggle: z.boolean().optional(),
      profitMTMValue: z.preprocess(
        (value) => (typeof value === "string" ? Number(value) : value), // Convert string to number
        z
          .number({
            required_error: "Profit MTM is required",
            invalid_type_error: "must be a number, not alphabets",
          })
          .max(900000000000000, "value should not exceed 900000000000000")
          .optional()
      ),
      stopLossMTMDropDown: z.string().optional(),
      stopLossMTMToggle: z.boolean().optional(),
      stopLossMTMValue: z.preprocess(
        (value) => (typeof value === "string" ? Number(value) : value), // Convert string to number
        z
          .number({
            required_error: "StopLoss MTM is required",
            invalid_type_error: "must be a number, not alphabets",
          })
          .max(900000000000000, "value should not exceed 900000000000000")
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
            message: "dropdown selection is required",
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
            message: "dropdown selection is required",
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
            message: "Stop Loss MTM value cannot exceed 100",
            path: ["stopLossMTMValue"],
          });
        }
      }
    })
    .superRefine((data, ctx) => {
      if ( !isLive && data.executionType === "LiveTrading") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["executionType"],
          message: "Cannot switch to live trading",
        });
      }
    });

export type DeployFormDataTypes = z.infer<ReturnType<typeof DeployPopUpSchema>>;

export type DeploayFormDataPostTypes = {
  payload: {
    userId: number;
    strategyId: number;
    multiplier: number;
    index: number;
    atmType: string;
    minCapital: number;
    underlying: string;
    orderId: string;
    executionTypeId: string;
    freshEntryCount: number;
    entryHours: number;
    entryMinutes: number;
    expiry: string;
    days: number[];
    exitHours: number;
    exitMinutes: number;
    profitMtmType: string;
    profitMtmValue: number;
    StoplossType: string;
    StoplossValue: number;
    deltaSlippage: string;
  };
};

export type Detail = {
  id: number;
  objecttitle: string;
  objectValue: string;
};

export type StrategyCard = {
  id: number;
  strategyCategoryId?: number;
  entryDetailsId?: number;
  strategyAdditionsId?: number;
  exitSettingId?: number;
  name?: string;
  description?: string;
  typeOfStrategy?: string;
  underlyingId?: number;
  positionType?: string;
  status?: string;
  atmType?: string;
  expiry?: string;
  expiryType?: string;
  category?: string;
  minCapital: number;
  multiplier: number;
  stopLoss?: number;
  deltaSlippage?: number;
  target?: number;
  executionType?: string;
  reSignalCount?: number;
  createdBy?: string;
  createdAt: string;
  updatedBy?: string;
  updatedAt?: string;
  deleteIndicator?: string;
  title?: string;
  content?: string;
  Details?: Detail[];
  daysago?: number;
  entryTime?: number;
  exitTime?: number;
  strategyTag?: string;
};

export type StrategyDataTypes = StrategyCard[];

export type StrategyTypes = {
  id: number;
  name: string;
  desc: string;
  minCapital: number;
  entryTime: number;
  exitTime: number;
  createdAt: number;
  category: string;
};

export type StrategyInferTypes = StrategyTypes[];

export interface StrategyResponse {
  strategies: StrategyTypes[]; // Assuming this is your type for strategy items
  dropdownList: any[]; // Adjust this type according to your needs
}

export interface CardWrapperProps {
  $width?: string;
  $mobilewidth?: string;
  $lapwidth?: string;
  $tabwidth?: string;
  $minwidth?: string | undefined;
  $maxwidth?: string | undefined;
}

export interface DeployPopupPayloadProps {
  atmType: string;
  multiplier?: number;
  minCapital: number;
  underlying: string;
  order?: string;
  executionType?: string;
  freshEntryCount: number;
  entryHour?: string;
  entryMinute?: string;
  exitHour?: string;
  exitMinute?: string;
  deltaSlippage: number;
}

export interface DeployProps {
  open: boolean;
  onClose: () => void;
  item: StrategyAPIResponse;
  isStrategyLive?: boolean;
}
export interface StyledImgageProps {
  $width?: string;
  $height?: string;
}
export interface ToggleButtonProps {
  item: string[];
}

export interface PopUpColumnItemsProps {
  $width?: string;
  $backgroundcolor?: string;
  $justifycontent?: string;
  $aligncontent?: string;
}

export interface StyledFCLProps {
  isChecked?: boolean;
}

export interface WeekDataItem {
  title: string;
}

export type WeekDataProps = WeekDataItem[];

export interface SearchWrapperDivProps {
  width?: string;
  midwidth?: string;
}

export type StrategiesCardProps = {
  item: StrategyCard;
  width?: string;
  mobilewidth?: string;
  tabwidth?: string;
  lapwidth?: string;
  name?: string;
  desc?: string;
};

export interface FlexDivProps {
  $justifyStart?: boolean;
  $card?: boolean;
  $gap?: string;
}

export interface ExitDetailsTypes {
  defaultToggle: string;
  defaultType: string;
  defaultValue: string;
}

export interface ColumnFlexDivprops {
  flexdirection?: string;
  gap?: string;
}

export interface InitialStateType {
  multiplierValue?: number;
}

export interface StartegyColumnFlex {
  $flexdirection?: string;
  $gap?: string;
  $alignstart?: string;
}

export interface StatusProps {
  $status?: string;
}

export interface PopupButtonsProps {
  $nopadding?: string;
  $justifycontent?: string;
  $gap?: string;
}

export interface PopUpModalWrapperProps {
  $width?: string;
  $maxheight?: string;
  $gap?: string;
  $tabwidth?: string;
  $maxwidth?: string;
  $logspopup?: string | boolean;
}

export interface DeployPopupFieldsProps {
  control: any;
  errors: any;
  item: StrategyAPIResponse;
  watch?: any;
  getValues?: any;
  isStrategyLive?: boolean;
}

export interface DeployFormProps {
  $padding?: string | boolean;
}
