import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import {  ApproveStrategyPostTypes, EditStrategyPostTypes,  RejectStrategyPostTypes,  StrategyResponse } from "./AppServiceTypes";


const StrategiestableGetUrl = AdminApiWrapper.AllStrategiesTableGet;
const StrategiesPausePostUrl = AdminApiWrapper.StrategyPausePost;
const EditStategyPostUrl = AdminApiWrapper.EditStategyDetailsPost;
const StrategyShowHideUrl = AdminApiWrapper.StrategyShowHidePost;
const StrategyLogGetUrl = AdminApiWrapper.StrategyLogsGet;
const StrategyApprovePostUrl = AdminApiWrapper.StrategyApprovedPost;
const StrategyRejectPostUrl = AdminApiWrapper.StrategyRejectPost;

export const AllStrategiestableGetService = async (
  status: string = "all"
): Promise<StrategyResponse> => {
  const response = ServiceRequest.get(`${StrategiestableGetUrl}?status=${status}`);
  return response ;

};

export const ActiveStrategiestableGetService = async (
  status: string = "active"
): Promise<StrategyResponse> => {
  return await ServiceRequest.get(`${StrategiestableGetUrl}?status=${status}`);
};
export const InActiveStrategiestableGetService = async (
  status: string = "inactive"
): Promise<StrategyResponse> => {
  return await ServiceRequest.get(`${StrategiestableGetUrl}?status=${status}`);
};


 // pause the Strategy
export const StrategypausePostService = async(
  strategyId: number
): Promise<any> => {
  try {
    const config = {
      params: { strategyId },
    }
    const response = await ServiceRequest.post(StrategiesPausePostUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
}
// Edit the Strategy
export const EditStrategyPostService = async (
  data: EditStrategyPostTypes
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(EditStategyPostUrl, data);
    return response ;
  } catch (error) {
    throw error;
  }
};
 // show or hide the strategy
export const StrategyShowHidePostService = async(
  strategyId: number
): Promise<any> => {
  try {
    const config = {
      params: { strategyId },
    }
    const response = await ServiceRequest.post(StrategyShowHideUrl, config);
    return response;
  } catch (error) {
    throw error;
  }
}
// strategy Approve service
export const ApproveStrategyPostService = async (
  data: ApproveStrategyPostTypes
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(StrategyApprovePostUrl, data);
    return response ;
  } catch (error) {
    throw error;
  }
};
// strategy Reject service
export const RejectStrategyPostService = async (
  data: RejectStrategyPostTypes
): Promise<any> => {
  try {
    const response = await ServiceRequest.post(StrategyRejectPostUrl, data);
    return response ;
  } catch (error) {
    throw error;
  }
};

// strategy log service
export const StrategyLogGetService = async ():Promise<any> => {
    return await ServiceRequest.get(StrategyLogGetUrl)
}









