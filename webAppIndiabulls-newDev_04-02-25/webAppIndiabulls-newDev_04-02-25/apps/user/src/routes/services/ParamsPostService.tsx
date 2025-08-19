import { UserModuleAPI } from "../../services/AppEndpoints";
import { RequestConfig, ServiceRequest } from "../../utils/ServiceRequestAPI";
const ParamsPostUrl = UserModuleAPI.ParamsPost;

export const AuthCheckService = async (data: RequestConfig) => {
  try {
    const response = await ServiceRequest.post(ParamsPostUrl, data);
    return response;
  } catch (error) {
    throw error;
  }
};
