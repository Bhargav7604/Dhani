import { UserModuleAPI } from "../../../services/AppEndpoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import {
  DeployedStatisticsMapper,
  DeployedStrategiesLogsMapper,
  DeployedStrategyResponseMapper,
  ExitStrategyProps,
  MultiplierChangePostProps,
  UnSubscribeProps,
} from "./DeployedStrategiesServiceTypes";

const exitStrategyPosturl = UserModuleAPI.ExitStrategyPost;
const standByStrategyPostUrl = UserModuleAPI.StandByStrategyPost;
const DeployedStrategyPostUrl = UserModuleAPI.ActiveStrategyGet;
const UnSubscribePostUrl = UserModuleAPI.UnSubscribePost;
const ToLiveTradingPostUrl = UserModuleAPI.ToLiveTradingPost;
const ToForwardTestPostUrl = UserModuleAPI.ToForwardTestPost;
const MultiplierChagePostUrl = UserModuleAPI.MultiplierChangePost;
const stratLogsGetUrl = UserModuleAPI.DeployedStrategyLogsGet;
const StrategyStatisticsGetUrl = UserModuleAPI.DeployedStatisticsGet;
const ManualEntryPostUrl = UserModuleAPI.ManualEntryPost;
const RetryPostUrl = UserModuleAPI.RetryPost;
const CancelPostUrl = UserModuleAPI.CancelPost;
const DownloadDetailViewGetUrl = UserModuleAPI.DownloadDetailViewGet;

export const DeployedStrategiesService = async (
  UserId: string | number
): Promise<DeployedStrategyResponseMapper> => {
  if (!UserId) {
    throw new Error("UserId is required to fetch deployed strategies.");
  }

  try {
    const config = { params: { UserId } };
    const response = await ServiceRequest.get(DeployedStrategyPostUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
};
export const DownloadDetailViewService = async (strategyId: string | number | undefined) => {
  if (!strategyId) {
    throw new Error("strategyId is required to fetch deployed strategies");
  }
  try {
    const config = { params: { strategyId } };
    const response = await ServiceRequest.get(DownloadDetailViewGetUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
};
export const postUnScribeService = async (
  strategyId: UnSubscribeProps
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: strategyId,
    };
    const response = await ServiceRequest.post(UnSubscribePostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const postExitStrategyService = async (
  data: ExitStrategyProps
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(exitStrategyPosturl, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postStandByStrategyService = async (
  strategyId: number
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: { strategyId },
    };
    const response = await ServiceRequest.post(standByStrategyPostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const postToLiveTradingService = async (
  strategyId: number
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: { strategyId },
    };
    const response = await ServiceRequest.post(ToLiveTradingPostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const postToForwardTestService = async (
  strategyId: number
): Promise<DeployedStrategyResponseMapper> => {
  try {
    const config = {
      params: { strategyId },
    };
    const response = await ServiceRequest.post(ToForwardTestPostUrl, config);
    return response as DeployedStrategyResponseMapper;
  } catch (error) {
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

export const DeployedStrategiesLogsService = async (
  strategyId: string | number
): Promise<DeployedStrategiesLogsMapper> => {
  if (!strategyId) {
    throw new Error("UserId is required to fetch deployed strategies.");
  }

  try {
    const config = { params: { strategyId } };
    const response = await ServiceRequest.get(stratLogsGetUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
};

export const DeployedStrategiesStatisticsService = async (
  strategyId: string | number
): Promise<DeployedStatisticsMapper> => {
  if (!strategyId) {
    throw new Error(
      "User Id is required to fetch the Deployed Strategies Statistics"
    );
  }
  try {
    const response = await ServiceRequest.get(
      `${StrategyStatisticsGetUrl}/${strategyId}`
    );
    return response;
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
