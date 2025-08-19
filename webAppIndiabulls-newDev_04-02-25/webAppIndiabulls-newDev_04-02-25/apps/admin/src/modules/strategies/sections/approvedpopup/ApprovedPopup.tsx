import React, { useState } from "react";
import { Backdrop, Fade, Modal } from "@mui/material";
import { TableContainer } from "../../../user-list/UsersStyles";
import { ActiveStrategyManageProps } from "../../StrategiesUtils";
import { ButtonWraper, CustomButton } from "../../../../styles/FormStyles";
import {
  FlexProfileDiv,
  StyledSubTitle,
} from "../../../../components/ui/GlobalStyles";
import NffIdManage from "../nff-id-popup/NffIdPopup";

// Assuming you already have StrategySchemaZod defined somewhere
const ApprovedManage: React.FC<ActiveStrategyManageProps> = ({
  open,
  onClose,
  id,
}) => {
  const [isNffModalOpen, setIsNffModalOpen] = useState(false);
  const [strategyId, setStrategyId] = useState<number | undefined | null>(null)

  const handleCloseModal = () => {
    setIsNffModalOpen(false);
    setStrategyId(null); // clear when modal closes
  };
  const handleOpenNFFModal = () => {
    setStrategyId(id); // capture the id before closing
    setIsNffModalOpen(true);
    onClose(); // close the first modal
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Fade in={open} style={{ outline: "none", backgroundColor: "white" }}>
          <TableContainer>
            <FlexProfileDiv $flexDirection>
              <FlexProfileDiv $flexDirection>
                <StyledSubTitle>Approve </StyledSubTitle>
                <p>Do you want to Approve this Strategy </p>
              </FlexProfileDiv>

              {/* Buttons */}
              <ButtonWraper>
                <CustomButton variant="outlined" onClick={onClose}>
                  Cancel
                </CustomButton>

                <CustomButton
                  $profile
                  variant="contained"
                  onClick={() => {
                    handleOpenNFFModal();
                    onClose();
                  }}
                >
                  Confirm
                </CustomButton>
              </ButtonWraper>
            </FlexProfileDiv>
          </TableContainer>
        </Fade>
      </Modal>

      <NffIdManage open={isNffModalOpen} onClose={handleCloseModal} id={strategyId} />
    </>
  );
};

export default ApprovedManage;
