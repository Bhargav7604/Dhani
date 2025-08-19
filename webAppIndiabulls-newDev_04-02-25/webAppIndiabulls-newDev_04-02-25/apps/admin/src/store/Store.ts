import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../modules/profile/state-slice/userSlice";
import emailSlice from "../modules/login/forgotpassword/state-slice/EmailSlice";
import authSlice from "../modules/login/loginscreen/state-slice/AuthSlice";
import LogOutSlice from "../modules/layout/sidebar/state-slice/LogOutSlice";
import OpenPositionSlice from "../modules/open-positions/state-slice/OpenPositionsSlice";
import TodayOrdersSlice from "../modules/todaysorder/state-slice/TodaysOrderSlice";
import UserListSlice from "../modules/user-list/state-slice/UserListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import StrategyReducer from "../modules/strategies/state-slice/SaveStrategySlice";
import StrategyDataReducer from "../modules/strategies/state-slice/StrategiesSlice";
import ExecutionTypeToggleReducer from "../modules/user-list/state-slice/ExecutionTypeSlice";
import NoCodeStrategyReducer from "../modules/nocodestrategy/state-slice/NoCodeStrategySlice";
import ExitAllSlice from "../modules/dashboard/state-slice/ExitAllSlice";
import ToasterReducer from "../modules/layout/state-slice/ToasterSlice";
import DeployedStrategyReducer from "../modules/user-list/state-slice/DeployedStrategySlice";
import SocketDataReducer from "../components/websocet/state-slice/SocketSlice";
import TemplatePNLReducer from "../modules/reports/state-slice/ReportsSlice";
const store = configureStore({
  reducer: {
    userData: userSlice,
    openpositionData: OpenPositionSlice,
    emailData: emailSlice,
    authData: authSlice,
    logOut: LogOutSlice,
    exitall: ExitAllSlice,
    todayOrdersData: TodayOrdersSlice,
    adminlistData: UserListSlice,
    strategies: StrategyReducer,
    strategiesdata: StrategyDataReducer,
    diy: NoCodeStrategyReducer,
    toasters: ToasterReducer,
    deployedstrategiesdata: DeployedStrategyReducer,
    socket: SocketDataReducer,
    templatereports: TemplatePNLReducer,
    ExecutionType: ExecutionTypeToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
