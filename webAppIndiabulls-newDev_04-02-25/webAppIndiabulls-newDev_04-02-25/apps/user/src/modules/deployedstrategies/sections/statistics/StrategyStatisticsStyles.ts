import styled from "styled-components";
import { TableCell,TableContainer } from "@mui/material";
import { tableProps } from "./StrategyStatisticsTypes";
import { DynamicWrapperProps } from "../../../../components/ui/GlobalStylesUtils";

export const TableHeadWraper = styled.p`
  margin: 14px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 18px;
  }
`;

export const TableCellData = styled(TableCell)<tableProps>`
  padding: 2px 6px !important;
  //text-align: left !important;  /* Align text to the left */
  //font-size: 14px !important;   /* Adjust font size */
  font-weight: ${(props) =>
    props.$fontweight ? props.theme.app.weights.semiBold : ""} !important;
  color: ${(props) => props.$color || ""} !important;
  background-color:${(props) => props.$background || ""} !important;
   border: 1px solid #ddd !important;
`;

export const StatisticsTableContainer = styled(TableContainer) `
 border-radius:6px !important;
`;


export const StrategyDetailsModalWrapper = styled.div`
  z-index: 90;
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
  width: 80%;
  border-radius: 10px;
  overflow-x: hidden;
  height: 90vh;
  overflow-y: auto;
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 85%;
    padding: 6px 12px;
    height: 70vh; /* Fixed height for tab and mini-laptop mode */
    overflow-y: auto;
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
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 14px !important;
    gap: 12px;
  }
`;
export const StrategySearchText = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 12px;
  color: #000;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 18px;
  }
`;

export const StrategyFlexRow = styled.div`
display:flex;
 justify-content:center;
 align-items: center;
 width: 100%;
`;

export const StrategyDynamicWrapperDiv = styled.div<DynamicWrapperProps>`
  overflow-y: auto;
  width: 100%;

  padding: ${(props) => (props.$nopadding ? "" : "10px 42px")};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    gap: 1vh;
    padding: 6px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 1vh;
    padding: 10px 10px;
  }
`;