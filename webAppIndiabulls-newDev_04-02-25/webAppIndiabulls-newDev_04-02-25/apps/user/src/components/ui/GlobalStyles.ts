import styled from "styled-components";

import { Select, FormControl, Button } from "@mui/material";

import {
  StyledButtonProps,
  StyledFormControlProps,
  ColumnItemsProps,
  FlexRowProps,
  ContentEndProps,
  WrapperProps,
  DynamicWrapperProps,
  StyledSelectOptionProps,
  MenuCardProps,
  ColumnFlexDivProps,
  CornerItemsDivProps,
  StatusTextProps,
  StyledDataBigTextProps,
  StyledTertiaryProps,
  NoSearchtextProps,
  StyledDiySelectProps,
  StyledSecondaryHeadlineTextProps,
  NormalTextprops,
} from "./GlobalStylesUtils";
import { SelectProps } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SearchWrapperDivProps } from "../../modules/readytodeploy/sections/strategiescard/StrategiesCardUtils";
import {
  ConfirmationProps,
  DiyButtonProps,
  DiyInputProps,
} from "../../modules/nocodestrategy/NoCodeStrategyUtils";

export const HomeHeaderText = styled.p<{ title?: string; size?: string }>`
  font-size: ${(props) => (props.title ? "24px" : "22px")};
  font-weight: 600;
  color: ${(props) =>
    props.title
      ? props.theme.app.colors.dhanigraysecondary
      : props.theme.app.colors.text.Header};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 18px;
  }
`;

export const WrapperDiv = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1vh;
  width: 100%;
  z-index: 100;
  background-color: ${(props) =>
    props.backgroundcolor || props.theme.app.colors.mainbackgroundcolor};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 0.5vh;
    min-width: 0px;
    max-width: 100vw;
    padding: 0px 6px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    min-width: 0px;
    width: 100%;
    padding: 8px 8px 0px 8px;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    min-width: 0px;
    gap: 0px;
    width: 100%;
    max-width: 100vw;
    padding: 0px 6px;
  }
`;

export const DynamicWrapperDiv = styled.div<DynamicWrapperProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  gap: 1vh;
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  padding: ${(props) => (props.$nopadding ? "" : "7px 12px")};
  justify-content: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 1vh;
    padding: 6px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 1vh;
    padding: 8px;
  }
`;

export const NoSearchText = styled.p<NoSearchtextProps>`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.app.colors.text.secondary};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 16px;
    color: ${(props) => (props.firstChild ? "#1667d9" : "")};
  }
`;

export const StyledMainHeadlineText = styled.p`
  font-size: 28px;
  color: ${(props) => props.theme.app.colors.text.primary};
  font-weight: ${(props) => props.theme.app.weights.semiBold};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 20px;
  }
`;

export const StyledSecondaryHeadlineText = styled.p<StyledSecondaryHeadlineTextProps>`
  font-size: 18px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  max-width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  $color: ${(props) =>
    props.color
      ? props.theme.app.colors.text.primary
      : props.theme.app.colors.text.secondheader};
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    max-width: 120px;
    font-size: 1rem;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    max-width: 240px;
  }
`;

export const StyledTertiaryText = styled.p<StyledTertiaryProps>`
  font-size: ${(props) => (props.$firstchild ? props.$firstchild : "14px")};
  position: ${(props) => (props.$absolute ? props.$absolute : "")};
  bottom: 0px;
  right: 0px;
  color: ${(props) =>
    props.$colordark
      ? props.theme.app.colors.text.primary
      : props.$colorblue
      ? props.theme.app.colors.text.secondary
      : props.theme.app.colors.text.tertiaryheader};
  font-weight: ${(props) => props.theme.app.weights.lukeBold};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    color: ${(props) =>
      props.$firstchild
        ? props.theme.app.colors.text.secondary
        : ""} !important;
    font-size: 0.8rem;
  }
`;

export const StyledDataBigText = styled.p<StyledDataBigTextProps>`
  font-weight: ${(props) =>
    props.firstChild
      ? props.theme.app.weights.semiBold
      : props.theme.app.weights.lukeBold};

  font-size: ${(props) =>
    props.$fontsize ? props.$fontsize : props.$istable ? "14px" : "16px"};
  text-overflow: ellipsis;
  white-space: ${(props) => (props.$errmsg ? "normal" : "nowrap")};
  max-width: ${(props) => (props.$errmsg ? "fit-content" : "180px")};
  overflow: hidden;
  display: block;
  color: ${(props) =>
    props.$color
      ? props.theme.app.colors.border.main
      : (props) =>
          props.$errmsg
            ? props.theme.app.colors.text.secondaryexit
            : props.theme.app.colors.text.dark};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 0.8rem;
    font-weight: ${(props) => props.theme.app.weights.semiBold};
    paddig: 4px;
    max-width: ${(props) => (props.$errmsg ? "fit-content" : "150px")};
  }
`;
export const StyledStatusText = styled.p<StatusTextProps>`
  font-size: 18px;
  color: ${(props) => {
    switch (props.$status) {
      case "active":
        return "#01AB4F";
      case "live":
        return "rgb(26, 73, 241)";
      case "paused":
        return "#0a0c0eff";
      case "error":
        return "rgb(139, 1, 1)";
      case "exit":
        return " #FF585D";
      case "pending":
        return "rgb(207, 108, 15)";
      case "placing":
        return "rgb(71, 61, 133)";
 
      default:
        return props.theme.app.colors.text.secondary;
    }
  }};

  font-weight: ${(props) => props.theme.app.weights.normal};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 14px;
    font-weight: 600;
  }
`;
export const StledDescriptionText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.app.colors.text.tertiaryheader};
  font-weight: ${(props) => props.theme.app.ThemeConstants.lukeBold};
`;
export const StyledButtonText = styled.p<{ color?: string }>`
  font-size: 14px;
  color: ${(props) => props.color || props.theme.app.colors.text.secondary};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;

export const ColumnItemsDiv = styled.div<ColumnItemsProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: ${(props) => props.$aligncontent || "center"};
  gap: 4px;
  /* overflow: auto; */
  padding: ${(props) => props.$padding || "0px"};
  border: ${(props) =>
    props.$border ? `1px solid ${props.theme.app.colors.border.main}` : ""};
  background-color: ${(props) =>
    props.$backgroundcolor || props.theme.app.colors.mainWebBackground};
  width: ${(props) => props.$width || ""};
  border-radius: ${(props) =>
    props.$borderradius ? props.theme.app.measures.borderRadius : ""};
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    padding: 10px 6px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    padding: ${(props) => (props.$ismobile ? "2px" : "6px 16px")};
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;

export const StrategiesColumnItemsDiv = styled.div<ColumnItemsProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: ${(props) => props.$aligncontent || "center"};
  gap: 4px;
  /* overflow: auto; */
  padding: ${(props) => props.$padding || "0px"};
  /* margin-top: ${(props) =>
    props.$marginTop ? `${props.$marginTop}px` : "106px"}; */
  border: ${(props) =>
    props.$border ? `1px solid ${props.theme.app.colors.border.main}` : ""};
  background-color: ${(props) =>
    props.$backgroundcolor || props.theme.app.colors.mainWebBackground};
  width: ${(props) => props.$width || ""};
  border-radius: ${(props) =>
    props.$borderradius ? props.theme.app.measures.borderRadius : ""};
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    padding: 10px 6px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    padding: ${(props) => (props.$ismobile ? "2px" : "6px 16px")};
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;

export const StyledTableFlexRowDiv = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "space-evenly"};
  align-items: ${(props) => props.$alignitems || "center"};
  width: ${(props) => props.$width || ""};
  max-width: ${(props) => props.$maxwidth || ""};
  height: 100%;
  /* border: 1px solid red; */
  background-color: ${(props) => props.$background || ""};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  gap: ${(props) => props.$gap || ""};
`;
export const FlexRowDiv = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "space-evenly"};
  align-items: ${(props) => props.$alignitems || "center"};
  width: ${(props) => props.$width || "100%"};
  max-width: ${(props) => props.$maxwidth || ""};
  height: 100%;
  background-color: ${(props) => props.$background || ""};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  gap: ${(props) => props.$gap || ""};
  margin-bottom: ${(props) => (props.$marginBottom ? "8px" : "0px")};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: ${(props) => (props.$rowdirection ? "row" : "column")};
    gap: ${(props) => props.$mobilegap || "10px"};
    width: 100%;
    box-shadow: ${(props) =>
      props.$shadow ? "4px 4px 4px 4px rgba(0,0,0,0.2);" : ""};
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    flex-direction: ${(props) =>
      props.$flexdirection
        ? props.$flexdirection
        : props.$diy
        ? "column"
        : "row"};
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;
export const LeftAlignedWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    justify-content: flex-start;
    gap: 6px;
    flex-direction: column;
  }
`;
export const MenuGridDiv = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: ${(props) => props.$justifycontent || "space-between"};
  align-items: center;
  width: ${(props) => props.$width || ""};
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  border-radius: 60px;
  padding: 4px;
  background-color: ${(props) => props.theme.app.colors.mainheaderbackground};
  min-height: 46px;

  /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* For older IE/Edge */
  -ms-overflow-style: none;
`;

export const MenuCardDiv = styled(NavLink) <MenuCardProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 23%;
  text-decoration: none;
  padding: ${(props) => (props.$active ? "14px 12px" : "10px 0px")};
  min-width: 160px;
  min-height: 55px;
  white-space: normal;
  background-color: ${(props) =>
    props.$active ? "white" : props.theme.app.colors.mainheaderbackground};
  color: ${(props) =>
    props.$active ? props.theme.app.colors.text.secondary : "#6D788A"};
  border-radius: 60px;
  border: ${(props) =>
    props.$active
      ? `1px solid ${props.theme.app.colors.border.secondary}`
      : "none"};
  transition: background-color 0.2s ease-in, color 0.4s ease;
  &:hover {
    background-color: ${(props) =>
      props.$active ? "" : props.theme.app.colors.border.secondary};
    border-radius: 60px;
  }
  
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    padding: 16px 0px;
    
  }
`;
export const NormalText = styled.p<NormalTextprops>`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
    max-width: 120px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    font-size: 13px !important;
  }
`;
export const MobileNormalText = styled.p<NormalTextprops>`
  font-weight: ${(props) => (props.$isactive ? "600" : "400")};
  color: ${(props) =>
    props.$isactive ? "white" : "black"};
  background-color: ${(props) =>
  props.$isactive ? props.theme.app.colors.buttons.primary : "white"};
    border-radius: ${(props) => props.theme.app.measures.borderRadius};
  text-align: center;
  padding: 4px 6px 4px 4px;
  font-size: 15px;
  
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 14px;
  }
`;

export const NormalTextSideNav = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  color: ${(props) => props.theme.app.colors.text.secondary};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
    max-width: 120px;
  }
`;
export const LightText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.app.colors.text.disabled};
`;

export const ContentEndDiv = styled.div<ContentEndProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "space-between"};
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 12px;
    align-items: center;
    flex-direction: column;
  }
`;

export const TableContentEndDiv = styled.div<ContentEndProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifycontent || "space-between"};
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 12px;
    align-items: center;
  }
`;

export const StyledButton = styled(Button)<StyledButtonProps>`
  &.MuiButton-contained {
    background-color: ${(props) =>
      props.theme.app.colors.buttons.primary} !important;
    color: white;
    width: ${(props) => props.$width || ""};
    font-size: 14px;
    gap: 8px !important;
    padding: 4px 0px !important;

    @media (min-width: ${(props) =>
        props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
        props.theme.app.resolutions.desktopMidPointMax}) {
      width: 30% !important;
    }

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: ${(props) => props.$mobilewidth || "100%"};
      font-size: 12px;
      padding: 8px;
    }
  }
`;

export const MainStyledButton = styled(Button)<StyledButtonProps>`
  &.MuiButton-contained {
    background: ${(props) =>
      props.disabled
        ? props.theme.app.colors.buttons.exit
        : props.theme.app.colors.buttons.maingradient} !important;
    color: white;
    width: ${(props) => props.$width || ""};
    font-size: 12px !important;
    padding: ${(props) => props.$padding || "4px 8px"} !important;
    white-space: nowrap;

    box-shadow: none !important;
    display: flex;
    justify-content: space-around;
    gap: 8px;
    border-radius: ${(props) =>
      props.theme.app.measures.borderRadius} !important;
    transition: transform all 0.3s ease;
    &:hover {
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1) !important;
      transform: scale(1.01);
    }
    &:disabled {
      pointer-events: none;
      color: white !important;
      cursor: not-allowed;
    }

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: ${(props) => props.$mobilewidth || ""};
      font-size: 7px !important;
      padding: 7.5px 7px !important;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    @media (min-width: ${(props) =>
        props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
        props.theme.app.resolutions.tabMax}) {
      /* min-width: 200px; */
      min-width: 35%;
      font-size: 8px;
      padding: ${(props) => props.$padding || "4px 8px"} !important;
    }
  }
`;

export const HoveredStyledButton = styled(Button)<StyledButtonProps>`
  &.MuiButton-contained {
    background-color: ${(props) =>
      props.$fill
        ? props.theme.app.colors.buttons.maingradient
        : "transparent"} !important;
    color: ${(props) =>
      props.$fill ? "white" : props.theme.app.colors.border.main};
    width: ${(props) => props.$width || ""};
    min-width: ${(props) => props.$minwidth || ""};
    font-size: 12px !important;
    font-weight: 400 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    padding: 3px 8px;
    box-shadow: none !important;
    border-radius: ${(props) =>
      props.theme.app.measures.borderRadius} !important;
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    font-weight: ${(props) => props.theme.app.weights.semiBold};
    &:hover {
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2) !important;
    }

    &:disabled {
      border: 2px solid ${(props) => props.theme.app.colors.border.secondary};
      font-weight: 600 !important;
    }

    @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
      width: ${(props) => props.$mobilewidth || "100%"} !important;
      min-width: auto;
      font-size: 8px !important;
      padding: 6px;
    }
    @media (min-width: ${(props) =>
        props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
        props.theme.app.resolutions.tabMax}) {
      /* min-width: 180px; */
      /* min-width: 30%; */

      font-size: 8px;
      padding: ${(props) => props.$padding || "4px 8px"} !important;
    }
  }
`;

export const StyledSvgIcon = styled.img`
  width: 18px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 12px;
  }
`;

export const ExitButton = styled(Button)<StyledButtonProps>`
  &.MuiButton-contained {
    background-color: ${(props) => props.theme.app.colors.buttons.exit};
    color: white !important;
    width: ${(props) => props.$width || ""};
    font-size: 12px !important;
    display: flex important;
    border-radius: ${(props) =>
      props.theme.app.measures.borderRadius} !important;
    justify-content: space-around;
    gap: 8px !important;
    padding: 4px 12px !important;
    width: ${(props) => (props.$isnavitem ? "100%" : "")};
    min-height: ${(props) => (props.$isnavitem ? "30px" : "")};
    &:hover {
      scale: 1.02;
    }
    @media (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
      min-height: 30px !important;
    }
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px !important;
    border: 3px solid black;
    padding: 0px !important;
    max-height: 30px !important;
    width: 30px !important;
    border-radious: 50% !important;
  }
`;

export const StyledFormControl = styled(FormControl)<StyledFormControlProps>`
  width: ${(props) => props.width || ""};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 2px;
    width: 100%;
  }
`;

export const StyledSelect = styled(Select)<SelectProps<unknown>>`
  border-radius: 6px;
  padding: 4px 8px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  & .MuiOutlinedInput-notchedOutline {
    border: 2px solid ${(props) => props.theme.app.colors.border.main};
  }

  & .MuiSelect-select {
    padding: 8px 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledSelectOption = styled.select<StyledSelectOptionProps>`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  transition: 0.3s border ease-in-out;
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: white;
  outline: none;
  font-weight: 500;
  width: ${(props) => props.width || "100%"};
  padding: 6px;

  border: 2px solid ${(props) => props.theme.app.colors.border.secondary};
  &:hover {
    border: 2px solid ${(props) => props.theme.app.colors.border.main};
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.app.colors.border.main};
  }
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE2IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNSAybDUgNSA1LTUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+");
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  background-size: 14px;

  option {
    background-color: white;
  }

  option:hover {
    background-color: ${(props) => props.theme.app.colors.buttons.select};
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: ${(props) => (props.viewAllStrategy ? "100%" : "100%")};
    background-position: calc(100% - 12px) center;
    padding: 10px 6px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      -webkit-appearance: none !important;
      appearance: none !important;
    }
  }
`;

export const SytledOption = styled.option`
  background-color: white;

  &:hover {
    background-color: ${(props) => props.theme.app.colors.buttons.select};
  }
`;

export const Detailswrap = styled.div<{ $background?: string }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  justify-content: space-around;
  padding: 4px;
  /* border:1px solid red; */
  height: 100%;
  align-items: center;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  background-color: ${(props) => (props.$background ? props.$background : "")};
  /* For Webkit Browsers (Chrome, Edge, Safari) */
  ::-webkit-scrollbar {
    height: 2px !important;
  }

  ::-webkit-scrollbar-track {
    background: #f0f3f7; /* Background color of the scrollbar track */
    height: 2px !important; /* Match height to scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 10px;
    height: 2px !important;
  }

  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 #f0f3f7;

  &::-moz-scrollbar {
    height: 3px; /* Specific for Firefox */
  }

  /* Ensure scrollbar height does not scale with content */
  scroll-behavior: smooth;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    display: grid;
    gap: 12px;
    padding: 8px;
    /* Define a custom grid layout */
    grid-template-columns: 1fr 1fr; /* Two columns */
    grid-auto-rows: auto; /* Automatically adjust the row height */
    & > :first-child {
      grid-column: 1; /* Place the first item in the first column */
      grid-row: 1; /* First row */
    }
    & > :last-child {
      grid-column: 2; /* Place the last item in the second column */
      grid-row: 3; /* First row */
    }
    & > :not(:first-child):not(:last-child) {
      grid-column: span 1; /* Each remaining item spans 1 column */
    }
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
  }
`;

export const CornerItemsDiv = styled.div<CornerItemsDivProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.$width || "100%"};
  gap: 8px;
  background-color: white;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;

export const SearchSortLinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 4px; */
  width: 100%;
  gap: 8px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 12px;
    align-items: end;
    flex-direction: column;
  }
`;

export const StyledDiySelect = styled.select<StyledDiySelectProps>`
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  padding: ${(props) => (props.$deployedselect ? "6px" : "9px 8px")};
  display: flex;
  gap: 12px;
  font-family: "Plus Jakarta Sans", sans-serif;

  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 80px;
  background-color: ${(props) =>
    props.$deployedselect
      ? props.theme.app.colors.headerbackground
      : props.disabled
      ? props.theme.app.colors.backgroundimgcolor
      : ""};
  outline: none;
  transition: border 0.2s ease-in-out;
  color: ${(props) => props.theme.app.colors.text.tertiary};

  &:hover {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    color: black;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    color: black;
  }

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /* Custom arrow styles */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE2IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNSAybDUgNSA1LTUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+"); /* Replace with your custom SVG */
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  background-size: 14px;
  option {
    max-height: 200px;
    border: none !important;
    outline: none !important;
  }
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      -webkit-appearance: none !important;
      appearance: none !important;
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${(props) => props.theme.app.colors.buttons.activetoggle};
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-width: 380px;
  }
`;

export const DiyTextHeader = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.app.colors.dhanigraythird};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 10px;
  }
`;

export const ColumnFlexDiv = styled.div<ColumnFlexDivProps>`
  position: relative;
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: start;
  align-items: ${(props) => (props.$flexstart ? "start" : "center")};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    align-items: start;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: ${(props) => props.tabwidth || ""};
    align-items: start;
  }
`;
export const StyledOption = styled.option`
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.app.colors.border.main};
    color: white;
    border-radius: 8px;
  }
  font-size: 12px;
`;
export const TitlePortfolioText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #708297;
`;

export const ValuePortfolioText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #8eb690;
`;

export const DetailsValueDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-left: 12px;
  min-width: 30%;
`;

export const SearchWrapper = styled.div<SearchWrapperDivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.app.colors.border.secondary};
  border-radius: 7px;
  padding: 6px 12px;
  max-height: 38px;
  gap: 4px;
  background-color: white;
  transition: 0.3s border ease-in-out;
  width: ${(props) => props.width || "100%"};
  & img {
    padding: 0px;
  }

  & input {
    border: none;
    outline: none;
    background: none;
    flex: 1;
    padding: 0;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.app.colors.border.main};
    background-color: white;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    flex-direction: row;
    min-width: 280px;
    width: ${(props) => props.midwidth || ""};
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;

export const QuantityDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    align-items: center;
    justify-content: start;
  }
`;

export const DiySaveButton = styled(Button)<DiyButtonProps>`
  background-color: transparent;
  font-size: 12px !important;
  color: ${(props) => props.theme.app.colors.text.secondary};
  border: 2px solid ${(props) => props.theme.app.colors.border.main};
  padding: ${(props) =>
    props.$padding ? props.$padding : "8px 12px"} !important;
  cursor: pointer;
  border-radius: ${(props) => props.theme.app.measures.borderRadius} !important;
  width: ${(props) => props.width || "100%"};

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: ${(props) => props.$tabwidth || "28%"};
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: ${(props) => props.$mobilewidth || ""};
    font-size: 10px !important;
    padding: 5px 12px !important;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    justify-content: start;
    width: ${(props) => props.$desktopwidth || "20%"};
  }
`;

export const DiyInput = styled.input<DiyInputProps>`
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  padding: ${(props) => props.padding || "9px 8px"};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? props.theme.app.colors.backgroundimgcolor : ""};
  outline: none;
  font-family: "Plus Jakarta Sans", sans-serif;
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: ${(props) => props.theme.app.colors.text.primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${(props) => props.theme.app.colors.buttons.activetoggle};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-width: 380px;
  }
`;

export const LoadPopUpWrap = styled.div<ConfirmationProps>`
  position: fixed;
  background-color: white;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.$isconfirmationpopup ? "40%" : "25%")};
  max-width: 550px;
  border-radius: 16px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 95%;
    padding: 12px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) /* and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) */ {
    min-width: 400px;
  }
`;
