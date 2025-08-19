import CustomTimePicker from "../../../../../../../../packages/ui/src/sharedcomponents/timepicker/CustomTimePicker";
import { useAppSelector } from "../../../../../store/Store";
import { DiyHeaderText } from "../../../../nocodestrategy/NoCodeStrategyStyles";
import ToggleDropdownComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/ToggleDropdownComp";
import { NoCodeWidthSelect } from "../../../../nocodestrategy/NoCodeStrategyStyles";
import { DropdownList } from "../../../services/AllStrategiesServiceTypes";
import {
  ExitCoreDiv,
  PopupColumnItems,
} from "../../strategiescard/StrategiesCardStyles";
import { DeployPopupFieldsProps } from "../../strategiescard/StrategiesCardUtils";
import { ProfitToggleFormFields } from "../CustomizeDeployFormfields";
import { StyledTertiaryText } from "../../../../../components/ui/GlobalStyles";

const ExitSettingsComp = (props: DeployPopupFieldsProps) => {
  const { control, errors, item, getValues, isStrategyLive = false } = props;
  const { dropdownList } = useAppSelector(
    (AppState) => AppState.strategies.strategiesRes
  );

  return (
    <PopupColumnItems
      $backgroundcolor="white"
      $width="100%"
      $justifycontent="start"
      $aligncontent="start"
    >
      <DiyHeaderText>Exit Settings</DiyHeaderText>
      {isStrategyLive && (
        <StyledTertiaryText>
          Since the strategy is currently live, only the exit settings can be
          modified.
        </StyledTertiaryText>
      )}

      <ExitCoreDiv>
        <CustomTimePicker
          heading="Exit Time (HH:MM)"
          control={control}
          hour={item?.exitDetails?.exitHourTime}
          minute={item?.exitDetails?.exitMinsTime}
          error={errors.exitTime?.message}
          name={"exitTime"}
        />

        {ProfitToggleFormFields.map((field, index) => {
          return (
            <NoCodeWidthSelect width="30%" key={index}>
              <ToggleDropdownComp
                heading={field.heading}
                item={dropdownList?.[field?.item as keyof DropdownList]}
                numberOfInputs={field.numberOfInputs}
                dropdownName={field.dropdownName}
                inputNames={
                  Array.isArray(field.inputNames)
                    ? field.inputNames
                    : [field.inputNames]
                }
                toggleName={field.toggleName}
                control={control}
                errors={errors}
                getValues={getValues}
              />
            </NoCodeWidthSelect>
          );
        })}
      </ExitCoreDiv>
    </PopupColumnItems>
  );
};

export default ExitSettingsComp;
