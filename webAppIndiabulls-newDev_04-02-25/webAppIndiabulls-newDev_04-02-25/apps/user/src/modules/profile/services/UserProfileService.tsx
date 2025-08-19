import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import { UserModuleAPI } from "../../../services/AppEndpoints";
import {
  UserProfilePostBody,
  UserprofileResponseMapper,
} from "./UserProfileTypes";

const userProfileUrl = UserModuleAPI.UserProfileDetailsGet;
const userProfilePostUrl = UserModuleAPI.UserProfileDetailsPost;

export const UserProfileDetailsService =
  async (): Promise<UserprofileResponseMapper> => {
    const clientId: any = sessionStorage.getItem("clientId");
    const config = {
      params: { clientId },
    };
    return await ServiceRequest.get(userProfileUrl, config);
  };

export const UserProfileDetailsPost = async (
  data: UserProfilePostBody
): Promise<any> => {
  const response = await ServiceRequest.post(userProfilePostUrl, data);
  return response;
};
