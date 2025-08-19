import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToasterInterface, ToasterSliceProps } from "../LayoutUtils";

const initialState: ToasterSliceProps = {
  toasters: [],
};

const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    addToaster: (state, action: PayloadAction<ToasterInterface>) => {
      state.toasters.push(action?.payload);
    },
    removeToaster: (state, action) => {
      state.toasters = state.toasters.filter(
        (toaster: any) => toaster.id !== action.payload
      );
    },
  },
});

export const { addToaster, removeToaster } = toasterSlice.actions;
export default toasterSlice.reducer;
