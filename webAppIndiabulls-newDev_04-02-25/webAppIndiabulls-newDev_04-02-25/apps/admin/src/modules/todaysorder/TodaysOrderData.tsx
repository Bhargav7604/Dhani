import { GridColDef } from "@mui/x-data-grid";
import { TodayOrderCell } from "../../components/ui/GlobalStyles";

export const columns: GridColDef[] = [
  {
    field: "orderUniqueIdentifier",
    headerName: "Order ID",
    flex: 1,
    minWidth: 150,
  },
  { field: "userId", headerName: "User ID", flex: 1, minWidth: 150 },
  { field: "userName", headerName: "User Name", flex: 1, minWidth: 130 },
  { field: "strategyId", headerName: "Strategy ID", flex: 1, minWidth: 180 },
  { field: "strategyName", headerName: "Strategy Name", flex: 1, minWidth: 180 },
  { field: "dateTime", headerName: "Date/Time", flex: 1, minWidth: 180 },
  { field: "symbol", headerName: "Symbol", flex: 1, minWidth: 150 },
  { field: "quantity", headerName: "Quantity", flex: 1, minWidth: 100 },
  { field: "price", headerName: "Price", flex: 1, minWidth: 150 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <TodayOrderCell status={params.value}>{params.value}</TodayOrderCell>
    ),
    minWidth: 120,
  },
];
