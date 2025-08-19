import styled, { keyframes } from "styled-components";
import { ShimmerCardProps } from "../../DeployedStrategiesUtils";

const shimmer = keyframes`
  0% {
    background-position: 150% 0;
  }
  100% {
    background-position: -150% 0;
  }
`;

export const ShimmerCard = styled.div<ShimmerCardProps>`
  width: ${(props) => props.$width || "100%"} ;
  height: ${(props) => props.$height || "250px"} !important;
  border-radius: 8px;
  background-color: #dde7f0; /* Soft blue background */

  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.5) 45%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.5) 55%,
    rgba(255, 255, 255, 0.2) 60%,
    rgba(255, 255, 255, 0) 65%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    height: ${(props) => props.$mobileheight || "260px"} !important;
  }

  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    height: ${(props) => props.$tabheight || "230px"} !important;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMidPointMax}) {
    height: ${(props) => props.$tabheight || "230px"} !important;
  }
`;
