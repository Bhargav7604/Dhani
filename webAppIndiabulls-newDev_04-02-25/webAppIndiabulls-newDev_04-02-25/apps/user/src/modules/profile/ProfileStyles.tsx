import styled from "styled-components";

export const ProfileWrapperDiv = styled.form`
display: flex;
flex-direction: row;
width: 100%;
justify-content: start;
align-items: start;
gap: 16px;
@media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
  flex-direction: column;
  gap: 12px;
}
`
export const ProfileDetailsDiv = styled.div<{$gap?: string}>`
  display: flex;
  flex-direction: column;
  border-radius: ${(prpos) => prpos.theme.app.measures.borderRadius};
  justify-content: start;
  align-items: flex-start;
  gap: ${(props) => props.$gap || "12px"};
  width: 100%;
  background-color: white;
  padding: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: ${(props) => props.theme.app.resolutions.mobileMax}) {
    width: 100%;
  }
`;





