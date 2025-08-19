import {
  ErrorText,
  StyledToggleButton,
  StyledToggleButtonGroup,
  ToggleDiv,
} from "../NoCodeStrategyStyles";
import { ToggleItemProps } from "../NoCodeStrategyUtils";
import {
  DiyTextHeader,
  ColumnFlexDiv,
  MandatoryMark,
} from "../../../components/ui/GlobalStyles";
import React, { useEffect } from "react";
import { DIYHeaderDiv } from "../NoCodeStrategyStyles";
import InfoComp from "../../../components/info/InfoComp";
import { useAppSelector } from "../../../store/Store";
// import { useAppSelector } from "../../../store/Store";

const NoCodeToggleComp = React.forwardRef<HTMLDivElement, ToggleItemProps>(
  ({ heading, item, error, required, info, ...rest }: ToggleItemProps, ref) => {
    const { value, onChange } = rest;
    const {  } = useAppSelector((appState) => appState);

    // Set the default toggleValue to the first item's key if no value is passed
    // const toggleValue = value ?? item[0]?.key ?? null; // Ensure we use `key` correctly from the item

    // // const welcomeDecline = useAppSelector((appState) => appState.welcome.welcomeDecline);

    // useEffect(() => {
    //   if (!value && item.length > 0) {
    //     onChange?.(item[0].key); // Trigger onChange with first item's key
    //   }
    // }, [value, item, onChange]);

    // Find the first non-disabled key
    const getValidDefaultKey = () => {
      for (const i of item) {
        if (!(i.key === "LiveTrading" )) {
          return i.key;
        }
      }
      return null; // fallback if all are disabled
    };

    const toggleValue = value ?? getValidDefaultKey();

    useEffect(() => {
      if (!value) {
        const validKey = getValidDefaultKey();
        if (validKey) {
          onChange?.(validKey);
        }
      }
    }, [value, item,  onChange]);

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
            aria-label="order info"
            exclusive
            // disabled={true}
            value={toggleValue} // Use the value or default value
            onChange={(_, newValue) => {
              if (onChange) {
                onChange(newValue);
              }
            }}
          >
            {item?.map(({ key, val }, index) => (
              <StyledToggleButton
                key={index}
                value={key}
                disabled={key === "LiveTrading" }
                // The 'active' prop is controlled by the value selected
                $active={toggleValue === key}
              >
                {val}
              </StyledToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </ToggleDiv>
        {/* Display error if there is no selection */}
        {error && (
          <ErrorText style={{ color: "red" }}>{error}</ErrorText>
        )}
      </ColumnFlexDiv>
    );
  }
);

export default NoCodeToggleComp;
