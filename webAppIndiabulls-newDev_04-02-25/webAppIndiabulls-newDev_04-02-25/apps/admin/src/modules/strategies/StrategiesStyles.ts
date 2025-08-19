import { Button } from "@mui/material";
import styled from "styled-components";
export const ActionsColumnContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.app.colors.status.alert};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }
`;
export const AdminButton = styled(Button)`
  font-weight: 400;
  background-color: #7585fd !important;
  color: #ffffff !important;
  border-radius: 6px;
  padding: 10px 16px;
  text-transform: capitalize;
`;
export const StyledImgae = styled.img`
  height: 14px;
  margin-right: 6px;
`;
export const FunctionCell = styled.div<{ status: string }>`
  background-color: ${({ status }) =>
    status === "Active"
      ? "#CFE8DA80"
      : status === "pause"
      ? "#F9E8D5"
      : status === "Inactive"
      ? "#F2CBCD"
      : "transparent"};
  color: ${({ status }) =>
    status === "Active"
      ? "#1F9254"
      : status === "pause"
      ? "#CD6200"
      : status === "Inactive"
      ? "#A30D11"
      : "#000"};
  padding: 8px 8px;
  border-radius: 4px;
  text-align: center;
  letter-spacing: 0.7px;
  min-width: 100px;
  font-weight: 500;
`;

export const StrategyButton = styled(Button)`
  min-width: 140px !important;
  background-color: #7585fd !important;
  color: #ffffff !important;
  border-radius: 6px;
  padding: 2px 16px !important;
  text-transform: capitalize;
`;





export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;




