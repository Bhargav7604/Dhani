import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TemplatesDataTypes } from "../services/AppServiceUtils";

interface InitialStateType {
    strategyReportsData: TemplatesDataTypes;
}

const InitialState: InitialStateType = {
  strategyReportsData: {
    fromDate: "",
    toDate: "",
    strategyId: null,
  },
};

const PerformanceReportsSlice = createSlice({
  name: "templatereports",
  initialState: InitialState,
    reducers: {
        setStrategyReportsData(state, action: PayloadAction<any>) {
            state.strategyReportsData = action.payload.strategyReportsData;
       }
  },
});

export const { setStrategyReportsData } = PerformanceReportsSlice.actions;

export default PerformanceReportsSlice.reducer;