import { Modal, Fade, Backdrop } from "@mui/material";

import { StyledPara } from "../../../../../../../packages/ui/src/sharedstyles/SharedStyledComps";
import { useEffect, useState } from "react";

import {
  FlexRowDiv,
  StyledDataBigText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import {
  DeployedStrategiesLogsTypes,
  InitialStateTypes,
} from "../../services/AppServiceUtils";
import { DeployedStrategiesLogsService } from "../../services/AppServices";
import {
  Imagesdiv,
  PopUpModalWrapper,
  SecondDiv,
  StatusText,
} from "../../../../../../user/src/modules/readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { StyledSecondaryHeadlineText } from "../../../../../../user/src/components/ui/GlobalStyles";
import { StyledLogsWrapper } from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesStyles";
import { ShimmerCard } from "../../../../../../user/src/modules/deployedstrategies/sections/deployedshimmercard/ShimmerCard";
import {
  DiySaveButton,
  PopupButtonsDiv,
} from "../../../nocodestrategy/NoCodeStrategyStyles";
import { ColumnFlexDiv } from "../../../../../../user/src/modules/welcomemodal/WelcomeModalStyles";
import { useParams } from "react-router-dom";

export default function LogsPopUp({ open, onClose, item }: any) {
  const initialState: InitialStateTypes = {
    StrategyLogs: {} as DeployedStrategiesLogsTypes,
    isLoading: true,
  };
  const [state, setState] = useState<InitialStateTypes>(initialState);
  const { StrategyLogs, isLoading } = state;
  const { userId } = useParams<{ userId: string }>();
  // console.log;
  const itemNameDp = item.name
    ? item.name
        .split(" ")
        .filter((_: any, index: number) => index === 0)
        .map((word: string) => word.slice(0, 2).toUpperCase())
        .join("")
    : "--";

  const fetchDeployedStrategiesLogs = async () => {
    const params = { userId, strategyId: item.sid };
    try {
      if (!item.sid) return null;

      const result = await DeployedStrategiesLogsService(params);
      if (result?.data) {
        setState((prevState) => ({
          ...prevState,
          StrategyLogs: result.data,
          isLoading: false,
        }));
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchDeployedStrategiesLogs();
  }, []);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open} // Now correctly using the open prop
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <>
        <Fade
          in={open}
          style={{
            outline: "none",
            backgroundColor: "white",
          }}
        >
          <PopUpModalWrapper
            $width="30%"
            $gap="12px"
            $tabwidth="70%"
            $maxwidth="600px"
            $logspopup={true}
          >
            <SecondDiv>
              <ColumnFlexDiv
                $row
                $justifycontent="center"
                $alignitems="center"
                $gap="8px"
              >
                <Imagesdiv>
                  <StyledDataBigText $bold={true} $color={true}>
                    {itemNameDp}
                  </StyledDataBigText>
                </Imagesdiv>
                <StyledSecondaryHeadlineText $color={true}>
                  {item.name || ""}
                </StyledSecondaryHeadlineText>
                <StyledTertiaryText>({item.sid ?? ""})</StyledTertiaryText>
              </ColumnFlexDiv>
            </SecondDiv>
            <StyledLogsWrapper>
              <ColumnFlexDiv $gap="16px">
                {isLoading ? (
                  [...Array(3)].map((_, i) => (
                    <ShimmerCard key={i} $height="50px" $marginbottom="6px" />
                  ))
                ) : StrategyLogs?.statusList?.length > 0 ? (
                  StrategyLogs.statusList.map((log, index) => (
                    <ColumnFlexDiv key={index} $gap="2px">
                      <FlexRowDiv
                        $justifycontent="start"
                        $gap="12px"
                        $rowdirection
                      >
                        <StyledDataBigText firstChild $color>
                          {log.timeStamp}
                        </StyledDataBigText>
                        <StatusText $status={log.status}>
                          {log.status.charAt(0).toUpperCase() +
                            log?.status.slice(1)}
                        </StatusText>
                      </FlexRowDiv>
                      <ul>
                        {log.description.map((desc, i) => (
                          <li style={{ listStyleType: "none" }} key={i}>
                            <StyledPara $fontsize="14px" $fontweight="500">
                              {desc}
                            </StyledPara>
                          </li>
                        ))}
                      </ul>
                      <FlexRowDiv
                        $justifycontent="start"
                        $rowdirection
                        $alignitems="flex-end"
                      ></FlexRowDiv>
                    </ColumnFlexDiv>
                  ))
                ) : (
                  <StyledPara $fontsize="16px">No logs available 🙅‍♂️</StyledPara>
                )}
              </ColumnFlexDiv>
            </StyledLogsWrapper>
            <PopupButtonsDiv $justifycontent="end">
              <DiySaveButton
                width="120px"
                variant="outlined"
                $desktopwidth="16%"
                $tabwidth="200px"
                $padding="4px 8px"
                onClick={onClose}
              >
                Close
              </DiySaveButton>
            </PopupButtonsDiv>
          </PopUpModalWrapper>
        </Fade>
      </>
    </Modal>
  );
}
