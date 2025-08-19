import React, { useState, useEffect } from "react";
import {
  DetailsValueDiv,
  StyledNoDataText,
} from "../../modules/readytodeploy/ReadyToDeployStyles";
import { useAppSelector } from "../../store/Store";
import {
  Detailswrap,
  FlexRowDiv,
  StyledTertiaryText,
} from "../ui/GlobalStyles";
import PnlLogo from "../../assets/svgs/pnl-logo.svg";
import { StyledLogoutImg } from "../../modules/header/HeaderStyles";
import {
  OpenPositionsResponse,
  PNLHeaderTypes,
} from "../../modules/deployedstrategies/services/SocketDataUtils";
import WebSocketComponent from "../websocet/WebSocket";
import { PNLShimmer } from "../shimmers/PnlBoardShimmer";
import { useMediaQuery } from "@mui/material";
import HoverToFullValues from "../hoverfullvalues/HoverToFullValues";
import { PNLMappingfields } from "./PNLData";
import { PNLStateType } from "./PNLValuesCompUtils";

const PNLValuesComp: React.FC = () => {
  const { forwardHeaders, liveHeaders } = useAppSelector(
    (appstate) => appstate.socket.socketData as OpenPositionsResponse
  );
  const initialState: PNLStateType = {
    selectedExecutionType: forwardHeaders,
  };
  const [state, setState] = useState<PNLStateType>(initialState);
  const { selectedExecutionType } = state;
  const [loading, setLoading] = useState(true);
  const matches = useMediaQuery("(min-width: 769px)");

  const { socketData } = useAppSelector((appstate) => appstate.socket);

  const { ExecutionType } = useAppSelector(
    (appState) => appState.ExecutionType
  );

  useEffect(() => {
    if (!socketData) return;

    const newHeaders =
      ExecutionType === "PaperTrading" ? forwardHeaders : liveHeaders;

    if (newHeaders) {
      setState((prevState) => ({
        ...prevState,
        selectedExecutionType: newHeaders,
      }));
    }
  }, [socketData, ExecutionType]);

  const isSocketDataValid = (
    data: typeof socketData
  ): data is OpenPositionsResponse => {
    return data !== null && !Array.isArray(data);
  };

  useEffect(() => {
    {
      socketData && setLoading(false);
    }
  }, [socketData]);
  return (
    <>
      <WebSocketComponent />
      {loading ? (
        <PNLShimmer $height={matches ? "60px" : "190px"} $width="100%" />
      ) : (
        <FlexRowDiv $width="100%" $background="#fff" $marginBottom={true}>
          <Detailswrap $background="#fff">
            <DetailsValueDiv $flexdirection="row" $firstchild="true">
              <StyledLogoutImg src={PnlLogo} alt="onl-logo" />
              <StyledTertiaryText $firstchild="true" style={{ color: "white" }}>
                P&L Values
              </StyledTertiaryText>
            </DetailsValueDiv>

            {PNLMappingfields.map(({ key, label }, index) => {
              const value =
                selectedExecutionType?.[key as keyof PNLHeaderTypes];

              return (
                <DetailsValueDiv key={index}>
                  <StyledTertiaryText>{label}</StyledTertiaryText>
                  {isSocketDataValid(socketData) && value != null ? (
                    <HoverToFullValues
                      $isrupee
                      value={value}
                      $ispnl
                      $isformat
                    ></HoverToFullValues>
                  ) : (
                    <StyledNoDataText>--</StyledNoDataText>
                  )}
                </DetailsValueDiv>
              );
            })}
          </Detailswrap>
        </FlexRowDiv>
      )}
    </>
  );
};

export default PNLValuesComp;
