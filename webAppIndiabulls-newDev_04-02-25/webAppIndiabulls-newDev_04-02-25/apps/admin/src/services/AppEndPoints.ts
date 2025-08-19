// const BaseAPIURL = "http://localhost:8082/api/";

  const BaseAPIURL = `${window.location.origin}/qla/`;

export const LoginPostUrl = {
  LoginPost: BaseAPIURL + "admin/login",
};

export const ForgotEmailPostUrl = {
  ForgotEmailPost: BaseAPIURL + "admin/generate-otp",
};

export const OtpPostUrl = {
  OtpPost: BaseAPIURL + "admin/validateotp",
};

export const ForgetPasswordUrl = {
  ForgetPassword: BaseAPIURL + "admin/forgetpassword",
};
export const UserListGetUrl = {
  UserListTableGet: BaseAPIURL + "admin/all-users",
  PerticularUserTableGet: BaseAPIURL + "admin/user-details",
  UserTokenLogsTableGet: BaseAPIURL + "admin/user/token-logs",
  StrategyLogsGet: BaseAPIURL + "admin/strategy/logs",
  StandByStrategyPost: BaseAPIURL + "admin/pause",
  ExitStrategyPost: BaseAPIURL + "admin/exit",

  DeployedStrategyLogsGet: BaseAPIURL + "admin/user-logs/today",
  MultiplierChangePost: BaseAPIURL + "admin/changemultiplier",
  UserUsageReportGet: BaseAPIURL + "admin/reports/user-usage",
  UserDeployStrategyGet: BaseAPIURL + "admin/user-strategies",
  ManualEntryPost: BaseAPIURL + "admin/errormanagement/manuallytraded",
  RetryPost: BaseAPIURL + "errormanagement/retry",
  CancelPost: BaseAPIURL + "errormanagement/cancelled",
  DeployedStatisticsGet: BaseAPIURL + "admin/user-statistics",
};
export const StrategiesTableGetUrl = {
  AllStrategiesTableGet: BaseAPIURL + "admin/strategies",
  CreateAdminPost: BaseAPIURL + "admin/createadmin",
  EditStategyDetailsPost: BaseAPIURL + "admin/edit-strategy",
  StrategyPausePost: BaseAPIURL + "admin/pause/all",
  StrategyShowHidePost: BaseAPIURL + "admin/toggle-strategy-visibility",
  StrategyStartPost: BaseAPIURL + "admin/start-strategies",
  StrategyDeletePost: BaseAPIURL + "admin/delete-strategies",
  StrategyApprovedPost: BaseAPIURL + "admin/approve-strategy",
  StrategyRejectPost: BaseAPIURL + "admin/reject-strategy",
};

export const StrategyBuilderUrl = {
  DropdownsGet: BaseAPIURL + "admin/diy/dropdowns",
  SaveDIYStrategyPost: BaseAPIURL + "admin/diy/save",
};

export const ErrorTableGetUrl = {
  ErrorTableGetAll: BaseAPIURL + "admin/errors/all",
  ErrorStrategyGet: BaseAPIURL + "admin/strategy/logs",
};

export const ReportTableGetUrl = {
  TradesTableGet: BaseAPIURL + "admin/reports/trades",
  PnlReportGet: BaseAPIURL + "admin/reports/user-pnl",
  TamplatePnlGet: BaseAPIURL + "admin/reports/template-pnl",
  ActiveUserGet: BaseAPIURL + "admin/reports/active-users",
  IndividualTemplateDetailsPost: +"admin/reports/strategyreports",
};
export const TodaysOrderTablePostUrl = {
  TodaysOrderTablePost: BaseAPIURL + "admin/orders-list",
};
export const OpenPositionTablePostUrl = {
  OpenPositionTablePost: BaseAPIURL + "admin/positions-list",
  OrderDiffranceTableGet: BaseAPIURL + "admin/order-differences",
};
export const ActivityMonitorTableGetUrl = {
  AcivityMonitorTableGet: BaseAPIURL + "admin/activity-logs",
};

export const ExitAllButtonPostUrl = {
  ExitAllButtonPost: BaseAPIURL + "admin/exit/all",
};
export const RollManagementGetUrl = {
  RollMangementGet: BaseAPIURL + "admin/rolemanagement",
  ManagementclientIDPost: BaseAPIURL + "admin/default/firstuser",
};
export const OrderModificationGetUrl = {
  OrderModificationGet: BaseAPIURL + "admin/logs/modify-order-logs",
};

export const AdminApiWrapper = {
  ...LoginPostUrl,
  ...ForgotEmailPostUrl,
  ...OtpPostUrl,
  ...ForgetPasswordUrl,
  ...UserListGetUrl,
  ...ErrorTableGetUrl,
  ...ReportTableGetUrl,
  ...StrategiesTableGetUrl,
  ...TodaysOrderTablePostUrl,
  ...OpenPositionTablePostUrl,
  ...ActivityMonitorTableGetUrl,
  ...StrategyBuilderUrl,
  ...ExitAllButtonPostUrl,
  ...RollManagementGetUrl,
  ...OrderModificationGetUrl,
};
