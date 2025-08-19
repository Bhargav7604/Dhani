import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";

 const ErrorTableGetUrl = AdminApiWrapper.ErrorTableGetAll

export const ErrorGetService = async ():Promise<any> => {
    return await ServiceRequest.get(ErrorTableGetUrl)
}