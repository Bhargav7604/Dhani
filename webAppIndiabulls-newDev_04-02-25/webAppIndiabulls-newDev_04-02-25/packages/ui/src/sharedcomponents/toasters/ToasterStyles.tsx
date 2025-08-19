import { styled } from "styled-components";
import { SymbolTextProps } from "./ToasterUtils.js";

export const ToasterContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px; /* Adjust the right offset as needed */
  z-index: 99999; /* Ensure it appears above other elements */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ToasterContent = styled.div<SymbolTextProps>`
  color: #fff;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 12px 20px 2px rgba(0, 0, 0, 0.3),
    0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  min-width: 335px;
  max-width: 600px;
  /* gap: 10px; */
  border: 1px solid ${(props) => props.$symboltextcolor};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    max-width: 336px;
    min-width: 326px;
  }
`;
export const SymbolDiv = styled.div<SymbolTextProps>`
  border-radius: 16px;
  background-color: ${(props) =>
    `${props.$symboltextcolor}4A`}; /* Add 10% opacity */
  padding: 8px;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 4px;
  }
`;

export const SymbolText = styled.p<SymbolTextProps>`
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$symboltextcolor || ""};
`;

export const ToasterContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  gap: 18px;
  align-items: center; /* Use align-items for centering along the cross-axis */
  justify-content: start;
  width: 100%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    padding: 5px 8px;
    gap: 12px;
  }
`;
export const SymbolContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  justify-content: start;
  width: 90%;
`;

export const ToasterHeadingText = styled.p<SymbolTextProps>`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.$symboltextcolor || ""};
`;

export const ProgressBarContainer = styled.div`
  height: 6px;
  width: 100%;
  border-radius: 9px;
  overflow: hidden;
  border-radius: 0px 0px 36px 48px;
`;

export const ProgressBarFill = styled.div<{
  $progress: number;
  $color: string;
}>`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: ${(props) => props.$color};
  transition: width 0.1s linear;
  border-radius: 0px 0px 36px 48px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const ToasterMessagetext = styled.p<{ $symboltextcolor?: boolean }>`
  font-size: 11px;
  width: 100%;
  color: ${(props) =>
    props.$symboltextcolor
      ? props.theme.app.colors.status.success
      : props.theme.app.colors.status.error};

  font-weight: ${(props) => props.theme.app.weights.semiBold};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  justify-content: start;
  width: 100%;
  white-space: nowrap;
  min-width: 150px;
`;
