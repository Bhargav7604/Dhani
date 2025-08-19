import React from "react";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledTimePicker } from "./CustomTimePickerStyles.js";
import {
  ColumnFlexDiv,
  DiyTextHeader,
} from "../../../../../apps/user/src/components/ui/GlobalStyles.js";
import { MandatoryMark,ErrorText } from "../../sharedstyles/SharedStyledComps.js";
// import { ErrorText } from "../../../../../apps/user/src/modules/diystrategybuilder/DIYStartegyStyles.js";
// import { DIYHeaderDiv } from "../../../../../apps/user/src/modules/nocodestrategy/NoCodeStrategyStyles.js";
import { DIYHeaderDiv } from "../formfields/FormFieldsStyles.js";
import InfoComp from "../info/InfoComp.js";

type TimePickerProps = {
  control: any;
  error?: any;
  hour?: number;
  minute?: number;
  heading: string;
  name: string;
  info?: string;
  disabled?: boolean;
};

const CustomTimePicker: React.FC<TimePickerProps> = ({
  control,
  error,
  hour,
  minute,
  heading,
  name,
  info,
  disabled = false,
}) => {
  let adjustedHour = hour;
  if (hour === 1) adjustedHour = 13;
  if (hour === 2) adjustedHour = 14;
  if (hour === 3) adjustedHour = 15;

  // Constant min and max times
  const minTime = dayjs().set("hour", 9).set("minute", 14);
  const maxTime = dayjs().set("hour", 15).set("minute", 30);

  // Initial time from props
  const initialTime =
    hour !== undefined && minute !== undefined
      ? dayjs().set("hour", adjustedHour!).set("minute", minute!)
      : null;

  const validatedInitialTime = initialTime
    ? initialTime.isBefore(minTime)
      ? minTime.add(1, "minute") // Push to valid range
      : initialTime.isAfter(maxTime)
      ? maxTime
      : initialTime
    : null;

  return (
    <ColumnFlexDiv width="fit-content" $flexstart>
      <DIYHeaderDiv>
        <DiyTextHeader>
          {heading} <MandatoryMark>*</MandatoryMark>
        </DiyTextHeader>

        {info && <InfoComp info={info} />}
      </DIYHeaderDiv>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={validatedInitialTime?.format("HH:mm")} // Pass as a formatted string
          render={({ field }) => (
            <div>
              <StyledTimePicker
                {...field}
                disabled={disabled}
                sx={{
                  "& fieldset": { border: "none" },
                }}
                value={dayjs(field?.value, "HH:mm")} // Convert to dayjs object for the TimePicker
                onChange={(newValue: any) => {
                  if (newValue) {
                    // Pass only the formatted hh:mm value to react-hook-form
                    field?.onChange(newValue?.format("HH:mm"));
                  }
                }}
                minTime={minTime}
                maxTime={maxTime}
                ampm={false}
                minutesStep={1}
              />
              {error && <ErrorText>{error}</ErrorText>}
            </div>
          )}
        />
      </LocalizationProvider>
    </ColumnFlexDiv>
  );
};

export default CustomTimePicker;
