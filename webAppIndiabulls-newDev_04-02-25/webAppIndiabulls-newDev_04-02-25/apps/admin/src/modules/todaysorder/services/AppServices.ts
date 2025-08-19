import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
const TodayOrdersPostUrl = AdminApiWrapper.TodaysOrderTablePost;
export const TodayOrdersPostService = async (): Promise<any> => {
  return await ServiceRequest.post(TodayOrdersPostUrl, {});
};
