import { Controller } from "react-hook-form";
import {
  ColumnFlexDiv,
  DiyTextHeader,
  FlexRowDiv,
} from "../../../../../components/ui/GlobalStyles";
import NoCodeToggleComp from "../../../components/NoCodeToggleComp";
import {
  DIYHeaderDiv,
  EntryDaysDiv,
  MainStrategyTypeDiv,
  NoCodeHeaderText,
  NoCodeWidthSelect,
  StyledEnterDaysChecked,
} from "../../../NoCodeStrategyStyles";
import {
  StyledFCL,
  StyledFromGroup,
  WeekDiv,
} from "../../../NoCodeStrategyStyles";
import { useAppSelector } from "../../../../../store/Store";
import { FormCompProps } from "../EditDIYUtils";
import CustomTimePicker from "../../../../../components/timepicker/CustomTimePicker";
import { useEffect, useState } from "react";
import { stateType } from "./EntrySettingUtils";
import InfoComp from "../../../../../components/info/InfoComp";
import ShimmerCard from "../../../../../components/ui/shimmers/ShimmerCard";
const initialState = {
  shimmer: true,
};
const EntrySettings = ({ control, errors }: FormCompProps) => {
  const [state, setState] = useState<stateType>(initialState);
  const { shimmer } = state;
  const dropdownData = useAppSelector(
    (AppState) => AppState.diy.DiyDropDownRes
  );
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      shimmer: false,
    }));
  }, []);

  return (
    <>
      {shimmer ? (
        <ColumnFlexDiv>
          <ShimmerCard />
        </ColumnFlexDiv>
      ) : (
        <ColumnFlexDiv $flexstart>
          <NoCodeHeaderText>Step 2: Entry Settings</NoCodeHeaderText>
          <MainStrategyTypeDiv>
            <FlexRowDiv $width="100%" $gap="12px">
              <Controller
                name="strategyType"
                control={control}
                render={({ field: inputField }) => (
                  <NoCodeToggleComp
                    heading="Strategy Type"
                    item={dropdownData?.["strategyType"]}
                    {...inputField}
                    error={errors.strategyType?.message}
                    required
                    info={dropdownData?.descriptions?.strategyType}
                  />
                )}
              />
              <NoCodeWidthSelect>
                <CustomTimePicker
                  control={control}
                  name={"entryTime"}
                  error={errors.entryTime?.message}
                  heading="Entry Time (HH:MM)"
                  info={dropdownData?.descriptions?.entryTime}
                />
              </NoCodeWidthSelect>
            </FlexRowDiv>
            <EntryDaysDiv width="90%">
              <DIYHeaderDiv $enterondays="true">
                <DiyTextHeader>Enter on Days</DiyTextHeader>
                <InfoComp info={dropdownData?.descriptions?.enterOnDays} />
              </DIYHeaderDiv>

              <WeekDiv>
                <StyledFromGroup row>
                  {dropdownData?.daysMenu?.map((dayItem, index) => {
                    return (
                      <Controller
                        key={index} // Ensure key is outside of the render
                        name={`entryDays.${dayItem?.key}`} // Use unique names for each checkbox
                        control={control}
                        render={({ field }) => (
                          <StyledFCL
                            sx={{
                              fontSize: "16px",
                              gap: "2px",
                              border: "none",
                            }}
                            label={dayItem?.val?.slice(0, 3) || ""}
                            control={
                              <StyledEnterDaysChecked
                                sx={{
                                  margin: "0px",
                                  transform: "scale(0.7)",
                                  color: "red",
                                  "&.Mui-checked": {
                                    color: "red",
                                  },
                                  "& .MuiSvgIcon-root": {
                                    fontSize: "24px !important",
                                  },
                                }}
                                {...field} // Ensure field props are properly spread
                                size="small"
                                checked={field.value || false} // Safely set checked
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                } // Update the value correctly
                              />
                            }
                          />
                        )}
                      />
                    );
                  })}
                </StyledFromGroup>
              </WeekDiv>
            </EntryDaysDiv>
          </MainStrategyTypeDiv>
        </ColumnFlexDiv>
      )}
    </>
  );
};

export default EntrySettings;
