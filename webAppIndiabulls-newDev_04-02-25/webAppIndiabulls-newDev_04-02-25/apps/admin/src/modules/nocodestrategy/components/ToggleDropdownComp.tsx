import {
  DiyTextHeader,
  MandatoryMark,
} from "../../../components/ui/GlobalStyles";
import {
  DIYHeaderDiv,
  ErrorWrapDiv,
  HeaderFlex,
  ToggleColumnDiv,
  ToggleDropdownWrapper,
  ToggleErrorText,
  ToggleInputComp,
  ToggleSelectComp,
} from "../NoCodeStrategyStyles";
import { Controller, FieldError } from "react-hook-form";
import { ToggleDropdownCompProps } from "../NoCodeStrategyUtils";
import { useWatch } from "react-hook-form";
import { Switch } from "@mui/material";
import InfoComp from "../../../components/info/InfoComp";
import { FormDataTypes } from "../sections/edit-diy-form/EditDIYUtils";

function ToggleDropdownComp({
  heading,
  item = [],
  numberOfInputs = 1,
  errors,
  control,
  toggleName,
  dropdownName,
  inputNames = [],
  defaultToggle,
  defaultInputValues = [],
  required,
  info,
  toggleTrue = false, // If true, switch should always be ON and cannot be turned OFF
}: ToggleDropdownCompProps) {
  const isSwitchOn = useWatch({
    control,
    name: toggleName as keyof FormDataTypes,
    defaultValue: defaultToggle ?? false,
  });

  return (
    <ToggleDropdownWrapper>
      <ToggleColumnDiv>
        <DIYHeaderDiv>
          <HeaderFlex>
            <DiyTextHeader>
              {heading} {required && <MandatoryMark>*</MandatoryMark>}
            </DiyTextHeader>

            {/* Controlled switch for enabling/disabling dropdown and inputs */}
            <Controller
              name={toggleName as keyof FormDataTypes}
              control={control}
              defaultValue={toggleTrue ? true : defaultToggle ?? false}
              render={({ field: toggleField }) => (
                <Switch
                  size="small"
                  defaultChecked={toggleTrue} // Ensures it starts as true when toggleTrue is true
                  checked={toggleTrue ? true : !!toggleField.value} // Prevents switching off when toggleTrue is true
                  onChange={(e) => {
                    if (!toggleTrue) {
                      toggleField.onChange(e.target.checked);
                    }
                  }}
                  sx={{
                    "& .MuiSwitch-thumb": {
                      backgroundColor: "white",
                      border: "2px solid #E2E8F0",
                      boxShadow:
                        "0px 5px 1px 0px rgba(128, 132, 137, 0.00), 0px 3px 1px 0px rgba(128, 132, 137, 0.01), 0px 2px 1px 0px rgba(128, 132, 137, 0.05), 0px 1px 1px 0px rgba(128, 132, 137, 0.09)",
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: "#E2E8F0",
                      opacity: 1,
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#227AF5",
                      opacity: 1,
                    },
                  }}
                />
              )}
            />
          </HeaderFlex>

          {info && <InfoComp info={info} />}
        </DIYHeaderDiv>

        <HeaderFlex>
          <Controller
            name={dropdownName as keyof FormDataTypes}
            control={control}
            defaultValue={item[0]?.key}
            render={({ field: dropdownField }) => (
              <ToggleSelectComp
                {...dropdownField}
                disabled={!toggleTrue && !isSwitchOn}
              >
                <option value="">Select</option>
                {item?.map((option: any, index: number) => (
                  <option key={index} value={option.key}>
                    {option.val}
                  </option>
                ))}
              </ToggleSelectComp>
            )}
          />

          {/* Render dynamic input fields with index-based names */}
          {Array.from({ length: numberOfInputs }).map((_, index) => {
            const defaultValuesArray = Array.isArray(defaultInputValues)
              ? defaultInputValues
              : [defaultInputValues];
            const inputName =
              numberOfInputs === 1
                ? inputNames // Single input case - use the input name directly
                : `${inputNames}[${index}]`; // Array notation for multiple inputs

            return (
              <Controller
                key={index}
                name={
                  typeof inputName === "string" ? inputName : String(inputName)
                }
                control={control}
                defaultValue={defaultValuesArray[index] || ""}
                rules={{ required: `Input field ${index + 1} is required.` }}
                render={({ field: inputField }) => (
                  <ToggleInputComp
                    type="number"
                    {...inputField}
                    disabled={!toggleTrue && !isSwitchOn} // Enable only if toggleTrue is true or switch is ON
                  />
                )}
              />
            );
          })}
        </HeaderFlex>
      </ToggleColumnDiv>

      {/* Error Messages */}
      {errors && (
        <ErrorWrapDiv>
          {/* Toggle field error */}
          {errors[toggleName] && (
            <ToggleErrorText>
              {(errors[toggleName] as FieldError).message}
            </ToggleErrorText>
          )}

          {/* Input field error */}
          {inputNames && errors[inputNames as keyof typeof errors] && (
            <ToggleErrorText>
              {
                (errors[inputNames as keyof typeof errors] as FieldError)
                  .message
              }
            </ToggleErrorText>
          )}

          {/* Dropdown field error */}
          {errors[dropdownName] && (
            <ToggleErrorText>
              {(errors[dropdownName] as FieldError).message}
            </ToggleErrorText>
          )}
        </ErrorWrapDiv>
      )}
    </ToggleDropdownWrapper>
  );
}

export default ToggleDropdownComp;

