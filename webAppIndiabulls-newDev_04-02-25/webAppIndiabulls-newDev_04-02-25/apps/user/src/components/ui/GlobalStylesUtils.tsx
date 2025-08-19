import { ButtonProps, FormControlProps } from "@mui/material";

export interface StyledButtonProps extends ButtonProps {
  $width?: string;
  $mobilewidth?: string;
  $fill?: boolean;
  $card?: boolean;
  $padding?: string;
  $isDisplay?: boolean;
  $isnavitem?: boolean;
  $minwidth?: string;
}

export interface StyledFormControlProps extends FormControlProps {
  width?: string;
}

export interface NoSearchtextProps {
  firstChild?: boolean;
}

export interface StyledDataBigTextProps {
  $fontsize?: string;
  $bold?: boolean;
  $color?: boolean;
  firstChild?: boolean;
  $errmsg?: boolean;
  $istable?: string;
  $isformat?: boolean;
}
export interface StyledSecondaryHeadlineTextProps {
  $color?: boolean;
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

export interface ColumnFlexDivProps {
  width?: string;
  $flexstart?: boolean;
  tabwidth?: string;
}

export interface CornerItemsDivProps {
  $width?: string;
  mobileFlex?: boolean;
}

export interface FlexRowProps {
  $justifycontent?: string;
  $alignitems?: string;
  $width?: string;
  $diy?: boolean;
  $mobilediy?: boolean;
  $background?: string;
  $maxwidth?: string;
  $gap?: string;
  $ismobile?: string;
  $shadow?: boolean;
  $rowdirection?: boolean;
  $marginBottom?: boolean;
  $flexdirection?: string;
  $mobilegap?: string;  
}

export interface StyledTertiaryProps {
  $colordark?: boolean;
  $colorblue?: boolean;
  $firstchild?: string;
  $absolute?: string;
}

export interface StatusTextProps {
  $status?: string;
}

export interface ContentEndProps {
  $justifycontent?: string;
}

export interface WrapperProps {
  backgroundcolor?: string;
}

export interface DynamicWrapperProps {
  backgroundcolor?: string;
  $nopadding?: boolean;
  $gap?: string;
  $shadow?: boolean;
}

export interface StyledSelectOptionProps {
  border?: string;
  width?: string;
  viewAllStrategy?: string | boolean;
  maxwidth?: string;
}

export interface MenuCardProps {
  $active?: boolean;
  isLast?: boolean;
  isLeftOfActive?: boolean;
}

export interface StyledDiySelectProps {
  $deployedselect?: string;
}

export interface NormalTextprops {
  $isactive?: boolean;
}
