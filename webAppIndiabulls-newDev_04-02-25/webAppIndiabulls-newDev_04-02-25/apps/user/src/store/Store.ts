import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AppReducer from "../state/AppReducer";
import StrategyReducer from "../modules/readytodeploy/state-slice/StartegySlice";
import NoCodeStrategyReducer from "../modules/nocodestrategy/state-slice/NoCodeStrategySlice";
import SocketDataReducer from "../components/websocet/state-slice/SocketSlice";
import DeployedStrategyReducer from "../modules/deployedstrategies/state-slice/DeployedStrategySlice";
import UserProfileDetailsReducer from "../modules/profile/state-slice/UserProfileInfoSlice";
import ToasterReducer from "../modules/layout/state-slice/ToasterSlice";
import ServerErrorSliceReducer from "../components/errorcomponents/state-slice/ServerErrorSlice";
import WelcomeSliceReducer from "../modules/welcomemodal/state-slice/WelcomeSlice";
import AlgoCompHeightReducer from "../modules/layout/state-slice/AlgoCompDimensionSlice";
import PerformanceReportsReducer from "../modules/performancereports/state-slice/PerformanceReportSlice";
import ExecutionTypeToggleReducer from "../modules/layout/state-slice/ExecutionTypeSlice";
import AppRoutesReducer from "../routes/state-slice/AppRoutesSlice";

const appReducers = combineReducers({
  app: AppReducer,
  strategies: StrategyReducer,
  diy: NoCodeStrategyReducer,
  socket: SocketDataReducer,
  deployedstrategiesdata: DeployedStrategyReducer,
  UserProfile: UserProfileDetailsReducer,
  toasters: ToasterReducer,
  servererror: ServerErrorSliceReducer,
  welcomePopup: WelcomeSliceReducer,
  algoCompDimension: AlgoCompHeightReducer,
  performancereports: PerformanceReportsReducer,
  approutes: AppRoutesReducer,
  ExecutionType: ExecutionTypeToggleReducer,
});

export const store = configureStore({
  reducer: appReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const dispatch = store.dispatch;
