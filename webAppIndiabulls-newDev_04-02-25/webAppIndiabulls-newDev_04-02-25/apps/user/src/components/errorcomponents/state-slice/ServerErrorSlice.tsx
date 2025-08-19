import { createSlice } from "@reduxjs/toolkit";

const serverErrorSlice = createSlice({
  name: "serverError",
  initialState: { isServerError: false },
  reducers: {
    setServerError: (state, action) => {
      state.isServerError = action.payload;
    },
  },
});

export const { setServerError } = serverErrorSlice.actions;
export default serverErrorSlice.reducer;
