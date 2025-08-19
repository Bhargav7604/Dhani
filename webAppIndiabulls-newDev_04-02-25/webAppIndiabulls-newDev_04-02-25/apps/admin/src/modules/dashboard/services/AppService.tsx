import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";


const ExitAllPostUrl = AdminApiWrapper.ExitAllButtonPost;


export const ExitAllPostService = async ():Promise<any> => {
    return await ServiceRequest.post(ExitAllPostUrl,{})
}