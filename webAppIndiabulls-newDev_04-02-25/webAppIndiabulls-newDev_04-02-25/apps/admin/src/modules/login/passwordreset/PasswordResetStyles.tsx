import { styled } from "styled-components";
import { Box, InputBase } from "@mui/material";

export const OTPContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;
  position: relative;
`;
export const ErrorOtpMsg = styled.p`
color: red;
font-size:12px;
text-align: center;
 position: absolute;
 bottom:-18px;
`;
export const OTPInput = styled(InputBase)<{ hasValue: boolean }>`
  width: 50px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #d4d7e3;
  border-radius: 8px;
  border-color: ${({ hasValue }) => (hasValue ? "#1e4ae9" : "#d4d7e3")};
  & input {
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Hiding the spinner buttons on Firefox */
    appearance: textfield; /* Use the standard 'appearance' property */
    /* Override for Firefox (remove spinner) */
    -moz-appearance: textfield; /* Remove spinner in Firefox */
  }
  &:focus {
    outline: none !important;
    border-color: #5272ff !important;
  }
`;

export const BackLinkContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ResendLink = styled(Box)`
  text-align: center;
  margin: 16px 0px;
  & a {
    text-decoration: none;
    font-weight: 500;
  }
`;
