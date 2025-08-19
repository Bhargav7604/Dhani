import { Backdrop, Fade, Modal } from "@mui/material";

import { NoSearchText } from "../../../../components/ui/GlobalStyles";
import { MobileMenuWrapper, StyledMobileOption, StyledMobileOptionDiv } from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesStyles";
import { MobileMenuProps } from "../../UsersDataUtils";

function MobileMenu({
  open,
  onClose,
  onDetailView,
  onPause,
  onExit,
  onStrategy,
  onLogs,
  item,
}: MobileMenuProps) {
  const handleOptionClick = (callback: () => void) => {
    callback(); // Call the passed function for each option
    onClose(); // Close the menu after the action is completed
  };

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
      <Fade in={open}>
        <MobileMenuWrapper>
          <NoSearchText>MORE OPTIONS</NoSearchText>
          <StyledMobileOptionDiv
            onClick={() => handleOptionClick(onDetailView)}
          >
            <StyledMobileOption>DETAIL VIEW</StyledMobileOption>
            <p> &gt; </p>
          </StyledMobileOptionDiv>

          <StyledMobileOptionDiv onClick={onStrategy}>
            <StyledMobileOption>STATISTICS</StyledMobileOption>
            <p> &gt; </p>
          </StyledMobileOptionDiv>

          {/* <StyledMobileOptionDiv onClick={onEdit}>
            <StyledMobileOption>EDIT STRATEGY</StyledMobileOption>
            <p> &gt; </p>
          </StyledMobileOptionDiv> */}

          <StyledMobileOptionDiv
            onClick={() =>
              item.status !== "error" && handleOptionClick(onPause)
            }
            $disabled={item.status === "error"}
          >
            <StyledMobileOption>
              {" "}
              {item.status === "standby"
                ? "RESUME"
                : item.status === "error" || item.status === "exit"
                ? "RESTART"
                : "PAUSE"}
            </StyledMobileOption>
            <p> &gt; </p>
          </StyledMobileOptionDiv>
          {/* <StyledMobileOptionDiv onClick={() => handleOptionClick(onSubscribe)}>
            <StyledMobileOption>UNSUBSCRIBE</StyledMobileOption>
            <p> &gt; </p>
          </StyledMobileOptionDiv> */}

          {!(item.status === "exit") && (
            <StyledMobileOptionDiv onClick={() => handleOptionClick(onExit)}>
              EXIT STRATEGY
              <span> &gt; </span>
            </StyledMobileOptionDiv>
          )}
          <StyledMobileOptionDiv $lastoption onClick={onLogs}>
            <StyledMobileOption>LOGS</StyledMobileOption>
            <p> &gt; </p>
          </StyledMobileOptionDiv>
        </MobileMenuWrapper>
      </Fade>
    </Modal>
  );
}
export default MobileMenu;