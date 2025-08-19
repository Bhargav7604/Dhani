import { createSlice } from "@reduxjs/toolkit";
import { SaveStrategiesPayload } from "../../../store/StoreUtils";
import {
  AllStrategyResponse,
  DropdownList,
  StrategyAPIResponse,
} from "../services/AllStrategiesServiceTypes";

interface InitialStateInterface {
  strategiesRes: AllStrategyResponse;
}
export const initialState: InitialStateInterface = {
  strategiesRes: {
    strategies: {
      diy: [] as Array<StrategyAPIResponse>,
      inHouse: [] as Array<StrategyAPIResponse>,
      preBuilt: [] as Array<StrategyAPIResponse>,
      popular: [] as Array<StrategyAPIResponse>,
    },
    dropdownList: {} as DropdownList,
  },
};

const StrategySlice = createSlice({
  name: "strategies",
  initialState,
  reducers: {
    saveStrategies(state, action: SaveStrategiesPayload) {
      state.strategiesRes = action.payload.strategiesRes;
    },
  },
});

const { actions } = StrategySlice;

export const { saveStrategies } = actions;

export default StrategySlice.reducer;
