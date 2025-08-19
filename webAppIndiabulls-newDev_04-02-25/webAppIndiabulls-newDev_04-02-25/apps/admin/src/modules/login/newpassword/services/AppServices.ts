import { AdminApiWrapper } from "../../../../services/AppEndPoints";
import { ServiceRequest } from "../../../../utils/ServiceRequestAPI";
import { SetNewPasswordProps } from "./AppServiceTypes";
const NewPasswordUrl = AdminApiWrapper.ForgetPassword;
export const SetNewPasswordService = async (
  data: SetNewPasswordProps
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(NewPasswordUrl, data);
    return response;
  } catch (error) {
    console.error("Failed to post deploy popup data:", error);
    throw error;
  }
};
