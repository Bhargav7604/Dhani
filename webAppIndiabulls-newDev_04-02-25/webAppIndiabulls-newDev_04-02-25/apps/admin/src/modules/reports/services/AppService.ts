import { AllReportPostTypes } from "../../../../../user/src/modules/performancereports/services/PerformanceReportTypes";
import { AdminApiWrapper } from "../../../services/AppEndPoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import {
  ActiveUserTypes,
  FlattenedTrade,
  StrategyReportPostTypes,
} from "../ReportsUtils";
import {
  ActiveUserPayload,
  StrategyReportsPostBody,
  // PnlReportTypes,
} from "./AppServiceUtils";

const TradesGetUrl = AdminApiWrapper.TradesTableGet;
const PnlGetUrl = AdminApiWrapper.PnlReportGet;
const TamplateUrl = AdminApiWrapper.TamplatePnlGet;
const ActiveUserUrl = AdminApiWrapper.ActiveUserGet;
const  IndividualTemplateDetailsUrl = String(AdminApiWrapper.IndividualTemplateDetailsPost);

export const TradesGetService = async (): Promise<{
  data: FlattenedTrade[];
}> => {
  return await ServiceRequest.get(`${TradesGetUrl}`);
};


export const PnlReportsByDate = async (): Promise<any> => {
  return await ServiceRequest.get(PnlGetUrl);
};

export const ActiveUserGetService = async ({
  duration,
}: ActiveUserPayload): Promise<{ activeUsers: ActiveUserTypes[] }> => {
  return await ServiceRequest.get(`${ActiveUserUrl}?duration=${duration}`);
};


export const fetchTemplatePNLByDate = async (
  fromDate: string,
  toDate: string,
): Promise<AllReportPostTypes> => {
  const config = {
    payload: {
      fromDate,
      toDate,
     
    },
  };

  try {
    return await ServiceRequest.post(TamplateUrl, config);
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};

export const fetchReportByStrategyId = async (
  data: StrategyReportsPostBody
): Promise<StrategyReportPostTypes> => {
  try {
    const response = await ServiceRequest.post(IndividualTemplateDetailsUrl, data);
    return response as StrategyReportPostTypes;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};
