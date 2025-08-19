import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
const OpenPositionTablePostUrl = AdminApiWrapper.OpenPositionTablePost;
const OrderDiffranceGetUrl = AdminApiWrapper.OrderDiffranceTableGet


export const OpenPositionPostService = async (): Promise<any> => {
  return await ServiceRequest.post(OpenPositionTablePostUrl, {});
};


export const OrderDiffranceGetService = async ():Promise<any> => {
    return await ServiceRequest.post(OrderDiffranceGetUrl,{})
}