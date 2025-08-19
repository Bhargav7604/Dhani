import { DeployedStatisticsMapper } from "../../../../../user/src/modules/deployedstrategies/services/DeployedStrategiesServiceTypes";
import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import {
  DeployedStrategiesLogsMapper,
  DeployedStrategyResponseMapper,
  ExitStrategyProps,
  MultiplierChangePostProps,
  PauseStrategyProps,
  UserListResponse,
  UserTokenResponse,
  UserUsagePayload,
  UserUsageResponse,
} from "./AppServiceUtils";

const UserListGetUrl = AdminApiWrapper.UserListTableGet;
const PerticularUserGetUrl = AdminApiWrapper.PerticularUserTableGet;
const UserTokenGetUrl = AdminApiWrapper.UserTokenLogsTableGet;
const UserStrategyGetUrl = AdminApiWrapper.UserDeployStrategyGet;
const standByStrategyPostUrl = AdminApiWrapper.StandByStrategyPost;
const exitStrategyPosturl = AdminApiWrapper.ExitStrategyPost;
const stratLogsGetUrl = AdminApiWrapper.DeployedStrategyLogsGet;
const UserUsageGetUrl = AdminApiWrapper.UserUsageReportGet;
const MultiplierChagePostUrl = AdminApiWrapper.MultiplierChangePost;
const ManualEntryPostUrl = AdminApiWrapper.ManualEntryPost;
const RetryPostUrl = AdminApiWrapper.RetryPost;
const CancelPostUrl = AdminApiWrapper.CancelPost;
const DeployedStatisticsGetUrl = AdminApiWrapper.DeployedStatisticsGet;

export const UserListGetService = async (): Promise<UserListResponse> => {
  return await ServiceRequest.get(UserListGetUrl);
};

export const PerticularUserTableGetService = async (
  userId: string
): Promise<any> => {
  return await ServiceRequest.get(`${PerticularUserGetUrl}?userId=${userId}`);
};

export const UserTokenLogsTableService = async (
  userId: string
): Promise<UserTokenResponse> => {
  return await ServiceRequest.get(`${UserTokenGetUrl}?userId=${userId}`);
};
export const UserDeployStrategyService = async (
  userId: string
): Promise<any> => {
  return await ServiceRequest.get(`${UserStrategyGetUrl}?userId=${userId}`);
};

export const postPauseByStrategyService = async (
  params: PauseStrategyProps
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: {
        strategyId: params.params.strategyId,
        userId: params.params.userId,
      },
    };

    const response = await ServiceRequest.post(standByStrategyPostUrl, config);

    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const postExitAdminStrategyService = async (
  params: ExitStrategyProps
): Promise<any> => {
  try {
    const config = {
      params: {
        strategyId: params.params.strategyId,
        userId: params.params.userId,
      },
    };

    const response = await ServiceRequest.post(exitStrategyPosturl, config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const DeployedStrategiesLogsService = async (
  params: any
): Promise<DeployedStrategiesLogsMapper> => {
  if (!params) {
    throw new Error("UserId is required to fetch deployed strategies.");
  }

  try {
    const config = { params };
    const response = await ServiceRequest.get(stratLogsGetUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
};
export const UserUsageGetService = async ({
  userId,
  startDate,
  endDate,
}: UserUsagePayload): Promise<UserUsageResponse> => {
  const config = {
    payload: {
      userId,
      startDate,
      endDate,
    },
  };

  try {
    return await ServiceRequest.post(UserUsageGetUrl, config);
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};

export const postChangeMultiplierService = async (
  data: MultiplierChangePostProps
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const response = await ServiceRequest.post(MultiplierChagePostUrl, data);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const PostManualTradeService = async (
  strategyId: number
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: { strategyId },
    };
    const response = await ServiceRequest.post(ManualEntryPostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const PostRetryService = async (
  strategyId: number
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: { strategyId },
    };
    const response = await ServiceRequest.post(RetryPostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const PostCancelService = async (
  strategyId: number
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: { strategyId },
    };
    const response = await ServiceRequest.post(CancelPostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};


export const DeployedStrategiesStatisticsService = async (
  strategyId: string | number,
  userId:string | number
): Promise<DeployedStatisticsMapper> => {
   if (!strategyId) {
    throw new Error("Strategy Id is required to fetch the Deployed Strategies Statistics");
  }
  if (!userId) {
    throw new Error("User Id is required to fetch the Deployed Strategies Statistics");
  }
  try {
    const response = await ServiceRequest.get(
      `${DeployedStatisticsGetUrl}?userId=${userId}&strategyId=${strategyId}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};



