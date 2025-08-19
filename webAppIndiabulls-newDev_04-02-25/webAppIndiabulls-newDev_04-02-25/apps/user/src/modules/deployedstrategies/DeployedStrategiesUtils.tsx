import { SxProps, Theme } from "@mui/material";
import { DropDownItem } from "../nocodestrategy/services/NoCodeStrategyServiceTypes";
import { StrategyAPIResponse } from "../readytodeploy/services/AllStrategiesServiceTypes";
import { ActiveStrategiesResponseTypes } from "./services/DeployedStrategiesServiceTypes";

export interface DropDownProps {
  open?: boolean;
}

export interface DetailTypes {
  DetailName: string;
  DetailValue: string;
}
export interface RowData {
  [key: string]: string | number | boolean | null | undefined;
}
export interface NoSearchStrategyProps {
  text?: string;
  isDetailView?: boolean;
}

export interface metricTypes {
  title: string;
  titleValue: string;
}

export interface FirstCellTypes {
  Symbol: string;
  metrics: metricTypes[];
}
export interface StyledDetailViewOrdersProps {
  $iscolor?: string;
}
export interface StyledNoCodeButtonProps {
  active?: boolean;
}
export interface DetailViewDataProps {
  legid: number;
  name: string;
  ltp: string;
  quantity: number;
  entryprice: string;
  entrytime: string;
  exitprice: number | null;
  exittime: string | null;
  pandl: string;
  totalOrders: number | null;
  openOrders: number | null;
  closedOrders: number | null;
  symbolcelldata: {
    name: string;
    iswsname: boolean;
    constantdelta: number;
    constantiv: number;
    currentdelta: number;
    currentiv: number;
    indexbaseprice: number;
    indexcurrentprice: number;
    legid: number;
  };
}
export interface SymbolCellData {
  name: string;
  Entry_Delta: number;
  Entry_Iv: number;
  Live_Delta: number;
  Live_Iv: number;
  "Index@Entry": number;
  "Index@Exit": number;
  legid: number;
}
export interface DetailViewRow {
  Leg_Id: number;
  Traded_Instrument: string;
  LTP: string;
  Quantity: number;
  Entry_Price: string;
  Entry_Time: string;
  Exit_Price: number;
  Exit_Time: string;
  symbolcelldata: SymbolCellData;
  "P&L": string;
}
export interface SymbolCellProps {
  item: FirstCellTypes;
}

export interface TableDataTypes {
  columns: { id: string; lable: string }[];
  data: {
    firstcell: FirstCellTypes;
    Quantity: string;
    TradedPrice: string;
    LTP: string;
    MTM: string;
    Value: string;
    PNL: string;
  }[];
}

export interface StartegyDataTypes {
  id: number;
  title: string;
  Details: DetailTypes[];
  tableData: TableDataTypes;
}

export interface RowTypes {
  firstcell: FirstCellTypes;
  Quantity: string;
  TradedPrice: string;
  LTP: string;
  MTM: string;
  Value: string;
  PNL: string;
}

export interface TableDataRow {
  Value: string; // Ensure these match your data types
  PNL: string;
  firstcell: string; // Adjust based on your actual data structure
  // Include other row properties as needed
}

export interface WrapDivWidthProps {
  $wrapdivwidth?: string;
}

export interface StyledOptionsProps {
  $exitstrategy?: string;
  $disabled?: boolean;
}

export interface DeployedStrategiesCardProps {
  item: ActiveStrategiesResponseTypes;
  index: number;
  key: number;
  userId?: string | undefined;
}

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onDetailView: () => void;
  onPause: () => void;
  onExit: () => void;
  onStrategy: () => void;
  onEdit: () => void;
  onSubscribe: () => void;
  onLogs: () => void;
  item: ActiveStrategiesResponseTypes;
}

export interface WebMenuPopupProps {
  open: boolean;
  item: ActiveStrategiesResponseTypes;
  onClose: () => void;
  onDetailView: () => void;
  onPause: () => void;
  onExit: () => void;
  onStrategy: () => void;
  onSubscribe: () => void;
  onEdit: () => void;
  onLogs: () => void;
  anchorEl: HTMLElement | null;
}

export interface StyledMobileOptionProps {
  $exitstrategy?: string;
  $disabled?: boolean;
}

export interface MobileDivProps {
  $lastoption?: boolean;
  $disabled?: boolean;
}

export interface ActiveStrategiesStateType {
  openMenuIndex: number | null;
  showTableIndex: number | null;
  tempActiveStrategies: ActiveStrategiesResponseTypes[] | [];
  currentPage: number;
  deployedStrategy: ActiveStrategiesResponseTypes[] | [];
}

export interface DetailViewTableProps {
  id?: number;
  isLive?: boolean;
  sname?: string;
}

export interface DeployedSelectCompProps {
  heading: string;
  item: DropDownItem[];
  control: any;
  name: string;
  disabled?: boolean;
}

export interface ConfirmationPopupProps {
  open: boolean;
  onClose: () => void;
  firstdescription: string;
  seconddescription?: string;
  handlePostCall?: () => void;
  inHouseEdit?: boolean;
}

export interface StateType {
  openMenuIndex: null | number;
  showTableIndex: null | number;
  showPopup: boolean;
  popupData: {
    popupDescription: string;
    popupSecondDescription?: string;
    popupPostCall: () => void;
  };
  showConfirmationPopup: boolean;
  showCustomizeDeploy: boolean;
  customizeDeployStrategy: StrategyAPIResponse;
  showLogs: boolean;
  showDeployedStatistics: boolean;
  errorAnchorEl?: HTMLElement | null;
  showErrorMenu?: HTMLElement | null;
  anchorEl: HTMLElement | null;
}

export interface StyledErrorMenuItemProps {
  $lastoption?: boolean;
  $option?: string;
  $color?: string;
}

export interface ContentTopDivProps {
  $padding?: string | boolean;
  $gap?: string | boolean;
  $top?: number;
}

export interface MainContentSpacerProps {
  $height?: string | number;
}

export interface OptionType {
  label: string;
  onClick?: () => void;
  color?: string;
  value?: string;
}

export interface ReusableMenuProps {
  options: string[] | OptionType[];
  selectedOption?: string;
  onSelect?: (value: string) => void;
  // icon?: React.ReactElement<SvgIconProps>;
  // MenuComponent?: React.ComponentType<MenuProps>;
  // menuProps?: Partial<MenuProps>;
  withDivider?: boolean;
  anchorEl?: HTMLElement | null;
  open?: boolean;
  onClose?: () => void;
  diySavedStrategies?: boolean;
  menuListSx?: SxProps<Theme>;
  value?: string;
  useCustomStyle?: boolean;
}

export interface StyledMenuProps {
  $diySavedStrategies?: boolean;
}

export interface ShimmerCardProps {
  $deployedcard?: boolean;
  $height?: string;
  $marginbottom?: string;
  $mobileheight?: string;
  $tabheight?: string;
  $minidesktopheight?: string;
  $width?: string;
}


export interface ProfitTextProps {
  $color?: boolean | string;
}