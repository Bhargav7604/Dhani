import { createSlice } from "@reduxjs/toolkit";

const openpositionSlice = createSlice({
  name: "openposition",
  initialState: {
    openpositionData: [],
  },
  reducers: {
    setOpenPosition: (state, action) => {
      state.openpositionData = action.payload;
    },
  },
});

export const { setOpenPosition } = openpositionSlice.actions;

export default openpositionSlice.reducer;
