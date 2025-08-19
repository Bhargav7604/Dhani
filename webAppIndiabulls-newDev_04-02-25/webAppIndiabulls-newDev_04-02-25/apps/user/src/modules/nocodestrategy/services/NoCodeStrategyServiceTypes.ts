import { ServiceResponseType } from "../../../services/BaseMapper";

export interface NoCodeStrategyLegBody {
  position: string;
  optionType: string;
  lots: number;
  expiry: string;
  strikeSelection: string;
  strikeType?: string;
  tgtType?: string;
  tgtValue?: number;
  tgtToogle?: boolean | string;
  stopLossType?: string;
  stopLossValue?: number;
  stopLossToggle?: boolean | string;
  tslType?: string;
  tslValue?: number;
  tslToggle?: boolean;
  tdValue?: number;
  derivativeType: string;
  strikeSelectionValue?: string;
}

export interface NoCodeStrategyBody {
  payload: {
    strategyId?: number | null;
    strategyName: string;
    executionTypeId: string;
    index: string;
    capital: number;
    strategyType: string;
    entryHours: number;
    entryMinutes: number; // Use ISO 8601 format for datetime strings
    entryOnDays?: number[]; // Array of integers for days
    exitHours: number;
    exitMinutes: number; // Use ISO 8601 format for datetime strings
    exitOnExpiry?: string;
    exitAfterEntryDays: number | string;
    targetMtmToggle?: string | boolean;
    targetMtmType?: string;
    targetMtmValue?: number | string | null;
    stopLossMtmToggle?: string | boolean;
    stopLossMtmType?: string;
    stopLossMtmValue?: number | null;
    legs: NoCodeStrategyLegBody[]; // Array of leg objects
  };
}
export interface DropDownItem {
  key: string;
  val: string;
}

export interface DescriptionTypes {
  [key: string]: string; // ✅ Allows dynamic indexing
  capital: string;
  enterOnDays: string;
  entryTime: string;
  executionType: string;
  exitAfterEntryDays: string;
  exitOnExpiry: string;
  exitTime: string;
  expiry: string;
  index: string;
  lots: string;
  optionType: string;
  position: string;
  profitMtm: string;
  stopLoss: string;
  stopLossMtm: string;
  strategyName: string;
  strategyType: string;
  strikeSelection: string;
  strikeType: string;
  target: string;
  trailingDistance: string;
  tsl: string;
}


export interface NoCodeStrategyResponse {
  strategyType: DropDownItem[];
  daysMenu: DropDownItem[];
  descriptions: DescriptionTypes;
  segmentType: DropDownItem[];
  profitMtm: DropDownItem[];
  expiryType: DropDownItem[];
  order: DropDownItem[];
  lot: DropDownItem[];
  strikeSelection: DropDownItem[];
  strikeType: DropDownItem[];
  underlyingMenu: DropDownItem[];
  exitAfterEntry: DropDownItem[];
  trl: DropDownItem[];
  tgt: DropDownItem[];
  exitOnExpiry: DropDownItem[];
  executionType: DropDownItem[];
  positionType: DropDownItem[];
}

export type NoCodeStrategyResponseMapper =
  ServiceResponseType<NoCodeStrategyResponse>;
