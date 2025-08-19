import { Modal, Fade, Backdrop } from "@mui/material";
import {
  Imagesdiv,
  PopupButtonsDiv,
  PopUpModalWrapper,
  SecondDiv,
  StatusText,
} from "../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { StyledPara } from "../../../../../../../packages/ui/src/sharedstyles/SharedStyledComps";
import { DiySaveButton } from "../../../../components/ui/GlobalStyles";
import { useEffect, useState } from "react";
import { DeployedStrategiesLogsService } from "../../services/DeployedStrategiesServices";
import {
  DeployedStrategiesLogsTypes,
  InitialStateTypes,
} from "../../services/DeployedStrategiesServiceTypes";
import { ColumnFlexDiv } from "../../../welcomemodal/WelcomeModalStyles";
import {
  FlexRowDiv,
  StyledDataBigText,
  StyledSecondaryHeadlineText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import { StyledLogsWrapper } from "../../DeployedStrategiesStyles";
import { ShimmerCard } from "../deployedshimmercard/ShimmerCard";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";

export default function LogsPopUp({ open, onClose, item }: any) {
  const initialState: InitialStateTypes = {
    StrategyLogs: {} as DeployedStrategiesLogsTypes,
    isLoading: true,
    apiStatusFail: "",
  };
  const [state, setState] = useState<InitialStateTypes>(initialState);
  const { StrategyLogs, isLoading, apiStatusFail } = state;
  const itemNameDp = item.name
    ? item.name
        .split(" ")
        .filter((_: any, index: number) => index === 0)
        .map((word: string) => word.slice(0, 2).toUpperCase())
        .join("")
    : "--";

  const fetchDeployedStrategiesLogs = async () => {
    try {
      if (!item.sid) return null;

      const result = await DeployedStrategiesLogsService(item.sid);
      if (result?.data) {
        setState((prevState) => ({
          ...prevState,
          StrategyLogs: result.data,
          isLoading: false,
        }));
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        apiStatusFail: "No Data Available",
      }));
      throw error;
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
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
              <ColumnFlexDiv $gap="10px">
                {isLoading ? (
                  [...Array(3)].map((_, i) => (
                    <ShimmerCard
                      key={i}
                      $height="80px"
                      $minidesktopheight="80px"
                      $tabheight="80px"
                      $mobileheight="80px"
                    />
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
                            log.status.slice(1)}
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
                      />
                    </ColumnFlexDiv>
                  ))
                ) : apiStatusFail ? (
                  <NoSearchStrategy text={apiStatusFail} />
                ) : (
                  <StyledPara $fontsize="16px">No logs available</StyledPara>
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
