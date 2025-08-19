import { StyledPara } from "../../sharedstyles/SharedStyledComps.js";
import {
  ColumnFlexDiv,
  StyledDataBigText,
} from "../../../../../apps/user/src/components/ui/GlobalStyles.js";
import { ErrorImage, ErrorWrapper } from "./ServerErrorStyles.js";
import servererrorimg from "../../assets/svg/server-error-img.svg";
export default function ErrorComponent() {
  return (
    <ErrorWrapper>
      <ColumnFlexDiv>
        <StyledDataBigText $fontsize="28px" $errmsg>
          Server Error
        </StyledDataBigText>
        <StyledPara $fontsize="14px">
          Thank you for your patience while we resolve the issue.
        </StyledPara>
      </ColumnFlexDiv>
      <ErrorImage src={servererrorimg} alt="server-error"></ErrorImage>
    </ErrorWrapper>
  );
}
