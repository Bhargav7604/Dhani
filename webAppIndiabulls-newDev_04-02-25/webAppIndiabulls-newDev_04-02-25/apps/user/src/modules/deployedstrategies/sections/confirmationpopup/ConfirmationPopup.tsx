import { Backdrop, Fade, Modal } from "@mui/material";
import { LoadPopUpWrap } from "../../../../components/ui/GlobalStyles";
import {
  CancelButton,
  ColumnWrapper,
  MainText,
  SubText,
} from "../../../header/HeaderStyles";
import {
  CornerItemsDiv,
  StyledButton,
} from "../../../../components/ui/GlobalStyles";
import { ConfirmationPopupProps } from "../../DeployedStrategiesUtils";
import { PopupButtonsDiv } from "../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";

const ConfirmationPopup = (props: ConfirmationPopupProps) => {
  const {
    open,
    onClose,
    firstdescription,
    seconddescription,
    handlePostCall,
    inHouseEdit = false,
  } = props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade
        in={open}
        style={{
          outline: "none",
          backgroundColor: "white",
        }}
      >
        <LoadPopUpWrap $isconfirmationpopup="true">
          <ColumnWrapper>
            <MainText>Confirmation</MainText>
            <SubText>{firstdescription}</SubText>
            {seconddescription && <SubText>{seconddescription}</SubText>}
          </ColumnWrapper>
          {inHouseEdit ? (
            <PopupButtonsDiv>
              <StyledButton variant="contained" onClick={onClose}>
                OK
              </StyledButton>
            </PopupButtonsDiv>
          ) : (
            <CornerItemsDiv>
              <CancelButton
                width="25%"
                $mobilewidth="30%"
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </CancelButton>
              <StyledButton
                $width="25%"
                $mobilewidth="30%"
                variant="contained"
                onClick={handlePostCall}
              >
                Confirm
              </StyledButton>
            </CornerItemsDiv>
          )}
        </LoadPopUpWrap>
      </Fade>
    </Modal>
  );
};

export default ConfirmationPopup;
