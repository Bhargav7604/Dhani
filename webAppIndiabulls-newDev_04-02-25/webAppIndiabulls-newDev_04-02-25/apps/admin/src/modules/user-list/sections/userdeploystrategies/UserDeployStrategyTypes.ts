import { ServiceResponseType } from "../../../../services/BaseMapper";

export interface StrategyLeg {
  legId: number;
  legLTP: number;
  legQuantity: number;
  lots: number;
  signalId: number;
  executedPrice: number;
  currentIV: number;
  currentDelta: number;
  indexCurrentPrice: number;
  indexBasePrice: number;
  constantDelta: number;
  constantIV: number;
  name: string;
  pandL: number;
  deployedTimeStamp: string;
  exitPrice: number;
  exitTime: string;
}

export interface StrategyTableData {
  strategyId: number;
  strategyMTM: number;
  data: StrategyLeg[];
}
export interface ActiveStrategiesResponseTypes {
  name: string;
  deployedOn: string | number | null;
  execution: string;
  status: string;
  capital: number;
  multiplier: string;
  counter: string | number | null;
  sid: number;
  signalId: number;
  requiredCapital: number;
  category: string;
  positionType: string;
  strategyLegTableDTO: StrategyTableData;
}
export interface DropDownItem {
  key: string;
  val: string;
}
export interface ActiveStrategiesDropdownTypes {
  executionType: DropDownItem[];
  multiplier: DropDownItem[];
}

export interface DeployedStrategiesAPIResponse {
  activeStrategiesResponse: ActiveStrategiesResponseTypes[];
  activeStrategiesDropdown: ActiveStrategiesDropdownTypes;
}

export type DeployedStrategyResponseMapper =
  ServiceResponseType<DeployedStrategiesAPIResponse>;
