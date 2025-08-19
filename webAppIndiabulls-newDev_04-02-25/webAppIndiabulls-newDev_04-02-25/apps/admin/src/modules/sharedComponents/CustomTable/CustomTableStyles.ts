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
} from "./CustomTableUtils";

export const GridContainer = styled.div`
  width: 100%;
  overflow: hidden; // Optional, if you want to prevent scrollbars
  background-color: ${(props) => props.theme.app.colors.bright};
  box-shadow: none;
`;

export const StyledDataGrid = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  borderWidth: 0,
  position: "relative",

  "& .MuiDataGrid-row:nth-of-type(odd)": {
    // backgroundColor: theme.app.colors?.alternateRowBackground,
    backgroundColor: theme.app.colors?.bright,
  },

  "& .MuiDataGrid-row:nth-of-type(even)": {
    // backgroundColor: theme.app.colors?.bright,
    backgroundColor: theme.app.colors?.bright,
  },
  "&.no-footer .MuiDataGrid-footerContainer": {
    display: "none",
  },

  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#ECF5FF",
    textAlign: "center",
    borderBottom: "1px solid gray !important",
  },

  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      borderBottom: `0.3px solid gray`, // Optional: Row borders
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#DEF3FF",
      },
    },
  },
  "& .MuiDataGrid-cell": {
    // fontFamily: theme.app.typography.fontFamily.secondary,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: theme?.app.weights?.medium,
    color: theme?.app.colors?.dark,
    fontSize: "14px",
    whiteSpace: "normal !important",
    display: "flex",
    alignItems: "center",
    lineHeight: "16px !important",
    outline: "none", // Remove focus outline
    border: "none",
  },

  "& .MuiDataGrid-columnHeaderTitleContainerContent": {
    width: "100%",
    fontFamily: " Plus Jakarta Sans ",
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
  // "& .MuiSvgIcon-root": {
  //   display: "none !important",
  // },
  "&.MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within": {
    outline: "none !important",
    border: "none !important",
  },
  // mui icon none
  //  "& .MuiSvgIcon-root": {
  //   display: "none",
  // }
}));

export const AssignModalStyledDataGrid = styled(StyledDataGrid)`
  // Hide the column headers for AssignModal specifically
  .MuiDataGrid-columnHeaders {
    display: none;
  }
`;

export const StyledDownloadButton = styled(Button)`
  background-color: transparent !important; // Assuming you want no background color
  font-size: 12px !important;
  min-width: 160px !important;
  color: #5d7186 !important;
  border: 1px solid #5d7186 !important;
  box-shadow: none !important;
`;

export const CustomTableContainer = styled.div`
  // border: 2px solid green;
  width: 100%;
  height: 100%;
  //padding-top: 10px;
  overflow-x: auto;
  transition: width 0.8s ease, background-color 0.8s ease;
  box-shadow: none;
`;

export const CustomTableControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 6px;
  overflow-x: scroll;
  background-color: ${(props) => props.theme.app.colors.bright};
  box-shadow: none;
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
export const CustomDatePicker = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.app.colors.border.unhovered};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  font-family: "Source Sans Pro", Plus Jakarta Sans, Menlo, Monaco, Consolas,
    "Courier New", "Plus Jakarta Sans", "Source Sans Pro";
  &::placeholder {
    font-family: "Plus Jakarta Sans" !important;
  }
`;

export const CustomTableActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 16px;
`;

export const LeftSideControls = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

export const ShowTextStyling = styled.div`
  font-family: Plus Jakarta Sans;
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
  font-family: Plus Jakarta Sans;
  .MuiOutlinedInput-root {
    border-radius: 8px;
    border-color: ${({ theme }) => theme.app.colors?.border?.main};
width:100%;
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
  /* @media (max-width:${(props) => props.theme.app.resolutions.mobileMax}){
    margin-bottom: 12px;
  } */
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
  /* width: 100%; */
  transition: background-color 0.3s ease, color 0.3s ease;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 0px 12px;
  }
`;

export const MenuItemSelect = styled(Select)`
  font-family: Plus Jakarta Sans;
  background-color: ${(props) =>
    props.theme.app.colors.deltamenuitem} !important;
  border: none;
  width: 50px;
  outline: none;
  font-size: 16px !important;
  box-shadow: none;

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    outline: none;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
export const CustomDateWraperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;

  gap: 1rem;
  //flex-wrap: wrap; // Ensures responsiveness for smaller screens
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DateText = styled.span`
  font-size: 10px;
`;

export const TextCenter = styled.div`
  text-align: center;
  padding: 10px;
`;

export const PageNationCountText = styled.p`
  background-color: ${(props) => props.theme.app.colors.bright};
`;

export const TableHeader = styled.p`
  font-size: 16px;
  font-weight: 800;
  // padding: 2px;
  background-color: #fff;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;
