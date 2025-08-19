import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "signalId",
    headerName: "Signal Id",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "orderCount",
    headerName: "Number of orders",
    flex: 1,
    minWidth: 200,
  },
  
  {
    field: "pnl",
    headerName: "P&L",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "sequentialPNL",
    headerName: "P&L Sequence",
    flex: 1,
    minWidth: 150,
  },
];
