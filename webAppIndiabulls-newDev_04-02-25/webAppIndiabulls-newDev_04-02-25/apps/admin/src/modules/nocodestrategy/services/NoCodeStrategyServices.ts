import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import { AllStrategyResponseMapper } from "./NoCodeStrategyServiceTypes";
import {
  NoCodeStrategyBody,
  NoCodeStrategyResponseMapper,
} from "./NoCodeStrategyServiceTypes";

const noCodeStrategyGetUrl = AdminApiWrapper.DropdownsGet;
const noCodeStrategyPostUrl = AdminApiWrapper.SaveDIYStrategyPost;

export const getNoCodeStrategy =
  async (): Promise<NoCodeStrategyResponseMapper> => {
    return await ServiceRequest.get(noCodeStrategyGetUrl);
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
