// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  ButtonsFlexDiv,
  CardWrapper,
  CategoryItem,
  ColumnFlexDiv,
  ContentText,
  CreatedText,
  DetailsDiv,
  DetailTitleText1,
  DetailValueText2,
  FirstDiv,
  FlexDiv,
  Imagesdiv,
  SecondDiv,
  StatusText,
  StrategyCardDetail,
  StyledReadMore,
} from "./StrategiesCardStyles";
import { StyledPara } from "../../../../../../../packages/ui/src/sharedstyles/SharedStyledComps";
import dayjs from "dayjs";
import {
  FlexRowDiv,
  HoveredStyledButton,
  MainStyledButton,
  StyledDataBigText,
  StyledSecondaryHeadlineText,
} from "../../../../components/ui/GlobalStyles";
import CustomizeDeployPopUp from "../customizedeploy/CustomizeDeployPopUp";
import { useState } from "react";
import { StrategyAPIResponse } from "../../services/AllStrategiesServiceTypes";
import { useAppDispatch } from "../../../../store/Store";
import OneClickDeplyPopUp from "../oneclickdeploy/OneClickDeplyPopup";
import { useNavigate } from "react-router-dom";
import {
  navigationToPage,
  saveStrategyID,
  showEditDIYForm,
} from "../../../nocodestrategy/state-slice/NoCodeStrategySlice";
import { useMediaQuery } from "@mui/material";
import ConfirmationPopup from "../../../deployedstrategies/sections/confirmationpopup/ConfirmationPopup";
import { postUnDeployService } from "../../services/AllStrategiesServices";
import { saveStrategies } from "../../state-slice/StartegySlice";
import HoverToFullValues from "../../../../components/hoverfullvalues/HoverToFullValues";

export type StrategiesCardProps = {
  item: StrategyAPIResponse;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  mobilewidth?: string;
  tabwidth?: string;
  lapwidth?: string;
  name?: string;
  desc?: string;
};

export interface StateType {
  showConfirmationPopup: boolean;
}

const InitialState: StateType = {
  showConfirmationPopup: false,
};

const StrategiesCard = ({
  item,
  width,
  maxWidth,
  minWidth,
  mobilewidth,
  tabwidth,
  lapwidth,
}: StrategiesCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showOneClickModel, setShowOneClickModel] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, setState] = useState<StateType>(InitialState);
  const { showConfirmationPopup } = state;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isMobileLandscape = useMediaQuery("(max-width:769px)");
  const isLaptop = useMediaQuery("(min-width:770px)");

  const charLimit = isMobileLandscape ? 50 : isLaptop ? 58 : 50;

  function togglePopupModal(strategyID: number) {
    const validCategories = ["popular", "Popular", "In-House", "inhouse"];

    if (validCategories.includes(item.category)) {
      setShowModal(true);
    } else {
      navigate("/nocodestrategybuilder");
      dispatch(saveStrategyID({ selectedStrategyID: strategyID }));
      dispatch(navigationToPage({ currentPage: "mysaved" }));
      dispatch(showEditDIYForm({ DIYForm: true }));
    }
  }

  function toggleOneClickModal() {
    setShowOneClickModel(true);
  }

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  function closePopupModal() {
    setShowModal(!showModal);
  }

  function closeOneClickModal() {
    setShowOneClickModel(!showOneClickModel);
  }

  const handleConfirmationPopup = () => {
    setState((prevState) => ({
      ...prevState,
      showConfirmationPopup: true,
    }));
  };

  const handleCloseConfirmationPopup = () => {
    setState((prevState) => ({
      ...prevState,
      showConfirmationPopup: false,
    }));
  };

  async function handleUndeployPostService(strategyId: number) {
    try {
      const response = await postUnDeployService(strategyId);
      if (response.status === "success") {
        dispatch(saveStrategies({ strategiesRes: response.data }));
        setState((prevState) => ({
          ...prevState,
          showConfirmationPopup: false,
        }));
      }
    } catch (error) {
      throw error;
    }
  }

  const itemNameDp = item?.name
    .split(" ")
    .filter((_, index) => index === 0)
    .map((word) => word.slice(0, 2).toUpperCase())
    .join("");

  const formatTime = (hour: string | number, minute: number) => {
    const hourInt = parseInt(hour.toString(), 10);
    const minuteStr = minute.toString().padStart(2, "0");
    const period = hourInt > 11 ? "PM" : "AM";
    const formattedHour = hourInt % 12 === 0 ? 12 : hourInt % 12; // Convert 0 or 12 to 12-hour format
    return `${formattedHour}:${minuteStr} ${period}`;
  };

  return (
    <FlexRowDiv>
      <CardWrapper
        $width={width}
        $mobilewidth={mobilewidth}
        $tabwidth={tabwidth}
        $lapwidth={lapwidth}
        $minwidth={minWidth}
        $maxwidth={maxWidth}
      >
        <SecondDiv>
          <ColumnFlexDiv $flexdirection="row">
            <Imagesdiv>
              <StyledDataBigText $bold={true} $color={true}>
                {itemNameDp}
              </StyledDataBigText>
            </Imagesdiv>
            <ColumnFlexDiv $gap="0px" $alignstart="true">
              <StyledSecondaryHeadlineText>
                {item.name || ""}
              </StyledSecondaryHeadlineText>
              <CreatedText>
                Created:{" "}
                {`${dayjs().diff(
                  dayjs(Number(item.createdAt) * 1000),
                  "day"
                )} days ago`}
              </CreatedText>
            </ColumnFlexDiv>
          </ColumnFlexDiv>

          <ColumnFlexDiv $gap="6px">
            <FlexDiv $justifyStart={true} $gap="2px">
              <StyledPara>Category: </StyledPara>
              <CategoryItem>
                {item?.category === "inhouse"
                  ? "In-House"
                  : item?.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
              </CategoryItem>
            </FlexDiv>
            <FlexDiv $justifyStart={true} $gap="2px">
              <StyledPara>Status: </StyledPara>
              <StatusText $status={item.status}>
                {item.status.charAt(0).toUpperCase() + item?.status.slice(1)}
              </StatusText>
            </FlexDiv>
          </ColumnFlexDiv>
        </SecondDiv>
        <ContentText $isExpanded={isExpanded} onClick={toggleContent}>
          {item?.description
            ? isExpanded
              ? item?.description
              : `${item.description.slice(0, charLimit)}`
            : ""}
          {item?.description.length > charLimit && (
            <StyledReadMore>
              {isExpanded ? "Read Less" : "Read More"}
            </StyledReadMore>
          )}
        </ContentText>
        <StrategyCardDetail>
          <DetailsDiv>
            <DetailValueText2>
              {item.minCapital != null ? (
                <HoverToFullValues value={item.minCapital} $isrupee />
              ) : (
                "--"
              )}
            </DetailValueText2>
            <DetailTitleText1>Required Capital</DetailTitleText1>
          </DetailsDiv>
          <DetailsDiv>
            <DetailValueText2>{item.drawDown}%</DetailValueText2>
            <DetailTitleText1>DrawDown</DetailTitleText1>
          </DetailsDiv>
          <DetailsDiv>
            <DetailValueText2>
              {formatTime(
                item.entryDetails.entryHourTime,
                item.entryDetails.entryMinsTime
              ) ?? "--"}
            </DetailValueText2>
            <DetailTitleText1>Start Time</DetailTitleText1>
          </DetailsDiv>
          <DetailsDiv>
            <DetailValueText2>
              {formatTime(
                item.exitDetails.exitHourTime,
                item.exitDetails.exitMinsTime
              ) ?? "--"}
            </DetailValueText2>
            <DetailTitleText1>End Time</DetailTitleText1>
          </DetailsDiv>
        </StrategyCardDetail>
        <FirstDiv>
          <ButtonsFlexDiv $gap="6px">
            <HoveredStyledButton
              variant="contained"
              $mobilewidth="30%"
              $minwidth={item.category === "In-House" ? "35%" : "20%"}
              disabled={item.subscription === "N"}
              onClick={() => handleConfirmationPopup()}
            >
              Undeploy
            </HoveredStyledButton>
            {item.category !== "In-House" && (
              <HoveredStyledButton
                onClick={() => {
                  togglePopupModal(item.id);
                }}
                variant="contained"
                $mobilewidth="30%"
                $minwidth="35%"
              >
                {item.subscription === "Y"
                  ? "Edit Strategy"
                  : "Customize & Deploy"}
              </HoveredStyledButton>
            )}

            <MainStyledButton
              onClick={toggleOneClickModal}
              $width="35%"
              variant="contained"
              $mobilewidth="30%"
              $fill={true}
              disabled={item.subscription === "Y"}
            >
              {item.subscription === "Y"
                ? "Deployed"
                : item.category === "In-House"
                ? "Deploy"
                : "One Click deploy"}
            </MainStyledButton>
          </ButtonsFlexDiv>
        </FirstDiv>
        {showModal && (
          <CustomizeDeployPopUp
            open={showModal}
            onClose={closePopupModal}
            item={item as StrategyAPIResponse}
            isStrategyLive={item.status === "live"}
          />
        )}
        {showOneClickModel && (
          <OneClickDeplyPopUp
            open={showOneClickModel}
            onClose={closeOneClickModal}
            item={item as StrategyAPIResponse}
          />
        )}
        {showConfirmationPopup && (
          <ConfirmationPopup
            open={showConfirmationPopup}
            onClose={() => handleCloseConfirmationPopup()}
            firstdescription="Please confirm you want to undeploy the strategy"
            seconddescription={
              item.status === "live"
                ? "All your open positions will be exited instantly"
                : ""
            }
            handlePostCall={() => handleUndeployPostService(item.id)}
          />
        )}
      </CardWrapper>
    </FlexRowDiv>
  );
};

export default StrategiesCard;
