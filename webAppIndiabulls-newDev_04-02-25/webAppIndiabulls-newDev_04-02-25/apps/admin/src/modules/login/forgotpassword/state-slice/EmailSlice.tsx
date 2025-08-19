import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EmailState {
  email: string | null;
}

const initialState: EmailState = {
  email: null,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    resetEmail: (state) => {
      state.email = null;
    },
  },
});

export const { setEmail, resetEmail } = emailSlice.actions;

export default emailSlice.reducer;
