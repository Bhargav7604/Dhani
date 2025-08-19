import {
  StyledSecondaryHeadlineText,
  StyledStatusText,
  StyledTertiaryText,
} from "../../../../../../user/src/components/ui/GlobalStyles";
import {
  DeployedStrategyCardDiv,
  DetailGridDiv,
  ErrorManagmentDiv,
  StyledErrorMenuItem,
  StyledMenu,
  StyledOption,
} from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesStyles";
import {
  DeployedStrategiesCardProps,
  StateType,
} from "../../../../../../user/src/modules/deployedstrategies/DeployedStrategiesUtils";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  PostCancelService,
  PostManualTradeService,
  PostRetryService,
} from "../../../../../../user/src/modules/deployedstrategies/services/DeployedStrategiesServices";

import { BorderDiv } from "../../../nocodestrategy/NoCodeStrategyStyles";
import { useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { useForm } from "react-hook-form";
import DeployedStrategyStatistics from "../../sections/statistics/StrategyStatistics";
import {
  navigationToPage,
  saveStrategyID,
} from "../../../nocodestrategy/state-slice/NoCodeStrategySlice";
import { useNavigate } from "react-router-dom";
import MenuPopup from "../../../../assets/svg/MenuPopup.svg";
import ErrorArrow from "../../../../assets/svg/ErrorArrow.png";
import StrategyTableComp from "../../../../../../user/src/modules/deployedstrategies/sections/detailviewtable/DetailViewTable";
import HoverToFullValues from "../../../../../../user/src/components/hoverfullvalues/HoverToFullValues";
import DeployPopUp from "../../../../../../user/src/modules/readytodeploy/sections/customizedeploy/CustomizeDeployPopUp";
import ConfirmationPopup from "../../../../../../user/src/modules/deployedstrategies/sections/confirmationpopup/ConfirmationPopup";
import { StrategyAPIResponse } from "../../../nocodestrategy/services/NoCodeStrategyServiceTypes";
import {
  ColumnFlexDiv,
  Imagesdiv,
} from "../../../../../../user/src/modules/readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { saveDeployedStrategies } from "../../state-slice/UserStrategySlice";
import DeployedSelectComp from "../deployselectcomp/DeploysSelectComp";
import {
  ColumnItemsDivision,
  StyledDataBigText,
} from "../../../../components/ui/GlobalStyles";
import { AdminDropdownMenu, SecondDivision } from "../../UsersStyles";
import {
  postChangeMultiplierService,
  postExitAdminStrategyService,
  postPauseByStrategyService,
} from "../../services/AppServices";
import LogsPopUp from "../logspopup/LogsPopUp";
import MobileMenu from "../deployedmenupopup/MobileMenu";

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
  showErrorMenu: null,
  anchorEl: null,
};

const DeployedStrategyCard = ({
  item,
  index,
  userId,
}: DeployedStrategiesCardProps) => {
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
    showErrorMenu,
  } = state;
  const { control, watch, setValue, getValues } = useForm();
  const prevExecutionMode = useRef<string>(item.execution);
  const prevMultiplier = useRef<number | string>(Number(item.multiplier));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
  const handleOptionClick = (callback: () => void) => {
    callback();
    setState((prevState) => ({
      ...prevState,
      openMenuIndex: null,
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

  const toggleDropdown = (index: number) => {
    setState((prevState) => ({
      ...prevState,
      openMenuIndex: prevState.openMenuIndex === index ? null : index,
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

  async function handleExitStrategy(strategyId: number) {
    const params = {
      strategyId,
      userId,
    };

    try {
      const config = { params };
      const response = await postExitAdminStrategyService(config);
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
    const params = {
      strategyId,
      userId,
    };
    try {
      const config = { params };

      const response = await postPauseByStrategyService(config);
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
    } else if (category === "popular") {
      const strategy = allStrategies.find((strat) => strat.id === strategyId);
      if (strategy) {
        setState((prevstate) => ({
          ...prevstate,
          showCustomizeDeploy: true,
          customizeDeployStrategy: strategy,
        }));
      }
    } else {
      dispatch(saveStrategyID({ selectedStrategyID: strategyId }));
      dispatch(navigationToPage({ currentPage: "mysaved" }));
      navigate("/nocodestrategybuilder");
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

  const watchedMultiplier = watch("multiplier");
  const isFirstRender = useRef(true);

  useEffect(() => {
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
      if (watchedMultiplier !== prevMultiplier.current) {
        // Revert immediately and show popup
        setValue("multiplier", prevMultiplier.current);
        handleMultiplierChange(watchedMultiplier);
      }
    };

    handleChange();
  }, [watchedMultiplier]);

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
        userId,
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
      showErrorMenu: event.currentTarget,
    }));
    // console.log("dropdown called");
  };

  const handleErrorMenuClose = () => {
    setState((prevState) => ({
      ...prevState,
      showErrorMenu: null,
    }));
  };

  // useEffect(() => {
  //   if (item) {
  //     setIsLoading(false);
  //   }
  // }, [item]);

  return (
    <>
      <ColumnItemsDivision
        key={index}
        $backgroundcolor="white"
        $justifycontent="start"
        $aligncontent="start"
        $padding="2px"
        $borderradius="true"
        $width="100%"
        $ismobile={true}
        $border
      >
        <SecondDivision>
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
            <div
              className="button-custom"
              onClick={() => toggleDropdown(index)}
            >
              <img src={MenuPopup} alt="OptionsIcon" className="searchImage" />
            </div>

            {isMobile
              ? openMenuIndex === index && (
                  <MobileMenu
                    item={item}
                    open={openMenuIndex === index}
                    onClose={() => toggleDropdown(index)}
                    onDetailView={() => handleToggleTable(index)}
                    onPause={() => handleStandByStrategy(item.sid)}
                    onExit={() =>
                      handleExitStrategyOptionClick(item.sid, item.status)
                    }
                    onEdit={() => handleEditStrategy(item.sid, item.category)}
                    onStrategy={handleStatisticsOpen}
                    onLogs={() => {
                      handleLogs();
                    }}
                  />
                )
              : openMenuIndex === index && (
                  <AdminDropdownMenu
                    open={openMenuIndex === index}
                    ref={dropdownRef}
                  >
                    <StyledOption
                      onClick={() =>
                        handleOptionClick(() => handleToggleTable(index))
                      }
                    >
                      DETAIL VIEW
                    </StyledOption>
                    <BorderDiv></BorderDiv>
                    <StyledOption
                      onClick={() => handleOptionClick(handleStatisticsOpen)}
                    >
                      STATISTICS
                    </StyledOption>
                    <BorderDiv></BorderDiv>
                    {/* <StyledOption
                      onClick={() =>
                        handleEditStrategy(item.sid, item.category)
                      }
                    >
                      EDIT STRATEGY
                    </StyledOption>
                    <BorderDiv></BorderDiv> */}

                    <StyledOption
                      onClick={() =>
                        item.status !== "error" &&
                        handleOptionClick(() => handleStandByStrategy(item.sid))
                      }
                      $disabled={item.status === "error"}
                    >
                      {item.status === "standby"
                        ? "RESUME"
                        : item.status.toLowerCase().includes("cancelled")
                        ? "RETRY"
                        : item.status === "error" || item.status === "exit"
                        ? "RESTART"
                        : "PAUSE"}
                    </StyledOption>
                    <BorderDiv></BorderDiv>
                    {/* <StyledOption
                      onClick={() =>
                        handleUnSubscribeOptionClick(item.sid, item.status)
                      }
                    >
                      UNSUBSCRIBE
                    </StyledOption>
                    <BorderDiv></BorderDiv> */}
                    {!(item.status === "exit") && (
                      <>
                        <StyledOption
                          $exitstrategy="true"
                          onClick={() =>
                            handleExitStrategyOptionClick(item.sid, item.status)
                          }
                        >
                          EXIT STRATEGY
                        </StyledOption>
                        <BorderDiv></BorderDiv>
                      </>
                    )}
                    <StyledOption
                      onClick={() => handleOptionClick(() => handleLogs())}
                    >
                      LOGS
                    </StyledOption>
                  </AdminDropdownMenu>
                )}
          </div>
        </SecondDivision>

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
            disabled={item.status === "live"}
            item={activeStrategiesDropdown?.multiplier}
          />
          <DeployedSelectComp
            control={control}
            name="executionMode"
            heading="Execution Mode"
            disabled={item.status === "live"}
            item={activeStrategiesDropdown?.executionType}
          />
          <DeployedStrategyCardDiv>
            {item.status === "error" ? (
              <>
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

                <StyledMenu
                  anchorEl={showErrorMenu}
                  open={Boolean(showErrorMenu)}
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
      </ColumnItemsDivision>

      {showDeployedStatistics && (
        <DeployedStrategyStatistics
          open={showDeployedStatistics}
          onClose={handleStatisticsClose}
          strategyId={item.sid}
        />
      )}
    </>
  );
};

export default DeployedStrategyCard;
