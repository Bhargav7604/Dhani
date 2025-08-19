import { UserModuleAPI } from "../../../services/AppEndpoints";
import { ServiceRequest } from "../../../utils/ServiceRequestAPI";
import {
  AllReportPostTypes,
  StrategyReportPostTypes,
  StrategyReportsPostBody,
} from "./PerformanceReportTypes";

const ReportsAllPostUrl = UserModuleAPI.AllReportPost;
const IndidualStrategyDetailsUrl = UserModuleAPI.IndidualStategyDetailsPost;

export const fetchReportsByDate = async (
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
    return await ServiceRequest.post(ReportsAllPostUrl, config);
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};

export const fetchReportByStrategyId = async (
  data: StrategyReportsPostBody
): Promise<StrategyReportPostTypes> => {
  try {
    const response = await ServiceRequest.post(IndidualStrategyDetailsUrl, data);
    return response as StrategyReportPostTypes;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};
