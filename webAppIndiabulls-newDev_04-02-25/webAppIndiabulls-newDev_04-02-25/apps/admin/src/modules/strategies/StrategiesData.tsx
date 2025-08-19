import { GridColDef } from "@mui/x-data-grid";
export const columns: GridColDef[] = [
  { field: "id", headerName: "UID", flex: 1, minWidth: 100 },
  { field: "name", headerName: "Name", flex: 2, minWidth: 180 },
  { field: "instrument", headerName: "Instrument", flex: 1, minWidth: 180 },
  { field: "usercount", headerName: "User Count", flex: 0.5, minWidth: 150 },

  {
    field: "capital",
    headerName: "Capital Required",
    flex: 0.5,
    minWidth: 150,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 0.5,
    minWidth: 150,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    flex: 0.5,
    minWidth: 160,
  },
  {
    field: "endDate",
    headerName: "End Date",
    flex: 0.5,
    minWidth: 160,
  },
];

