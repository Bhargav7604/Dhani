// FormStyles.ts
import { Box, styled } from "@mui/system";
import { TextField as MuiTextField, Button as MuiButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Select as MuiSelect } from "@mui/material";
interface CustomSelectProps {
  customMargin?: string; // Rename to avoid conflict with MuiSelect's margin prop
}
export const CustomTextField = styled(MuiTextField)`
  padding: 0 !important;
  margin: 8px 0px !important;
  position: relative !important;
  & .MuiOutlinedInput-root {
    background-color: transparent;

    &.Mui-focused fieldset {
      border-color: #5272ff !important; /* Blue border on focus */
    }
    & .MuiInputBase-root {
      border-radius: 6px;
    }
  }

  /* Default border color */
  & .MuiOutlinedInput-notchedOutline {
    border-color: #d4d7e3; /* Default border color */
  }

  /* Prevent error state border color change */
  & .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #d4d7e3 !important; /* Keep default border color on error */
  }

  /* Prevent label color change on focus or error */
  & .MuiFormLabel-root {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #000 !important; /* Fix color to black */
    margin-bottom: 4px;
    transform: none; /* Prevent label float */
    position: relative;
  }

  /* Input styling */
  & .MuiInputBase-input {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding: 8px 12px;
    &::placeholder {
      color: #898384;
      opacity: 1;
      font-size: 12px;
    }
    &:focus::placeholder {
      opacity: 0;
    }
  }
`;
export const CancelButton = styled(MuiButton)<{ profile?: boolean }>`
  font-family: "Inter", sans-serif;
  color: #ff4d4d !important;
  font-weight: 500;
  text-transform: capitalize;
  background-color: #fff;
  padding: 5px 16px;
  border-radius: 4px;
  margin: auto;
  border: 1px solid #ff4d4d;
  &:hover {
    opacity: 0.9;
  }
`;
export const CustomSelect = styled(MuiSelect)<CustomSelectProps>`
  min-width: 170px !important;
  & .MuiSelect-select {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 13px;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #333;
    &:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
    }

    &:disabled {
      background-color: #f5f5f5;
      color: #999;
    }
  }

  & .MuiFormLabel-root {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #000;
    margin-bottom: 4px;
    position: relative;
  }

  & .MuiSelect-icon {
    color: #898384; /* Color for the dropdown icon */
  }

  &.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: red; /* Red border on error */
  }

  /* Override the MenuItem style */
  & .MuiMenuItem-root {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #000; /* Text color for options */
  }

  ${({ customMargin }) => customMargin && `margin-bottom: ${customMargin};`}
`;
export const CustomButton = styled(MuiButton)<{ $profile?: boolean }>`
  float: right;
  font-family: Plus Jakarta Sans;
  color: #fff !important;
  font-weight: 500;
  width: 160px;
  text-transform: capitalize;
  background: ${(props) => (props.$profile ? "#1667d9" : "#C6372D")};
  padding: 5px 16px;
  border-radius: 4px;
  margin-top: 10px !important;
  &:hover {
    opacity: 0.9;
  }
`;
export const ButtonWraper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
`;

export const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;
`;
export const FormWrapper = styled("div")`
  .form-row {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    & > div {
      flex: 1;
    }
  }
`;

export const FormSubmitLink = styled(RouterLink)`
  font-family: "Inter", sans-serif !important;
  text-decoration: none;
  color: #5272ff !important;
  margin-right: 8px;
  cursor: pointer;
  font-family: "inter,sans-serif";
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: 13px;
`;
