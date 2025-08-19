import React from "react";
import {
  ButtonContainer,
  ButtonsDiv,
} from "../../../../../apps/user/src/modules/performancereports/PerformanceReportsStyles.js";

interface ToggleButtonContainerProps {
  buttons: { label: string; value: string }[];
  currentPage: string;
  onPageChange: any;
}

const ToggleButtonContainer: React.FC<ToggleButtonContainerProps> = ({
  buttons,
  currentPage,
  onPageChange,
}) => {
  return (
    <ButtonContainer>
      {buttons.map((button) => (
        <ButtonsDiv
          key={button.value}
          $active={button.value ? true : false}
          style={{
            backgroundColor: currentPage === button.value ? "#1667d9" : "",
            color: currentPage === button.value ? "white" : "black",
          }}
          onClick={() => onPageChange(button.value)}
        >
          {button.label}
        </ButtonsDiv>
      ))}
    </ButtonContainer>
  );
};

export default ToggleButtonContainer;
