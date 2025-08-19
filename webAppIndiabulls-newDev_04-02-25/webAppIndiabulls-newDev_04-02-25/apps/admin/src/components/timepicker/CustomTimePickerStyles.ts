import { TimePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;
  & .MuiInputBase-root {
    padding: 0px 12px !important;
    font-size: 12px;
    font-family: "Plus Jakarta Sans", sans-serif;
    color: ${(props) => props.theme.app.colors.text.secondary};
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    border-radius: 4px;
    width: 100% !important;
    margin-bottom: 4px;
    background-color: ${(props) =>
      props.disabled ? props.theme.app.colors.backgroundimgcolor : ""};
  }

  & .MuiInputBase-input {
    padding: 10px;
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.app.colors.border.primary};
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => props.theme.app.colors.text.secondary};
  }

  & .MuiInputBase-root.Mui-focused {
    border-color: ${(props) => props.theme.app.colors.border.primary} !important;
  }

 

  .MuiInputLabel-root {
    display: none; /* To hide the label */
  }

 
`;
