import {styled} from "styled-components";
import { PaginationItem } from "@mui/material";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 12px; */
  /* padding-bottom: 12px; */
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};

  @media (max-width: 600px) {
    border: none;
  }
`;

export const CustomPaginationItem = styled(PaginationItem)(({ theme }) => ({
  "&.MuiPaginationItem-root": {
    color: "#000",
    // backgroundColor: "#E0E0E0",
    backgroundColor: "transparent",
    borderRadius: "50%",
    fontSize: "1rem",
    margin: "4px",
    border: `1px solid ${theme.app.colors.border.main}`,

    "&.Mui-selected": {
      backgroundColor: "#1667d9",
      color: theme.palette.common.white,
      border: `1px solid ${theme.app.colors.border.main}`,
      "&:hover": {
        backgroundColor: "#1667d9", // Ensure it stays blue on hover when selected
        color: theme.palette.common.white,
      },
    },
  },
  "&.MuiPaginationItem-previousNext": {
    background: "none important", // Custom background color
    color: "#000", // White text for visibility
    border: "none",

    "&:hover": {
      background: "none",
      border: "none !important",
    },
    "&:active": {
      background: "none",
      boxShadow: "none",
      outline: "none",
    },
    "&:focus": {
      background: "none",
      boxShadow: "none",
      outline: "none",
    },
  },
  "&.MuiPaginationItem-ellipsis": {
    background: "none",
    border: "none",
    "&:hover": {
      background: "none",
    },
  },
  // Show arrows on mobile for "previous" and "next" buttons

  "@media (max-width: 600px)": {
    "&.MuiPaginationItem-previousNext[aria-label='Go to previous page']": {
      minWidth: "30px",
      fontSize: "1.5rem",
      lineHeight: "1",
      textIndent: "-9999px", // Hides text content on small screens
      border: "none",

      "&::before": {
        content: '"◄"', // Left arrow for previous button
        textIndent: "0", // Shows the arrow symbol
      },
    },
    "&.MuiPaginationItem-previousNext[aria-label='Go to next page']": {
      minWidth: "30px",
      fontSize: "1.5rem",
      lineHeight: "1",
      textIndent: "-9999px", // Hides text content on small screens
      border: "none",

      "&::before": {
        content: '"►"', // Right arrow for next button
        textIndent: "0", // Shows the arrow symbol
      },
    },
  },
}));
