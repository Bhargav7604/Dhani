export interface StrategyPauseProps {
  payload: { userId: string; strategyId: number };
}

export interface StrategyProps {
  payload: { userId: string; strategyId: number }[];
}


 interface StrategyRows  {
  id: number,
  userId: number,
  description:string,
  name: string,
  instrument: string,
  status: string,
}

export  interface StrategyResponse {
  data: {
    allAdminStrategies: StrategyRows[];
    categories: any[];
  };}

export interface PostStrategyIdTypes {
  strategyId: string

}

export type EditStrategyPostTypes = {
  payload:{
    strategyId:number;
    strategyName:string;
    description:string;
    minCapital:number;
    entryHours:number;
    entryMinutes:number;
    exitHours:number;
    exitMinutes:number;
    strategyCategoryID:number;
  }
}

export type ApproveStrategyPostTypes = {
  payload:{
    strategyId:number | undefined | null;
    nffid:string;
  }
}


export type RejectStrategyPostTypes = {
  payload:{
    strategyId:number;
    description:string;
    
  }
}
