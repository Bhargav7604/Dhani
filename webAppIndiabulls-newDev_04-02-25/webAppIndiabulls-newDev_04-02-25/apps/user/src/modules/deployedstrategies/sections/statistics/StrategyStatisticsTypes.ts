import { ServiceResponseType } from "../../../../services/BaseMapper";
import { DropDownItem } from "../../../nocodestrategy/services/NoCodeStrategyServiceTypes";
import { MonthlyStatiticsTypes, WeekStatsSummaryTypes } from "../../services/DeployedStrategiesServiceTypes";
import { StrategyTableData } from "../../services/SocketDataUtils";
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
  activeStrategiesResponse: ActiveStrategiesResponseTypes[],
  activeStrategiesDropdown: ActiveStrategiesDropdownTypes,
}

export type DeployedStrategyResponseMapper =
  ServiceResponseType<DeployedStrategiesAPIResponse>;

export interface MultiplierChangePostProps {
  payload: {
    strategyId: number;
    multiplier: number;
    executionTypeId: string;
  }
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

export type DeployedStrategiesLogsMapper = ServiceResponseType<DeployedStrategiesLogsTypes>

export interface InitialStateTypes{
  StrategyLogs: DeployedStrategiesLogsTypes;
}

export interface StatisticsTypes {
  name: string;
  value: number;
}

export interface DeployedStatisticsTypes {
  statistics: StatisticsTypes[];
}

// export type DeployedStatisticsMapper = ServiceResponseType<DeployedStatisticsTypes>

export interface tableProps {
    $fontweight?: boolean;
    $color?: string;
    $background?: string;
  }
  
  export interface ActiveStrategyPageProps {
    open: boolean;
    onClose: () => void;
    strategyId: number;
  }
  
  export interface DetailedStatisticsProps {
    statistics: StatisticsTypes[];
}
  
export interface DailySummaryProps {
  weekStatsSummary: WeekStatsSummaryTypes[];
}

export interface MonthlyPNLTypes {
  monthlyStatistics: MonthlyStatiticsTypes[];
}

export type ProfitCardMappedDataTypes = {
  title: string;
  subtitle1: string;
  subtitle1Value:string | number | null;
  subtitle2: string;
  subtitle2Value: string | number | null;
  subtitle3: string;
  subtitle3Value: string | number | null;
};

export interface ProfitCardProps {
  ProfitCardMappedData: ProfitCardMappedDataTypes[];
 }
