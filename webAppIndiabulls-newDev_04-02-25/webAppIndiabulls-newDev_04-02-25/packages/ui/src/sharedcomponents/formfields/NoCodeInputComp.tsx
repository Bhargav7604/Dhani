import React from "react";
import {
  ColumnFlexDiv,
  DiyTextHeader,
} from "../../../../../apps/user/src/components/ui/GlobalStyles.js";
import { MandatoryMark } from "../../sharedstyles/SharedStyledComps.js";
import {
  DiyInput,
} from "../../../../../apps/user/src/components/ui/GlobalStyles.js";
import { ErrorText } from "../../sharedstyles/SharedStyledComps.js";
import { NoCodeInputProps } from "../../../../../apps/user/src/modules/nocodestrategy/NoCodeStrategyUtils.js";
import { DIYHeaderDiv } from "./FormFieldsStyles.js";
import InfoComp from "../info/InfoComp.js";

const NoCodeInputComp = React.forwardRef<HTMLInputElement, NoCodeInputProps>(
  (
    {
      heading,
      error,
      disabled = false,
      type,
      name,
      required,
      info,
      ...rest
    }: NoCodeInputProps,
    ref
  ) => {
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

        <DiyInput
          type={type}
          disabled={disabled}
          {...rest}
          name={name}
          ref={ref}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </ColumnFlexDiv>
    );
  }
);

export default NoCodeInputComp;
