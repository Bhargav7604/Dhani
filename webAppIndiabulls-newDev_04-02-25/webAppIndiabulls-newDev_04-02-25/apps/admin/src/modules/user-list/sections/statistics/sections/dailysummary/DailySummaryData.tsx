import { GridColDef} from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "No",
    flex: 1,
    minWidth: 20,
  },
  {
    field: "day",
    headerName: "Day",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "returns",
    headerName: "Returns(%)",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "maxprofit",
    headerName: "Max profit",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "maxloss",
    headerName: "Max loss",
    flex: 1,
    minWidth: 100,
  },
]


export const rows = [
    { id: 1, day: "Monday", returns: "-1.1", maxprofit: "1862.5", maxloss: "-10002.5" },
    { id: 2, day: "Tuesday", returns: "0.5", maxprofit: "2000.0", maxloss: "-9500.0" },
    { id: 3, day: "Wednesday", returns: "-0.8", maxprofit: "1750.0", maxloss: "-11000.0" },
    { id: 4, day: "Thursday", returns: "1.2", maxprofit: "2200.5", maxloss: "-8700.0" },
    { id: 5, day: "Friday", returns: "-1.5", maxprofit: "1950.0", maxloss: "-12000.0" },
    { id: 6, day: "Monday", returns: "0.7", maxprofit: "2100.0", maxloss: "-9100.0" },
    { id: 7, day: "Tuesday", returns: "-0.3", maxprofit: "1800.0", maxloss: "-9800.0" },
    { id: 8, day: "Wednesday", returns: "1.0", maxprofit: "2300.0", maxloss: "-8500.0" },
    { id: 9, day: "Thursday", returns: "-0.6", maxprofit: "1900.0", maxloss: "-10400.0" },
    { id: 10, day: "Friday", returns: "0.9", maxprofit: "2050.0", maxloss: "-9200.0" },
    { id: 11, day: "Monday", returns: "-1.2", maxprofit: "1750.0", maxloss: "-10800.0" },
    { id: 12, day: "Tuesday", returns: "0.8", maxprofit: "2200.0", maxloss: "-8800.0" },
    { id: 13, day: "Wednesday", returns: "-0.4", maxprofit: "1950.5", maxloss: "-9900.0" },
    { id: 14, day: "Thursday", returns: "1.1", maxprofit: "2400.0", maxloss: "-8300.0" },
    { id: 15, day: "Friday", returns: "-1.0", maxprofit: "2000.0", maxloss: "-10200.0" },
    { id: 16, day: "Monday", returns: "0.6", maxprofit: "2150.0", maxloss: "-8900.0" },
    { id: 17, day: "Tuesday", returns: "-0.9", maxprofit: "1850.0", maxloss: "-9600.0" },
    { id: 18, day: "Wednesday", returns: "1.3", maxprofit: "2500.0", maxloss: "-8100.0" },
    { id: 19, day: "Thursday", returns: "-0.7", maxprofit: "1980.0", maxloss: "-10100.0" },
    { id: 20, day: "Friday", returns: "0.4", maxprofit: "2050.0", maxloss: "-9400.0" },
  ];
  
  