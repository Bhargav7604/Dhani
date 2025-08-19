import { createSlice } from "@reduxjs/toolkit";
import { deployedStrategiesPayload } from "../../../store/StoreUtils";
import { DeployedStrategiesAPIResponse } from "../services/AppServiceUtils";

export interface DeployedStrategyInterface {
  deployedStrategyRes: DeployedStrategiesAPIResponse;
}

const Initialstate: DeployedStrategyInterface = {
  deployedStrategyRes: {} as DeployedStrategiesAPIResponse,
};

export const DeployedStrategySlice = createSlice({
  name: "deployedstrategiesdata",
  initialState: Initialstate,
  reducers: {
    saveDeployedStrategies(state, action: deployedStrategiesPayload) {
      state.deployedStrategyRes = action.payload.deployedStrategyRes;
    },
  },
});

export const { saveDeployedStrategies } = DeployedStrategySlice.actions;

export default DeployedStrategySlice.reducer;
