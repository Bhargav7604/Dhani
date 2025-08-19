import {
  DiyTextHeader,
  MandatoryMark,
  StyledDiySelect,
} from "../../../components/ui/GlobalStyles";
import { NoCodeSelectProps } from "../NoCodeStrategyUtils";
import { ColumnFlexDiv } from "../../../components/ui/GlobalStyles";
import React from "react";
import { DIYHeaderDiv, ErrorText } from "../NoCodeStrategyStyles";
import InfoComp from "../../../components/info/InfoComp";

const NoCodeSelectComp = React.forwardRef<HTMLSelectElement, NoCodeSelectProps>(
  ({ heading, item = [], error, disabled = false, required, info,  ...rest }, ref) => {
    return (
      <ColumnFlexDiv>
        <DIYHeaderDiv>

        {heading && (
          <DiyTextHeader>
            {heading} {required && <MandatoryMark>*</MandatoryMark>}
          </DiyTextHeader>
          )}

          {info && <InfoComp info={info} />}
          
        </DIYHeaderDiv>
        <StyledDiySelect {...rest} disabled={disabled} ref={ref}>
          <option value="">Select</option>
          {item?.map((option, index) => (
            <option key={index} value={option.key}>
              {option.val}
            </option>
          ))}
        </StyledDiySelect>
        {error && <ErrorText>{error}</ErrorText>}
      </ColumnFlexDiv>
    );
  }
);

export default NoCodeSelectComp;
