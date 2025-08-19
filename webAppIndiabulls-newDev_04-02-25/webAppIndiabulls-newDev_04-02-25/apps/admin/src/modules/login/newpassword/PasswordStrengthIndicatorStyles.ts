

import { styled } from "styled-components";
import { Box } from "@mui/material";

export const StrengthIndicator = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const IndicatorItem = styled(Box)<{ active: boolean; strengthLevel: number }>`
  width: 60px;
  height: 8px;
  margin-right: 2px;
  border-radius: 4px;
  background-color: ${({ active, strengthLevel }) => {
    if (!active) return "#e0e0e0"; // Default inactive color
    switch (strengthLevel) {
      case 1:
        return "#ff4d4d"; // Yellow for strength 1
      case 2:
        return "#ffa94d"; // Orange for strength 2
      case 3:
        return "#a6ff4d"; // Light green for strength 3
      case 4:
        return "#4caf50"; // Dark green for strength 4
      default:
        return "#e0e0e0"; // Fallback color
    }
  }};
  transition: background-color 0.3s ease;
`;
