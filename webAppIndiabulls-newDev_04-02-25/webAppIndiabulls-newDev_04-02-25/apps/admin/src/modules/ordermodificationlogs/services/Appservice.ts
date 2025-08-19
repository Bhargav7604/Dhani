import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";

 const OrderModificationGetUrl = AdminApiWrapper.OrderModificationGet

export const OrderModificationGetService = async ():Promise<any> => {
    return await ServiceRequest.get(OrderModificationGetUrl)
}

