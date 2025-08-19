import {
  StyledToggleButton,
  StyledToggleButtonGroup,
  ToggleDiv,
  DIYHeaderDiv,
} from "./FormFieldsStyles.js";
import { ToggleItemProps } from "./FormFieldsUtils.js";
import {
  DiyTextHeader,
  ColumnFlexDiv,
} from "../../../../../apps/user/src/components/ui/GlobalStyles.js";
import { MandatoryMark } from "../../sharedstyles/SharedStyledComps.js";
import { ErrorText } from "../../sharedstyles/SharedStyledComps.js";
import React, { useEffect } from "react";
import InfoComp from "../info/InfoComp.js";
import { useAppSelector } from "../../../../../apps/user/src/store/Store.js";

const NoCodeToggleComp = React.forwardRef<HTMLDivElement, ToggleItemProps>(
  (
    {
      heading,
      item,
      error,
      required,
      info,
      disabled,
      ...rest
    }: ToggleItemProps,
    ref
  ) => {
    const { value, onChange } = rest;
    const { isLive } = useAppSelector((appState) => appState.welcomePopup);

    // Logic: Default is 0th key unless it’s LiveTrading and isLive is false
    const getCorrectInitialKey = () => {
      const firstKey = item[0]?.key ?? null;
      if (firstKey === "LiveTrading" && !isLive) {
        const fallback = item.find((i) => i.key !== "LiveTrading");
        return fallback?.key ?? firstKey;
      }
      return firstKey;
    };

    const initialKey = getCorrectInitialKey();

    //If no value exists yet, force set on first render
    if (value === undefined && initialKey && onChange) {
      onChange(initialKey); // Register value early for RHF
    }

    // Also keep as a backup in case of async render
    useEffect(() => {
      if (value === undefined && initialKey) {
        onChange(initialKey);
      }
    }, [value, initialKey, onChange]);

    const toggleValue = value ?? initialKey;

    return (
      <ColumnFlexDiv ref={ref}>
        <DIYHeaderDiv>
          {heading && (
            <DiyTextHeader>
              {heading} {required && <MandatoryMark>*</MandatoryMark>}
            </DiyTextHeader>
          )}
          {info && <InfoComp info={info} />}
        </DIYHeaderDiv>

        <ToggleDiv>
          <StyledToggleButtonGroup
            aria-label="toggle"
            exclusive
            value={toggleValue}
            onChange={(_, newValue) => {
              if (newValue !== null) {
                onChange?.(newValue);
              }
            }}
            disabled={disabled}
          >
            {item.map(({ key, val }, index) => (
              <StyledToggleButton
                key={index}
                value={key}
                disabled={key === "LiveTrading" && !isLive}
                $active={toggleValue === key}
              >
                {val}
              </StyledToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </ToggleDiv>

        {error && <ErrorText style={{ color: "red" }}>{error}</ErrorText>}
      </ColumnFlexDiv>
    );
  }
);

export default NoCodeToggleComp;
