import { Checkbox } from "@mui/material";
import { styled } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
export const RememberMeLabel = styled.label`
  font-family: "Inter", sans-serif !important;
  font-size: 12px;
  letter-spacing: .6px;
  font-weight: 500;
  color: #666;
  display: flex;
  cursor: pointer;
`;
export const StyledCheckbox = styled(Checkbox)`
  scale: 0.8;
  padding: 0 !important;
`;
export const ForgotPasswordContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

export const ForgotPasswordLink = styled(RouterLink)`
  text-decoration: none;
  color: #1e4ae9;
  cursor: pointer;
`;

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const FooterText = styled(Typography)`
  text-align: center;
  margin-top: 100px !important;
  font-size: 14px !important;
  color: #959cb6;
`;
