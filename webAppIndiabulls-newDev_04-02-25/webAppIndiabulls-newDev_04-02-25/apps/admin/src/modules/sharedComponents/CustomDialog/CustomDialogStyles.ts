import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";
import { styled } from "styled-components";
import { CancelButtonProps, SaveButtonProps } from "./CustomDialogUtils";

export const ModalContainer = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 24px;
    padding: 8px 36px;

  }
`;

export const StyledIconUserWrapper = styled.div`
  color: #999aa3;
`;

export const DialogTitleWrapper = styled(DialogTitle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.app.typography.fontFamily.primary};
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.app.colors.text.primary};
  margin: 0;
`;

export const DialogContentWrapper = styled(DialogContent)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentText = styled.p`
  font-family: ${({ theme }) => theme.app.typography.fontFamily.primary};
  font-weight: 500;
  font-size: 16px;
  color: #b5b3b3;
  width: 100%;
  text-align: center;
`;

export const DialogActionsWrapper = styled(DialogActions)`
  display: flex;
  justify-content: space-between !important;
  gap: 30px;
  margin: auto;
  /* padding: 0 24px 16px; */
`;

// export const CancelButton = styled(Button)<CancelButtonProps>`
//   background-color: #ffebee!important;
//   color: #c32c2c!important;
//   border: none;
//   padding: 4px 20px !important;
//   font-size: 16px!important;
//   text-transform: capitalize!important;
//   &:hover {
//     background-color: #ffcdd2;
//   }
// `;

// export const ConfirmButton = styled(Button)`
//   background-color: ${({ theme }) => theme.app.colors.primary}!important;
//   color: #ffffff!important;
//   text-transform: capitalize!important;
//   padding: 4px 20px !important;
//   font-size: 16px!important;
//   border: none;
//   &:hover {
//     background-color: ${({ theme }) => theme.app.colors.primary};
//   }
// `;

export const CancelButton = styled(Button)<CancelButtonProps>`
  background-color: ${(props) =>
    props.cancelation ? props.theme.app.colors.bright : "#E2E5EB"} !important;
  color: ${(props) =>
    props.cancelation
      ? props.theme.app.colors.border.cancelborder
      : "#000"}!important;
  border: ${(props) =>
    props.cancelation
      ? `1px solid ${props.theme.app.colors.border.cancelborder}`
      : "none"}!important;
  width: 98px;
  font-size: 16px !important;
  text-transform: capitalize !important;
  &:hover {
    background-color: #e2e5eb;
  }
`;

export const ConfirmButton = styled(Button)<SaveButtonProps>`
  background-color: ${(props) =>
    props.confirm
      ? props.theme.app.colors.bright
      : props.theme.app.colors.algomenubackground}!important;
  color: ${(props) =>
    props.confirm ? props.theme.app.colors.primary : "#ffff"} !important;
  width: 98px;
  border: ${(props) =>
    props.confirm
      ? `1px solid  ${props.theme.app.colors.border.primary}`
      : "none"}!important;
  text-transform: capitalize !important;
  font-size: 16px !important;
  &:hover {
    background-color: ${({ theme }) => theme.app.colors.primary};
  }
`;
