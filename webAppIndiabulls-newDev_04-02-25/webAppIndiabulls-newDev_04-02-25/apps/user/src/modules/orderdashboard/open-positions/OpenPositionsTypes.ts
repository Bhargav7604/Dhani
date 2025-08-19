export interface OpenPositionsRow {
  id?: number;
  snumber?: string;
  strategyname?: string;
  datetime?: string;
  symbol?: string;
  quantity?: string | number;
  price?: string;
  status?: string;
  expiry?: string;
  mtm?: string;
  strike?: string;
}
