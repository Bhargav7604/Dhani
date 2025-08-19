import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const PNLShimmer = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width || "100px"};
  height: ${(props) => props.$height || "20px"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: ${shimmerAnimation} 1.5s infinite;
  border-radius: 4px;
`;
