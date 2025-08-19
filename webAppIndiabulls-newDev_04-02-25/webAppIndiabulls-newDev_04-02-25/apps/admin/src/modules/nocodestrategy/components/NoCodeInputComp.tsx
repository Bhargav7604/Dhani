import React from "react";
import {
  ColumnFlexDiv,
  DiyTextHeader,
  MandatoryMark,
} from "../../../components/ui/GlobalStyles";

import { NoCodeInputProps } from "../NoCodeStrategyUtils";
import { DIYHeaderDiv, DiyInput, ErrorTextWraper } from "../NoCodeStrategyStyles";
import InfoComp from "../../../components/info/InfoComp";

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
        {error && <ErrorTextWraper>{error}</ErrorTextWraper>}
      </ColumnFlexDiv>
    );
  }
);

export default NoCodeInputComp;
