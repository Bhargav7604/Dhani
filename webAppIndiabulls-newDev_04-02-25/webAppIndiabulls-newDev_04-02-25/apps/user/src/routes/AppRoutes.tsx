import { Fragment, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES_ARR, ROUTES_CONSTANTS } from "./AppRouteUtils";
import Layout from "../modules/layout/Layout";
import { useAppDispatch, useAppSelector } from "../store/Store";
import { getAllStrategiesService } from "../modules/readytodeploy/services/AllStrategiesServices";
import { saveStrategies } from "../modules/readytodeploy/state-slice/StartegySlice";
import { AuthCheckService } from "./services/ParamsPostService";
import { RequestConfig } from "../utils/ServiceRequestAPI";
import { UserProfileDetailsService } from "../modules/profile/services/UserProfileService";
import { saveUserProfileDetails } from "../modules/profile/state-slice/UserProfileInfoSlice";
import BufferSpinner from "../../../../packages/ui/src/sharedcomponents/buffer/BufferSpinner";
import ProtectedRoute from "./ProtectedRoute";
import WelcomeModal from "../modules/welcomemodal/WelcomeModal";
import ServerErrorComp from "../../../../packages/ui/src/sharedcomponents/servererror/ServerErrorComp";
import {
  setDeclineDescription,
  setIsLive,
  setIsLoggedInToday,
  setIsNewUser,
} from "../modules/welcomemodal/state-slice/WelcomeSlice";
import {
  setAllStrategiesAPIFail,
  setAllStrategyLoadingState,
  setProfileLoadingState,
} from "./state-slice/AppRoutesSlice";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const serverState = useAppSelector(
    (appState) => appState.servererror.isServerError
  );
  // const isLoadingState= useAppSelector(appState=>appState.strategies.isLoading)
  const isNewUser = useAppSelector(
    (appState) => appState.welcomePopup.isNewUser
  );
  const isLoggedInToday = useAppSelector(
    (appState) => appState.welcomePopup.isLoggedInToday
  );
  const dispatch = useAppDispatch();
  const fetchStrategies = async () => {
    try {
      const result = await getAllStrategiesService();
      if (result.data) {
        dispatch(saveStrategies({ strategiesRes: result.data }));
      }
    } catch (error) {
      dispatch(setAllStrategiesAPIFail({ allStrategiesAPIStatusFail: true }));
      throw error;
    } finally {
      dispatch(
        setAllStrategyLoadingState({ allStrategiesLoadingState: false })
      );
    }
  };
  const fetchUserDetails = async () => {
    try {
      const response = await UserProfileDetailsService();
      if (response.data) {
        dispatch(saveUserProfileDetails({ UserProfileres: response.data }));
      }
    } catch (error: any) {
      throw error;
    } finally {
      dispatch(setProfileLoadingState({ profileLoadingState: false }));
    }
  };
  const authCheck = async () => {
    const { token, otpSessionId, mobileNumber, clientId } = Object.fromEntries(
      new URLSearchParams(location.search).entries()
    );
    if (token) sessionStorage.setItem("token", token.toString());
    if (otpSessionId)
      sessionStorage.setItem("otpSessionId", otpSessionId.toString());
    if (mobileNumber)
      sessionStorage.setItem("mobileNumber", mobileNumber.toString());
    if (clientId) sessionStorage.setItem("clientId", clientId.toString());
    try {
      const clientId = sessionStorage.getItem("clientId");
      const token = sessionStorage.getItem("token");
      const mobileNumber = sessionStorage.getItem("mobileNumber");
      const otpSessionId = sessionStorage.getItem("otpSessionId");
      const params = { clientId, token, mobileNumber, otpSessionId };
      const config: RequestConfig = { payload: params };
      const response: any = await AuthCheckService(config);
      if (response?.data) {
        sessionStorage.setItem("uId", response.data.userId);
        setIsAuthenticated(true);
        fetchStrategies();
        dispatch(setIsNewUser({ isNewUser: response.data.newUser }));
        dispatch(
          setIsLoggedInToday({ isLoggedInToday: response.data.loggedInToday })
        );
        dispatch(
          setDeclineDescription({
            declineDescription: response.data.bannerContent,
          })
        );
        dispatch(setIsLive({ isLive: response.data.isLive }));
        fetchUserDetails();
      } else if (!response) {
        if (window.location.pathname !== "/servererror") {
          window.location.replace("/servererror");
        }
      }
    } catch (error) {
      setIsNewUser(true);
      sessionStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const executeAuthCheck = async () => {
      await authCheck();
    };
    executeAuthCheck();
  }, []);

  if (loading) {
    return <BufferSpinner />;
  }

  const isNewOrLoggedToday = isNewUser || isLoggedInToday;
  const isWelcomeEnable = isNewUser === false && isLoggedInToday === false;

  return (
    <Fragment>
      {serverState ? (
        <ServerErrorComp />
      ) : (
        <Routes>
          {
            <Route
              path="/"
              element={
                isNewOrLoggedToday ? (
                  <Navigate to={`/${ROUTES_CONSTANTS.WELCOME}`} />
                ) : (
                  isWelcomeEnable && (
                    <Navigate to={`/${ROUTES_CONSTANTS.DEPLOYEDSTRATEGIES}`} />
                  )
                )
              }
            />
          }
          <Route
            path={`/${ROUTES_CONSTANTS.WELCOME}`}
            element={<WelcomeModal />}
          />

          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isWelcomeEnable={isWelcomeEnable}
              />
            }
          >
            <Route path="/" element={<Layout />}>
              {ROUTES_ARR.map(({ id, route, Component }) => (
                <Route key={id} path={route} element={<Component />} />
              ))}
            </Route>
          </Route>

          <Route
            path="*"
            element={
              isWelcomeEnable ? (
                <Navigate to={`/${ROUTES_CONSTANTS.DEPLOYEDSTRATEGIES}`} />
              ) : (
                <Navigate to={`/${ROUTES_CONSTANTS.WELCOME}`} />
              )
            }
          />
        </Routes>
      )}
    </Fragment>
  );
};

export default AppRoutes;
