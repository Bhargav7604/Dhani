import { UserModuleAPI } from "../../../services/AppEndpoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import {
  AllStrategyResponseMapper,
  DeployFormDataPostTypes,
  OneClickDeployPostTypes,
} from "./AllStrategiesServiceTypes";

const allStrategyUrl = UserModuleAPI.AllStrategyGet;
const deployPopupPostUrl = UserModuleAPI.DeployPopUpPost;
const oneClickDeployUrl = UserModuleAPI.OneClickDeployPost;
const unDeployPostUrl = UserModuleAPI.UnDeployPost;

export const getAllStrategiesService =
  async (): Promise<AllStrategyResponseMapper> => {
    return await ServiceRequest.get(allStrategyUrl);
  };

export const postDeployPopupService = async (
  data: DeployFormDataPostTypes
): Promise<AllStrategyResponseMapper> => {
  try {
    const response = await ServiceRequest.post(deployPopupPostUrl, data);
    return response as AllStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const postoneClickDeployService = async (
  data: OneClickDeployPostTypes
): Promise<AllStrategyResponseMapper> => {
  try {
    const response = await ServiceRequest.post(oneClickDeployUrl, data);
    return response as AllStrategyResponseMapper;
  } catch (error) {
    throw error;
  }
};

export const postUnDeployService = async(
  strategyId: number
): Promise<any> => {
  try {
    const config = {
      params: { strategyId },
    }
    const response = await ServiceRequest.post(unDeployPostUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
}
