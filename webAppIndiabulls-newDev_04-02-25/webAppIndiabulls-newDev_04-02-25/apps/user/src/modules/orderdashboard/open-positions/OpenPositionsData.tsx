import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "symbol", headerName: "Symbol", flex: 1, minWidth: 150 },
  { field: "strike", headerName: "Strike", flex: 1, minWidth: 150 },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 1,
    minWidth: 150,
  },
  { field: "mtm", headerName: "MTM", flex: 1, minWidth: 150 },
  {field: "expiry", headerName: "Expiry", flex: 1, minWidth: 150},
  { field: "datetime", headerName: "Date & Time", flex: 1, minWidth: 250 },
];
