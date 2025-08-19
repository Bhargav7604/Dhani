import React from "react";
import { Avatar } from "@mui/material";
import IconUser from "../../../assets/svg/UserOutlined.svg";
import { ReusableModalProps } from "./CustomDialogUtils";
import {
  ModalContainer,
  ModalTitle,
  ModalContentText,
  DialogContentWrapper,
  DialogTitleWrapper,
  DialogActionsWrapper,
  CancelButton,
  ConfirmButton,
  StyledIconUserWrapper,
} from "./CustomDialogStyles";

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  handleClose,
  handleConfirm,
  title,
  description,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  confirmButtonColor,
  cancelButtonColor,
  showConfirmButton = true,
}) => {
  return (
    <ModalContainer open={open} onClose={handleClose}>
      <DialogTitleWrapper>
        <Avatar>
          <StyledIconUserWrapper>
            <img src={IconUser} />
          </StyledIconUserWrapper>
        </Avatar>
        <ModalTitle>{title}</ModalTitle>
      </DialogTitleWrapper>
      <DialogContentWrapper>
        <ModalContentText>{description}</ModalContentText>
      </DialogContentWrapper>
      <DialogActionsWrapper>
        <CancelButton
          onClick={handleClose}
          style={{ backgroundColor: cancelButtonColor }}
        >
          {cancelButtonText}
        </CancelButton>
        {/* Conditionally render the Confirm button */}
        {showConfirmButton && (
          <ConfirmButton
            onClick={handleConfirm}
            style={{ backgroundColor: confirmButtonColor }}
          >
            {confirmButtonText}
          </ConfirmButton>
        )}
      </DialogActionsWrapper>
    </ModalContainer>
  );
};

export default ReusableModal;
