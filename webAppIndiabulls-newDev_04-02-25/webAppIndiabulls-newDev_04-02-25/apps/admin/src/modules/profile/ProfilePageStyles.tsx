import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0% {
    transform: scale(1, 1); /* Normal size */
  }
  25% {
    transform: scale(1.05, 0.9); /* Stretch horizontally, shrink vertically */
  }
  50% {
    transform: scale(0.95, 1.1); /* Shrink horizontally, stretch vertically */
  }
  75% {
    transform: scale(1.02, 0.95); /* Slight stretch horizontally again */
  }
  100% {
    transform: scale(1, 1); /* Back to normal */
  }
`;

export const StyledEditText = styled.button<{ animate: boolean }>`
  background-color: #1667d9;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 3px 12px;
  cursor: pointer;
  animation: ${({ animate }) => (animate ? bounceAnimation : "none")} 0.4s
    ease-in-out;
  display: inline-block;
`;
export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: white;
`;
export const PostionDiv = styled.div`
  position: relative;
  border-radius: 50px;
`;
export const StyledCamImg = styled.img`
  border-radius: 50px;
  width: 25px;
  padding: 3px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
