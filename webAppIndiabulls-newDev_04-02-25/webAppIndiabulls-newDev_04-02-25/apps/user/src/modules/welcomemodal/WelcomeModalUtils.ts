import { PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";

export const WelcomeModalSchema = z.object({
  decision: z.enum(["accept", "decline"], {
    required_error: "You must select an option",
  }),
});

export type WelcomeModalFormTypes = z.infer<typeof WelcomeModalSchema>;

export interface ColumnFlexDivProps {
  $gap?: string;
  $row?: boolean;
  $justifycontent?: string;
  $alignitems?: string;
}

export interface AppRoutesStateProps {
  allStrategiesAPIStatusFail: boolean;
  allStrategiesLoadingState: boolean;
  profileLoadingState: boolean;
  profileAPIStatusFail: boolean;
}

export interface AllStrategiesAPIStatusParams {
  allStrategiesAPIStatusFail: boolean;
}

export type AllStrategiesAPIStatusPayload = PayloadAction<AllStrategiesAPIStatusParams>;

export interface AllStrategiesLoadingStateParams {
  allStrategiesLoadingState: boolean;
}

export type AllStrategiesLoadingStatePayload = PayloadAction<AllStrategiesLoadingStateParams>;

export interface ProfileLoadingStateParams {
  profileLoadingState: boolean;
}

export interface ProfileAPIStatusFailParams {
  profileAPIStatusFail: boolean;
}

// PayloadAction types
export type ProfileLoadingStatePayload =
  PayloadAction<ProfileLoadingStateParams>;

export type ProfileAPIStatusFailPayload =
  PayloadAction<ProfileAPIStatusFailParams>;