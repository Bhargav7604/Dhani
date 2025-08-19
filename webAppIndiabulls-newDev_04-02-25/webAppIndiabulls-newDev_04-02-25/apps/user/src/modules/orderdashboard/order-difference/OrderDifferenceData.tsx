import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "snumber", headerName: "Order ID", flex: 1, minWidth: 110 },
  {
    field: "strategyname",
    headerName: "Strategy Name",
    flex: 1,
    minWidth: 150,
  },
  { field: "symbol", headerName: "Symbol", flex: 1, minWidth: 150 },
  { field: "datetime", headerName: "Execution Date & Time", flex: 1, minWidth: 170 },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 1,
    minWidth: 150,
  },
  { field: "price", headerName: "Price", flex: 1, minWidth: 150 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 150,
  },
  { field: "id", headerName: "Algo ID", flex: 1, minWidth: 150 },
];
