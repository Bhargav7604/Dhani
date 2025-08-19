import { createSlice } from "@reduxjs/toolkit";
import { ExecutionTypeParams, ExecutionTypesProps } from "../LayoutUtils";

const initialState: ExecutionTypesProps = {
  ExecutionType: "LiveTrading",
};

const ExecutionTypeSlice = createSlice({
  name: "ExecutionType",
  initialState,
  reducers: {
    setExecutionType(state, action: ExecutionTypeParams) {
      state.ExecutionType = action.payload.ExecutionType;
    },
  },
});

export default ExecutionTypeSlice.reducer;
export const { setExecutionType } = ExecutionTypeSlice.actions;
