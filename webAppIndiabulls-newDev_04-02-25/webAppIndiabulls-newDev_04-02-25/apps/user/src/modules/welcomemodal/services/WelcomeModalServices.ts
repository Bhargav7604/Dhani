import { UserModuleAPI } from "../../../services/AppEndpoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import { WelcomeModalPostBody } from "./WelcomeModalServiceTypes";

const welcomeModalPostUrl = UserModuleAPI.WelcomeModalPost;

export const WelcomeModalPostService = async (
  data: WelcomeModalPostBody
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(welcomeModalPostUrl, data);
    return response;
  } catch (error) {
    throw error;
  }
};
