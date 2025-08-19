import styled from "styled-components";
import { Button, FormControlLabel, FormGroup } from "@mui/material";
import {
  CardWrapperProps,
  PopUpColumnItemsProps,
  StyledFCLProps,
  FlexDivProps,
  StyledImgageProps,
  StartegyColumnFlex,
  StatusProps,
  PopupButtonsProps,
  PopUpModalWrapperProps,
  DeployFormProps,
} from "./StrategiesCardUtils";

export const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  padding: 2px;
  overflow-x: visible;
  box-sizing: border-box;
  background-color: white;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  border: 1px solid ${(props) => props.theme.app.colors.headerbackground};
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  gap: 16px;
  z-index: 1;
  width: ${(props) => props.$width || "100%"};
  max-width: ${(props) => props.$maxwidth || ""};

  transition: border-color 0.3s ease, border-top-width 0.3s ease,
    border-bottom-width 0.3s ease, border-left-width 0.3s ease,
    border-right-width 0.3s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: ${(props) => props.$mobilewidth || "100%"};
    gap: 18px;
    min-width: ${(props) => props.$minwidth || ""};
    align-items: center;
    max-width: 480px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: ${(props) => props.$tabwidth || "100%"};
    /* z-index: 999; */
    max-width: 480px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: ${(props) => props.$lapwidth || "100%"};
  }

  @media (min-width: ${(props) => props.theme.app.resolutions.desktopMax}) {
    max-width: 730px;
  }
`;

export const StrategyCardDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 0px 14px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    justify-content: space-around;
    gap: 0px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const ExitCoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 8px;
  row-gap: 12px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 18px;
    padding: 6px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CreatedText = styled.p`
  font-size: 9px;
  font-weight: 500;
  color: ${(props) => props.theme.app.colors.status.inactive};

  text-align: end;
`;

export const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  width: 100%;
`;

export const FlexDiv = styled.div<FlexDivProps>`
  display: flex;
  justify-content: ${({ $justifyStart }) =>
    $justifyStart ? "flex-end" : "space-between"};
  align-items: center;
  padding: ${(props) => (props.$card ? "14px 20px 14px 0px" : "")};
  width: 100%;
  gap: ${(props) => props.$gap || "14px"};
`;

export const ButtonsFlexDiv = styled.div<FlexDivProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0px;
  width: 100%;
  gap: ${(props) => props.$gap || "14px"};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    justify-content: center;
    padding: 6px 0px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
    justify-content: center;
    gap: 6px;
  }
`;

export const StatusText = styled.span<StatusProps>`
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 6px;
  color: ${({ $status }) => {
    switch ($status) {
      case "live":
        return " #3F51B5"; // Blue
      case "active":
        return " #00B591";
      case "standby":
        return " orange";
      case "available":
        return "rgb(33, 163, 210)"; // Yellow
      case "error":
        return "#F44336"; // Bright Red for errors
      case "exit":
        return "#D32F2F"; // Darker Red for exit
      default:
        return "rgb(80, 78, 77)"; // Default Grey
    }
  }};

  background-color: ${({ $status }) => {
    switch ($status) {
      case "live":
        return "rgba(91, 105, 181, 0.2)"; // Blue with opacity
      case "active":
        return "rgba(0, 181, 145, 0.20)";
      case "standby":
        return "rgba(255, 165, 0, 0.20)"; // Orange with opacity
      case "available":
        return "rgb(210, 240, 246)"; // Yellow with opacity
      case "error":
        return "rgba(244, 67, 54, 0.20)"; // Bright Red with opacity
      case "exit":
        return "rgba(211, 47, 47, 0.20)"; // Dark Red with opacity
      default:
        return "rgba(189, 189, 189, 0.20)"; // Grey with opacity
    }
  }};
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.app.colors.headerbackground};
  min-height: 50px;
  padding: 2px 6px;
  border-radius: 9px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    gap: 2px;
    padding: 4px;
    min-height: 36px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 2px;
    padding: 4px;
    min-height: 36px;
  }
`;

export const Imagesdiv = styled.div`
  background-color: ${(props) => props.theme.app.colors.bright};
  border-radius: 50%;
  padding: 8px;
  min-width: 32px;
  min-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 4px;
  }
`;

export const StyledImage = styled.img<StyledImgageProps>`
  display: block;
  width: ${(props) => (props.$width ? props.$width : "60px")};
  height: ${(props) => (props.$height ? props.$height : "60px")};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: ${(props) => (props.$width ? props.$width : "30px")};
    height: ${(props) => (props.$height ? props.$height : "30px")};
  }
`;

export const ColumnFlexDiv = styled.div<StartegyColumnFlex>`
  display: flex;
  flex-direction: ${(props) =>
    props.$flexdirection ? props.$flexdirection : "column"};
  gap: ${(props) => (props.$gap ? props.$gap : "12px")};
  justify-content: center;
  align-items: ${(props) => (props.$alignstart ? "start" : "center")};
`;

export const ContentText = styled.p<{ $isExpanded?: boolean }>`
  font-size: 12px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  text-align: justify;
  min-height: 46px;
  max-height: 46px;
  padding: 0px 12px;
  color: ${(props) => props.theme.app.colors.status.inactive};
  white-space: ${(props) => (props.$isExpanded ? "normal" : "nowrap")};
  overflow-y: auto;
  text-overflow: ${(props) => (props.$isExpanded ? "clip" : "ellipsis")};
  display: inline-block;
  cursor: pointer;
  width: 100%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
    width: 100%;
    min-height: 38px;
    max-height: 38px;
  }

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none;
`;
export const StyledReadMore = styled.span`
  display: block;
  color: ${(props) => props.theme.app.colors.text.secondary};
`;
export const CategoryItem = styled.p`
  font-size: 10px;
  font-weight: ${(props) => props.theme.app.weights.semiBold};
  color: #000000;
  white-space: nowrap;
  background-color: ${(props) =>
    props.theme.app.colors.status.strategycategory};
  border-radius: 4px;
  padding: 2px 6px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 2px 8px;
    font-size: 10px;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    justify-content: center;
    align-items: center;
  }
`;

export const DetailTitleText1 = styled.p`
  font-size: 12px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  color: ${(props) => props.theme.app.colors.text.description};
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;
export const DetailValueText2 = styled.div`
  font-size: 1rem;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  color: ${(props) => props.theme.app.colors};
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 0.8rem;
  }
`;
export const StyledButton = styled(Button)`
  &.MuiButton-contained {
    background-color: ${(props) => props.theme.app.colors.buttons.primary};
    color: white;
    width: 40%;
    font-size: 14px;
  }
`;

export const PopUpModalWrapper = styled.div<PopUpModalWrapperProps>`
  position: fixed;
  background-color: white;
  padding: 20px !important;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.$width || "85%"};
  border-radius: 10px;
  overflow-x: hidden;
  max-width: ${(props) => props.$maxwidth || "1280px"};
  max-height: ${(props) => props.$maxheight || ""};
  overflow-y: auto;
  gap: ${(props) => props.$gap || ""};
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: ${(props) => props.$tabwidth || "90%"};
    padding: 6px 12px;
    max-height: 70vh;

    justify-content: start;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) {
    width: 95%;
    max-height: 70%;
    justify-content: start;
    padding: 2px;
    overflow-y: auto;
    max-width: ${(props) => (props.$logspopup ? "410px" : "")};
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 14px !important;
    gap: 12px;
  }
`;

export const CoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  row-gap: 12px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 6px;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
`;

export const PopupButtonsDiv = styled.div<PopupButtonsProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: center;
  width: 100%;
  padding: ${(props) => props.$nopadding || "12px"};
  gap: ${(props) => props.$gap || "44px"};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    justify-content: ${(props) => props.$justifycontent || "space-between"};
    gap: 10px;
  }
`;

export const MainPopupHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const CapitalText = styled.span`
  color: ${(props) => props.theme.app.colors.text.secondary};
  font-weight: 600;
`;
export const TitleHeader = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 16px;
  }
`;

export const PopupColumnItems = styled.div<PopUpColumnItemsProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: ${(props) => props.$aligncontent || "center"};
  gap: 6px;
  background-color: white;
  padding: 6px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$backgroundcolor || props.theme.app.colors.primary};
  width: ${(props) => props.$width || ""};

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    padding: 0px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;

export const StyledFCL = styled(FormControlLabel)<StyledFCLProps>`
  background-color: ${(props) =>
    props.isChecked ? props.theme.app.colors.border.main : ""};
  color: ${(props) => (props.isChecked ? "white" : "black")};
  .MuiCheckbox-root {
    color: ${(props) => (props.isChecked ? "white" : "black")} !important;
    font-size: 10px !important;
  }
  .MuiCheckbox-label {
    font-size: 8px !important;
  }

  .MuiTypography-root {
    font-size: 12px !important;
  }
  border: ${(props) => (props.isChecked ? "" : "1px solid black")};
  border-radius: 6px;
  padding: 0px 4px !important;
  max-height: 33px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start !important;
`;

export const StyledFromGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row !important;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 0px;
    margin-left: 0px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 4px;
  }
`;

export const WeekDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    margin-left: 6px;
  }
`;

export const StyledDeployForm = styled.form<DeployFormProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: ${(props) => (props.$padding ? "0px 10px" : "0px")};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 0px;
  }
`;

export const Header = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: gray;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const OneclickPopUpModalWrapper = styled.div`
  position: fixed;
  background-color: white;
  padding: 20px 12px !important;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  border-radius: 10px;
  overflow-x: hidden;
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 50%;
    max-width: 520px;
    min-width: 520px;
    padding: 6px 12px;
    justify-content: start;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) {
    width: 95%;
    justify-content: start;
    padding: 2px;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 14px !important;
    gap: 12px;
  }
`;
