import { createSlice } from "@reduxjs/toolkit";
import {
  AllStrategiesAPIStatusPayload,
  AllStrategiesLoadingStatePayload,
  AppRoutesStateProps,
  ProfileAPIStatusFailPayload,
  ProfileLoadingStatePayload,
} from "../../modules/welcomemodal/WelcomeModalUtils";

const initialState: AppRoutesStateProps = {
  allStrategiesLoadingState: true,
  allStrategiesAPIStatusFail: false,
  profileAPIStatusFail: false,
  profileLoadingState: true,
};

const appRoutes = createSlice({
  name: "approutes",
  initialState,
  reducers: {
    setAllStrategyLoadingState(
      state,
      action: AllStrategiesLoadingStatePayload
    ) {
      state.allStrategiesLoadingState =
        action.payload.allStrategiesLoadingState;
    },
    setAllStrategiesAPIFail(state, action: AllStrategiesAPIStatusPayload) {
      state.allStrategiesAPIStatusFail =
        action.payload.allStrategiesAPIStatusFail;
    },
    setProfileLoadingState(state, action: ProfileLoadingStatePayload) {
      state.profileLoadingState = action.payload.profileLoadingState;
    },
    setProfileAPIStatusFail(state, action: ProfileAPIStatusFailPayload) {
      state.profileAPIStatusFail = action.payload.profileAPIStatusFail;
    },
  },
});

export const { setAllStrategiesAPIFail, setAllStrategyLoadingState, setProfileAPIStatusFail, setProfileLoadingState } =
  appRoutes.actions;
export default appRoutes.reducer;
