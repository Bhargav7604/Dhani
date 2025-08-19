import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenPositionsResponse } from "../../../../../user/src/modules/deployedstrategies/services/SocketDataUtils";

interface SocketState {
  socketData: OpenPositionsResponse | [];
}

const initialState: SocketState = {
  socketData: [],
};

const socketSlice = createSlice({
  name: "socketData",
  initialState,
  reducers: {
    updateSocketData: (state, action: PayloadAction<OpenPositionsResponse>) => {
      state.socketData = action.payload;
    },
  },
});

export const { updateSocketData } = socketSlice.actions;
export default socketSlice.reducer;
