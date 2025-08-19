
export interface StrategyLeg {
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
  }

  export interface StrategyTableData {
    strategyId: number;
    strategyMTM:number;
    data: StrategyLeg[];
  }

  export interface OpenPositionsResponse {
    exchangeInstrumentID: number;
    strategyID: number;
    userID: number;
    signalID: number;
    signalPAndL: number;
    todaysPAndL: string;
    totalStrategyPAndL: number;
    postionalPAndL: string;
    intradayPAndL: string;
    deployedCapital: null | string;
    strategyLegs: StrategyTableData[];
    overAllUserPAndL: string;
  }

