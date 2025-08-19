import React from "react";
import styled from "styled-components";

const ShimmerWrapper = styled.div`
  display: flex;
  margin: 20px 4px;
  flex-direction: column;
  gap: 10px;
`;

const ShimmerRow = styled.div<{ $isFirst: boolean }>`
  height: ${({ $isFirst }) => ($isFirst ? "50px" : "40px")};
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
  animation: shimmer 2.5s infinite;
  border-radius: 8px;

  @keyframes shimmer {
    0% {
      background-position: 150% 0;
    }
    100% {
      background-position: -150% 0;
    }
  }
`;

const TableShimmer: React.FC<{ rowsCount: number }> = ({ rowsCount }) => {
  return (
    <ShimmerWrapper>
      {Array.from({ length: rowsCount }, (_, index) => (
        <ShimmerRow key={index} $isFirst={index === 0} />
      ))}
    </ShimmerWrapper>
  );
};

export default TableShimmer;
