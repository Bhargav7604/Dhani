import { Button, FormControlLabel, RadioGroup } from "@mui/material";
import styled from "styled-components";
import { ColumnFlexDivProps } from "./WelcomeModalUtils";
import { StyledParaProps } from "../../../../../packages/ui/src/sharedstyles/SharedStyledCompProps";

export const StyledWelcomeModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 16px;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  width: 70%;
  max-width: 640px;
  border-top: 8px solid ${(props) => props.theme.app.colors.border.main} !important;
  border-bottom: 3px solid ${(props) => props.theme.app.colors.border.main} !important;
  border-left: 3px solid ${(props) => props.theme.app.colors.border.main} !important;
  border-right: 3px solid ${(props) => props.theme.app.colors.border.main} !important;
  border-radius: 18px;
  min-height: 65vh;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 90%;
    padding: 12px;
    min-height: 50vh;
  }
  @media (min-width: ${(props) =>
      props.theme.app.resolutions.tabMin}) and (max-width: ${(props) =>
      props.theme.app.resolutions.tabMax}) {
    width: 90%;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  /* width: 100% !important; */
  /* text-align: center; */
  /* border: 1px solid green; */

  & .MuiFormControlLabel-label {
    font-size: 13px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    font-family: "Plus Jakarta Sans";
  }
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    & .MuiFormControlLabel-label {
      font-size: 12px;
    }
  }
`;

export const ColumnFlexDiv = styled.div<ColumnFlexDivProps>`
  display: flex;
  flex-direction: ${(props) => (props.$row ? "row" : "column")};
  justify-content: ${(props) => props.$justifycontent || ""};
  align-items: ${(props) => props.$alignitems || ""};
  gap: ${(props) => props.$gap || ""};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
`;

export const StyledButton = styled(Button)`
  width: 26% !important;
  padding: 4px 12px !important;
  background-color: ${(props) => props.theme.app.colors.buttons.primary};
  border-radius: 8px !important;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 26% !important;
    padding: 2px 22px !important;
    font-size: 12px !important;
    text-align: center !important;
  }
`;

export const MainHeader = styled.p`
  font-size: 22px;
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  width: 80%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    flex-direction: column;
  }
`;
export const StyledSpan = styled.span`
  color: ${(props) => props.theme.app.colors.border.main};
`;

export const StyledListItem = styled.li<{ $marginbottom?: string }>`
  margin-left: 24px;
  margin-bottom: ${(props) => props.$marginbottom || ""};
  font-size: 15px;
  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 12px;
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  /* display: flex !important; */
  /* flex-direction: row !important; */
  width: 100%;
  /* justify-content: space-between; */
`;
export const StyledPara = styled.p<StyledParaProps>`
  font-size: ${(props) => (props.$fontsize ? props.$fontsize : "10px")};
  font-weight: ${(props) =>
    props.$fontweight ? props.$fontweight : props.theme.app.weights.semiBold};
  color: ${(props) =>
    props.$color ? props.theme.app.colors.text.secondary : ""};
  text-align: ${(props) => props.$textalign || ""};
  margin-bottom: ${(props) => props.$marginbottom || ""};
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 100%;

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    font-size: 10px;
    white-space: ${(props) => (props.$mobilenowrap ? "nowrap" : "normal")};
  }
`;