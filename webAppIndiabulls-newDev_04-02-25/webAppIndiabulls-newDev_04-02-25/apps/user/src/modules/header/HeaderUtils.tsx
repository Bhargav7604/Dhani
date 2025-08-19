export interface CancelButtonProps {
  width?: string;
  $mobilewidth?: string;
  $padding?: string;
}

export interface ExitPopupProps {
  open: boolean;
  onClose: () => void;
}

export interface StyledDivProps {
  exit?: boolean;
  load?: boolean;
}

export  interface HeadingExitProps  {
  mobileFlex?: boolean;
}

export interface ExitPopUpStateType {
  toaster: {
    status: boolean;
    message: string;
  } | null;
}
export interface ExitButtonProps{
  $islive?:boolean
}