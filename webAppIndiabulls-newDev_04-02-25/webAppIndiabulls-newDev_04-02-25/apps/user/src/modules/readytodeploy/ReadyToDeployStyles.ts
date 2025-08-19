import { Link } from "react-router-dom";
import styled from "styled-components";
import { NoStrategyProps } from "./ReadyToDeployUtils";
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 12px;
  width: 36%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }

  @media (min-width: ${(props) => props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) => props.theme.app.resolutions.desktopMidPointMax}) {
    width: 60%;
  }
`;

export const TitlePortfolioText = styled.p`
  font-size: 13px;
  font-weight: 500;
  padding: 6px 30px;
  color: #1e2a2b;
  border-bottom: 1px solid
    ${(props) => props.theme.app.colors.dhanigraysecondary};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    border-bottom: none;
  }
`;

export const ValuePortfolioText = styled.p<{
  $isnegative: boolean;
  $tablevalue?: string;
  $tablevalueweight?: string;
  $ispnl?: boolean;
  $isrupee?: boolean;
  $istextsmall?: string;
  $isformat?: boolean;
}>`
  font-size: ${(props) =>
    props.$ispnl && props.$istextsmall
      ? "14px"
      : props.$ispnl
      ? "20px"
      : "14px"};
  font-weight: ${(props) =>
    props.$ispnl ? "600" : props.$istextsmall ? "400" : "400"};
  color: ${(props) => (props.$isnegative ? "#ff0000" : "#008c8c")};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    text-align: center;
    font-size: ${(props) =>
      props.$ispnl && props.$istextsmall
        ? "14px"
        : props.$ispnl
        ? "16px"
        : "14px"};
  }
`;

export const SelectWrapDiv = styled.div`
  width: 15%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;
export const StyledNoDataText = styled.p`
  font-size: 16px;
  font-weight: ${(props) => props.theme.app.weights.lukeBold};
  color: ${(props) => props.theme.app.colors.text.secondary};
`;
export const DetailsValueDiv = styled.div<{
  $iseven?: string;
  $backgroundcolor?: string;
  $flexdirection?: string;
  $firstchild?: string;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$flexdirection ? props.$flexdirection : "column"};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: ${(props) => (props.$firstchild ? "0px 38px" : "0px 20px")};
  width: ${(props) => (props.$firstchild ? "135px" : "100%")};
  min-height: 60px;
  gap: 5px;
  border-radius: ${(props) =>
    props.$firstchild ? props.theme.app.measures.borderRadius : ""};
  background: ${(props) =>
    props.$firstchild
      ? "linear-gradient(71deg, #5E9EF9 -1.04%, #1667D9 57.53%)"
      : ""};

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 10%;
    right: 0;
    width: 1px;
    height: 80%;
    background: linear-gradient(rgba(0, 0, 0, 0.6) 50%, transparent 50%);
    background-size: 0.5px 4px;
  }

  &:first-child::after,
  &:last-child::after {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    min-width: 150px;
    min-height: 50px;
    margin-left: 0px;
    background: ${(props) => (props.$firstchild ? "#fff" : "")};
    color: ${(props) => (props.$firstchild ? "#1667d9" : "")} !important;
    &:nth-child(2)::after,
    &:nth-child(4)::after {
      display: none;

      &::after {
        display: none !important;
      }
    }
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
  }
`;

export const RuppeeText = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 14px;
    text-align: center;
  }
`;

export const DetailSubWrapDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #f5f7fa;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 6px;
  }
`;

export const AnchorTagText = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  min-width: 130px;
  text-align: right;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;

export const ScrollyDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0px 0px 14px 0px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 55vh;
  z-index: 10;
  -ms-overflow-style: none;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  width: 100% !important;

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${(props) => props.theme.app.resolutions.desktopMax}) {
    grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  }
`;
export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
    align-items: start;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 80%;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    width: 80%;
  }
`;

export const HeaderStrategy = styled.p`
  font-size: 24px;
  font-weight: 400;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 16px;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    font-size: 18px;
  }
`;

export const StrategySearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.app.colors.border.main};
  border-radius: 6px;
  padding: 12px;
  gap: 4px;
  width: 40%;

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

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;

export const SortWrapper = styled.div`
  width: 20%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 60%;
  }
`;

export const NoStrategyDiv = styled.div<NoStrategyProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.$detailView ? "15vh" : "40vh")};
  width: 100%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    height: 100%;
    padding: 12px;
    text-align: center;
  }
`;

export const FirstText = styled.p`
  font-size: 24px;
  font-weight: 400;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const SecondText = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 70%;
  text-align: center;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    font-size: 14px;
  }
`;
export const LinkText = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.app.colors.text.secondary};
  text-decoration: none;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    font-size: 14px;
  }
`;

export const PerformanceDiv = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  text-align: center;
`;
