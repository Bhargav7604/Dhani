import styled from "styled-components";

export const CustomHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  outline: none !important;
  transition: width 0.8s ease, background-color 0.8s ease;
  &:focus {
    outline: none !important;
  }
`;

export const CustomHeaderTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.app.colors?.text?.primary};
  flex: 1;
  text-align: left;
`;

export const CustomHeaderIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  line-height: 0; /* This reduces the space between icons */
`;

export const CustomHeaderIconUp = styled.div`
  color: grey;
  font-size: 20px;
  margin-bottom: -12px; /* Adjust this to reduce the gap */
`;

export const CustomHeaderIconDown = styled.div`
  color: grey;
  font-size: 20px;
  margin-top: -4px; /* Adjust this to reduce the gap */
`;

export const CustomHeaderIconUpActive = styled(CustomHeaderIconUp)`
  color: ${({ theme }) => theme.app.colors?.text?.primary};
`;

export const CustomHeaderIconDownActive = styled(CustomHeaderIconDown)`
  color: ${({ theme }) => theme.app.colors?.text?.primary};
`;
