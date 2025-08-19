import React from "react";

const HomePage = React.lazy(() => import("../modules/readytodeploy/ReadyToDeployPage"));

const DeployedStrategiesPage = React.lazy(
  () => import("../modules/deployedstrategies/DeployedStrategiesPage")
);

const NoCodeStrategyPage = React.lazy(
  () => import("../modules/nocodestrategy/NoCodeStrategyPage")
);

const PerformanceReportsPage = React.lazy(
  () => import("../modules/performancereports/PerformanceReportsPage")
);
const WelcomeModalPage = React.lazy(
  () => import("../modules/welcomemodal/WelcomeModal")
);

const OrderBookPage = React.lazy(
  () => import("../modules/orderdashboard/OrderContainerPage")
);
const ProfilePage = React.lazy(() => import("../modules/profile/ProfilePage"));
const ReportDetailsTablePage = React.lazy(
  () =>
    import(
      "../modules/performancereports/sections/detailsreport/DetailsReportTable"
    )
);
const ErrorPage = React.lazy(
  () => import("../../../../packages/ui/src/sharedcomponents/servererror/ServerErrorComp")
);
export interface RouteInterface {
  id: string;
  route: string;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export enum ROUTES_CONSTANTS {
  PROFILE = "userprofile",
  DASHBOARD = "dashboard",
  WELCOME = "welcome",
  READYTODEPLOY = "readytodeploy",
  DEPLOYEDSTRATEGIES = "deployedstrategies",
  NOCODESTRATEGYBUILDER = "nocodestrategybuilder",
  PERFORMANCEREPORTS = "peformanceanalytics",
  ORDERREPORTS = "orderreports",
  REPORTDETAILS = "reportdetails/:strategyId",
  SERVERERROR = "servererror",
}

export const ROUTES_ARR: Array<RouteInterface> = [
  {
    id: "1",
    route: ROUTES_CONSTANTS.READYTODEPLOY,
    Component: HomePage,
  },

  {
    id: "2",
    route: ROUTES_CONSTANTS.DEPLOYEDSTRATEGIES,
    Component: DeployedStrategiesPage,
  },

  {
    id: "3",
    route: ROUTES_CONSTANTS.NOCODESTRATEGYBUILDER,
    Component: NoCodeStrategyPage,
  },
  {
    id: "4",
    route: ROUTES_CONSTANTS.PERFORMANCEREPORTS,
    Component: PerformanceReportsPage,
  },
  {
    id: "5",
    route: ROUTES_CONSTANTS.WELCOME,
    Component: WelcomeModalPage,
  },
  {
    id: "6",
    route: ROUTES_CONSTANTS.ORDERREPORTS,
    Component: OrderBookPage,
  },
  {
    id: "7",
    route: ROUTES_CONSTANTS.PROFILE,
    Component: ProfilePage,
  },

  {
    id: "8",
    route: ROUTES_CONSTANTS.REPORTDETAILS,
    Component: ReportDetailsTablePage,
  },
  {
    id: "9",
    route: ROUTES_CONSTANTS.SERVERERROR,
    Component: ErrorPage,
  },
];


