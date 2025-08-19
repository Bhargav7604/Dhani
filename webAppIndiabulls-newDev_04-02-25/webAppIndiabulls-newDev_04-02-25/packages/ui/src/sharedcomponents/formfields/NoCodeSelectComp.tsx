import {
  DiyTextHeader,
  StyledDiySelect,
  ColumnFlexDiv
} from "../../../../../apps/user/src/components/ui/GlobalStyles.js";
import { MandatoryMark,ErrorText } from "../../sharedstyles/SharedStyledComps.js";
// import { ErrorText } from "../../diystrategybuilder/DIYStartegyStyles";
import { NoCodeSelectProps } from "./FormFieldsUtils.js";
// import { ColumnFlexDiv } from "../../../components/ui/GlobalStyles";
import React from "react";
import { DIYHeaderDiv } from "./FormFieldsStyles.js";
import InfoComp from "../info/InfoComp.js";

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
