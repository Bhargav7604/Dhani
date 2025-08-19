import styled from "styled-components";
export const CustomDateWraperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DateText = styled.span`
  font-size: 10px;
`;

export const CustomDatePicker = styled.input`
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const TextCenter = styled.div`
text-align:center;
padding:10px;
`;

export const TotalOrdersText = styled.p`
font-size: 16px;
font-weight: 600;
color: ${(props) => props.theme.app.colors.text.secondary};

@media(max-width :${(props) => props.theme.app.resolutions.mobileMax}) {
font-size: 14px;
}
`

