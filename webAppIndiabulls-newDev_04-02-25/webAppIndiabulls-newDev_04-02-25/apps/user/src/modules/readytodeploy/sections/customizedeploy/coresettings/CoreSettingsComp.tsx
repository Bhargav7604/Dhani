import { Controller } from "react-hook-form";
import { DiyHeaderText } from "../../../../nocodestrategy/NoCodeStrategyStyles";
import {
  CapitalText,
  CoreDiv,
  PopupColumnItems,
} from "../../strategiescard/StrategiesCardStyles";
import {
  DeployFormDataTypes,
  DeployPopupFieldsProps,
  InitialStateType,
} from "../../strategiescard/StrategiesCardUtils";
import { CoreSettingsFormFields } from "../CustomizeDeployFormfields";
import {
  NoCodeWidthSelect,
  ToggleWidth,
} from "../../../../nocodestrategy/NoCodeStrategyStyles";
import NoCodeSelectComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeSelectComp";

import {
  OptionProps,
  ToggleItem,
} from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/FormFieldsUtils";
import NoCodeToggleComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeToggleComp";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../store/Store";

const CoreSettingsComp = (props: DeployPopupFieldsProps) => {
  const { control, errors, item, watch, isStrategyLive = false } = props;
  const initialState = {
    multiplierValue: item?.multiplier,
  };
  const [state, setState] = useState<InitialStateType>(initialState);
  const { multiplierValue } = state;
  const { dropdownList } = useAppSelector(
    (AppState) => AppState.strategies.strategiesRes
  );

  const watchedMultiplier = watch("multiplier");

  useEffect(() => {
    if (
      watchedMultiplier !== undefined &&
      watchedMultiplier !== null &&
      !isNaN(watchedMultiplier)
    ) {
      setState((prevState) => ({
        ...prevState,
        multiplierValue: Number(watchedMultiplier), // Convert to number
      }));
    }
  }, [watchedMultiplier]);

  return (
    <PopupColumnItems
      $backgroundcolor="white"
      $aligncontent="start"
      $width="100%"
    >
      <DiyHeaderText>
        Core Settings{" "}
        <CapitalText>
          (Min. Capital: &#8377;
          {(item?.minCapital * (multiplierValue ?? 2)).toLocaleString("en-IN")})
        </CapitalText>
      </DiyHeaderText>
      <CoreDiv>
        {CoreSettingsFormFields.map((field) => (
          <Controller
            key={field.name}
            name={field.name as keyof DeployFormDataTypes}
            control={control}
            render={({ field: inputField }) => {
              const isMultiplier = field.heading === "Multiplier";
              if (field.type === "select") {
                return (
                  <NoCodeWidthSelect width={isMultiplier ? "10%" : "100%"}>
                    <NoCodeSelectComp
                      heading={field.heading}
                      item={
                        dropdownList?.[
                          field?.item as keyof typeof dropdownList
                        ] as OptionProps[]
                      }
                      error={
                        errors[field.name as keyof DeployFormDataTypes]?.message
                      }
                      {...inputField}
                      disabled={isStrategyLive}
                      required={field.required}
                    />
                  </NoCodeWidthSelect>
                );
              }  else if (field.type === "toggle") {
                return (
                  <ToggleWidth>
                    <NoCodeToggleComp
                      heading={field.heading}
                      item={
                        dropdownList?.[
                          field?.item as keyof typeof dropdownList
                        ] as unknown as ToggleItem[]
                      }
                      error={
                        errors[field.name as keyof DeployFormDataTypes]?.message
                      }
                      {...inputField}
                      disabled={isStrategyLive}
                      required={field.required}
                    />
                  </ToggleWidth>
                );
              } else {
                return <></>;
              }
            }}
          />
        ))}
      </CoreDiv>
    </PopupColumnItems>
  );
};

export default CoreSettingsComp;
