import styled from "styled-components";
import { DetailsButtonProps } from "./sections/reporttable/ReportTableUtils";
import { Button } from "@mui/material";

export const StyledClockImage = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const DetailsButton = styled(Button)<DetailsButtonProps>`
  height: auto;
  color: white !important;
  background-color: ${(props) =>
    props.theme.app.colors.text.secondary}!important;
  // border: none !important;
  padding: 2px 12px !important;
  font-size: "16px" !important;
  cursor: pointer;
  text-transform: capitalize !important;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const RenderPageWrapper = styled.div`
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  padding: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3f5f7;
  border: 1px solid ${(props) => props.theme.app.colors.border.main};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  padding: 4px;
  gap: 4px;
  max-width: fit-content;
  box-sizing: border-box;
  overflow-x: auto;
  @media (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
    gap: 2px;
    padding: 4px;
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 4px;
    text-align: center;
    width: 100%;
    max-height: 100%;
    gap: 8px;
  }

  /* WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    height: 4px; /* Thin scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Light grey thumb */
    border-radius: 2px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
`;

export const ButtonsDiv = styled.div<{ $active?: boolean }>`
  padding: 8px 8px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  text-align: center;
  cursor: pointer;
  /* width: 100%; */
  /* min-width: 190px; */
  white-space: nowrap;
  transition: transform 0.3s ease, background-color 0.3s ease-in-out;
  &:hover {
    background-color: #c7cfd4;
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 11px;
    min-width: 65px;
    white-space: wrap;
    min-width: fit-content;
  }
`;
