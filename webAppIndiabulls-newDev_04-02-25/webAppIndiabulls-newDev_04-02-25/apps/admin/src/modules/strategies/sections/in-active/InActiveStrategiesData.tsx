import { GridColDef } from "@mui/x-data-grid";



export const useColumns = (): GridColDef[] => {

  const columns: GridColDef[] = [
    { field: "id", headerName: "SID", flex: 1, minWidth: 100 },
    { field: "name", headerName: "Name", flex: 2, minWidth: 180 },
    { field: "description", headerName: "Description", flex: 1, minWidth: 600 },
    { field: "status", headerName: "Status", flex: 0.5, minWidth: 150 },
   
    
  ];

  return columns;
};


export const rows = [
  {
    id: 1,
    templateId: "5264321",
    name: "DeltaSync Nifty",
    description: "In this strategy we sell nifty strangle but the quantity is matched on delta level",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 2,
    templateId: "5264322",
    name: "BankNifty Breakout",
    description: "Breakout-based strategy on BankNifty using 15 min charts",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 3,
    templateId: "5264323",
    name: "Option Scalper",
    description: "Scalping options based on momentum and volatility",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 4,
    templateId: "5264324",
    name: "Theta Collector",
    description: "Selling weekly options to collect theta decay profits",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 5,
    templateId: "5264325",
    name: "Gap Up Short",
    description: "Shorting gap-up stocks with reversal patterns",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 6,
    templateId: "5264326",
    name: "Iron Condor Pro",
    description: "Balanced iron condor with risk-defined strategies",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 7,
    templateId: "5264327",
    name: "Trend Catcher",
    description: "Trend-following strategy using moving averages",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 8,
    templateId: "5264328",
    name: "Volatility Crusher",
    description: "Shorting high IV options before earnings",
    status: "Paused",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 9,
    templateId: "5264329",
    name: "Straddle Master",
    description: "ATM straddle buying with stop loss and target",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  },
  {
    id: 10,
    templateId: "5264330",
    name: "Reversal Rider",
    description: "Reversal trades based on RSI divergence",
    status: "inactive",
    pause: "Resume",
    edit: "Edit",
    delete: "Delete",
  }
];
