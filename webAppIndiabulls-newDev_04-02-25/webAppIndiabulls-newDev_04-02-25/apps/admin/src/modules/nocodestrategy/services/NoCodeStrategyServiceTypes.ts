import { ServiceResponseType } from "../../../services/BaseMapper";
import { OptionProps } from "../../nocodestrategy/NoCodeStrategyUtils";

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
    targetMtmValue?: number | string;
    stopLossMtmToggle?: string | boolean;
    stopLossMtmType?: string;
    stopLossMtmValue?: number;
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


export interface EntryDetailsTypes {
  entryTime: string;
  entryHourTime: number;
  entryMinsTime: number;
  expiry: string | null;
  entryDaysList: string[] | null;
}


export interface ExitDetailsTypes {
  exitHourTime: number;
  exitMinsTime: number;
  targetUnitToggle: boolean | string;
  targetUnitType: string;
  targetUnitValue: number;
  stopLossUnitToggle: boolean | string;
  stopLossUnitType: string;
  stopLossUnitValue: number;
  exitAfterEntryDays: number | string | undefined;
  exitOnExpiryFlag: string;
}

export interface StartegyLegsTypes {
  id: number;
  derivativeType: string;
  expiry: string;
  lots: number;
  optionType: string;
  positions: string;
  strikeSelection: string;
  strikeType: string;
  strikeSelectionValue: string | number;
  stopLossToggle: string;
  stopLossType: string;
  stopLossValue?: string;
  tgtToggle: string;
  tgtValue?: string;
  tgtType?: string;
  tslToggle?: boolean | string;
  tslType?: string;
  tslValue?: number;
  tdValue?: number;
}

export interface StrategyAPIResponse {
  id: number;
  name: string;
  description: string;
  entryDetails: EntryDetailsTypes;
  exitDetails: ExitDetailsTypes;
  strategyLegs: StartegyLegsTypes[];
  atmType: string;
  multiplier: number;
  minCapital: number;
  underlying: string;
  subscription: string;
  typeOfStrategy: string;
  executionType: string;
  reSignalCount: number;
  createdAt: number;
  strategyTag: string;
  status: string;
  category: string;
  drawDown: number;
  deltaSlippage: null | number;
  positionType: string;
}

export interface DropdownOption {
  key: string;
  val: string;
}

export interface DropdownList {
  expiry: OptionProps[] | undefined;
  atmType: DropdownOption[];
  underlying: DropdownOption[];
  order: DropdownOption[];
  executionType: DropdownOption[];
  multiplier: DropdownOption[];
  entryDays: DropdownOption[];
}

export interface AllStrategyResponse {
  strategies: {
    diy: StrategyAPIResponse[];
    inHouse: StrategyAPIResponse[];
    preBuilt: StrategyAPIResponse[];
    popular: StrategyAPIResponse[];
  };
  dropdownList: DropdownList;
}

export type DeployFormDataPostTypes = {
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
    entryHours: number;
    entryMinutes: number;
    expiry: string;
    days: number[] | string[];
    exitHours: number;
    exitMinutes: number;
    profitMtmToggle?: string;
    profitMtmType?: string;
    profitMtmValue?: number;
    stoplossToggle?: string;
    stoplossType?: string;
    stoplossValue?: number;
  };
};

export type AllStrategyResponseMapper =
  ServiceResponseType<AllStrategyResponse>;


  export type OneClickDeployPostTypes = {
    payload:{
      strategyId:number;
      multiplier:number;
      executionTypeId:string;
    }
  }

  

export type NoCodeStrategyResponseMapper =
  ServiceResponseType<NoCodeStrategyResponse>;
