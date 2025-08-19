import { styled } from "styled-components";
import { DIYHeaderProps, StyledToggleProps } from "./FormFieldsUtils.js";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
export const DIYHeaderDiv = styled.div<DIYHeaderProps>`
  width: ${(props) => (props.$enterondays ? "50%" : "100%")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 0px 3px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-width: 380px;
  }
`;
export const ToggleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px;

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    max-width: 100%;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    max-width: 380px;
  }
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  padding: 2px;
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  border-radius: ${(props) => props.theme.app.measures.borderRadius} !important;
`;

export const StyledToggleButton = styled(ToggleButton)<StyledToggleProps>`
  background-color: ${(props) =>
    props.$active
      ? props.value === "Buy"
        ? "#007F7F"
        : props.value === "Sell"
        ? "#ED5826"
        : props.theme.app.colors.buttons.activetoggle
      : "transparent"} !important;
  color: ${(props) =>
    props.$active
      ? props.value === "Buy"
        ? "white"
        : props.value === "Sell"
        ? "white"
        : props.theme.app.colors.text.secondary // Default active text color: ;
      : props.theme.app.colors.text.tertiary} !important;
  display: flex;
  white-space: nowrap;
  flex: 1;
  border: ${(props) =>
    props.$active
      ? `1px solid ${props.theme.app.colors.border.secondary}`
      : "none"} !important;
  border-radius: ${(props) =>
    props.$active ? `${props.theme.app.measures.borderRadius}` : ""} !important;
  padding: 4.2px 8px !important;
  font-size: 12px !important;
  font-weight: ${(props) => (props.$active ? "550" : "500")} !important;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 8px !important;
    padding: 7px 2px !important;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    font-size: 10px !important;
    padding: 7px 2px !important;
  }

  &.Mui-disabled {
    opacity: 0.6;
    pointer-events: none; /* Optional: prevent interaction */
  }
`;
