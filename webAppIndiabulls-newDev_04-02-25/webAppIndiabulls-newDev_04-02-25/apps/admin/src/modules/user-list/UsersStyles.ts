import { styled } from "styled-components";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import {
  DropDownProps,
  MainContentSpacerProps,
  ToggleButtonProps,
} from "./UsersDataUtils";

interface SelectFieldTextProps {
  color?: string;
}

export const SelectMainContainer = styled(Box)`
  min-width: 120px;
`;

export const SelectButton = styled(Select)<{ border?: boolean | undefined }>`
  .MuiSelect-select {
    padding: 4px;
    color: black;
    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      font-size: 12px;
    }
  }
  background-color: transparent;
  border: none;

  &:hover {
    background-color: rgba(0, 0, 255, 0.1);
    border: none;
  }

  &.Mui-focused {
    background-color: rgba(0, 0, 255, 0.1);
    border: none;
  }

  fieldset {
    border: ${(props) => (props.border ? "1px solid gray" : "none")};
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;

export const SelectFieldText = styled(MenuItem)<SelectFieldTextProps>`
  font-size: 16px;
  color: ${(props) => props.color || "black"} !important;
  //color: red !important;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;

export const FunctionCell = styled.div<{ status: string }>`
  background-color: ${({ status }) =>
    status === "active"
      ? "#CFE8DA80"
      : status === "pause"
      ? "#F9E8D5"
      : status === "inactive"
      ? "#F2CBCD"
      : "transparent"};
  color: ${({ status }) =>
    status === "active"
      ? "#1F9254"
      : status === "pause"
      ? "#CD6200"
      : status === "inactive"
      ? "#A30D11"
      : "#000"};
  padding: 8px 8px;
  border-radius: 4px;
  text-align: center;
  letter-spacing: 0.7px;
  min-width: 100px;
  font-weight: 500;
`;

// export const TableContainer = styled.div`

//   padding: 2rem;
//   background: #fff;
//   border-radius: 12px;
//   max-width: 600px;
//   margin: 300px auto;
//   box-shadow: 3px 6px 6px rgba(0,0,0,0.2);
// `;

export const TableContainer = styled.div`
  font-family: Plus Jakarta Sans;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.2);
`;

export const TableTitle = styled.h2`
  color: #28b877;
  text-align: center;
  margin-bottom: 1.5rem;
`;
export const CancelWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
`;

export const DetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

export const TableCellLabel = styled.td`
  font-weight: 600;
  color: #0073e6;
  padding: 0.75rem;
  width: 40%;
  text-align: left;
`;

export const TableCellValue = styled.td`
  padding: 0.75rem;
  color: #333;
  text-align: left;
`;
export const SecondDivision = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.app.colors.alternateRowBackground};
  min-height: 50px;
  padding: 2px 6px;
  border-radius: 9px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    gap: 2px;
    padding: 4px;
    min-height: 36px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 2px;
    padding: 4px;
    min-height: 36px;
  }
`;
export const CardsScrollYDivision = styled.div`
  margin: 6px 0px;
  width: 100%;
  min-height: 30vh;
  max-height: 76vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ActiveStrategiesDivision = styled.div<MainContentSpacerProps>`
  display: flex;
  flex-direction: column;
  /* padding: 8px 14px; */
  /* margin-top: ${(props) =>
    props.$height ? `${props.$height}px` : "46px"}; */
  border-radius: 8px;
  width: 100%;
`;
export const AdminDropdownMenu = styled.div<DropDownProps>`
  border: 1px solid gray;
  width: 180px;
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 0px;
  right: 6px;
  padding: 4px 0px;
  z-index: 30;
  /* border: 1px solid red; */
  max-height: 250px;
  overflow-y: auto;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  background-color: ${(props) => props.theme.app.colors.bright};
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

export const UserdetailsWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    gap: 0;
    justify-content: flex-start;
    align-items: start;
  }
`;

export const UserTextWraper = styled.span`
  white-space: nowrap;
  overflow: hidden;
`;
export const UserInfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #233dd6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px; /* Set a practical width */
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 14px;
  }
`;
export const UserNameText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;
export const ContentBottomDivision = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;
export const ToggleWrapper = styled.div`
  display: inline-flex;
  position: relative;
  padding: 1px;
  border: 1.5px solid #1667d9;

  border-radius: 9999px;
  background-color: #f0fdf4; // light green background for inactive state
  width: fit-content;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    padding: 1px;
  }
`;
export const ToggleButton = styled.button<ToggleButtonProps>`
  flex: 1;
  font-family: "Futura", sans-serif !important;
  white-space: nowrap;
  padding: 8px 20px;
  letter-spacing: 0.2px;
  background: ${({ $active, theme }) =>
    $active ? theme.app.colors.buttons.primary : "transparent"};

  color: ${({ $active, theme }) =>
    $active ? "#fff" : theme.app.colors.text.active};

  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  span {
    display: inline-block;
  }

  ${({ $active }) =>
    !$active &&
    `
    &:hover span {
      transform: scale(1.03);
    }
  `}

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 6px 6px;
    font-size: 12px;
  }
`;
export const FetchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 4px;
  background-color: #1667d9;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #096dfaff;
  }
`;
