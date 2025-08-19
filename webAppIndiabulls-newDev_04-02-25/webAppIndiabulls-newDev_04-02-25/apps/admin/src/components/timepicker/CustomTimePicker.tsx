import React from "react";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledTimePicker } from "./CustomTimePickerStyles";
import {
  ColumnFlexDiv,
  DiyTextHeader,
  MandatoryMark,
} from "../ui/GlobalStyles";
import { DIYHeaderDiv, ErrorText } from "../../modules/nocodestrategy/NoCodeStrategyStyles";
import InfoComp from "../info/InfoComp";
 
type TimePickerProps = {
  control: any;
  error?: any;
  hour?: number;
  minute?: number;
  heading: string;
  name: string;
  info?: string;
};
 
const CustomTimePicker: React.FC<TimePickerProps> = ({
  control,
  error,
  hour,
  minute,
  heading,
  name,
  info,
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
    <ColumnFlexDiv width="100%" $flexstart>
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
            <div  style={{ width: '100%' }}>
              <StyledTimePicker
                {...field}
                // disabled={true}
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
 
 
 
 