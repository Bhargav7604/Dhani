import styled from "styled-components";
import { QuantitySearchProps } from "./SearchSortUtils";

export const QuantitySearchWrap = styled.div<QuantitySearchProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 14px;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: ${(props) => (props.viewAllStrategy ? "column" : "row")};
    gap: 12px;
    width: 100%;
  }
`;
