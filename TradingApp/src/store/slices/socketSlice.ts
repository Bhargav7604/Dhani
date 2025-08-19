import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SocketState {
  isConnected: boolean;
  lastMessage: any;
  error: string | null;
}

const initialState: SocketState = {
  isConnected: false,
  lastMessage: null,
  error: null,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
      if (action.payload) {
        state.error = null;
      }
    },
    setLastMessage: (state, action: PayloadAction<any>) => {
      state.lastMessage = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isConnected = false;
    },
  },
});

export const { setConnected, setLastMessage, setError } = socketSlice.actions;
export default socketSlice.reducer;