import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 12px;
`;



export const PaginationButton = styled.button<{
  isActive?: boolean;
  isTextButton?: boolean;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  font-size: 12px;
  padding: 8px 12px;
  transition: background-color 0.3s;
  background-color: ${({ isActive, isTextButton }) =>
    isActive ? "#1667D9" : isTextButton ? "transparent" : "#ffffff"};
  color: ${({ isActive, isTextButton }) =>
    isActive ? "#ffffff" : isTextButton ? "black" : "black"};
  border-radius: 50%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(.active):not(:disabled) {
    background-color: ${({ isActive, isTextButton }) =>
      isActive ? "" : isTextButton ? "" : "#ffffff"};
  }
`;
