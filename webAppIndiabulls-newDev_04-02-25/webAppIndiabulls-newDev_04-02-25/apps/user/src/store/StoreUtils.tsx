import { PayloadAction } from "@reduxjs/toolkit";
import { AllStrategyResponse } from "../modules/strategies/services/AllStrategiesServiceTypes"

export interface SaveStrategiesParams {
  strategiesRes: AllStrategyResponse;
}

export type SaveStrategiesPayload = PayloadAction<SaveStrategiesParams>;