import { createSlice } from "@reduxjs/toolkit";
 
export interface InitialStateType {
  isLive: null | boolean;
  isNewUser: null | boolean;
  isLoggedInToday: null | boolean;
  declineDescription: string | null;
}
 
const initialState: InitialStateType = {
  isLive: null,
  isNewUser: null,
  isLoggedInToday: null,
  declineDescription: null,
};
 
const welcomeSlice = createSlice({
  name: "welcomePopup",
  initialState,
  reducers: {
    setIsLive: (state, action) => {
      state.isLive = action.payload.isLive;
    },
    setIsNewUser: (state, action) => {
      state.isNewUser = action.payload.isNewUser;
    },
    setIsLoggedInToday: (state, action) => {
      state.isLoggedInToday = action.payload.isLoggedInToday;
    },
    setDeclineDescription: (state, action) => {
      state.declineDescription = action.payload.declineDescription;
    }
  },
});
 
export const { setIsLive, setIsNewUser, setIsLoggedInToday, setDeclineDescription } =
  welcomeSlice.actions;
export default welcomeSlice.reducer;
 