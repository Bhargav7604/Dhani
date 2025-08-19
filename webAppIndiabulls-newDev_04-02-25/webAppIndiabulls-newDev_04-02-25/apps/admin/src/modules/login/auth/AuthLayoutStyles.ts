import { styled } from "styled-components";
import { Container, Box } from "@mui/material";
import { HeadingProps } from "../forgotpassword/ForgotPasswordUtils";

export const LayoutContainer = styled(Container)`
border-radius:6px;
box-shadow: -6px 0 4px -2px gray;
display: flex;
  height: 100vh;
  width: 100%;
  padding: 0;
  background-color: ${(props) => props.theme.app.colors.bright};
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }
`;

export const Heading = styled.p<HeadingProps>`
  font-family: ${({ theme }) =>
    theme.app.typography.fontFamily.primary}!important;
  font-weight: ${({ theme }) => theme?.app.weights?.semiBold}!important;
  font-size: ${(props) => (props.subHeading ? "12px" : "28px")}!important;
  width: 100%;
  margin-bottom: ${(props) => (props.subHeading ? "30px" : "10px")}!important;
  text-align: center;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 24px !important;
  }
`;
export const StyledSubHeading = styled.p`
  font-size: 12px;
  font-weight: ${(props) => props.theme.app.weights.regular};
`;
export const StyledSpan = styled.span<{ color: boolean }>`
  font-size: 16px;
  color: ${(props: any) =>
    props.color
      ? props.theme.app.colors.algomenubackground
      : props.theme.app.colors.dark};
`;
export const AuthCard = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 50%;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    max-width: 100%;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) {
    max-width: 100%;
  }
`;

export const ContentBox = styled(Box)`
  flex: 1;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  border-radius: ${(props) => props.theme.app.measures.borderRadius};
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.mobileMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.desktopMin}) {
    display: none;
  }
`;

// export const Image = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: cover;
//   border-radius: 12px;
  
// `;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 12px;
  border: none;
  margin: 0;
  padding: 0;
`;