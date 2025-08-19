import { UserModuleAPI } from "../../../services/AppEndpoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import { AllStrategyResponseMapper } from "../../readytodeploy/services/AllStrategiesServiceTypes";
import {
  NoCodeStrategyBody,
  NoCodeStrategyResponseMapper,
} from "./NoCodeStrategyServiceTypes";

const diyDropdownsGetUrl = UserModuleAPI.diyDropdownsGet;
const noCodeStrategyPostUrl = UserModuleAPI.NoCodeStrategyPost;

export const getNoCodeStrategy =
  async (): Promise<NoCodeStrategyResponseMapper> => {
    return await ServiceRequest.get(diyDropdownsGetUrl);
  };

export const postNoCodeStrategyService = async (
  data: NoCodeStrategyBody
): Promise<AllStrategyResponseMapper> => {
  try {
    const response = await ServiceRequest.post(noCodeStrategyPostUrl, data);
    return response as AllStrategyResponseMapper;
  } catch (error) {
    throw error;
    
  }
};
