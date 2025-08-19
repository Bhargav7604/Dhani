import styled from "styled-components";
import { TextField } from "@mui/material";

export const AdminModalTitle = styled("h2")`
  text-align: center;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #000;
`;

export const FlexRowDivModal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  // align-items: center;
`;
export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  @media (max-width: 600px) {
    max-width: inherit;
    flex-direction: column;
    margin: 0px !important;
    padding: 0px !important;
    gap: 0px !important;
  }
`;
export const StyledErrorText = styled.p`
  font-size: 11px;
  color: red;
  position: absolute;
  bottom: -4px;
`;



export const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    height: 40px; /* Adjust the input height if necessary */
    margin: 0 !important;
    padding: 0 !important;
  }
  width: 100%;
  padding: 0;
  margin: 0;
`;
