import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeToaster } from "../../../../../apps/user/src/modules/layout/state-slice/ToasterSlice.js";
import { ToasterProps } from "./ToasterUtils.js";
import {
  SymbolContentWrapper,
  SymbolDiv,
  SymbolText,
  ToasterContent,
  ToasterContentDiv,
  ToasterHeadingText,
  ProgressBarContainer,
  ProgressBarFill,
  ToasterMessagetext,
  TextWrapper,
} from "./ToasterStyles.js";
import { StyledTertiaryText } from "../../../../../apps/user/src/components/ui/GlobalStyles.js";

const ToasterComp: React.FC<ToasterProps & { id: string }> = ({
  id,
  status,
  message,
  duration = 1000,
}) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(100);
  const dispatch = useDispatch();
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timer: NodeJS.Timeout;

    const startProgress = () => {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          Math.max(0, prevProgress - (100 / duration) * 100)
        );
      }, 100);

      timer = setTimeout(() => {
        setShow(false);
        dispatch(removeToaster(id));
      }, duration);
    };

    startProgress();

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, dispatch, id]);

  const handleClose = () => {
    setShow(false);
    dispatch(removeToaster(id));
  };

  if (!show) return null;

  return (
    <ToasterContent $symboltextcolor={status ? "#55B938" : "#D65745"}>
      <ToasterContentDiv>
        <SymbolContentWrapper>
          <SymbolDiv $symboltextcolor={status ? "#55B938" : "#D65745"}>
            <SymbolText $symboltextcolor={status ? "#55B938" : "#D65745"}>
              {status ? "✔" : "!"}
            </SymbolText>
          </SymbolDiv>

          <TextWrapper>
            <ToasterHeadingText
              $symboltextcolor={status ? "#55B938" : "#D65745"}
            >
              {status ? "Success" : "Error"}
            </ToasterHeadingText>
            <ToasterMessagetext  $symboltextcolor={status}>{message}</ToasterMessagetext>
          </TextWrapper>
        </SymbolContentWrapper>

        <StyledTertiaryText onClick={handleClose} style={{ cursor: "pointer" }}>
          ✖
        </StyledTertiaryText>
      </ToasterContentDiv>

      <ProgressBarContainer>
        <ProgressBarFill
          $progress={progress}
          $color={status ? "#55B938" : "#D65745"}
        />
      </ProgressBarContainer>
    </ToasterContent>
  );
};

export default ToasterComp;
