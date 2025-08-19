import styled from "styled-components";
import { ProfitTextProps } from "./ProfitCardUtils";

export const CardWraperDivFlex = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    gap: 10px;
    justify-content: start;
  }

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.app.colors.border.secondary};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 12px;
  padding: 11px;
  width: 100%;
  min-width: 330px;
  transition: 0.3s border, 0.3s background-color ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.app.colors.border.main};
    background-color: ${(props) => props.theme.app.colors.headerbackground};
  }

  /* Tablet: Adjust for medium screens */
  @media (min-width: ${(props) => props.theme.app.resolutions.tabMin}) and (max-width: ${(props) => props.theme.app.resolutions.tabMax}) {
    /* max-width: 350px; */
    padding: 10px;
  }

  /* Mobile: Full width */
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
    min-width: 100%;
    padding: 10px;
  }
`;
 
export const LeftSection = styled.div`
  width: 100%;
  padding: 6px;
  display: flex;
  justify-content: space-between;

  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

export const ProfitText = styled.p<ProfitTextProps>`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.$color ? "#F44336" : "#1e8e3e")};
`;

export const MonthlyAverage = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const RightSection = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const ROIText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
`;
export const StyledLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

// Shimmer Effect
