import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";

 const ActivityTableGetUrl = AdminApiWrapper.AcivityMonitorTableGet

export const ActivityMonitorGetService = async ():Promise<any> => {
    return await ServiceRequest.get(ActivityTableGetUrl)
}

