import { UserModuleAPI } from "../../../services/AppEndpoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import { ExitAllProps } from "./HeaderServiceTypes";

const exitAllPostUrl = UserModuleAPI.ExitAllPost;

export const postExitAllService = async (data: ExitAllProps): Promise<any> => {
  try {
    const response = await ServiceRequest.post(exitAllPostUrl, data);
    return response;
  } catch (error) {
    throw error;
  }
};

