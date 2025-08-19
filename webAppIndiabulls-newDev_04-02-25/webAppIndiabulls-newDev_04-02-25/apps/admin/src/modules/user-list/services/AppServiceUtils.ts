 export interface userTokenRows {
    id: number;
    token: string;
    tokenType:string;
    isWelcomeAccepted:boolean;
    welcomeAcknowledgedTime:string;
    tokenGeneratedTime: string;
    machineId: string;
    remarks:string;
  }

export interface UserTokenResponse {
  data: userTokenRows[];
  message: string;
}

 export interface userListRows {
    id: number;
    clientId:string;
    name: string;
    email: string;
    // role: string;
    phoneNumber: number;
    createdDateTime: string;
    status: string;
  }
  export interface UserListResponse {
    data: userListRows[];
  }

  import { ServiceResponseType } from "../../../services/BaseMapper";
  import { DropDownItem } from "../../nocodestrategy/services/NoCodeStrategyServiceTypes";
  import { StrategyTableData } from "./SocketDataUtils";
  export interface UnSubscribeProps {
    strategyId: number;
  }
  export interface ExitStrategyProps {
    params: {
      strategyId: number;
      userId: string | undefined;
    };
  }
  export interface PauseStrategyProps {
    params: {
      strategyId: number;
      userId: string | undefined;
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
      userId:string | undefined;
      strategyId: number;
      multiplier: number;
      executionTypeId?: string;
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
    isLoading?:boolean;
  }
  
  export interface StatisticsTypes {
    name: string;
    value: number;
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
  export interface DeployedStatisticsTypes {
    statistics: StatisticsTypes[];
  }
 export type UserUsagePayload = {
  userId: string | undefined;
  startDate: string;
  endDate: string;
};
export interface UserUsageTypes {
  userId: string | null;
  pnl: number;
  trades: number;
}
export interface UserUsageResponse {
 
  data: UserUsageTypes; // Single object
  
}
export interface UserUsageTypes {
  userId: string | null;
  pnl: number;
  trades: number;
}

export interface UserUsageResponse {
  data: UserUsageTypes;
  status: string;
  success: boolean;
  message: string;
  errors: any;
}

 


  
  
  export type DeployedStatisticsMapper = ServiceResponseType<DeployedStatisticsTypes>
  