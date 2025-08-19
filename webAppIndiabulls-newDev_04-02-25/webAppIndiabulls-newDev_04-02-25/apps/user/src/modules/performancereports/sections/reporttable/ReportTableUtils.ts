export interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

export interface Column {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface DetailsButtonProps {
  $width?: string;
  $height?: string;
  $padding?: string;
  $backgroundColor?: string;
}

export interface TableFieldsProps {
  id: number;
  strategyName: string;
  pnl: number;
}

export interface StrategyDetailsProps {
  name: string;
  id: number | string | null;
  totalOrders: number | string | null;
  totalPNL: number | string | null;
}

export interface ReportTableStateTypes {
  apiStatusFail: boolean;
  isLoading: boolean;
}
