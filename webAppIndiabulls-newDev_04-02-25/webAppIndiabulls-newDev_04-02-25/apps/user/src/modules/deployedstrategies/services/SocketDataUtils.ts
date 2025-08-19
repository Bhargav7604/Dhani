import { PayloadAction } from "@reduxjs/toolkit";

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
    forwardHeaders: PNLHeaderTypes;
    liveHeaders: PNLHeaderTypes;
  }
  
export interface PNLHeaderTypes {
  todaysPAndL: number;
  positionalPAndL: number;
  intradayPAndL: number;
  overAllUserPAndL: number;
  deployedCapital: number;
}

export interface SocketDataParams {
  socketData: OpenPositionsResponse;
}

export type SocketDataPayload = PayloadAction<SocketDataParams>;

export interface StrategyStatusTypes {
  id: number;
  status: string;
};  

export interface StatusSocketDataParams {
  strategyStatusData: StrategyStatusTypes[];
}

export type StatusSocketDataPayload = PayloadAction<StatusSocketDataParams>;