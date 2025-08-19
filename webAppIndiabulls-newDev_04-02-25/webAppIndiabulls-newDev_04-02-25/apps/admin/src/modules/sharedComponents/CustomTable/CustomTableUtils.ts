import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
export interface RowData {
  [key: string]: string | number | boolean | null | undefined;
}

export interface CustomTableProps {
  rows: GridRowsProp; // Expecting rows to be of type GridRowsProp
  columns: GridColDef[];
  defaultPageSize?: number;
  enableExport?: boolean;
  enableDefaultSelect?: boolean;
  isLoading?: boolean;
  enableAdminSelectButtons?: boolean;
  enableStrategyButtons?: boolean;
  enableDefaultFilter?: boolean;
  isSingleDate?:boolean;
  selectedDate?:string;
  setSelectedDate?:any;
  FromAndToDate?:boolean;
  fromDate?: string;
  toDate?: string;
  handleFromDate?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToDate?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export interface SortModel {
  field: string; // Field on which sorting is based
  sort: "asc" | "desc" | null; // Sorting order (ascending, descending, or none)
}
export interface CustomTableLabelContainerProps {
  marginBottom?: string;
}
export interface StyledNoCodeButtonProps {
  active?: boolean;
}
