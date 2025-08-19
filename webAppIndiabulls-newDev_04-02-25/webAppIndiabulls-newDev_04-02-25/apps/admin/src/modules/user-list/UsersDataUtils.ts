import { PayloadAction } from "@reduxjs/toolkit";
import { ActiveStrategiesResponseTypes } from "./services/AppServiceUtils";

// export interface userListRows {
//   id: number;
//   clientId:string;
//   name: string;
//   email: string;
//   role: string;
//   phoneNumber: number;
//   createdDateTime: string;
//   status: string;
// }

export interface EditStrategyModalProps {
  open: boolean;
  handleClose: () => void;
}
export interface EditStrategyModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface userDetailsType {
  id: number;
  userName: string;
  email: string;
  phoneNumber: number;
  roleName: string;
  status: string;
  adminName: string;
  address: string;
  createdBy: string;
  createdDateTime: string;
}


export interface DropDownProps {
  open?: boolean;
}

export interface MainContentSpacerProps {
  $height?: string | number;
}
export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onDetailView: () => void;
  onPause: () => void;
  onExit: () => void;
  onStrategy: () => void;
  onEdit: () => void;
  onLogs: () => void;
  item: ActiveStrategiesResponseTypes;
}
export interface ToggleButtonProps {
  $active?: boolean | string;
  $type?: "PaperTrading" | "LiveTrading";
}

export interface ExecutionTypesProps {
  ExecutionType: string;
}

export type ExecutionTypeParams = PayloadAction<ExecutionTypesProps>;
