import { GridColDef } from "@mui/x-data-grid";



export const useColumns = (): GridColDef[] => {

  const columns: GridColDef[] = [
    { field: "id", headerName: "SID", flex: 1, minWidth: 100 },
    { field: "name", headerName: "Name", flex: 2, minWidth: 180 },
    { field: "description", headerName: "Description", flex: 1, minWidth: 600 },
    { field: "status", headerName: "Status", flex: 0.5, minWidth: 150 },
    // { field: "entryPrice", headerName: "Entry Price ", flex: 0.6, minWidth: 120 },
    // { field: "targetPrice", headerName: "Target Price", flex: 0.6, minWidth: 120 },
    // { field: "stopLoss", headerName: "Stop Loss", flex: 0.6, minWidth: 120 },
    // { field: "currentPrice", headerName: "Current Price", flex: 0.6, minWidth: 120 },
    // { field: "subscribers", headerName: "Subscribers", flex: 0.5, minWidth: 100 },
    // { field: "totalInvestment", headerName: "Total Investment (₹)", flex: 0.8, minWidth: 150 },
    // { field: "createdAt", headerName: "Created On", type: "date", flex: 0.6, minWidth: 140 },

  ];

  return columns;
};



