import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "symbol", headerName: "Symbol", flex: 1, minWidth: 150 },
  { field: "buyQuantity", headerName: "Buy Quantity", flex: 1, minWidth: 150 },
  { field: "avgBuyPrice", headerName: "Avg Buy Price", flex: 1, minWidth: 150 },
  {
    field: "sellQuantity",
    headerName: "Sell Quantity",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "avgSellPrice",
    headerName: "Avg Sell Price",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "totalOpenQuantity",
    headerName: "Total open Quantity",
    flex: 1,
    minWidth: 150,
  },
  { field: "totalMTM", headerName: "Total MTM", flex: 1, minWidth: 150 },
];
