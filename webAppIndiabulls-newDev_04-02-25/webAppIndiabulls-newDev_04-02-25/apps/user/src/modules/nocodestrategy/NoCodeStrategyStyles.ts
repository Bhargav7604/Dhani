import styled from "styled-components";
import {
  AlignItemsProps,
  BorderDivProps,
  CopyLegDivProps,
  CustomStrategiesProps,
  CustomStrategyItemProps,
  DIYContentWrapperProps,
  EntryWrapDivProps,
  InnerLegDivProps,
  LegButtonProps,
  NoCodeWidthProps,
  PopoverContentProps,
  PositionWrapDivProps,
  PreBuildCardProps,
  SaveStrategyButtonProps,
  StyledNoCodeButtonProps,
} from "./NoCodeStrategyUtils";
import { ColumnFlexDivProps } from "../../components/ui/GlobalStylesUtils";
import { Button, Checkbox, Typography } from "@mui/material";

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  align-items: center;
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 8px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  gap: 8px;
  overflow-x: auto;
  width: 100%;
  /* max-width: 1133px; */
  /* max-height: 70px; */
  /* overflow-y: hidden; */
  background-color: white;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 6px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 8px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    /* width: 100%; */
    /* max-width: 100%; */
  }
`;

export const StyledNoCodeButton = styled.div<StyledNoCodeButtonProps>`
  text-align: center;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  padding: 8px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  cursor: pointer;
  background-color: ${(props) =>
    props.$active
      ? props.theme.app.colors.buttons.primary
      : props.theme.app.colors.buttons.defaultcolor};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.$active ? "" : props.theme.app.colors.border.secondary};
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
    padding: 6px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  overflow-y: scroll;
  min-height: 65vh;
  max-height: 67vh;
  gap: 2vh;
  width: 100%;
  padding-bottom: 24px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-height: 90vh;
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1vh;
  width: 100%;
  padding: 16px 0px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    padding: 2px;
  }
`;

export const MainStrategyTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  gap: 18px;
  width: 100%;
  padding: 18px 12px;
  border-radius: 6px;
  background-color: white;
  min-height: 170px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    align-items: start;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 12px;
  }
`;

export const ExitSettingsDiv = styled.div<AlignItemsProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.$alignitems || "start"};
  gap: 12px;
  padding: ${(props) => props.$padding || "6px 0px"};
  background-color: white;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  border: ${(props) =>
    props.$border ? `1px solid ${props.theme.app.colors.border.main}` : ""};
  box-shadow: ${(props) =>
    props.$boxshadow ? "0px 4px 4px 0px rgba(0, 0, 0, 0.05)" : ""};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: ${(props) => props.$mobilepadding || "16px"};
  }
`;

export const PositionLegWrapDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: start;
  background-color: white;
  padding: 9px 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${(props) => props.theme.app.measures.borderRadius};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 2px;
  }
`;

export const MainStrategyDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 18px;
  width: 100%;
  padding: 18px 12px;
  border-radius: 6px;
  min-height: 170px;

  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  // Set each child item to take up 45% width for two per row layout, adjust as needed
  & > * {
    flex: 1 1 45%;
    max-width: 49%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    flex-wrap: nowrap;
    min-height: 120px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 12px 12px 16px 12px;
    min-height: 100%;
    flex-direction: column;
    flex-wrap: nowrap;

    & > * {
      max-width: 100%;
    }
  }
`;

export const ToggleColumnDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const NoCodeHeaderText = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const NoCodeWidthSelect = styled.div<NoCodeWidthProps>`
  width: ${(props) => props.width || "100%"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    max-width: ${(props) => props.$mobilemaxwidth || "100%"};
  }
  @media (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;

export const ToggleWidth = styled.div`
  width: 170%;
  @media (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
  }
`;

export const EntryDaysDiv = styled.div<ColumnFlexDivProps>`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-left: 2px;
  justify-content: start;
  align-items: start;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const ToggleSelectComp = styled.select`
  background-color: ${(props) => props.theme.app.colors.buttons.activetoggle};
  padding: 9px 4px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  color: ${(props) => props.theme.app.colors.text.tertiary};
  outline: none;
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  font-family: "Plus Jakarta Sans", sans-serif;
  width: 60%;
  & option {
    background-color: white;
    color: ${(props) => props.theme.app.colors.text.secondary};
  }

  /* Custom arrow styles */
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2394A3B8%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2010.939l3.71-3.71a.75.75%200%20111.06%201.06l-4.24%204.25a.75.75%200%2001-1.06%200l-4.24-4.25a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 6px) center;
  background-size: 20px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      -webkit-appearance: none !important;
      appearance: none !important;
    }
  }
`;

export const ToggleInputComp = styled.input`
  border: none;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  padding: 9px 8px;
  outline: none;
  width: 40%;
  border: 1.5px solid ${(props) => props.theme.app.colors.border.secondary};
  font-family: "Plus Jakarta Sans", sans-serif;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${(props) => props.theme.app.colors.buttons.defaultcolor};
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: ${(props) => props.theme.app.colors.text.primary};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const MTMWrapDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 32%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    justify-content: start;
    width: 80%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    justify-content: start;
    width: 50%;
  }
`;

export const TrailingWrapDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TrailingStopLossDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const PositionWrapDiv = styled.div<PositionWrapDivProps>`
  width: ${(props) => props.$width || "100%"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 14px;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ToggleDropDownLegDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  align-items: end;
  gap: 12px;

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    gap: 18px;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    /* justify-content: start; */
    gap: 12px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const InnerLegDiv = styled.div<InnerLegDivProps>`
  width: 100%;
  display: flex;
  /* background-color: ${(props) =>
    props.$backgroundcolor ? "rgb(219, 241, 221)" : "rgb(235, 206, 209)"}; */
  /* background: ${(props) =>
    props.$backgroundcolor
      ? "linear-gradient(to bottom, white,  rgba(219, 260, 210, 0.6))"
      : "linear-gradient(to bottom, white, rgba(250, 180, 185, 0.3))"}; */
  background: ${(props) =>
    props.$backgroundcolor
      ? "linear-gradient(to top, white 75%, rgba(180, 255, 180, 0.8) 130%)"
      : "linear-gradient(to top, white 75%, rgba(250, 180, 185, 0.8) 130%)"};
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  gap: 18px;
  padding: 16px 12px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 12px;
  }
`;

export const BorderDiv = styled.div<BorderDivProps>`
  width: 100%;
  /* border-top: 4px ${(props) =>
    props.$borderstyle ? "dotted" : "dashed"} #cecece; */
  border-top: ${(props) =>
    props.$borderstyle ? "3px dotted #cecece" : "2px dashed #cecece"};
  height: 5px;
`;

export const LegCornerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 8px;
  border-radius: 6px;
`;

export const CopyLegDiv = styled.div<CopyLegDivProps>`
  display: flex;
  justify-content: ${(props) => props.$justifycontent || "center"};
  align-items: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    justify-content: center;
  }
`;

export const LegIndexText = styled.p`
  color: ${(props) => props.theme.app.colors.text.secondary};
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
`;

export const LegDeleteButton = styled.img<LegButtonProps>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-position: center;
  object-fit: contain;
`;

export const SaveStrategyButton = styled(Button)<SaveStrategyButtonProps>`
  border-radius: 9px !important;
  background-color: ${(props) =>
    props.theme.app.colors.buttons.maingradient} !important;
  color: white;
  width: ${(props) => props.width || "100%"};

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.mobileMax}) {
    width: 70%;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 30%;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    justify-content: start;
    width: 20%;
  }
`;

export const CustomStrategiesDiv = styled.div<CustomStrategiesProps>`
  position: absolute;
  /* width: 90%; */
  /* left: 12px; */
  right: 0px;
  top: 58px;
  margin-right: 24px;
  display: ${(props) => (props.open ? "block" : "none")};
  flex-direction: column;
  gap: 6px;
  padding: 12px 6px;
  border-radius: 6px;
  /* box-shadow: 0px 4px 12px #5367fc3a; */
  background-color: white;
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 150px;
    padding: 6px;
    top: 54px;
    /* left: 30%; */
    max-height: 250px;
    overflow-y: auto;
    /* transform: translateX(-50%); */
  }
`;

export const CustomStrategyOption = styled.p<CustomStrategyItemProps>`
  /* background-color: ${(props) =>
    props.active ? props.theme.app.colors.buttons.primary : "transparent"}; */
  color: ${(props) =>
    props.active ? "white" : props.theme.app.colors.text.secondary};
  padding: 8px;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;

  /* Hover state */
  &:hover {
    background-color: ${(props) => props.theme.app.colors.buttons.primary};
    color: white;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 10px;
  }
`;

export const CustomDiv = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
`;

export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  font-weight: 400;
`;

export const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: ${(props) =>
      props.theme.app.colors.buttons.main} !important; // Default color
  }

  &.Mui-checked {
    color: ${(props) =>
      props.theme.app.colors.buttons.main} !important; // Checked color
    background-color: ${(props) =>
      props.theme.app.colors.buttons.main} !important; // Add background color
  }

  &.MuiCheckbox-indeterminate {
    color: ${(props) =>
      props.theme.app.colors.buttons
        .main} !important; // For indeterminate state
  }
`;

export const StyledEnterDaysChecked = styled(Checkbox)(({}) => ({
  "&.MuiCheckbox-root": {
    borderRadius: "4px",
    padding: "0px",
    margin: "0px",
    width: "32px",
    height: "32px",
    fontSize: "24px !important",

    "&:not(.Mui-checked)": {
      "& .MuiSvgIcon-root": {
        border: "1px solid #94A3B8",
        background: "transparent",
        borderRadius: "4px",
        color: "transparent",
        width: "24px",
        height: "24px",
      },
    },
  },
  "&.Mui-checked": {
    "& .MuiSvgIcon-root": {
      background: "white",
      border: "none",
      color: "#1667D9 !important",
      width: "28px",
      height: "28px",
    },
  },

  "@media (max-width: 768px)": {
    "&.MuiCheckbox-root": {
      width: "28px",
      height: "28px",

      "&:not(.Mui-checked)": {
        "& .MuiSvgIcon-root": {
          width: "20px",
          height: "20px",
        },
      },
    },
    "&.Mui-checked": {
      "& .MuiSvgIcon-root": {
        width: "24px",
        height: "24px",
      },
    },
  },
}));

export const ErrorWrapDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  position: absolute;
  bottom: -12px;
  left: 4px;
  column-gap: 12px;
  width: 100%;
`;

export const ToggleErrorText = styled.p`
  color: red;
  font-size: 8px;
  font-weight: 400;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 8px;
  }
`;

export const InfoWrapper = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
  cursor: pointer;
`;

export const PopoverContent = styled(Typography)<PopoverContentProps>`
  color: ${(props) => props.theme.app.colors.text.secondary};
  padding: 2px 8px !important;
  border-radius: 4px;
  font-weight: 400;
  font-size: ${(props) => (props.$isamount ? "14px" : "10px")} !important;
  text-align: left;
`;

export const ToggleDropdownWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-width: 380px;
  }
`;

export const PreBuildcard = styled.div<PreBuildCardProps>`
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding: 10px 18px;
  white-space: nowrap;
  gap: 6px;
  padding: 10px 18px;
  white-space: nowrap;
  box-sizing: border-box;
  border: ${(props) =>
    props.$isActive
      ? `1px solid ${props.theme.app.colors.border.main}`
      : "none"};
  background-color: ${(props) => props.theme.app.colors.headerbackground};
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  min-width: 120px;
  &:hover {
    /* border: 1px solid ${(props) => props.theme.app.colors.border.main}; */
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    min-height: 50px;
    padding: 2px 6px;
    min-width: "";
  }
`;

export const PreBuildImg = styled.img`
  width: 36px;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 18px;
    max-width: 18px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 46px;
    max-width: 46px;
  }
`;

export const PreBuildDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(5, 1fr); */
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(5, 1fr); */
  gap: 8px;
  box-sizing: border-box;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    gap: 6px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const StrategyText = styled.p`
  font-size: 14px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  font-weight: ${(props) => props.theme.app.weights.lukeBold};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 10px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    font-size: 12px;
  }
`;

export const EntryWrapDiv = styled.div<EntryWrapDivProps>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  gap: 24px;

  width: ${(props) => props.width || "100%"};
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    width: 100%;
    padding: 6px;
    gap: 12px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ExitTimeDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 70%;
  }
`;

export const ProfitWrapDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  align-items: end;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

export const DiyHeaderText = styled.p`
  font-size: 20px;
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 14px;
  }
`;

export const DIYContentWrapper = styled.div<DIYContentWrapperProps>`
  width: 100%;
  margin-top: ${(props) =>
    props.$marginTop ? `${props.$marginTop}px` : "53px"};
`;

export const ButtonsWrapperDiv = styled.div`
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* WebKit-based browsers */
  }
`;

export const MySavedStrategies = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.app.colors.text.tertiary};
`;
