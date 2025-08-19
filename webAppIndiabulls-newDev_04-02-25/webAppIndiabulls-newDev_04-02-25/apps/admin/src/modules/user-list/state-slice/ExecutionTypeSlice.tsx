import { createSlice } from "@reduxjs/toolkit";
import { ExecutionTypeParams, ExecutionTypesProps } from "../UsersDataUtils";

const initialState: ExecutionTypesProps = {
  ExecutionType: "PaperTrading",
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
