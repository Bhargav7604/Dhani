import { createSlice } from "@reduxjs/toolkit";
import { OpenPositionsResponse, StatusSocketDataPayload, StrategyStatusTypes } from "../../../modules/deployedstrategies/services/SocketDataUtils";
import { SocketDataPayload } from "../../../modules/deployedstrategies/services/SocketDataUtils";

interface SocketState {
  socketData: OpenPositionsResponse | {};
  strategyStatusData: StrategyStatusTypes[] | [];
}

const initialState: SocketState = {
  socketData: {} as OpenPositionsResponse,
  strategyStatusData: [] as StrategyStatusTypes[],
};

const socketSlice = createSlice({
  name: "socketData",
  initialState,
  reducers: {
    updateSocketData: (state, action: SocketDataPayload) => {
      state.socketData = action.payload.socketData;
    },
    updateStrategyStatusData: (state, action: StatusSocketDataPayload) => {
      state.strategyStatusData = action.payload.strategyStatusData;
    },
  },
});

export const { updateSocketData, updateStrategyStatusData } = socketSlice.actions;
export default socketSlice.reducer;
