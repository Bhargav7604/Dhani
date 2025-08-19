import { createSlice } from "@reduxjs/toolkit";
import {
  UserProfileDetailsPayload,
  UserProfileTypes,
} from "../services/UserProfileTypes";

export interface UserProfileState {
  UserProfileRes: UserProfileTypes;
}

export const Initialstate = {
  UserProfileRes: {
    clientId: "",
    clientName: "",
    address: "",
    mobileNo: "",
    emailId: "",
    xtsClient: false,
    minProfit: 0,
    maxLoss: 0,
    appKey: 0,
    secretKey: 0,
  },
};

export const UserProfileSlice = createSlice({
  name: "UserProfile",
  initialState: Initialstate,
  reducers: {
    saveUserProfileDetails(state, action: UserProfileDetailsPayload) {
      state.UserProfileRes = action.payload.UserProfileres;
    },
  },
});

export const { saveUserProfileDetails } = UserProfileSlice.actions;
export default UserProfileSlice.reducer;
