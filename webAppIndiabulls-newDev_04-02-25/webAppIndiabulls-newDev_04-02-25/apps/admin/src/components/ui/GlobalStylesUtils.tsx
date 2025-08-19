import { ButtonProps } from "@mui/material";

export interface PageHeadingProps {
  width?: string;
}
export interface FlexRowProps {
  justifycontent?: string;
  alignitems?: string;
  width?: string;
  diy?: boolean;
  background?: string;
  maxwidth?: string;
  gap?: string;
  isMobile?: boolean;
  shadow?: boolean;
}
export interface StyledSecondaryHeadlineTextProps{
  $color?: boolean
}
export interface ColumnItemsProps {
  $justifycontent?: string;
  $aligncontent?: string;
  $backgroundcolor?: string;
  $width?: string;
  $border?: boolean;
  $padding?: string;
  $ismobile?: boolean;
  $borderradius?: string;
  $marginTop?: number | string;
}
export interface MenuCardProps {
  $active?: boolean;
  isLast?: boolean;
  isLeftOfActive?: boolean;
}
export interface CornerItemsDivProps {
  $width?: string;
  mobileFlex?: boolean;
}
export interface StyledButtonProps extends ButtonProps {
  $width?: string;
  $mobilewidth?: string;
  $fill?: boolean;
  $card?: boolean;
  $padding?: string;
  $isDisplay?: boolean;
  $isnavitem?: boolean;
  $minwidth?:string;
}
export interface ColumnFlexDivProps {
  width?: string;
  $flexstart?: boolean;
  tabwidth?: string;
}
export interface StyledDiySelectProps {
  $deployedselect?: string;
}
export interface StyledDataBigTextProps {
  $fontsize?: string;
  $bold?: boolean;
  $color?: boolean;
  firstChild?: boolean;
  $errmsg?:boolean;
  $istable?: string;
  
}
export interface FlexRowProps {
  $justifycontent?: string;
  $alignitems?: string;
  $width?: string;
  $diy?: boolean;
  $background?: string;
  $maxwidth?: string;
  $gap?: string;
  $ismobile?: string;
  $shadow?:boolean;
  $rowdirection?:boolean;
}
export interface DynamicWrapperProps {
  backgroundcolor?: string;
  $nopadding?: boolean;
  $gap?: string;
  $shadow?: boolean;
}
export interface NoSearchtextProps {
  firstChild?: boolean;
}
export interface NoStrategyProps {
  $detailView?: boolean;
}
export interface NoSearchStrategyProps {
  text?: string;
  isDetailView?: boolean
}