import { AdminApiWrapper } from "../../../../services/AppEndPoints";
import { LoginPostProps } from "./AppServieceTypes";
import { ServiceRequest } from "../../../../utils/ServiceRequestAPI";
const LoginPostUrl = AdminApiWrapper.LoginPost;
export const AdminLoginPostService = async (
  data: LoginPostProps
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(LoginPostUrl, data);
    return response;
  } catch (error) {
    console.error("Failed to post deploy popup data:", error);
    throw error;
  }
};
