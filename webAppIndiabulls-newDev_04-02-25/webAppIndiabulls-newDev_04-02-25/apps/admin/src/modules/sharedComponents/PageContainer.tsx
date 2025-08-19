import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.app.colors?.bright};
  border-radius: 6px;
  transition: width 0.8s ease, background-color 0.8s ease;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  //border: 2px solid red;
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.app.colors?.bright};
`;

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <Container>
    <Body>{children}</Body>
  </Container>
);

export default PageContainer;
