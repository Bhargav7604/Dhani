import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StrategyReportsDataTypes } from "../services/PerformanceReportTypes";

interface InitialStateType {
    strategyReportsData: StrategyReportsDataTypes;
}

const InitialState: InitialStateType = {
  strategyReportsData: {
    fromDate: "",
    toDate: "",
    strategyId: null,
  },
};

const PerformanceReportsSlice = createSlice({
  name: "performancereports",
  initialState: InitialState,
    reducers: {
        setStrategyReportsData(state, action: PayloadAction<any>) {
            state.strategyReportsData = action.payload.strategyReportsData;
       }
  },
});

export const { setStrategyReportsData } = PerformanceReportsSlice.actions;

export default PerformanceReportsSlice.reducer;