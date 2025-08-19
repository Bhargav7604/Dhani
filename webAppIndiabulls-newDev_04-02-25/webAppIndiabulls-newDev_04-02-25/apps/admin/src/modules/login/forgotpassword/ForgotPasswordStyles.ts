import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CenteredBox = styled(Box)`
  text-align: center;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.app.colors.dark};
  gap: 5px;
`;

export const PlainText1 = styled(Typography)`
  margin-right: 6px !important;
`;
export const PlainText2 = styled(Typography)`
  font-weight: ${(props) => props.theme.app.weights.semiBold} !important;
  color: ${(props) => props.theme.app.colors.algomenubackground};
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.app.colors.algomenubackground};
`;

export const StyledIconArrowLeft = styled.div`
  margin-right: 5px;
`;
