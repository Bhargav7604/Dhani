import React from "react";
import { RouteInterface } from "./PrivateAppRouteUtils";
const Login = React.lazy(
  () => import("../modules/login/loginscreen/LoginScreen")
);
const ForgotPassword = React.lazy(
  () => import("../modules/login/forgotpassword/ForgotPassword")
);
const OTP = React.lazy(
  () => import("../modules/login/passwordreset/PasswordReset")
);
const SetNewPassword = React.lazy(
  () => import("../modules/login/newpassword/SetNewPassword")
);
const PasswordUpdateSucees = React.lazy(
  () => import("../modules/login/successscreen/PasswordResetSuccess")
);

export enum ROUTES_CONSTANTS {
  LOGIN = "login",
  FORGOT_PASSWORD = "forgot-password",
  OTP = "otp",
  SET_NEW_PASSWORD = "set-new-password",
  PASSWORD_SUCCESS = "success",
}
export const PUBLIC_ROUTES_ARR: Array<RouteInterface> = [
  {
    id: "login",
    route: ROUTES_CONSTANTS.LOGIN,
    Component: Login,
  },
  {
    id: "forgot-password",
    route: ROUTES_CONSTANTS.FORGOT_PASSWORD,
    Component: ForgotPassword,
  },
  {
    id: "otp",
    route: ROUTES_CONSTANTS.OTP,
    Component: OTP,
  },
  {
    id: "set-new-password",
    route: ROUTES_CONSTANTS.SET_NEW_PASSWORD,
    Component: SetNewPassword,
  },
  {
    id: "success",
    route: ROUTES_CONSTANTS.PASSWORD_SUCCESS,
    Component: PasswordUpdateSucees,
  },
];



