// ************ PRODUCTION BUILD URL'S *************//

const BaseAPIURL = `${window.location.origin}/ql/`;
const wsProtocol = BaseAPIURL.startsWith("https") ? "wss" : "ws";
export const BaseWebSocketLocalURL = `${wsProtocol}://${window.location.host}/ql/ws/open-positions-data`;

//-------------BASEURL's----------------
// const BaseAPIURL = "http://localhost:8081/api/";
// const BaseAPIURL = "https://api.assuranceprepservices.com/ql/";

// -------------BASEWEBSOCKETURL's-------------
// export const BaseWebSocketLocalURL =
//   "ws://localhost:8081/api/ws/open-positions-data";
// "wss://api.assuranceprepservices.com/ql/ws/open-positions-data";

//************ URL's for BACK-TO-MAIN-TERMINAL, SESSION-EXPIRED ***********/
export const DASHBOARD_URL_API = "https://newdsmobileuat.a.com/ib";
export const SESSION_URL_API = "https://newdsmobileuat.a.com/ib";

const AuthCheckAPI = {
  ParamsPost: BaseAPIURL + "auth/check",
};

const WelcomeModalAPI = {
  WelcomeModalPost: BaseAPIURL + "auth/welcome",
};

const UserProfileAPI = {
  UserProfileDetailsGet: BaseAPIURL + "auth/userDetails",
  UserProfileDetailsPost: BaseAPIURL + "auth/saveProfile",
};

const OrderDashBoardAPI = {
  OrderBookGet: BaseAPIURL + "order/today",
  OrderBookPost: BaseAPIURL + "order/custom-orders",
  OpenPositionsGet: BaseAPIURL + "position/today",
};

const ViewAllStrategiesAPI = {
  AllStrategyGet: BaseAPIURL + "strategy/all",
  DeployPopUpPost: BaseAPIURL + "strategy/deploy",
  OneClickDeployPost: BaseAPIURL + "strategy/oneclickdeploy",
  UnDeployPost: BaseAPIURL + "strategy/undeploy",
};

const AlgoPageAPI = {
  ExitAllPost: BaseAPIURL + "strategy/exitall",
};

const ActiveStrategiesAPI = {
  ActiveStrategyGet: BaseAPIURL + "strategy/active",
  ExitStrategyPost: BaseAPIURL + "strategy/exitstrategy",
  StandByStrategyPost: BaseAPIURL + "strategy/standby",
  UnSubscribePost: BaseAPIURL + "strategy/unsubscribe",
  ToLiveTradingPost: BaseAPIURL + "strategy/toLiveTrading",
  ToForwardTestPost: BaseAPIURL + "strategy/toForwardTest",
  MultiplierChangePost: BaseAPIURL + "strategy/changemultiplier",
  DeployedStrategyLogsGet: BaseAPIURL + "strategy/logs/today",
  DeployedStatisticsGet: BaseAPIURL + "statistics",
  ManualEntryPost: BaseAPIURL + "errormanagement/manuallytraded",
  RetryPost: BaseAPIURL + "errormanagement/retry",
  CancelPost: BaseAPIURL + "errormanagement/cancelled",
  DownloadDetailViewGet: BaseAPIURL + "strategy/strategydownload",
};

const NoCodeStrategyBuilderAPI = {
  NoCodeStrategyPost: BaseAPIURL + "diy/save",
  diyDropdownsGet: BaseAPIURL + "diy/dropdowns",
};

const PerformanceReportAPI = {
  AllReportPost: BaseAPIURL + "reports/all",
  IndidualStategyDetailsPost: BaseAPIURL + "reports/strategyreports",
};

export const UserModuleAPI = {
  ...AuthCheckAPI,
  ...WelcomeModalAPI,
  ...UserProfileAPI,
  ...OrderDashBoardAPI,
  ...ViewAllStrategiesAPI,
  ...AlgoPageAPI,
  ...ActiveStrategiesAPI,
  ...NoCodeStrategyBuilderAPI,
  ...PerformanceReportAPI,
};
