import { GridColDef } from "@mui/x-data-grid";
export const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", flex: 2, minWidth: 180 },
  { field: "lastActive", headerName: "Last Active", flex: 2, minWidth: 180 },
  { field: "sessionCount", headerName: "Login Status", flex: 2, minWidth: 180 },
];



  