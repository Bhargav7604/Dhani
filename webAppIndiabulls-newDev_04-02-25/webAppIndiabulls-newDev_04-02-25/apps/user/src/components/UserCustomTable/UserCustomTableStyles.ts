import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DataGridProps } from "@mui/x-data-grid";
import {
  FormControl,
  TextField,
  Typography,
  Menu,
  MenuItem,
  Button,
  Select,
} from "@mui/material";
import {
  CustomTableLabelContainerProps,
  StyledNoCodeButtonProps,
} from "./UserCustomTableUtils";
// import { DatePicker } from "@mui/x-date-pickers";
export const CustomHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  outline: none !important;
  
  &:focus {
    outline: none !important;
  }
`;

export const CustomHeaderTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.app.colors?.text?.primary};
  flex: 1;
  text-align: left;
`;

export const CustomHeaderIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  line-height: 0; /* This reduces the space between icons */
`;

export const CustomHeaderIconUp = styled.div`
  color: grey;
  font-size: 20px;
  margin-bottom: -12px; /* Adjust this to reduce the gap */
`;

export const CustomHeaderIconDown = styled.div`
  color: grey;
  font-size: 20px;
  margin-top: -4px; /* Adjust this to reduce the gap */
`;

export const CustomHeaderIconUpActive = styled(CustomHeaderIconUp)`
  color: ${({ theme }) => theme.app.colors?.text?.primary};
`;

export const CustomHeaderIconDownActive = styled(CustomHeaderIconDown)`
  color: ${({ theme }) => theme.app.colors?.text?.primary};
`;
export const MenuItemSelect = styled(Select)`
  background-color: ${(props) =>
    props.theme.app.colors.deltamenuitem} !important;
  border: none;
  outline: none;
  font-size: 16px !important;
  box-shadow: none;
  width: 50px;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
    outline: none;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
export const StyledDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  borderWidth: 0,

  "& .MuiDataGrid-row:nth-of-type(odd)": {
    // backgroundColor: theme.app.colors?.alternateRowBackground,
  },

  "& .MuiDataGrid-row:nth-of-type(even)": {
    // backgroundColor: theme.app.colors?.bright,
  },

  "& .MuiDataGrid-virtualScroller": {
    minHeight: "400px", // adjust to your desired height
    maxHeight: "400px",
    overflowY: "auto",
  },
  "&.no-footer .MuiDataGrid-footerContainer": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f3f4f6 !important",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#f3f4f6 !important",
  },

  "& .MuiDataGrid-cell": {
    fontFamily: `"Plus Jakarta Sans", Menlo, Monaco, Consolas, "Courier New", monospace !important`,
    fontWeight: theme?.app.weights?.medium,
    color: theme?.app.colors?.dark,
    fontSize: "14px",
    whiteSpace: "normal !important",
    display: "flex",
    alignItems: "center",
    lineHeight: "18px !important",
    outline: "none", // Remove focus outline
    border: "none", // Remove cell border on click/focus
  },

  "& .MuiDataGrid-columnHeaderTitleContainerContent": {
    width: "100%",
  },

  ".MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus-within": {
    outline: "none !important",
  },

  "& .MuiDataGrid-row": {
    borderColor: "transparent",
  },

  "& .MuiDataGrid-virtualScrollerRenderZone, .MuiDataGrid-columnHeaders": {
    "--DataGrid-rowBorderColor": "transparent",
  },

  // Ensures header wrapper is hidden
  "& .MuiDataGrid-columnHeaderWrapper": {
    display: "none",
  },

  "& .MuiDataGrid-menuIcon": {
    display: "none !important",
  },
  // Remove focus styling inside cells
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },

  // Remove the cell focus border
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "&.MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within": {
    outline: "none !important",
    border: "none !important",
  },
}));
export const AssignModalStyledDataGrid = styled(StyledDataGrid)`
  // Hide the column headers for AssignModal specifically
  .MuiDataGrid-columnHeaders {
    display: none;
  }
`;
export const StyledDownloadButton = styled(Button)`
  font-size: 12px !important;
  min-width: 160px !important;
  background: ${(props) => props.theme.app.colors.border.main} !important;
`;
export const CustomTableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  overflow-x: auto;
  transition: width 0.8s ease, background-color 0.8s ease;
`;

export const CustomTableControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow-x: scroll;
  padding: 8px;
  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none;
`;

export const CustomTableLabelContainer = styled.div<CustomTableLabelContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 5px;
  margin-bottom: ${(props) => props.marginBottom || ""};
`;

export const CustomTableActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 16px;
`;
export const CustomDatePicker = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.app.colors.border.unhovered};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  font-family: Plus Jakarta Sans, Menlo, Monaco, Consolas, "Courier New",
    "Plus Jakarta Sans";
  &::placeholder {
    font-family: "Plus Jakarta Sans" !important;
  }
`;
export const LeftSideControls = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
`;

export const ShowTextStyling = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

export const CustomSelect = styled(FormControl)`
  width: 50%;
  background-color: ${({ theme }) => theme.app.colors?.divider};
  border-radius: 8px;

  .MuiOutlinedInput-root {
    padding-right: 8px;
    background-color: #e0e0e0;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    font-size: 12px;
    font-weight: 500;
    padding: 8px;
    display: flex;
    align-items: center;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    /* border: 1px solid red; */
    width: 150%;
  }
`;

export const CustomSearchInput = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    border-color: ${({ theme }) => theme.app.colors?.border?.main};

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.app.colors?.border?.main};
    }
  }

  .MuiInputBase-input::placeholder {
    font-size: 12px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.app.colors?.text?.secondary};
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    /* border: 1px solid red; */
    width: 100px;
  }
`;

export const CustomMenu = styled(Menu)`
  & .MuiPaper-root {
    border-radius: 12px;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  border-bottom: 1px solid #d8d7dd !important;
  font-family: ${({ theme }) =>
    theme.app.typography.fontFamily.primary}!important;
  font-weight: ${({ theme }) => theme?.app.weights?.regular}!important;

  &:last-of-type {
    border-bottom: none !important;
  }
`;
export const CustomTypo = styled(Typography)`
  font-size: 12px;
  font-weight: 900;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.app.colors.dhanigraylight};
  padding: 2px;
  border-radius: 8px;
  min-width: 190px;
  background-color: ${(props) => props.theme.app.colors.dhanigraylight};
`;

export const StyledNoCodeButton = styled.div<StyledNoCodeButtonProps>`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  padding: 8px 12px !important;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "black" : "black")};
  transition: background-color 0.3s ease, color 0.3s ease;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 0px 12px;
  }
`;
