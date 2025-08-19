import { Controller } from "react-hook-form";
import CustomTimePicker from "../../../../../../../../packages/ui/src/sharedcomponents/timepicker/CustomTimePicker";
import {
  DiyHeaderText,
  EntryWrapDiv,
  ExitTimeDiv,
} from "../../../../nocodestrategy/NoCodeStrategyStyles";
import {
  PopupColumnItems,
  StyledFCL,
  StyledFromGroup,
  WeekDiv,
} from "../../strategiescard/StrategiesCardStyles";
import {
  DeployFormDataTypes,
  DeployPopupFieldsProps,
} from "../../strategiescard/StrategiesCardUtils";
import {
  EntryDaysDiv,
  NoCodeWidthSelect,
  StyledEnterDaysChecked,
} from "../../../../nocodestrategy/NoCodeStrategyStyles";
import NoCodeSelectComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeSelectComp";
import { useMemo } from "react";
import { DiyTextHeader } from "../../../../../components/ui/GlobalStyles";
import { useAppSelector } from "../../../../../store/Store";
import { DropDownItem } from "../../../../nocodestrategy/services/NoCodeStrategyServiceTypes";

const EntrySettingsComp = (props: DeployPopupFieldsProps) => {
  const { control, errors, watch, item, isStrategyLive = false} = props;
  const { dropdownList } = useAppSelector(
    (AppState) => AppState.strategies.strategiesRes
  );
  const UnderlyingValue = watch("underlying");

  return (
    <PopupColumnItems
      $backgroundcolor="white"
      $width="100%"
      $justifycontent="start"
      $aligncontent="start"
    >
      <DiyHeaderText>Entry Settings</DiyHeaderText>
      <EntryWrapDiv>
        <ExitTimeDiv>
          <CustomTimePicker
            control={control}
            error={errors.entryTime?.message}
            heading="Entry Time (HH:MM)"
            hour={item?.entryDetails.entryHourTime}
            minute={item?.entryDetails.entryMinsTime}
            name={"entryTime"}
            disabled={isStrategyLive}
          />

          <Controller
            name={"expiry" as keyof DeployFormDataTypes}
            control={control}
            defaultValue={item.entryDetails.expiry}
            render={({ field: inputField }) => {
              return (
                <NoCodeWidthSelect>
                  <NoCodeSelectComp
                    heading={"Expiry"}
                    item={useMemo(() => {
                      if (!dropdownList.expiry) return [];

                      const indexToFilter = [2, 3, 5]; // BANKNIFTY, FINNIFTY, and BANKEX from backend
                      const lastTwoOptions = dropdownList?.expiry?.slice(-2); // "Current Month" and "Next Month" last 2 options

                      // Return filtered options only if `underlyingValue` matches
                      return indexToFilter?.includes(
                        Number(watch("underlying"))
                      )
                        ? lastTwoOptions
                        : dropdownList?.expiry;
                    }, [UnderlyingValue, dropdownList.expiry])}
                    error={
                      "expiry" in errors
                        ? (errors["expiry" as keyof DeployFormDataTypes]
                            ?.message as string | undefined)
                        : undefined
                    }
                    {...inputField}
                    disabled={isStrategyLive}
                    required={true}
                  />
                </NoCodeWidthSelect>
              );
            }}
          />
        </ExitTimeDiv>
        <EntryDaysDiv >
          <DiyTextHeader>Enter on Days</DiyTextHeader>
          <WeekDiv>
            <StyledFromGroup row>
              {dropdownList?.entryDays?.map(
                (dayItem: DropDownItem, index: number): any => (
                  <Controller
                    key={index} // Ensure unique keys
                    name={`entryDays.${dayItem?.key}`} // Unique name for each day's checkbox
                    control={control}
                    defaultValue={
                      item?.entryDetails?.entryDaysList?.includes(
                        dayItem?.key
                      ) || false
                    }
                    render={({ field }) => (
                      <StyledFCL
                        sx={{
                          fontSize: "16px",
                          padding: "4px 4px !important",
                          gap: "2px",
                          border: "none",
                        }}
                        label={dayItem?.val?.slice(0, 3) || ""} // Display first 3 letters of the day
                        control={
                          <StyledEnterDaysChecked
                            sx={{
                              margin: "0px",
                              transform: "scale(0.9)",
                              color: "red",
                              "&.Mui-checked": {
                                color: "red",
                              },
                              "& .MuiSvgIcon-root": {
                                fontSize: "24px !important",
                              },
                              "&.Mui-disabled, &.Mui-disabled .MuiSvgIcon-root":
                                {
                                  opacity: 0.75,
                                },
                            }}
                            {...field} // Spread field props
                            size="small"
                            disabled={isStrategyLive}
                            checked={!!field.value} // Ensure the field value is a boolean
                            onChange={(e) => field.onChange(e.target.checked)} // Update state
                          />
                        }
                      />
                    )}
                  />
                )
              )}
            </StyledFromGroup>
          </WeekDiv>
        </EntryDaysDiv>
      </EntryWrapDiv>
    </PopupColumnItems>
  );
};

export default EntrySettingsComp;
