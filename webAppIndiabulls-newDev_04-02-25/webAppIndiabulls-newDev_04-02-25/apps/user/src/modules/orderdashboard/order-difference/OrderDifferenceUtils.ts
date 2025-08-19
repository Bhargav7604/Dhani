export interface OrderDifferenceRows {
  id: any;
  snumber: any;
  strategyName: any;
  algoPrice: any;
  symbol:any
  datetime: any;
  price: any;
  quantity: any;
  status: any;
  brokerQty: any;
  qtyDiff: any;
}

export interface OrderDifferenceStateTypes {
  apiStatusFail: boolean;
  isLoading: boolean;
}

