import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import { RoleData, RollManagementPostTypes } from "./AppServicesTypes";
  
const RollManagementGetUrl = AdminApiWrapper.RollMangementGet;
const RollManagementPostUrl = AdminApiWrapper.ManagementclientIDPost;

export const RollManagementGetService = async (): Promise<{
  data: RoleData[];
}> => {
  return await ServiceRequest.get(`${RollManagementGetUrl}`);
};

export const RollManagementPostService = async (
    data:RollManagementPostTypes
):Promise<any> => {
    try{
        const  response = await ServiceRequest.post(RollManagementPostUrl,data);
        return response;
    }catch (error){
        throw error;
    }
}
