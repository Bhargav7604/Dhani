import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ShimmerWrapper = styled.div<{ $deployedcard?: boolean }>`
  width: 100%;
  height: 120px;
  border-radius: 8px;
   background-color: #e7ebef; /* Soft blue background */
 
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.5) 45%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.5) 55%,
    rgba(255, 255, 255, 0.2) 60%,
    rgba(255, 255, 255, 0) 65%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: ${shimmer} 2.5s ease-in-out infinite;
  margin-bottom: 16px; /* Spacing between skeletons */
`;

const ShimmerCard = () => {
  return <ShimmerWrapper />;
};

export default ShimmerCard;
