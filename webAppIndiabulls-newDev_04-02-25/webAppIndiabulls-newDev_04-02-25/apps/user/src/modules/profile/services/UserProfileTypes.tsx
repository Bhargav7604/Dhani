import { PayloadAction } from "@reduxjs/toolkit";
import { ServiceResponseType } from "../../../services/BaseMapper";

export interface UserProfileTypes {
  clientId: string;
  clientName: string;
  address: string;
  mobileNo: string;
  emailId: string;
  xtsClient: boolean;
  userId: string;
  maxLoss: number;
  minProfit: number;
  appKey: number;
  secretKey: number;
}

export interface UserProfilePostBody {
  payload: {
    clientId?: string;
    maxLoss: number;
    minProfit: number;
  };
}

export interface UserProfileDetailsParams {
  UserProfileres: UserProfileTypes;
}

export type UserProfileDetailsPayload = PayloadAction<UserProfileDetailsParams>;

export type UserprofileResponseMapper = ServiceResponseType<UserProfileTypes>;
