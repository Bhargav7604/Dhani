import { Popover } from "@mui/material";
import { StyledParaProps } from "./SharedStyledCompProps.js";
import { styled } from "styled-components";

export const StyledPara = styled.p<StyledParaProps>`
  font-size: ${(props) => (props.$fontsize ? props.$fontsize : "10px")};
  font-weight: ${(props) =>
    props.$fontweight ? props.$fontweight : props.theme.app.weights.semiBold};
  color: ${(props) =>
    props.$color ? props.theme.app.colors.text.secondary : ""};
  text-align: ${(props) => props.$textalign || ""};
  margin-bottom: ${(props) => props.$marginbottom || ""};
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 100%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 10px;
    white-space: ${(props) => (props.$mobilenowrap ? "nowrap" : "normal")};
  }
`;

export const MandatoryMark = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 600;
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 8px;
  font-weight: 400;
  position: absolute;
  bottom: -12px;
  left: 4px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 8px;
  }
`;
export const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    background-color: white;
    box-shadow: 0px 4px 12px #ecf5ff;
    border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
    margin-top: 3px;
    width: 220px;
    max-height: 50px;
    overflow-y: auto; /* Ensure scrolling works */

    /* Firefox Scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #b0b0b0 transparent; /* Scrollbar thumb color and track color */

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: 300px;
    }
  }

  /* Webkit browsers (Chrome, Safari, Edge) */
  .MuiPaper-root::-webkit-scrollbar {
    width: 1px !important; /* Thin scrollbar */
  }

  .MuiPaper-root::-webkit-scrollbar-thumb {
    background: #b0b0b0; /* Color of the scrollbar */
    border-radius: 4px; /* Rounded edges */
  }

  .MuiPaper-root::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
  }
`;
