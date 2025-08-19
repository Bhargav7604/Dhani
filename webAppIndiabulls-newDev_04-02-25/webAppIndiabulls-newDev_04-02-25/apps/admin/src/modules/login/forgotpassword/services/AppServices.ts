import { AdminApiWrapper } from "../../../../services/AppEndPoints";
import { ServiceRequest } from "../../../../utils/ServiceRequestAPI";
import { ForgotPasswordPostProps } from "./AppServicesTypes";
const ForgotEmailPostUrl = AdminApiWrapper.ForgotEmailPost;
export const ForgotEmailPostService = async (
  data: ForgotPasswordPostProps
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(ForgotEmailPostUrl, data);
    return response;
  } catch (error) {
    console.error("Failed to post deploy popup data:", error);
    throw error;
  }
};
