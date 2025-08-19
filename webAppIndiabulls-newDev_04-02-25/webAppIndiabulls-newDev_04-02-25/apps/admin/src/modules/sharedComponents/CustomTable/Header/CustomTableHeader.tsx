import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  CustomHeaderContainer,
  CustomHeaderTitle,
  CustomHeaderIcons,
  CustomHeaderIconUp,
  CustomHeaderIconDown,
  CustomHeaderIconUpActive,
  CustomHeaderIconDownActive,
} from "./CustomTableHeaderStyles";
import { CustomHeaderProps } from "./CustomTableHeaderUtils";

const CustomHeader: React.FC<CustomHeaderProps> = ({
  columnTitle,
  sortDirection,
  onSort,
  disableCustomSort,
}) => {
  return (
    <CustomHeaderContainer onClick={!disableCustomSort ? onSort : undefined}>
      <CustomHeaderTitle>{columnTitle}</CustomHeaderTitle>
      {!disableCustomSort && (
        <CustomHeaderIcons>
          <CustomHeaderIconUp
            as={
              sortDirection === "asc"
                ? CustomHeaderIconUpActive
                : CustomHeaderIconUp
            }
          >
            <ArrowDropUpIcon />
          </CustomHeaderIconUp>
          <CustomHeaderIconDown
            as={
              sortDirection === "desc"
                ? CustomHeaderIconDownActive
                : CustomHeaderIconDown
            }
          >
            <ArrowDropDownIcon />
          </CustomHeaderIconDown>
        </CustomHeaderIcons>
      )}
    </CustomHeaderContainer>
  );
};

export default CustomHeader;
