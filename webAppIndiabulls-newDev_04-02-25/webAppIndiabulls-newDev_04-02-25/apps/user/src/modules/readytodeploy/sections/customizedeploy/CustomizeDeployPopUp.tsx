import { Modal, Fade, Backdrop } from "@mui/material";
import { MainStyledButton } from "../../../../components/ui/GlobalStyles";
import {
  MainPopupHeader,
  PopupButtonsDiv,
  PopUpModalWrapper,
  StyledDeployForm,
  TitleHeader,
} from "../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";
import { DiySaveButton } from "../../../../components/ui/GlobalStyles";
import {
  DeployFormDataTypes,
  DeployPopUpSchema,
  DeployProps,
} from "../strategiescard/StrategiesCardUtils";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import { zodResolver } from "@hookform/resolvers/zod";
import { postDeployPopupService } from "../../services/AllStrategiesServices";
import { StrategyAPIResponse } from "../../services/AllStrategiesServiceTypes";
import { saveStrategies } from "../../state-slice/StartegySlice";
import CoreSettings from "./coresettings/CoreSettingsComp";
import EntrySettingsComp from "./entrysettings/EntrySettingsComp";
import ExitSettingsComp from "./exitsettings/ExitSettingsComp";

function DeployPopUp({ open, onClose, item, isStrategyLive = false }: DeployProps) {
  const { dropdownList } = useAppSelector(
    (AppState) => AppState.strategies.strategiesRes
  );
  const { isLive } = useAppSelector((appState) => appState.welcomePopup);
  // const isLive = false;
  const schema = DeployPopUpSchema(isLive);

  const {
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { errors },
    setValue,
  } = useForm<DeployFormDataTypes>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const PopulateForm = (item: StrategyAPIResponse) => {
    if (!item) return;

    setValue("multiplier", item?.multiplier);
    setValue("atmType", item?.atmType);
    setValue("underlying", item?.underlying);
    setValue("order", item?.positionType);
    setValue("executionType", item?.executionType);
    setValue("expiry", item?.entryDetails?.expiry || "");
    setValue("profitMTMValue", item?.exitDetails?.targetUnitValue);
    setValue(
      "profitMTMToggle",
      item?.exitDetails?.targetUnitToggle?.toString() === "true"
    );
    setValue("profitMTMDropDown", item?.exitDetails?.targetUnitType);
    setValue("stopLossMTMValue", item?.exitDetails?.stopLossUnitValue);
    setValue(
      "stopLossMTMToggle",
      item?.exitDetails?.stopLossUnitToggle?.toString() === "true"
    );
    setValue("stopLossMTMDropDown", item?.exitDetails?.stopLossUnitType);
  };

  useEffect(() => {
    PopulateForm(item);
  }, [item, setValue]);

  const dispatch = useAppDispatch();

  const UserId = sessionStorage.getItem("uId");

  async function SubmitDeployForm(data: DeployFormDataTypes) {
    const entryTime = watch("entryTime");
    const exitTime = watch("exitTime");

    // Split the time and convert them to hours and minutes
    const [entryHour, entryMinute] = String(entryTime).split(":").map(Number);
    const [exitHour, exitMinute] = String(exitTime).split(":").map(Number);

    // getEntryDays
    const entryDays = dropdownList?.entryDays
      ?.filter((item: { key: string }) => getValues(`entryDays.${item?.key}`)) // Check if the day is selected
      ?.map((item: { key: string }) => item?.key);

    const payload = {
      userId: Number(UserId),
      strategyId: item.id,
      multiplier: Number(data.multiplier),
      index: Number(data.underlying),
      atmType: data.atmType,
      minCapital: item.minCapital,
      underlying: data.underlying,
      orderId: data.order,
      executionTypeId: data.executionType,
      entryHours: entryHour,
      entryMinutes: entryMinute,
      expiry: data.expiry,
      days: entryDays,
      exitHours: exitHour,
      exitMinutes: exitMinute,
      profitMtmToggle: String(data.profitMTMToggle),
      profitMtmType: data.profitMTMDropDown,
      profitMtmValue: Number(data.profitMTMValue),
      stoplossToggle: String(data.stopLossMTMToggle),
      stoplossType: data.stopLossMTMDropDown,
      stoplossValue: Number(data.stopLossMTMValue),
    };

    try {
      const config = { payload };
      const response = await postDeployPopupService(config);
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

  const ButtonsPart = () => {
    return (
      <PopupButtonsDiv>
        <DiySaveButton
          width="150px"
          variant="outlined"
          $desktopwidth="16%"
          $tabwidth="200px"
          onClick={onClose}
        >
          Cancel
        </DiySaveButton>
        <MainStyledButton
          $width="150px"
          type="submit"
          variant="contained"
          $padding="6px"
        >
          {item.subscription === "Y" ? "Save" : "Save & Subscribe"}
        </MainStyledButton>
      </PopupButtonsDiv>
    );
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <>
        <Fade
          in={open}
          style={{
            outline: "none",
            backgroundColor: "white",
          }}
        >
          <PopUpModalWrapper>
            <MainPopupHeader>
              <TitleHeader>{item?.name}: Customize and Deploy</TitleHeader>
            </MainPopupHeader>
            <StyledDeployForm onSubmit={handleSubmit(SubmitDeployForm)}>
              <CoreSettings
                control={control}
                errors={errors}
                item={item}
                watch={watch}
                isStrategyLive={isStrategyLive}
              />
              <EntrySettingsComp
                control={control}
                errors={errors}
                item={item}
                watch={watch}
                isStrategyLive={isStrategyLive}
              />
              <ExitSettingsComp
                control={control}
                errors={errors}
                item={item}
                getValues={getValues}
                isStrategyLive={isStrategyLive}
              />
              {ButtonsPart()}
            </StyledDeployForm>
          </PopUpModalWrapper>
        </Fade>
      </>
    </Modal>
  );
}

export default DeployPopUp;
