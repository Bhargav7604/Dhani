import { createSlice } from "@reduxjs/toolkit";
import { AllStrategyResponse, DropdownList, StrategyAPIResponse } from "../../nocodestrategy/services/NoCodeStrategyServiceTypes";
import { SaveStrategiesPayload } from "../../../../../user/src/store/StoreUtils";


interface InitialStateInterface {
  strategiesRes: AllStrategyResponse;
  isShimmerLoading: boolean;
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
  isShimmerLoading: false,
};
 const StrategySlice = createSlice({
  name: "strategies",
  initialState,
  reducers: {
    saveStrategies(state, action: SaveStrategiesPayload) {
      state.strategiesRes = action.payload.strategiesRes;
    },
    setShimmerLoading(state, action) {
      state.isShimmerLoading = action.payload.isShimmerLoading;
    },
  },
});

const { actions } = StrategySlice;

export const { saveStrategies, setShimmerLoading } = actions;

export default StrategySlice.reducer;
