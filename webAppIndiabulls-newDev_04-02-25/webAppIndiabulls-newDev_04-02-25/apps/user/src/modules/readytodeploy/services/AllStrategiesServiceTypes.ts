import { ServiceResponseType } from "../../../services/BaseMapper";
import { OptionProps } from "../../../../../../packages/ui/src/sharedcomponents/formfields/FormFieldsUtils";

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
