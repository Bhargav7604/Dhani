import {
  ColumnItemsDiv,
  FlexRowDiv,
  HoveredStyledButton,
  StyledDataBigText,
  StyledSecondaryHeadlineText,
  StyledStatusText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import {
  DeployedStrategyCardDiv,
  DetailGridDiv,
  // DropdownMenu,
  ErrorManagmentDiv,
  StyledErrorMenuItem,
  StyledMenu,
  // StyledOption,
} from "../../DeployedStrategiesStyles";
import StrategyTableComp from "../detailviewtable/DetailViewTable";
import MenuPopup from "../../../../assets/svgs/MenuPopup.svg";
import {
  DeployedStrategiesCardProps,
  StateType,
} from "../../DeployedStrategiesUtils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  PostCancelService,
  postChangeMultiplierService,
  postExitStrategyService,
  PostManualTradeService,
  PostRetryService,
  postStandByStrategyService,
  postToForwardTestService,
  postToLiveTradingService,
  postUnScribeService,
} from "../../services/DeployedStrategiesServices";
import {
  ColumnFlexDiv,
  Imagesdiv,
  SecondDiv,
} from "../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";

import { useMediaQuery } from "@mui/material";
import MobileMenu from "../deployedmenupopup/MobileMenu";
import { dispatch, useAppSelector } from "../../../../store/Store";
import { saveDeployedStrategies } from "../../state-slice/DeployedStrategySlice";
import DeployedStrategyStatistics from "../statistics/StrategyStatistics";
import { useForm } from "react-hook-form";
import DeployedSelectComp from "../deployedselectfiled/DeployedSelectComp";
import ConfirmationPopup from "../confirmationpopup/ConfirmationPopup";
import {
  navigationToPage,
  saveStrategyID,
  showEditDIYForm,
} from "../../../nocodestrategy/state-slice/NoCodeStrategySlice";
import { useNavigate } from "react-router-dom";
// import { StrategyAPIResponse} from "../../../readytodeploy/services/AllStrategiesServices"

import { StrategyAPIResponse } from "../../../readytodeploy/services/AllStrategiesServiceTypes";
import DeployPopUp from "../../../readytodeploy/sections/customizedeploy/CustomizeDeployPopUp";
import HoverToFullValues from "../../../../components/hoverfullvalues/HoverToFullValues";
import LogsPopUp from "../logspopup/LogsPopUp";
import ErrorArrow from "../../../../assets/svgs/ErrorArrow.png";
import ReusableMenu from "../menuoptions/MenuOptionsComp";

const InitialState: StateType = {
  openMenuIndex: null,
  showTableIndex: null,
  showPopup: false,
  popupData: {
    popupDescription: "",
    popupSecondDescription: "",
    popupPostCall: () => {},
  },
  showConfirmationPopup: false,
  showCustomizeDeploy: false,
  customizeDeployStrategy: {} as StrategyAPIResponse,
  showLogs: false,
  showDeployedStatistics: false,
  errorAnchorEl: null,
  anchorEl: null,
};

const DeployedStrategyCard = React.memo(
  ({ item, index }: DeployedStrategiesCardProps) => {
    const [state, setState] = useState(InitialState);
    const {
      openMenuIndex,
      showTableIndex,
      showPopup,
      popupData,
      showConfirmationPopup,
      showCustomizeDeploy,
      customizeDeployStrategy,
      showLogs,
      showDeployedStatistics,
      errorAnchorEl,
      anchorEl,
    } = state;
    const { control, watch, setValue, getValues } = useForm();
    const prevExecutionMode = useRef<string>(item.execution);
    const prevMultiplier = useRef<number | string>(Number(item.multiplier));
    const navigate = useNavigate();
    const { activeStrategiesDropdown } = useAppSelector(
      (appState) => appState.deployedstrategiesdata.deployedStrategyRes
    );

    const { strategies } = useAppSelector(
      (appState) => appState.strategies.strategiesRes
    );
    const allStrategies = useMemo(
      () => [
        ...strategies.diy,
        ...strategies.inHouse,
        ...strategies.preBuilt,
        ...strategies.popular,
      ],
      [strategies]
    );

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMediaQuery("(max-width:769px)");

    const handleStatisticsOpen = () => {
      setState((prevState) => ({
        ...prevState,
        showDeployedStatistics: true,
      }));
    };
    const handleStatisticsClose = () => {
      setState((prevState) => ({
        ...prevState,
        showDeployedStatistics: false,
      }));
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setState((prevState) => ({
            ...prevState,
            openMenuIndex: null,
          }));
        }
      };

      // Add event listener to close dropdown if click is outside
      if (openMenuIndex !== null) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      // Clean up the event listener when the component unmounts or state changes
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [openMenuIndex]);

    const toggleDropdown = (
      event: React.MouseEvent<HTMLElement>,
      index: number
    ) => {
      const anchor = event.currentTarget;

      setState((prev) => ({
        ...prev,
        anchorEl: anchor,
        openMenuIndex: index,
      }));
    };

    const handleToggleTable = (index: number) => {
      setState((prevState) => ({
        ...prevState,
        showTableIndex: prevState.showTableIndex === index ? null : index,
      }));
    };
    const handleLogs = () => {
      setState((prevState) => ({
        ...prevState,
        showLogs: true,
      }));
    };
    const handleCloseLogsPopup = () => {
      setState((prevState) => ({
        ...prevState,
        showLogs: false,
      }));
    };
    const itemNameDp = item.name
      ? item.name
          .split(" ")
          .filter((_, index) => index === 0)
          .map((word) => word.slice(0, 2).toUpperCase())
          .join("")
      : "--";

    async function handleUnsubscribe(strategyID: number) {
      try {
        const response = await postUnScribeService({ strategyId: strategyID });
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
        }
      } catch (error) {
        throw error;
      }
    }

    async function handleExitStrategy(strategyID: number) {
      const payload = {
        strategyId: strategyID,
        signalId: item.signalId,
      };

      try {
        const config = { payload };
        const response = await postExitStrategyService(config);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
        }
      } catch (error) {
        throw error;
      }
    }

    async function handleStandByStrategy(strategyId: number) {
      try {
        const response = await postStandByStrategyService(strategyId);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
        }
      } catch (error: any) {
        throw error;
      }
    }

    const handleEditStrategy = (
      strategyId: number,
      category: string
      // status: string
    ) => {
      if (category === "In-House") {
        setState((prevState) => ({
          ...prevState,
          showConfirmationPopup: true,
          popupData: {
            ...prevState.popupData, // Ensures existing popupData properties are retained
            popupDescription: "You cannot edit the In-House strategy",
            popupPostCall: handleCloseInhouseEdit,
          },
        }));
      } else if (category.toLowerCase() === "popular") {
        const strategy = allStrategies.find((strat) => strat.id === strategyId);
        if (strategy) {
          setState((prevstate) => ({
            ...prevstate,
            showCustomizeDeploy: true,
            customizeDeployStrategy: strategy,
          }));
        }
      } else {
        navigate("/nocodestrategybuilder");
        dispatch(saveStrategyID({ selectedStrategyID: strategyId }));
        dispatch(navigationToPage({ currentPage: "mysaved" }));
        dispatch(showEditDIYForm({ DIYForm: true }));
      }
    };

    const handleCloseCustomizeDeploy = () => {
      setState((prevState) => ({
        ...prevState,
        showCustomizeDeploy: false,
      }));
    };

    const handleCloseInhouseEdit = () => {
      setState((prevState) => ({
        ...prevState,
        showConfirmationPopup: false,
      }));
    };

    const menuOptions = [
      {
        label: "DETAIL VIEW",
        onClick: () => handleToggleTable(index),
      },
      {
        label: "STATISTICS",
        onClick: handleStatisticsOpen,
      },
      {
        label: "EDIT STRATEGY",
        onClick: () => handleEditStrategy(item.sid, item.category),
      },
      {
        label:
          item.status === "standby" || item.status === "paused"
            ? "RESUME"
            : item.status.toLowerCase().includes("cancelled") ||
              item.status.toLowerCase().includes("exited-manually")
            ? "RETRY"
            : item.status === "error" || item.status === "exit"
            ? "RESTART"
            : "PAUSE",

        onClick:
          item.status !== "error"
            ? () => handleStandByStrategy(item.sid)
            : undefined,
      },
      {
        label: "UNSUBSCRIBE",
        onClick: () => handleUnSubscribeOptionClick(item.sid, item.status),
      },
      ...(item.status !== "exit"
        ? [
            {
              label: "EXIT STRATEGY",
              color: "red", // Pass color here
              onClick: () =>
                handleExitStrategyOptionClick(item.sid, item.status),
            },
          ]
        : []),
      {
        label: "LOGS",
        onClick: () => handleLogs(),
      },
    ];

    const watchedMultiplier = watch("multiplier");
    const watchedExecutionMode = watch("executionMode");
    const isFirstRender = useRef(true);

    useEffect(() => {
      setValue("executionMode", item.execution);
      setValue("multiplier", item.multiplier);
      prevExecutionMode.current = item.execution;
      prevMultiplier.current = item.multiplier;
    }, [item.multiplier, item.execution]); // Add item to dependency array

    // Detect changes and handle popup
    useEffect(() => {
      if (isFirstRender.current) {
        // Skip first render
        isFirstRender.current = false;
        return;
      }

      const handleChange = async () => {
        if (watchedExecutionMode !== prevExecutionMode.current) {
          // Revert immediately and show popup
          setValue("executionMode", prevExecutionMode.current);
          handleExecutionModeChange(watchedExecutionMode);
        }

        if (watchedMultiplier !== prevMultiplier.current) {
          // Revert immediately and show popup
          setValue("multiplier", prevMultiplier.current);
          handleMultiplierChange(watchedMultiplier);
        }
      };

      handleChange();
    }, [watchedExecutionMode, watchedMultiplier]);

    // Handle API calls with proper rollback
    const handleToLiveTrading = async () => {
      try {
        const response = await postToLiveTradingService(item.sid);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
          return true;
        }
      } catch (error) {
        throw error;
      }
    };

    const handleToForwardTest = async () => {
      try {
        const response = await postToForwardTestService(item.sid);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
          return true;
        }
      } catch (error) {
        throw error;
      }
    };

    const handleManualEntry = async () => {
      try {
        const response = await PostManualTradeService(item.sid);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
          return true;
        }
      } catch (error) {
        throw error;
      }
    };

    const handleRetryPost = async () => {
      try {
        const response = await PostRetryService(item.sid);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
        }
      } catch (error) {
        throw error;
      }
    };

    const handleCancelPost = async () => {
      try {
        const response = await PostCancelService(item.sid);
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
        }
      } catch (error) {
        throw error;
      }
    };

    const handleChangeMultiplier = async (newMultiplier: number) => {
      try {
        const payload = {
          strategyId: item.sid,
          multiplier: Number(newMultiplier),
          executionTypeId: getValues("executionMode"),
        };
        const response = await postChangeMultiplierService({ payload });
        if (response.status === "success") {
          dispatch(
            saveDeployedStrategies({ deployedStrategyRes: response.data })
          );
          return true;
        }
      } catch (error) {
        throw error;
      }
    };

    // Updated handlers with proper value management
    const handleExecutionModeChange = (newMode: string) => {
      setState((prev) => ({
        ...prev,
        showPopup: true,
        popupData: {
          popupDescription:
            newMode === "LiveTrading"
              ? "Please confirm you want to switch to Live Trading."
              : "Please confirm you want to switch to Forward Test.",
          popupSecondDescription:
            newMode === "LiveTrading"
              ? ""
              : "All your open positions will be exited instantly.",
          popupPostCall: async () => {
            try {
              const success =
                newMode === "LiveTrading"
                  ? await handleToLiveTrading()
                  : await handleToForwardTest();

              if (success) {
                //  setValue("executionMode", newMode);
                prevExecutionMode.current = newMode;
              }
            } catch (error) {
              setValue("executionMode", prevExecutionMode.current);
            }
          },
          newValue: newMode,
        },
      }));
    };

    const handleMultiplierChange = (newMultiplier: number) => {
      const prevMultiplierValue = prevMultiplier.current; // Get previous value
      const deployedCapital = item?.requiredCapital * newMultiplier;
      setState((prev) => ({
        ...prev,
        showPopup: true,
        popupData: {
          popupDescription: `Please confirm you want to update the multiplier from ${prevMultiplierValue}x to ${newMultiplier}x.`,
          popupSecondDescription: `The deployed capital will be ₹ ${deployedCapital.toLocaleString(
            "en-IN"
          )}.`,
          popupPostCall: async () => {
            try {
              const success = await handleChangeMultiplier(newMultiplier);
              if (success) {
                //  setValue("multiplier", newMultiplier);
                prevMultiplier.current = newMultiplier;
              }
            } catch (error) {
              setValue("multiplier", prevMultiplier.current);
            }
          },
          newValue: newMultiplier,
        },
      }));
    };

    // Proper cancel handler
    const handleCancel = () => {
      setState((prev) => ({ ...prev, showPopup: false }));
      setValue("executionMode", prevExecutionMode.current);
      setValue("multiplier", prevMultiplier.current);
    };

    const handleUnSubscribeOptionClick = (sid: number, status: string) => {
      const statusRender = status?.toLowerCase() === "live" ? "live" : "error";
      if (status === "live" || status === "error") {
        setState((prevState) => ({
          ...prevState,
          showConfirmationPopup: true,
          popupData: {
            ...prevState.popupData, // Ensures existing popupData properties are retained
            popupDescription: `You cannot unsubscribe the strategy while it is in ${statusRender}`,
            popupPostCall: handleCloseInhouseEdit,
          },
        }));
      } else {
        setState((prev) => ({
          ...prev,
          popupData: {
            popupDescription:
              "Please confirm you want to unsubscribe the strategy.",
            popupPostCall: () => handleUnsubscribe(sid),
          },
          showPopup: true,
        }));
      }
    };

    const handleExitStrategyOptionClick = (sid: number, status: string) => {
      if (status === "live") {
        setState((prev) => ({
          ...prev,
          popupData: {
            popupDescription: "Please confirm you want to exit the strategy.",
            popupSecondDescription:
              "All your open positions will be exited instantly",
            popupPostCall: () => handleExitStrategy(sid),
          },
          showPopup: true,
        }));
      } else {
        handleExitStrategy(sid); // Directly hit the API if status is not "live"
      }
    };

    const handleErrorMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setState((prevState) => ({
        ...prevState,
        errorAnchorEl: event.currentTarget,
      }));
    };

    const handleErrorMenuClose = () => {
      setState((prevState) => ({
        ...prevState,
        errorAnchorEl: null,
      }));
    };

    return (
      <>
        <ColumnItemsDiv
          key={index}
          $backgroundcolor="white"
          $justifycontent="start"
          $aligncontent="start"
          $padding="2px"
          $borderradius="true"
          $width="100%"
          $ismobile={true}
        >
          <SecondDiv>
            <ColumnFlexDiv $flexdirection="row">
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
            <div className="dropdowndiv">
              <button
                className="button-custom"
                onClick={(e) => toggleDropdown(e, index)}
              >
                <img
                  src={MenuPopup}
                  alt="OptionsIcon"
                  className="searchImage"
                />
              </button>

              {isMobile
                ? openMenuIndex === index && (
                    <MobileMenu
                      item={item}
                      open={openMenuIndex === index}
                      onClose={() =>
                        setState((prevState) => ({
                          ...prevState,
                          openMenuIndex: null,
                          anchorEl: null,
                        }))
                      }
                      onDetailView={() => handleToggleTable(index)}
                      onPause={() => handleStandByStrategy(item.sid)}
                      onExit={() =>
                        handleExitStrategyOptionClick(item.sid, item.status)
                      }
                      onEdit={() => handleEditStrategy(item.sid, item.category)}
                      onSubscribe={() => {
                        handleUnSubscribeOptionClick(item.sid, item.status);
                      }}
                      onStrategy={handleStatisticsOpen}
                      onLogs={() => {
                        handleLogs();
                      }}
                    />
                  )
                : openMenuIndex === index && (
                    <ReusableMenu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl) && openMenuIndex === index}
                      // open={openMenuIndex === index}
                      onClose={() =>
                        setState((prevState) => ({
                          ...prevState,
                          openMenuIndex: null,
                          anchorEl: null,
                        }))
                      }
                      options={menuOptions}
                      withDivider={true}
                    />
                  )}
            </div>
          </SecondDiv>
          <DetailGridDiv>
            <DeployedStrategyCardDiv>
              <StyledDataBigText>{item.positionType || "--"}</StyledDataBigText>
              <StyledTertiaryText>Position Type</StyledTertiaryText>
            </DeployedStrategyCardDiv>
            <DeployedStrategyCardDiv>
              <HoverToFullValues
                $isrupee
                value={item.capital}
              ></HoverToFullValues>
              <StyledTertiaryText>Deployed Capital</StyledTertiaryText>
            </DeployedStrategyCardDiv>
            <DeployedSelectComp
              control={control}
              name="multiplier"
              heading="Multiplier"
              disabled={item.status === "live" || item.status === "error"}
              item={activeStrategiesDropdown.multiplier}
            />
            <DeployedSelectComp
              control={control}
              name="executionMode"
              heading="Execution Mode"
              disabled={item.status === "live" || item.status === "error"}
              item={activeStrategiesDropdown.executionType}
            />
            <DeployedStrategyCardDiv>
              {item.status === "error" ? (
                <>
                  <FlexRowDiv
                    $gap="8px"
                    $mobilegap="4px"
                    $flexdirection="row"
                    $justifycontent="center"
                    $rowdirection={true}
                  >
                    <ErrorManagmentDiv onClick={handleErrorMenuClick}>
                      <StyledStatusText
                        $status={
                          item.status?.toLowerCase().includes("pending")
                            ? "pending"
                            : item.status
                        }
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1).toLowerCase() || "--"}
                      </StyledStatusText>

                      <img
                        src={ErrorArrow}
                        alt="ErrorArrow"
                        className="errorArrowStyles"
                      />
                    </ErrorManagmentDiv>
                    <HoveredStyledButton
                      $mobilewidth="40%"
                      variant="contained"
                      onClick={() => {
                        handleLogs();
                      }}
                    >
                      Logs
                    </HoveredStyledButton>
                  </FlexRowDiv>

                  <StyledMenu
                    anchorEl={errorAnchorEl}
                    open={Boolean(errorAnchorEl)}
                    onClose={handleErrorMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    MenuListProps={{
                      autoFocusItem: false,
                    }}
                  >
                    <StyledErrorMenuItem
                      $option="manually traded"
                      onClick={handleManualEntry}
                    >
                      MANUALLY TRADED
                    </StyledErrorMenuItem>
                    <StyledErrorMenuItem
                      $option="retry"
                      onClick={handleRetryPost}
                    >
                      RETRY
                    </StyledErrorMenuItem>
                    <StyledErrorMenuItem
                      $option="cancel"
                      $lastoption={true}
                      onClick={handleCancelPost}
                    >
                      CANCEL
                    </StyledErrorMenuItem>
                  </StyledMenu>
                </>
              ) : (
                <StyledStatusText
                  $status={
                    item.status?.toLowerCase().includes("placing")
                      ? "placing"
                      : item.status?.toLowerCase().includes("pending")
                      ? "pending"
                      : item.status?.toLowerCase().includes("exited-manually")
                      ? "exit"
                      : item.status
                  }
                >
                  {item.status.charAt(0).toUpperCase() +
                    item.status.slice(1).toLowerCase() || "--"}
                  {/* {item.strategyLegTableDTO.strategyStatus} */}
                </StyledStatusText>
              )}

              <StyledTertiaryText>Status</StyledTertiaryText>
            </DeployedStrategyCardDiv>
            <DeployedStrategyCardDiv>
              {item.counter ? (
                <HoverToFullValues
                  $isrupee
                  $ispnl
                  $istextsmall
                  value={item.strategyLegTableDTO.strategyMTM}
                ></HoverToFullValues>
              ) : (
                "--"
              )}
              <StyledTertiaryText>P&L</StyledTertiaryText>
            </DeployedStrategyCardDiv>
          </DetailGridDiv>
          {showPopup && (
            <ConfirmationPopup
              open={showPopup}
              onClose={handleCancel}
              firstdescription={popupData.popupDescription}
              seconddescription={popupData.popupSecondDescription}
              handlePostCall={async () => {
                try {
                  popupData.popupPostCall();
                } finally {
                  setState((prev) => ({ ...prev, showPopup: false }));
                }
              }}
            />
          )}
          {showConfirmationPopup && (
            <ConfirmationPopup
              open={showConfirmationPopup}
              onClose={() => handleCloseInhouseEdit()}
              handlePostCall={() => popupData.popupPostCall()}
              firstdescription={popupData.popupDescription}
              inHouseEdit={true}
            />
          )}
          {showCustomizeDeploy && (
            <DeployPopUp
              open={showCustomizeDeploy}
              onClose={() => handleCloseCustomizeDeploy()}
              item={customizeDeployStrategy}
              isStrategyLive={item.status === "live"}
            />
          )}
          {showLogs && (
            <LogsPopUp
              open={showLogs}
              onClose={handleCloseLogsPopup}
              item={item}
            />
          )}
          {showTableIndex === index && (
            <StrategyTableComp id={item.sid} sname={item.name} />
          )}
        </ColumnItemsDiv>

        {showDeployedStatistics && (
          <DeployedStrategyStatistics
            open={showDeployedStatistics}
            onClose={handleStatisticsClose}
            strategyId={item.sid}
          />
        )}
      </>
    );
  }
);

export default DeployedStrategyCard;
