import { Backdrop, Fade, Modal } from "@mui/material";
import {
  OneclickPopUpModalWrapper,
  StyledDeployForm,
  PopupButtonsDiv,
  SecondDiv,
  ColumnFlexDiv,
  Imagesdiv,
} from "../strategiescard/StrategiesCardStyles";
import NoCodeToggleComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeToggleComp";
import { useForm, Controller } from "react-hook-form";
import { CoreSettingsFormFields } from "./OneClickDeplyFromFields";
import { NoCodeWidthSelect } from "../../../nocodestrategy/NoCodeStrategyStyles";
import NoCodeSelectComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeSelectComp";
import {
  OneClickDeployPopUpSchema,
  OneClickFormDataTypes,
} from "./OneClickdeployUtils";
import { DeployProps } from "../strategiescard/StrategiesCardUtils";
// import {
//   OptionProps,
//   ToggleItem,
// } from "../../../nocodestrategy/NoCodeStrategyUtils";
import {
  OptionProps,
  ToggleItem,
} from "../../../../../../../packages/ui/src/sharedcomponents/formfields/FormFieldsUtils";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DiySaveButton,
  StyledDataBigText,
  StyledSecondaryHeadlineText,
  StyledTertiaryText,
} from "../../../../components/ui/GlobalStyles";
import { MainStyledButton } from "../../../../components/ui/GlobalStyles";
import { postoneClickDeployService } from "../../services/AllStrategiesServices";
import { saveStrategies } from "../../state-slice/StartegySlice";

const ConfirmPopup = ({ open, onClose, item }: DeployProps) => {
  const dispatch = useAppDispatch();
  const { isLive } = useAppSelector((appState) => appState.welcomePopup);
  // const isLive = false;
  const schema = OneClickDeployPopUpSchema(isLive);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OneClickFormDataTypes>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { dropdownList } = useAppSelector(
    (AppState) => AppState.strategies.strategiesRes
  );

  const populateForm = () => {
    if (item) {
      setValue("multiplier", item.multiplier);
      setValue("executionType", item.executionType);
    }
  };

  useEffect(() => {
    populateForm();
  }, [item, setValue]);

  async function SubmitOneClickForm(data: OneClickFormDataTypes) {
    const payload = {
      strategyId: item.id,
      multiplier: Number(data.multiplier),
      executionTypeId: data.executionType,
    };
    try {
      const config = { payload };
      const response = await postoneClickDeployService(config);
      if (response.data) {
        dispatch(saveStrategies({ strategiesRes: response.data }));
      }
      if (response.success === true) {
        onClose();
      }
    } catch (error) {
      throw error;
    }
  }
  const itemNameDp = item.name
    ? item.name
        .split(" ")
        .filter((_: string, index: number) => index === 0)
        .map((word: string) => word.slice(0, 2).toUpperCase())
        .join("")
    : "--";
  return (
    <Modal
      open={open} // Ensure 'open' is always boolean
      onClose={onClose} // Ensure 'onClose' is a function
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade
        in={open}
        style={{
          outline: "none",
          backgroundColor: "white",
        }}
      >
        <OneclickPopUpModalWrapper>
          <SecondDiv>
            <ColumnFlexDiv $flexdirection="row">
              <Imagesdiv>
                <StyledDataBigText $bold={true} $color={true}>
                  {itemNameDp}
                </StyledDataBigText>
              </Imagesdiv>
              <StyledSecondaryHeadlineText $color={true}>
                {item.name || ""}
              </StyledSecondaryHeadlineText>
              <StyledTertiaryText>({item.id ?? ""})</StyledTertiaryText>
            </ColumnFlexDiv>
          </SecondDiv>

          {/* Form Structure */}
          <StyledDeployForm $padding onSubmit={handleSubmit(SubmitOneClickForm)}>
            {CoreSettingsFormFields.map((field) => (
              <Controller
                key={field.name}
                name={field.name as keyof OneClickFormDataTypes}
                control={control}
                render={({ field: inputField }) => {
                  if (field.type === "select") {
                    return (
                      <NoCodeWidthSelect>
                        <NoCodeSelectComp
                          heading={field.heading}
                          item={
                            dropdownList[
                              field.item as keyof typeof dropdownList
                            ] as OptionProps[]
                          }
                          error={
                            errors[field.name as keyof OneClickFormDataTypes]
                              ?.message
                          }
                          {...inputField}
                          required={field.required}
                        />
                      </NoCodeWidthSelect>
                    );
                  } else if (field.type === "toggle") {
                    return (
                      <NoCodeWidthSelect>
                        <NoCodeToggleComp
                          heading={field.heading}
                          item={
                            dropdownList[
                              field.item as keyof typeof dropdownList
                            ] as unknown as ToggleItem[]
                          }
                          error={
                            errors[field.name as keyof OneClickFormDataTypes]
                              ?.message
                          }
                          {...inputField}
                          required={field.required}
                        />
                      </NoCodeWidthSelect>
                    );
                  } else {
                    return <></>;
                  }
                }}
              />
            ))}

            {/* Buttons */}
            <PopupButtonsDiv $nopadding="12px 0px 0px 0px">
              <DiySaveButton
                width="150px"
                $tabwidth="45%"
                $desktopwidth="30%"
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </DiySaveButton>
              <MainStyledButton
                $width="150px"
                type="submit"
                variant="contained"
                $padding="8px 12px"
              >
                Deploy
              </MainStyledButton>
            </PopupButtonsDiv>
          </StyledDeployForm>
        </OneclickPopUpModalWrapper>
      </Fade>
    </Modal>
  );
};

export default ConfirmPopup;
