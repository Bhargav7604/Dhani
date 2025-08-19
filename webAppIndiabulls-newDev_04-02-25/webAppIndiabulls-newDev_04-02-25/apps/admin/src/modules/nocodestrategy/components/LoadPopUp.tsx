import { Modal, Fade, Backdrop } from "@mui/material";
import {
  CornerItemsDiv,
  StyledButton,
} from "../../../components/ui/GlobalStyles";
import {
  CancelButton,
  ColumnWrapper,
  ImgDiv,
  LoadPopUpWrap,
  MainText,
  SubText,
} from "../NoCodeStrategyStyles";
// import loadPopup from "../../../assets/svgs/loadPopup.svg";
import { LoadPopupProps } from "../NoCodeStrategyUtils";

function LoadPopUp({ open, onClose, Confirm }: LoadPopupProps) {
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
        <LoadPopUpWrap>
          <ColumnWrapper>
            <ImgDiv load>
              <img src={""} alt="loadPopup" className="exitpopupimg" />
            </ImgDiv>
            <MainText>Are you sure?</MainText>
          </ColumnWrapper>
          <SubText>want to load the template?</SubText>
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
              onClick={Confirm}
            >
              Confirm
            </StyledButton>
          </CornerItemsDiv>
        </LoadPopUpWrap>
      </Fade>
    </Modal>
  );
}

export default LoadPopUp;
