import { TimePicker } from "@mui/x-date-pickers";
import {styled} from "styled-components";

export const StyledTimePicker = styled(TimePicker)`
  & .MuiInputBase-root {
    padding: 0px 12px !important;
    font-size: 12px;
    font-family: "Plus Jakarta Sans", sans-serif;
    border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
    border-radius: 9px;
    width: 255px;
  }

  & .MuiInputBase-input {
    padding: 8px 10px;
  }

  & .MuiInputBase-root.Mui-focused {
    border: 1px solid #1667d9 !important;
  }

  & .MuiInputBase-root:hover {
    border: 1px solid #1667d9;
  }

  .MuiInputLabel-root {
    display: none; /* To hide the label */
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
   & .MuiInputBase-root {
    width: 83vw !important;
    max-width: 385px !important;
   }
  }
`;