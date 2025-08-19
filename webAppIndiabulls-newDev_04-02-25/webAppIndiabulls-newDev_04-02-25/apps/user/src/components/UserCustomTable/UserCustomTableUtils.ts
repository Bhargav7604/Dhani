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
  isUser?: boolean;
  detailsButton?: boolean;
  isOrderBook?:boolean;
  selectedDate?:string;
  setSelectedDate?:any;
  performanceReport?:boolean;
  fromDate?: string;
  toDate?: string;
  handleFromDate?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToDate?: (event: React.ChangeEvent<HTMLInputElement>) => void;   // Accept function as prop
  apiStatusFail?: boolean;
}
export interface CustomHeaderProps {
  columnTitle: string;
  sortDirection?: 'asc' | 'desc' | null;
  onSort: () => void;
  disableCustomSort?: boolean;
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
