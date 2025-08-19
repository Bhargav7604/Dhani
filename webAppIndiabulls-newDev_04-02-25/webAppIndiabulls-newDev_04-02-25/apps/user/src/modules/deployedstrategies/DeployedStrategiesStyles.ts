import styled from "styled-components";
import {
  ContentTopDivProps,
  DropDownProps,
  MainContentSpacerProps,
  MobileDivProps,
  StyledDetailViewOrdersProps,
  StyledErrorMenuItemProps,
  StyledMenuProps,
  StyledMobileOptionProps,
  StyledOptionsProps,
  WrapDivWidthProps,
} from "./DeployedStrategiesUtils";
import {
  Divider,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const SearchWrapperDiv = styled.div<WrapDivWidthProps>`
  display: flex;
  flex-direction: column !important;
  gap: 8px;
   width: ${(props) => props.$wrapdivwidth || "100%"};
  /* padding: 8px 0px; */
  justify-content: start;
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

export const DetailGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  width: 100%;
  padding: 12px 6px;
  position: relative;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMin}) {
    grid-template-columns: repeat(1, 1fr);
    padding: 2px;
    gap: 2px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    width: 100%;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    width: 100%;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
  }
`;

export const DropdownMenu = styled.div<DropDownProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 0px;
  right: 6px;
  padding: 4px 0px;
  z-index: 30;
  overflow-y: auto;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  background-color: ${(props) => props.theme.app.colors.popupbackground};
  box-shadow: 0px 4px 12px #5367fc3a; /* Hex color with transparency */
  ::-webkit-scrollbar {
    height: 2px !important;
  }

  ::-webkit-scrollbar-track {
    background: #f0f3f7; /* Background color of the scrollbar track */
    height: 2px !important; /* Match height to scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 10px;
    height: 2px !important;
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 #f0f3f7;

  &::-moz-scrollbar {
    height: 3px; /* Specific for Firefox */
  }

  /* Ensure scrollbar height does not scale with content */
  scroll-behavior: smooth;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 30%;
    padding: 12px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
    max-height: 220px;
  }
`;

export const CardsScrollYDiv = styled.div`
  width: 100%;
  min-height: 30vh;
  max-height: 65vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledOption = styled.p<StyledOptionsProps>`
  padding: 8px 18px 8px 4px;
  text-align: left;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.$disabled ? "gray" : props.$exitstrategy ? "red" : "black"};

  &:hover {
    background-color: ${(props) =>
      props.$disabled ? "inherit" : props.theme.app.colors.border.main};
    color: ${(props) => (props.$disabled ? "gray" : "white")};
    border-radius: 2px;
  }
  font-size: 12px;
`;

export const SymbolCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const StyledLogsWrapper = styled.div`
  max-height: 260px;
  min-height: 260px;
  overflow-y: auto;
  min-width: 100%;
`;
export const TableCellText = styled.p<{ $iswsname?: boolean }>`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) =>
    props.$iswsname
      ? props.theme.app.colors.text.secondary
      : props.theme.app.colors.text.description};
`;

export const ValueSymbolText1 = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.app.colors.dhanigrayprimary};
  letter-spacing: 1px;
`;
export const ValueSymbolText2 = styled.p`
  font-size: 12px;
  font-weight: 500;
  /* min-width: 36px; */
`;

export const UnitDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  border-right: 1px dotted ${(props) => props.theme.app.colors.border.primary};
  color: ${(props) => props.theme.app.colors.text.secondheader};
  padding: 2px 4px;
  white-space: nowrap;
  gap: 4px;
`;

export const ActiveStrategiesDiv = styled.div<MainContentSpacerProps>`
  display: flex;
  flex-direction: column;
  /* padding: 8px 14px; */
  /* margin-top: ${(props) =>
    props.$height ? `${props.$height}px` : "46px"}; */
  border-radius: 8px;
  width: 100%;
  margin-bottom: 36px;
`;

export const MainContentSpacer = styled.div<MainContentSpacerProps>`
  height: ${(props) => (props.$height ? `${props.$height}` : "56px")};
  width: 100%;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 44%;
  max-height: 50%;
  overflow-y: auto;
  position: absolute;
  bottom: 0px;
  background-color: white;
  color: black;
  padding: 16px;
`;

export const StyledMobileOptionDiv = styled.div<MobileDivProps>`
  display: flex;
  justify-content: space-between;
  padding: 12px 2px;
  width: 100%;
  color: red;
  border-bottom: ${(props) => (props.$lastoption ? "" : "1px dashed gray")};
  /* margin-bottom: ${(props) => (props.$lastoption ? "56px" : "0px")} */

  background-color: ${(props) => (props.$disabled ? "#D3D3D3" : "")};
`;

export const StyledMobileOption = styled.p<StyledMobileOptionProps>`
  color: ${(props) => (props.$exitstrategy ? "red" : "black")};
  font-size: 16px;
`;

export const StyledTable = styled(Table)`
  border-collapse: collapse !important;
  border-radius: 9px !important; /* Entire table border radius */
  overflow: hidden !important; /* Ensure border radius applies even when content overflows */

  & .MuiTableRow-root {
    & .MuiTableCell-root {
      padding: 6px !important;
      font-size: 14px !important;
      text-align: center !important;
    }

    &:last-child .MuiTableCell-root {
      border-bottom: none !important;
    }

    & .MuiTableCell-root:first-child {
      text-align: left !important;
    }

    &:last-child .MuiTableCell-root:first-child {
      font-weight: bold !important;
    }
  }
`;

export const StyledTableHead = styled(TableHead)`
  position: sticky !important;
  min-width: 100%;

  & .MuiTable-stickyHeader {
    position: sticky !important;
  }
  background-color: #eceaea !important;
  border-radius: 9px !important;
  overflow: hidden !important;
  position: relative;
  white-space: nowrap !important;

  /* Apply specific styling only to the header cells */
  & .MuiTableCell-root {
    /* border: 1px solid red !important; */
    padding: 2px !important;
    font-weight: bold !important;
  }

  & .MuiTableCell-root:first-child {
    padding: 4px !important;
  }
`;

export const StyledTableBody = styled(TableBody)`
  background-color: #f8fafc !important;
  border: none !important;
  margin-top: 30px !important;
`;
export const StyledTableWrapper = styled(Paper)`
  display: flex !important;
  justify-content: flex-end !important;
  align-items: flex-end !important;
  flex-direction: column !important;
  width: 100% !important;
  padding: 2px !important;
  overflow: hidden !important;
  margin-top: 10px !important;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2) !important;
`;
export const StyledSpan = styled.div`
  padding: 4px 8px;
  font-weight: 500;
  font-size: 12px;
  background-color: rgb(226, 226, 226);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.app.colors.border.secondary};
    color: ${(props) => props.theme.app.colors.text.primary};
  }
`;

export const StyledTableRow = styled(TableRow)`
  &.MuiTableRow-root {
    border-bottom: 1px dashed #ccc !important;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.app.colors.border.unhovered} !important;
  }

  &:last-child {
    border-bottom: none !important;
  }
`;
export const StyledTableHeadCell = styled(TableCell)`
  /* border: 1px solid red !important; */
  min-width: 70px !important;
  /* position: sticky !important; */
  /* top: 0; */
  /* z-index: 3; */
`;
export const StyledTableCell = styled(TableCell)`
  color: #6d6d6d !important;
  font-weight: 500 !important;
`;
export const DeployedStrategyCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding: 12px 18px;
  justify-content: center;
  gap: 3px;
  align-items: center;
  position: relative;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 6px 9px;
    &:nth-of-type(odd) {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 10%;
        right: 0;
        height: 80%;
        border-right: 1px dashed #ccc;
      }
    }
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    padding: 12px;
    min-width: 145px;
  }
`;
export const StyledDetailViewOrders = styled.div<StyledDetailViewOrdersProps>`
  color: ${(props) => props.$iscolor || ""};
`;
export const ErrorManagmentDiv = styled.div`
  width: fit-content;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  background-color: rgb(250, 242, 243);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  padding: 4px 12px;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 6px 12px;
  }
`;

export const StyledErrorMenuItem = styled(MenuItem)<StyledErrorMenuItemProps>`
  font-size: 13px !important;
  /* border-bottom: ${(props) =>
    props.$lastoption
      ? ""
      : `1px dashed ${props.theme.app.colors.border.secondary}`}!important; */
  padding: 4px 12px !important;
  color: ${(props) => {
    switch (props.$option?.toLowerCase()) {
      case "manually traded":
        return "#4CAF50";
      case "retry":
        return "rgb(255, 122, 6)";
      case "cancel":
        return "rgb(207, 20, 7)";
      default:
        return "#212121";
    }
  }} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.app.colors.headerbackground} !important;
  }
`;

export const StyledMenu = styled(Menu)<StyledMenuProps>`
  .MuiPaper-root {
    background-color: #fff; // Menu background
    border-radius: ${(props) =>
      props.theme.app.measures.borderRadius} !important;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 0px 0px !important;
  }
  .MuiMenu-list {
    padding: 0 !important; // remove internal list padding
  }
`;

export const ContentTopDiv = styled.div<ContentTopDivProps>`
  width: 100%;
  max-width: 1276px;
  position: fixed;
  right: 0;
  left: 12px;
  top: ${(props) => (props.$top ? `${props.$top}px` : "236.5px")};
  z-index: 50 !important;
  padding: ${(props) => (props.$padding ? "" : "8px 0px 0px 0px")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$gap ? "2px" : "0px")};
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};
  border-top: 1px solid ${(props) => props.theme.app.colors.mainbackgroundcolor};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 97%;
    padding: 0px;
  }
`;

export const ContentBottomDiv = styled.div`
  width: 100dvw;
  /* max-width: 1276px; */
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};
`;

export const StyledDivider = styled(Divider)`
  margin: 2px 0 !important; // Reduce gap between items
`;

export const StyledOptionMenuItem = styled(MenuItem)<StyledErrorMenuItemProps>`
  font-size: 12px !important;
  font-family: "Plus Jakarta Sans" !important;
  font-weight: 500 !important;
  padding: 4px 12px !important; //This reduces the vertical spacing
  min-height: 32px !important;
  /* padding: 4px 12px !important; */

  color: ${(props) => props.$color || ""} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.app.colors.headerbackground} !important;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 0px !important;
  }
`;

export const StatisticsShimmerWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
width: 70%;

@media ( max-width: ${(props) => props.theme.app.resolutions.desktopMin}) {
  width: 100%;
}
`;
