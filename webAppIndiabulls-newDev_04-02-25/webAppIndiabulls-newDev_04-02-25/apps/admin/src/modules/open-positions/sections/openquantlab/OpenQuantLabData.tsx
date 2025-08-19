import { GridColDef } from "@mui/x-data-grid";

// export const columns: GridColDef[] = [
//   { field: "userId", headerName: "User ID", flex: 1, minWidth: 150 },
//   { field: "userName", headerName: "User Name", flex: 1, minWidth: 150 },
//   { field: "strategyId", headerName: "Strategy ID", flex: 1, minWidth: 150 },
//   {
//     field: "strategyName",
//     headerName: "Strategy Name",
//     flex: 1,
//     minWidth: 150,
//   },
//   {
//     field: "symbol",
//     headerName: "Instrument ID",
//     flex: 1,
//     minWidth: 150,
//   },
//   {
//     field: "buyQuantity",
//     headerName: "BUY  Quantity",
//     flex: 1,
//     minWidth: 150,
//   },
//   { field: "buyAveragePrice", headerName: "Buy Average Price", flex: 1, minWidth: 150 },
//     { field: "sellQuantity", headerName: "Sell Quantity", flex: 1, minWidth: 150 },
//   { field: "averageSellPrice", headerName: " Sell Average Price ", flex: 1, minWidth: 150 },
//   { field: "totalOpenQuantity", headerName: "Total Open Quantity", flex: 1, minWidth: 150 },
//   { field: "totalMtm", headerName: "Total MTM", flex: 1, minWidth: 150 },

// ];


export const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", flex: 1, minWidth: 150 },
  // { field: "userName", headerName: "User Name", flex: 1, minWidth: 150 },
  { field: "clientId", headerName: "Client ID", flex: 1, minWidth: 150 },
  // { field: "strategyId", headerName: "Strategy ID", flex: 1, minWidth: 150 },
  // {
  //   field: "strategyName",
  //   headerName: "Strategy Name",
  //   flex: 1,
  //   minWidth: 150,
  // },
  {
    field: "instrumentId",
    headerName: "Instrument ID",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "instrumentName",
    headerName: "Instrument Name",
    flex: 1,
    minWidth: 245,
  },
  {
    field: "buyQuantity",
    headerName: "BUY  Quantity",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "buyAveragePrice",
    headerName: "Buy Average Price",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "sellQuantity",
    headerName: "Sell Quantity",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "averageSellPrice",
    headerName: " Sell Average Price ",
    flex: 1,
    minWidth: 160,
  },
  {
    field: "totalOpenQuantity",
    headerName: "Total Open Quantity",
    flex: 1,
    minWidth: 179,
  },
  // { field: "totalMtm", headerName: "Total MTM", flex: 1, minWidth: 150 },
];