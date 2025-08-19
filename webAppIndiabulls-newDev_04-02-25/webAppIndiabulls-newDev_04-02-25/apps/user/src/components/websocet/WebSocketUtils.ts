export interface StrategyLegProps {
  legId: number;
  legLTP: number;
  legQuantity: number;
  lots: number;
  signalId: number;
  executedPrice: number;
  currentIV: number;
  currentDelta: number;
  indexCurrentPrice: number;
  indexBasePrice: number;
  constantDelta: number;
  constantIV: number;
  name: string;
  pandL: number;
  deployedTimeStamp: string;
  exitPrice: number;
  exitTime: string;
  totalOrders:number;
  openOrders:number;
  closedOrders:number;
}


export interface StrategyData {
  strategyId: number;
  strategyStatus: string;
  strategyMTM: number;
  indexCurrentPrice: number;
  data: StrategyLegProps[];
}

export interface SocketDataProps {
  userID: string;
  todaysPAndL: number;
  postionalPAndL: number;
  intradayPAndL: number;
  overAllUserPAndL: number;
  deployedCapital: number | null;
  strategyLegs: StrategyData[];
}

export interface SocketState {
  socketData: SocketDataProps | null;
}

export interface AppState {
  socket: SocketState;
}
