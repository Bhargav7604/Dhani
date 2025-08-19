export interface OpenPositionsRow {
  userId: number;
  userName: string;
  strategyId: string;
  strategyName: string;
  symbol: string;
  buyQuantity: string;
  buyAveragePrice: string;
  sellQuantity: string;
  averageSellPrice: string;
  totalOpenQuantity: string;
  totalMtm: string;
  clientId: string;
  instrumentName: string;
  instrumentId: string;
}
export interface OrderDifferenceRows {
  id: number;
  orderUniqueIdentifier: string;
  strategyId: string;
  strategyName: string;
  algoQuantity: number;
  brokerQuantity: number;
  quantityDifference: number;
  algoPrice: number;
  brokerPrice: number;
  priceDifference: number;
  deployedOn:string;
  lastUpdated:string;
  discrepancyType:string;
}
