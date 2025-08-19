import { createSlice } from "@reduxjs/toolkit";

const adminListSlice = createSlice({
  name: "adminlist",
  initialState: {
    adminlistDate: [],
  },
  reducers: {
    setAdminList: (state, action) => {
      state.adminlistDate = action.payload;
    },
  },
});

export const { setAdminList } = adminListSlice.actions;
export default adminListSlice.reducer;
