import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PNLData {
  todaysPnL: number;
  positionalPnL: number;
  intradayPnL: number;
  overallPnL: number;
  deployedCapital: number;
}

interface SocketState {
  isConnected: boolean;
  pnlData: PNLData;
  strategyUpdates: any[];
}

const initialState: SocketState = {
  isConnected: false,
  pnlData: {
    todaysPnL: 0,
    positionalPnL: 0,
    intradayPnL: 0,
    overallPnL: 0,
    deployedCapital: 0,
  },
  strategyUpdates: [],
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setConnectionStatus: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    updatePnLData: (state, action: PayloadAction<PNLData>) => {
      state.pnlData = action.payload;
    },
    addStrategyUpdate: (state, action: PayloadAction<any>) => {
      state.strategyUpdates.push(action.payload);
    },
  },
});

export const { setConnectionStatus, updatePnLData, addStrategyUpdate } = socketSlice.actions;
export default socketSlice.reducer;