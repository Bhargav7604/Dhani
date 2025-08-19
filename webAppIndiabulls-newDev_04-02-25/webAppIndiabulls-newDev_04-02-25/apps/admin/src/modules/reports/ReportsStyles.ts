import styled from "styled-components";

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