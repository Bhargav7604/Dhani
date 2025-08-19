import { PayloadAction } from "@reduxjs/toolkit"
import { NoCodeStrategyResponse } from "../modules/nocodestrategy/services/NoCodeStrategyServiceTypes"
import { AllStrategyResponse } from "../services/AppServiceTypes"
import { OpenPositionsResponse } from "../modules/user-list/services/SocketDataUtils"
import { DeployedStrategiesAPIResponse } from "../modules/user-list/services/AppServiceUtils"


// All Strategies Payload Action
export interface SaveStrategiesParams {
  strategiesRes: AllStrategyResponse;
}

export type SaveStrategiesPayload = PayloadAction<SaveStrategiesParams>;

//DIY dropdowns Payload Action
export interface SaveDiyDropDownsParams {
  DiyDropDownRes: NoCodeStrategyResponse;
}

export type SaveDiyDropDownsPayload = PayloadAction<SaveDiyDropDownsParams>;

export interface SaveStrategyIDParams {
  selectedStrategyID: number;
}

export type SaveStrategyIDPayload = PayloadAction<SaveStrategyIDParams>;

export interface NavigationToPageParams {
  currentPage: string;
}

export type NavigationToPagePayload = PayloadAction<NavigationToPageParams>;

export interface OpenMySavedParams {
  showMySaved: boolean;
}

export type OpenMySavedStrategyPayload = PayloadAction<OpenMySavedParams>;

//Socket Data Payload Action
export interface SocketDataParams {
  socketData: OpenPositionsResponse;
}

export type SocketDataPayload = PayloadAction<SocketDataParams>;

// Deployed Strategies Payload Action
export interface DeployedStrategiesParams {
  deployedStrategyRes: DeployedStrategiesAPIResponse;
}

export type deployedStrategiesPayload = PayloadAction<DeployedStrategiesParams>;
