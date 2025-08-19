import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", flex: 1, minWidth: 100 },
  { field: "pnl", headerName: "P&L", flex: 1.5, minWidth: 150 },
  { field: "trades", headerName: "Trades", flex: 1.2, minWidth: 180 },
 
];




  