import { FieldErrors, FieldValues } from "react-hook-form";
import { NoCodeStrategyResponse, StrategyAPIResponse } from "./services/NoCodeStrategyServiceTypes";
import { PayloadAction } from "@reduxjs/toolkit";

export interface LegData {
  positions: string;
  optionType: string;
  lots: string;
  expiry: string;
  strikeSelection: string;
  strikeType: string;
  tgt: string | number;
  tgtdropdown?: string;
  tgttoggle?: boolean;
  sl: string | number;
  sldropdown?: string;
  sltoggle?: boolean;
  id: number; // Assuming each leg has an unique ID
}

export interface ToggleDropdownCompProps {
  heading: string;
  item?: any;
  numberOfInputs?: number;
  errors?: FieldErrors<FieldValues>;
  control: any;
  getValues: (name: string) => any;
  toggleName: string;
  dropdownName: string;
  inputNames?: string | string[];
  defaultToggle?: boolean;
  defaultDropDown?: string | number | boolean | string[] | number[] | undefined; // Allow number[] here
  defaultInputValues?:
    | string
    | number
    | boolean
    | string[]
    | number[]
    | undefined;
  legData?: LegData;
  required?: boolean;
  toggleTrue?: boolean;
  info?: string;
}

export interface NoCodeLegCompProps {
  legData: LegItem;
  index: number;
  isEasyStrategyTemplate?: boolean;
}

export type LegItem = {
  id: number | null;
  segment?: string;
  positions: string;
  optionType: string;
  lots: number | string;
  expiry: string;
  strikeSelection: string;
  strikeSelectionValue?: string | number;
  strikeType: string;
  legTGTValue?: string | number;
  legTGTDropDown?: string;
  legTGTToggle?: boolean | string;
  legSLValue?: string | number;
  legSLDropDown?: string;
  legSLToggle?: boolean | string;
  legTSLToggle?: boolean | string;
  legTSLDropDown?: string;
  legTSLValue?: string | number;
  legTDValue?: number;
};

export type LegItemPayload = PayloadAction<LegItem[]>;

export interface StateType {
  activeIndex: number | null;
  showForm: boolean;
  showPreBuildCards: boolean;
  leg: LegItem[];
  showLeg: boolean;
  showCustomStrategies: boolean;
  showLoadPopup: boolean;
  dropdownData: NoCodeStrategyResponse;
  toaster: {
    status: boolean;
    message: string;
  } | null;
  preBuiltStrategy: StrategyAPIResponse[];
  mySavedStrategy: StrategyAPIResponse[];
  defaultStrategyObject: StrategyAPIResponse | null;
}

export interface OptionProps {
  val?: string | number | undefined;
  key?: string | number | undefined;
}

export interface NoCodeSelectProps {
  heading?: string;
  item?: OptionProps[];
  disabled?: boolean;
  error?: any;
  required?: boolean;
  info?: string;
}

export interface NoCodeInputProps {
  heading?: string;
  error?: any;
  value?: any;
  onChange?: any;
  disabled?: boolean;
  type?: "text" | "number"; // Ensure this is limited to valid HTML input types
  name?: string;
  required?: boolean;
  info?: string;
}

interface TableSOptionProps {
  val?: string | number;
  key?: string | number;
}

export interface NoHeaderSelectProps {
  item?: TableSOptionProps[];
  disabled?: boolean;
  error?: any;
}

export interface CustomStrategyItemProps {
  active?: string;
}

export interface StyledNoCodeButtonProps {
  $active?: boolean;
}

export interface NoCodeWidthProps {
  width?: string;
  $mobilemaxwidth?:string;
}

export interface AlignItemsProps {
  $alignitems?: string;
  $padding?: string;
  $mobilepadding?: string;
  $boxshadow?: string;
}

export interface CopyLegDivProps {
  $justifycontent?: string;
}

export interface ToggleItem {
  val: string | number;
  key: string | number;
}

export interface ToggleItemProps {
  heading: string;
  item: ToggleItem[];
  error?: any;
  value?: any; // Adjust this to allow complex types
  onChange: (newValue: string | number | null) => void; // Handler for toggle change
  required?: boolean;
  info?: string;
}

export interface LegToggleFieldProps {
  heading: string;
  name: string;
  item: string;
  type: string;
  disable: string;
  defaultValue: string;
}
export interface WeekDataItem {
  key: string;
  val: string;
}

export type WeekDataProps = WeekDataItem[];

export interface LegButtonProps {
  delete?: boolean;
}

export interface SaveStrategyButtonProps {
  width?: string;
}

export interface CustomStrategiesProps {
  open: boolean;
}

export interface CustomStrategiesDivProps {
  open: boolean;
}

export interface PreBuildCardProps {
  $isActive?: boolean;
}
export interface LoadPopupProps {
  open: boolean;
  onClose: () => void;
  Confirm?: () => void;
}

export interface InfoProps {
  info?: string | number;
  $notimage?: boolean;
}
export interface PopoverContentProps{
  $isamount?:boolean;
}
export interface DIYHeaderProps {
  $enterondays?: string;
}

export interface PositionWrapDivProps {
  $width?: string;
}
export interface CancelButtonProps {
  width?: string;
  $mobilewidth?: string;
  $padding?: string;
}
export interface StyledDivProps {
  exit?: boolean;
  load?: boolean;
}
export interface ConfirmationProps {
  $isconfirmationpopup?: string;
}
export interface DiyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string;
  error?: string;
  disabled?: boolean;
  type?: string;
  value?: string | number; // Modify value type here
  padding?: string;
}
export interface StyledToggleProps {
  $active?: boolean;
}
export interface PreBuildCardProps {
  $isActive?: boolean;
}
export interface StyledFCLProps {
  isChecked?: boolean;
}
export interface DiyButtonProps {
  width?: string;
  $mobilewidth?: string;
  $tabwidth?: string;
  $desktopwidth?: string;
  $padding?:string;
  $justifycontent?:string;
}
export interface PopupButtonsProps {
  $nopadding?: string;
  $justifycontent?: string;
  $gap?: string;
}
export interface StyledParaProps {
  $fontsize?: string;
  $fontweight?: string;
  $color?: boolean;
  $textalign?: string;
  $marginbottom?: string;
  $mobilenowrap?: boolean | string;
}

