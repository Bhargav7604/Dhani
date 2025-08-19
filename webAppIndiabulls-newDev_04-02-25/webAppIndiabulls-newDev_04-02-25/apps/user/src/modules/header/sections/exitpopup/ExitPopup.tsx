import { Modal, Fade, Backdrop } from "@mui/material";
import { CornerItemsDiv } from "../../../../components/ui/GlobalStyles";
import {
  CancelButton,
  ColumnWrapper,
  ExitButton,
  ExitModalWrapper,
  ImgDiv,
  MainText,
  SubText,
} from "../../HeaderStyles";
import exitPopup from "../../../../assets/svgs/exitPopup.svg";
import { ExitPopupProps } from "../../HeaderUtils";
import { postExitAllService } from "../../services/HeaderServices";

function ExitPopup({ open, onClose }: ExitPopupProps) {
  const { AuthUserId }: any = sessionStorage.getItem("uId");

  async function handleExitAllPositions() {
    const payload = {
      userId: String(AuthUserId),
    };

    try {
      const config = { payload };
      const response = await postExitAllService(config);
      if (response.status === "success") {
        onClose();
      }
    } catch (error) {
      throw error;
    }
  }
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
      <>
        <Fade in={open}>
          <ExitModalWrapper>
            <ColumnWrapper>
              <ImgDiv exit>
                <img src={exitPopup} alt="exitPopup" className="exitpopupimg" />
              </ImgDiv>
              <MainText>Are you sure?</MainText>
            </ColumnWrapper>
            <SubText>Do you want to exit all Strategy open positions?</SubText>
            <CornerItemsDiv>
              <CancelButton
                $mobilewidth="35%"
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </CancelButton>
              <ExitButton
                variant="contained"
                onClick={() => handleExitAllPositions()}
              >
                Confirm
              </ExitButton>
            </CornerItemsDiv>
          </ExitModalWrapper>
        </Fade>
      </>
    </Modal>
  );
}

export default ExitPopup;
