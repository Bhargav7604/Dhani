import { Controller } from "react-hook-form";
import { ColumnFlexDiv } from "../../../../../components/ui/GlobalStyles";
import {
  ExitSettingsDiv,
  NoCodeHeaderText,
  NoCodeWidthSelect,
  ProfitWrapDiv,
} from "../../../NoCodeStrategyStyles";
import {
  ExitAfterFormFields,
  ProfitToggleFormFields,
} from "./ExitSettingsFormFields";
import NoCodeSelectComp from "../../../components/NoCodeSelectComp";
import { DropDownItem, NoCodeStrategyResponse } from "../../../services/NoCodeStrategyServiceTypes";
import ToggleDropdownComp from "../../../components/ToggleDropdownComp";
import { FormCompProps, FormDataTypes } from "../EditDIYUtils";
import { useAppSelector } from "../../../../../store/Store";
import CustomTimePicker from "../../../../../components/timepicker/CustomTimePicker";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { stateType } from "./ExitSettingsTypes";
import ShimmerCard from "../../../../../components/ui/shimmers/ShimmerCard";

const intialState = {
  shimmer: true,
};
const ExitSettings = ({ control, errors, watch, getValues }: FormCompProps) => {
  const [state, setState] = useState<stateType>(intialState);
  const { shimmer } = state;
  const dropdownData = useAppSelector(
    (appstate) => appstate.diy.DiyDropDownRes
  );
  useEffect(() => {
    if (dropdownData) {
      setState((prevState) => ({
        ...prevState,
        shimmer: false,
      }));
    }
  }, [dropdownData]);
  return (
    <>
      {shimmer ? (
        <ColumnFlexDiv>
          <ShimmerCard />
        </ColumnFlexDiv>
      ) : (
        <ColumnFlexDiv $flexstart>
          <NoCodeHeaderText>Step 3: Exit Settings</NoCodeHeaderText>
          <ExitSettingsDiv $padding="24px 18px" $mobilepadding="12px 12px 24px 12px" $boxshadow="true">
              <ProfitWrapDiv>
                <NoCodeWidthSelect>

              <CustomTimePicker
                control={control}
                error={errors.exitTime?.message}
                name={"exitTime"}
                    heading={"Exit Time (HH:MM)"}
                    info={dropdownData?.descriptions?.exitTime}
              />
                </NoCodeWidthSelect>

              {ExitAfterFormFields.map((field, index) => (
                <Controller
                  key={index}
                  name={field.name as keyof FormDataTypes}
                  control={control}
                  render={({ field: inputField }) => {
                    const strategyType = watch("strategyType");

                    return (
                      <NoCodeSelectComp
                        heading={field.heading}
                        item={
                          dropdownData[
                            field?.item as keyof NoCodeStrategyResponse
                          ] as DropDownItem[]
                        }
                        disabled={
                          strategyType === "Intraday" &&
                          (field.name === "exitExpiry" ||
                            field.name === "exitAfterDays")
                        }
                        error={
                          errors[field.name as keyof FormDataTypes]?.message
                        }
                        {...inputField}
                        info={dropdownData?.descriptions?.[field.info]}
                      />
                    );
                  }}
                />
              ))}

              {ProfitToggleFormFields.map((field, index) => {
                return (
                  <NoCodeWidthSelect key={index}>
                    <ToggleDropdownComp
                      key={index}
                      heading={field.heading}
                      item={
                        dropdownData[field?.item as keyof NoCodeStrategyResponse]
                      }
                      numberOfInputs={field.numberOfInputs}
                      dropdownName={field.dropdownName}
                      inputNames={field.inputNames}
                      toggleName={field.toggleName}
                      control={control}
                      errors={errors}
                      getValues={getValues}
                      // required={field.required}
                      // toggleTrue={true}
                      info={dropdownData?.descriptions?.[field.info]}
                    />
                  </NoCodeWidthSelect>
                );
              })}
            </ProfitWrapDiv>
          </ExitSettingsDiv>
        </ColumnFlexDiv>
      )}
    </>
  );
};

export default ExitSettings;
