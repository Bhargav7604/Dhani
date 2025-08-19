import React from "react";
import StrategyLog from "../modules/strategies/sections/strategylog/StrategyLog";
// Strategies
const ActiveStrategies = React.lazy(
  () => import("../modules/strategies/sections/active/ActiveStrategies")
);
const NonActiveStrategies = React.lazy(
  () => import("../modules/strategies/sections/in-active/InActiveStrategies")
);
const ManageStrategies = React.lazy(
  () =>
    import("../modules/strategies/sections/manage-strategies/ManageStrategies")
);
const Strategies = React.lazy(() => import("../modules/strategies/Strategies"));

// Reports
const TradesPage = React.lazy(
  () => import("../modules/reports/sections/trades/Trades")
);
const PNL = React.lazy(() => import("../modules/reports/sections/pnl/Pnls"));
const TemplatePnl = React.lazy(
  () => import("../modules/reports/sections/templatepnl/TemplatePnl")
);

const UserUsageReport = React.lazy(
  () => import("../modules/user-list/sections/userusage/UserUsageReport")
);
const ActiveUsers = React.lazy(
  () => import("../modules/reports/sections/activeuser/ActiveUsers")
);
const ReportPage = React.lazy(() => import("../modules/reports/Reports"));

const Dashboard = React.lazy(() => import("../modules/dashboard/Dashboard"));
const Users = React.lazy(() => import("../modules/user-list/UsersComp"));

const TodaysOrder = React.lazy(
  () => import("../modules/todaysorder/Todaysorder")
);

const ErrorTraker = React.lazy(
  () => import("../modules/error-tracker/ErrorTracker")
);
const OpenPositions = React.lazy(
  () => import("../modules/open-positions/OpenPositions")
);
const OrderDifference = React.lazy(
  () => import("../modules/open-positions/sections/order-difference/OrderDifference")
);
const Nocodestrategy = React.lazy(
  () => import("../modules/nocodestrategy/NoCodeStrategyPage")
);
const ActivityLog = React.lazy(
  () => import("../modules/activitymonitor/ActivityLog")
);
const RollManagement = React.lazy(
  () => import("../modules/rolemanagement/RoleManagement")
);
const ProfilePage = React.lazy(() => import("../modules/profile/ProfilePage"));
const Userlist = React.lazy(
  () => import("../modules/user-list/sections/userlistpage/UserListComp")
);

const UserTokenLogs = React.lazy(
  () => import("../modules/user-list/sections/usertokenlogs/UserTokenLogs")
);
const UserDeployeStrategys = React.lazy(
  () =>
    import(
      "../modules/user-list/sections/userdeploystrategies/UserDeployStrategiesPage"
    )
);
const TemplateDetails = React.lazy(
  () =>
    import(
      "../modules/reports/sections/detailstemplate/DetailsTemplateTable"
    )
);
const OrderModification = React.lazy(
  () =>
    import(
      "../modules/ordermodificationlogs/Ordermodificationlogs"
    )
);
export interface RouteInterface {
  id: string;
  route: string;
  Component: React.ComponentType;
  children?: Array<{
    path: string;
    Component: React.ComponentType;
  }>;
}

export enum ROUTES_CONSTANTS {
  DASHBOARD = "dashboard",
  STRATEGIES = "strategies",
  USERS = "userslist",
  TODAYS_ORDER = "todays-order",
  OPEN_POSITIONS = "open-positions",
  ORDER_DIFFERENCE = "order-difference",
  LICENSE_MANAGEMENT = "license-management",
  REPORTS = "reports",
  ERRORTRAKER = "errortraker",
  ALLORDERS = "all-orders",
  ALLPOSITIONS = "all-positions",
  NOCODESTRATEGY = "nocodestrategy",
  ACTIVITYLOG = "activitylog",
  ROLLMANAGEMENT = "rollmanagement",
  PROFILE = "profile",
  USERDEPLOYESTRATEGIES = "userdeploystrategies/:userId",
  TEMPLATEDETAILS = "templatedetails/:strategyId",
  ORDERMODIFICATION = "ordermodificationlogs"
}

export const PRIVATE_ROUTES_ARR: Array<RouteInterface> = [
  {
    id: "1",
    route: ROUTES_CONSTANTS.DASHBOARD,
    Component: Dashboard,
  },
  {
    id: "2",
    route: ROUTES_CONSTANTS.STRATEGIES,
    Component: Strategies,
    children: [
      { path: "", Component: ManageStrategies },
      { path: "manage", Component: ManageStrategies },
      { path: "active", Component: ActiveStrategies },
      { path: "non-active", Component: NonActiveStrategies },
      { path: "strategylog", Component: StrategyLog },
    ],
  },
  {
    id: "3",
    route: ROUTES_CONSTANTS.USERS,
    Component: Users,
    children: [
      { path: "", Component: Userlist },
      { path: "userslist", Component: Userlist },
      { path: "tokens/:userId", Component: UserTokenLogs },
      { path: "userusage/:userId", Component: UserUsageReport },
    ],
  },
  {
    id: "4",
    route: ROUTES_CONSTANTS.ERRORTRAKER,
    Component: ErrorTraker,
  },
  {
    id: "5",
    route: ROUTES_CONSTANTS.TODAYS_ORDER,
    Component: TodaysOrder,
  },
  {
    id: "6",
    route: ROUTES_CONSTANTS.OPEN_POSITIONS,
    Component: OpenPositions,
  },
  {
    id: "7",
    route: ROUTES_CONSTANTS.ORDER_DIFFERENCE,
    Component: OrderDifference,
  },
  {
    id: "8",
    route: ROUTES_CONSTANTS.NOCODESTRATEGY,
    Component: Nocodestrategy,
  },
  { id: "9", route: ROUTES_CONSTANTS.PROFILE, Component: ProfilePage },
  { id: "10", route: ROUTES_CONSTANTS.ACTIVITYLOG, Component: ActivityLog },
  {
    id: "11",
    route: ROUTES_CONSTANTS.ROLLMANAGEMENT,
    Component: RollManagement,
  },
  {
    id: "12",
    route: ROUTES_CONSTANTS.USERDEPLOYESTRATEGIES,
    Component: UserDeployeStrategys,
  },

  {
    id: "13",
    route: ROUTES_CONSTANTS.REPORTS,
    Component: ReportPage,
    children: [
      { path: "", Component: TradesPage },
      { path: "trades", Component: TradesPage },
      { path: "pnl", Component: PNL },
      { path: "templatepnl", Component: TemplatePnl },
      { path: "activeuser", Component: ActiveUsers },
    ],
  },
  {
    id: "14",
    route: ROUTES_CONSTANTS.TEMPLATEDETAILS,
    Component: TemplateDetails,
  },
  {
    id: "15",
    route: ROUTES_CONSTANTS.ORDERMODIFICATION,
    Component: OrderModification,
  },
];
