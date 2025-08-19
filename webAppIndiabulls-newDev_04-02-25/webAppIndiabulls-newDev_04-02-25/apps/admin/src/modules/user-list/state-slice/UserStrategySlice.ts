import { createSlice } from "@reduxjs/toolkit";
import { DeployedStrategiesAPIResponse } from "../sections/userdeploystrategies/UserDeployStrategyTypes";
import { deployedStrategiesPayload } from "../../../store/StoreUtils";

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
