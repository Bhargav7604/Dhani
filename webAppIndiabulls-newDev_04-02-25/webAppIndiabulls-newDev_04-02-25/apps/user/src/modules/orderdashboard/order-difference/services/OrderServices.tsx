import { UserModuleAPI } from "../../../../services/AppEndpoints";
import { ServiceRequest } from "../../../../utils/ServiceRequestAPI";
import { OrderBookResponseMapper } from "./OrderServicesTypes";

const OrderBookUrl = UserModuleAPI.OrderBookGet;
const OrderBookPostUrl = UserModuleAPI.OrderBookPost;
export const OrderBookService = async (): Promise<OrderBookResponseMapper> => {
  return await ServiceRequest.get(OrderBookUrl);
};
export const OrderBookPostService = async (data:any): Promise<any> => {
  return await ServiceRequest.post(OrderBookPostUrl, data);
};
