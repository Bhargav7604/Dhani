import { GridColDef } from "@mui/x-data-grid";



export const columns: GridColDef[] = [
   {
    field: "orderUniqueIdentifier",
    headerName: "Order ID",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "strategyId",
    headerName: "Strategy ID",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "strategyName",
    headerName: "Strategy Name",
    flex: 1,
    minWidth: 150,
  },
    { field: "algoQuantity", headerName: "Algo Qty", flex: 1, minWidth: 150 },
  { field: "brokerQuantity", headerName: "Broker Qty", flex: 1, minWidth: 150 },
  { field: "quantityDifference", headerName: " Qty Difference", flex: 1, minWidth: 150 },
  { field: "algoPrice", headerName: "Algo Price", flex: 1, minWidth: 120 },
  { field: "brokerPrice", headerName: "Broker Price", flex: 1, minWidth: 150 },
  { field: "priceDifference", headerName: "Price Difference", flex: 1, minWidth: 150 },
 
  { field: "deployedOn", headerName: " Order Generated Time", flex: 1, minWidth: 190 },
  { field: "lastUpdated", headerName: "Broker Executed Time", flex: 1, minWidth: 190 },

  { field: "discrepancyType", headerName: "Discrepancy Type", flex: 1, minWidth: 150 },
];
