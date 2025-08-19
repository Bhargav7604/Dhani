import styled from "styled-components";
import { ContentContainerProps, LayoutContainerProps, ToggleButtonsProps } from "./LayoutUtils";

export const LayoutContainer = styled.div<LayoutContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  background-color: ${(props) =>
    props.backgroundcolor || props.theme.app.colors.mainbackgroundcolor};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  flex-grow: 1;
  width: 100%;
  background-color: ${(props) => props.theme.app.colors.mainbackgroundcolor};
  padding: 0px 6px;

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    padding: 2px;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 2px;
  }
`;

export const ToggleWrapper = styled.div`
  display: inline-flex;
  position: relative;
  border: 2px solid ${(props) => props.theme.app.colors.border.secondary};
  border-radius: 60px;
  overflow: hidden;
  padding: 4px;
  background-color: ${(props) => props.theme.app.colors.mainheaderbackground};
  width: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.6) inset;
    margin: 0 auto;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 70%;
    padding: 4px;
  }
`;

export const ToggleButton = styled.button<ToggleButtonsProps>`
  flex: 1;
  font-family: "Mulish", sans-serif !important;
  white-space: nowrap;
  padding: 8px 20px;
  background-color: ${(props) =>
    props.$active
      ? `${props.theme.app.colors.buttons.primary}`
      : "transparent"};
  color: ${(props) =>
    props.$active ? "#fff" : `${props.theme.app.colors.text.secondary}`};
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 60px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;

  ${({ $active }) =>
    !$active &&
    `
    &:hover span {
      transform: scale(1.02);
    }
  `}

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 6px 6px;
    font-size: 12px;
  }
`;
