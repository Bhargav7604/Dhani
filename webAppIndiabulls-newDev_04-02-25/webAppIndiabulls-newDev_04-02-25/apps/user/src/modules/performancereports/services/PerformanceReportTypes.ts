import { PayloadAction } from "@reduxjs/toolkit";

export interface AllReportPostTypes {
  data: {
    fromDate: string;
    toDate: string;
   
    reports:any;
  };
}

interface ReportLeg {
  date: number;
  exchange?: string;
  underlying?: string;
  quantity: number;
  pnlChange: number;
  signalId:number;

}

interface ReportSignalDto {
  signalId: number;
  pnl: number;
  pnlChange: number;
  sequentialPNL: number;
  reportsLegDtoList: ReportLeg[];
  date: number | string;
  orderCount: number;
}

export interface StrategyReportPostTypes {
  data: {
    strategyName: string;
    strategyID: string;
    reportsSignalDTOs: ReportSignalDto[];
    totalOrders: number;
    totalPNL: number;
  };
}

export interface RowData {
  id: number;
  strategyName?: string;
  pnl: number;
  date: string | number;
  exchange?: string;
  underlying?: string;
  signalId: number;
  pnlChange: number;
  sequentialPNL: number;
  orderCount: number;
}

  export interface StrategyReportsPostBody {
    payload: {
      fromDate: string;
      toDate: string;
      strategyId: number;
    }
  }

export interface StrategyReportsDataTypes {
  fromDate: string;
  toDate: string;
  strategyId: number | null;
};
export interface AllReportPostTypes {
  data: {
    fromDate: string;
    toDate: string;
   
    reports:any;
  };
}

export type StrategyReportsParams = PayloadAction<StrategyReportPostTypes>;
