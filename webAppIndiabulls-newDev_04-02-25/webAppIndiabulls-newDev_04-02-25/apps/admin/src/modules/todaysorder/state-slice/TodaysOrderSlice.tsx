import { createSlice } from "@reduxjs/toolkit";

const todayOrderSlice = createSlice({
  name: "todayorder",
  initialState: {
    todayOrdersData: [],
  },
  reducers: {
    setTodayOrder: (state, action) => {
      state.todayOrdersData = action.payload;
    },
  },
});

export const { setTodayOrder } = todayOrderSlice.actions;

export default todayOrderSlice.reducer;
