import { ServiceResponseType } from "../../../services/BaseMapper";
import { DropDownItem } from "../../nocodestrategy/services/NoCodeStrategyServiceTypes";
import { StrategyTableData } from "./SocketDataUtils";
export interface UnSubscribeProps {
  strategyId: number;
}
export interface ExitStrategyProps {
  payload: {
    strategyId: number;
    signalId: number;
  };
}

export interface ActiveStrategiesResponseTypes {
  name: string;
  deployedOn: string | number | null;
  execution: string;
  status: string;
  capital: number;
  multiplier: string;
  counter: string | number | null;
  sid: number;
  signalId: number;
  requiredCapital: number;
  category: string;
  positionType: string;
  strategyLegTableDTO: StrategyTableData;
}

export interface ActiveStrategiesDropdownTypes {
  executionType: DropDownItem[];
  multiplier: DropDownItem[];
}

export interface DeployedStrategiesAPIResponse {
  activeStrategiesResponse: ActiveStrategiesResponseTypes[];
  activeStrategiesDropdown: ActiveStrategiesDropdownTypes;
}

export type DeployedStrategyResponseMapper =
  ServiceResponseType<DeployedStrategiesAPIResponse>;

export interface MultiplierChangePostProps {
  payload: {
    strategyId: number;
    multiplier: number;
    executionTypeId: string;
  };
}

export interface DeployedStrategiesLogsTypes {
  strategyId: number;
  userId: string;
  deployedOn: string;
  statusList: {
    timeStamp: string;
    status: string;
    description: string[];
  }[];
}

export type DeployedStrategiesLogsMapper =
  ServiceResponseType<DeployedStrategiesLogsTypes>;

export interface InitialStateTypes {
  StrategyLogs: DeployedStrategiesLogsTypes;
  isLoading?: boolean;
  apiStatusFail: string;
}

export interface StatisticsTypes {
  name: string;
  value: number;
}

export interface MonthlyStatiticsTypes {
  month: string;
  totalTrades: number;
  pnlRs: number;
  pnlPercent: number;
}

export interface WeekStatsSummaryTypes {
  day: string;
  returns: number;
  maxProfit: number;
  maxLoss: number;
}


export interface PerformanceOverviewTypes {
  winRatio: number;
  winDays: number;
  lossDays: number;
}

export interface ProfitStatisticsTypes {
  totalProfit: number | null;
  monthlyAvg: number | null;
  totalROI: number | null;
}

export interface RiskMetricsTypes {
  maxDrawDown: number;
  sharpeRatio: number;
  sortinoRatio?: number | null;
}

export interface DeployedStatisticsTypes {
  statistics: StatisticsTypes[];
  monthlyStatistics: MonthlyStatiticsTypes[];
  performanceOverview: PerformanceOverviewTypes;
  profitStatistics: ProfitStatisticsTypes;
  riskMetrics: RiskMetricsTypes;
  weekStatsSummary: WeekStatsSummaryTypes[];
}

export type DeployedStatisticsMapper =
  ServiceResponseType<DeployedStatisticsTypes>;
