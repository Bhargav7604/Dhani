export interface TableFieldsProps {
    id: number;
    pnlValue: string;
    strategyId: number;
  }


// export interface PnlReportTypes {
//       fromDate: string;
//       toDate: string;
//       pnlEntries?:TableFieldsProps[];
    
//   }

  
  export type ActiveUserPayload = {
    duration: string;
  };
export interface TemplatesDataTypes {
  fromDate: string;
  toDate: string;
  strategyId: number | null;
};
   export interface StrategyReportsPostBody {
    payload: {
      fromDate: string;
      toDate: string;
      strategyId: string | undefined;
    }
  }