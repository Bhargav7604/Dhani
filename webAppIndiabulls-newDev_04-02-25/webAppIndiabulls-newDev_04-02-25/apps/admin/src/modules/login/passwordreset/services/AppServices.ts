import { AdminApiWrapper } from "../../../../services/AppEndPoints";
import { ServiceRequest } from "../../../../utils/ServiceRequestAPI";
import { OtpPostProps } from "./AppServiceTypes";
const OtpPostUrl = AdminApiWrapper.OtpPost;
export const OtpPostService = async (data: OtpPostProps): Promise<any> => {
  try {
    const response = await ServiceRequest.post(OtpPostUrl, data);
    return response;
  } catch (error) {
    console.error("Failed to post deploy popup data:", error);
    throw error;
  }
};
