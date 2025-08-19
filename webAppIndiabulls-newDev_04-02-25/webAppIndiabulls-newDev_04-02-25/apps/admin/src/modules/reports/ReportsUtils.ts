 export type FlattenedTrade = {
    userId: string;
    userName: string;
    totalTrades: string;
    totalQuantity: number;
    totalPrice: number;
  };

export type TradeRowsTypes = {
  userId: string;
  userName: string;
  totalTrades: string;
  totalQuantity: number;
  totalPrice: number;
};

export interface TableRowsProps {
  id: number;
  userId:number;
  clientId:string;
  userName:string;
  overAllPNL:number;
  
}


export type ActiveUserTypes = {
  id: number;
  userId: string;
  lastActive: string;
  sessionCount: number;
};

export type TamplatePnl = {
 id:number,
 strategyName:string;
 pnl:number;
//  totalPnl:number;
};
export interface StrategyDetailsProps {
  name: string;
  id: number | string | null;
  totalOrders: number | string | null;
  totalPNL: number | string | null;
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
export interface StrategyReportPostTypes {
  data: {
    strategyName: string;
    strategyID: string;
    reportsSignalDTOs: ReportSignalDto[];
    totalOrders: number;
    totalPNL: number;
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