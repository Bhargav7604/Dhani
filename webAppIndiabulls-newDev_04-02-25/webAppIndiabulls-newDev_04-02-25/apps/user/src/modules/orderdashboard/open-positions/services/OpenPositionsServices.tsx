import { UserModuleAPI } from "../../../../services/AppEndpoints";
import { ServiceRequest } from "../../../../utils/ServiceRequestAPI";
import { OpenPositionsResponseMapper } from "./OpenPositionsTypes";

const OpenPositionUrl = UserModuleAPI.OpenPositionsGet;

export const OpenPositionService = async ():Promise<OpenPositionsResponseMapper>=>{
    return await ServiceRequest.get(OpenPositionUrl)
}