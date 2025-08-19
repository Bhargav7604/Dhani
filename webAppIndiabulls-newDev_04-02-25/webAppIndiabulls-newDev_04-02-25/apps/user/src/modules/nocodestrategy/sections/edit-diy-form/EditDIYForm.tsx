import { Controller, useForm } from "react-hook-form";
import {
  BorderDiv,
  CopyLegDiv,
  ErrorText,
  MainStrategyDiv,
  NoCodeHeaderText,
  NoCodeWidthSelect,
  PositionLegWrapDiv,
  StyledForm,
  StyledFormDiv,
} from "../../NoCodeStrategyStyles";
import { StrategyInfoFormFields } from "./entry-settings/EntrySettingsFormFields";
import NoCodeSelectComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeSelectComp";
import {
  DropDownItem,
  NoCodeStrategyResponse,
} from "../../services/NoCodeStrategyServiceTypes";
import { LegItem } from "../../NoCodeStrategyUtils";
import NoCodeInputComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeInputComp";
import {
  ColumnFlexDiv,
  FlexRowDiv,
  MainStyledButton,
} from "../../../../components/ui/GlobalStyles";
import EntrySettings from "./entry-settings/EntrySettings";
import ExitSettings from "./exitSettings/ExitSettings";
import PositionBuilder from "./positionbuilder/PositionBuilder";
import { postNoCodeStrategyService } from "../../services/NoCodeStrategyServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../../../store/Store";
import {
  EditDIYFormProps,
  FormDataTypes,
  LegRefsProps,
  NoCodeStrategySchema,
  StateType,
} from "./EditDIYUtils";
import React, { useEffect, useRef, useState } from "react";
import Legcomp from "./legcomp/LegComp";
import { StrategyAPIResponse } from "../../../readytodeploy/services/AllStrategiesServiceTypes";
import { saveStrategies } from "../../../readytodeploy/state-slice/StartegySlice";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";
import "react-loading-skeleton/dist/skeleton.css";
import {
  clearLegData,
  saveLegData,
  setIndexValue,
} from "../../state-slice/NoCodeStrategySlice";
import { PositionRefProps } from "./positionbuilder/PositionBuilderUtils";
import NoCodeToggleComp from "../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeToggleComp";
import ConfirmationPopup from "../../../deployedstrategies/sections/confirmationpopup/ConfirmationPopup";
import DIYFormShimmerComp from "../diyformshimmer/DIYFormShimmerComp";

const InitialState: StateType = {
  showLeg: true,
  savedStrategy: [],
  legError: "",
  isSubmitClicked: false,
  isLegDataValid: true,
  duplicateLegPopup: null,
};

const EditDIYForm = (props: EditDIYFormProps) => {

  const [state, setState] = useState<StateType>(InitialState);
  const { isEasyStrategyTemplate = true } = props;
  const { showLeg, legError, isLegDataValid, duplicateLegPopup } = state;
  const { strategies } = useAppSelector(
    (appstate) => appstate.strategies.strategiesRes
  );
  const dropdownData = useAppSelector(
    (appstate) => appstate.diy.DiyDropDownRes
  );
  const { rePopulateForm } = useAppSelector((appState) => appState.diy);
  const { legData } = useAppSelector((appState) => appState.diy);
  const { isLive } = useAppSelector((appState) => appState.welcomePopup);
  const { dropdownAPIFail, dropdownDataLoadingState } = useAppSelector(
    (appState) => appState.diy
  );
  const schema = NoCodeStrategySchema(isLive);

  const {
    control,
    formState: { errors },
    watch,
    getValues,
    setValue,
    reset,
    trigger,
    clearErrors,
    setFocus,
    handleSubmit,
  } = useForm<FormDataTypes>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onError = (errors: any) => {
    const firstErrorField = Object.keys(errors)[0] as keyof FormDataTypes; // Get first error field name

    if (firstErrorField) {
      const errorElement = document.querySelector(
        `[name="${firstErrorField}"]`
      );
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setFocus(firstErrorField); // Immediately focus the field
      }
    }
    if (firstErrorField) {
      const errorElement = document.querySelector(
        `[name="${firstErrorField}"]`
      );
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setFocus(firstErrorField); // Immediately focus the field
      }
    }
  };

  const LegRefs = useRef<(LegRefsProps | null)[]>([]);
  const positionRef = useRef<PositionRefProps | null>(null);

  const StrategyId = useAppSelector(
    (appstate) => appstate.diy.selectedStrategyID
  );

  const dispatch = useAppDispatch();

  const resetFormValues = () => ({
    strategyName: "",
    capital: 0,
    index: "",
    strategyType: "",
    entryDays: [],
    entryTime: "",
    exitTime: "",
    exitExpiry: "",
    exitAfterDays: "",
    profitMTMDropDown: "",
    profitMTMToggle: false,
    profitMTMValue: 0,
    stopLossMTMDropDown: "",
    stopLossMTMToggle: false,
    stopLossMTMValue: 0,
  });

  const resetPositionBuilderForm = () => {
    positionRef.current?.resetBuilderform();
  };

  const resetForm = () => {
    reset(resetFormValues());
    dispatch(clearLegData());
    resetPositionBuilderForm();
  };

  const populateForm = (strategy: StrategyAPIResponse) => {
    const adjustedHour = (hour: number) => {
      if (hour === 1) return 13;
      if (hour === 2) return 14;
      if (hour === 3) return 15;
      return hour;
    };

    const entryTime = `${adjustedHour(strategy?.entryDetails?.entryHourTime)}:${
      strategy?.entryDetails?.entryMinsTime
    }`;
    const exitTime = `${adjustedHour(strategy?.exitDetails?.exitHourTime)}:${
      strategy?.exitDetails?.exitMinsTime
    }`;

    const entryDaysArray: { key: any; val: any }[] =
      dropdownData?.daysMenu?.map((dayItem) => {
        return {
          key: dayItem?.key,
          val:
            strategy?.entryDetails?.entryDaysList?.includes(dayItem?.key) ??
            false,
        };
      });

    const isPreBuilt = strategies.preBuilt?.some(
      (item) => item.id === strategy.id
    );
    const strategyId: number | undefined = isPreBuilt ? undefined : strategy.id;

    if (strategy) {
      setValue("strategyId", strategyId);
    }

    if (strategy) {
      setValue("strategyId", strategyId);
      setValue("strategyName", strategy.name);
      setValue("capital", strategy.minCapital);
      setValue("index", strategy.underlying);
      setValue("strategyType", strategy?.positionType);
      setValue("executionType", strategy.executionType);
      setValue("entryTime", entryTime);
      setValue("exitTime", exitTime);
      entryDaysArray?.forEach((dayItem) => {
        setValue(`entryDays.${dayItem.key}`, dayItem?.val);
      });
      setValue("exitExpiry", strategy.exitDetails.exitOnExpiryFlag ?? "");
      setValue("exitAfterDays", strategy.exitDetails.exitAfterEntryDays ?? "");
      setValue(
        "profitMTMToggle",
        strategy.exitDetails?.targetUnitToggle === "true" ? true : false
      );
      setValue("profitMTMDropDown", strategy.exitDetails?.targetUnitType);
      setValue("profitMTMValue", strategy.exitDetails?.targetUnitValue);
      setValue(
        "stopLossMTMToggle",
        strategy.exitDetails?.stopLossUnitToggle === "true" ? true : false
      );
      setValue("stopLossMTMDropDown", strategy.exitDetails?.stopLossUnitType);
      setValue("stopLossMTMValue", strategy.exitDetails?.stopLossUnitValue);

      // Map strategyLegs into the redux leg state
      const mappedLegs: LegItem[] = strategy?.strategyLegs?.map((leg) => ({
        id: leg.id,
        segment: leg.derivativeType,
        positions: leg.positions,
        optionType: leg.optionType,
        lots: leg.lots,
        expiry: leg.expiry,
        strikeSelection: leg.strikeSelection,
        strikeType: leg.strikeType,
        strikeSelectionValue: leg.strikeSelectionValue,
        legTGTValue: Number(leg.tgtValue),
        legTGTDropDown: leg.tgtType ?? "",
        legTGTToggle: leg.tgtToggle === "true" ? true : false,
        legSLValue: Number(leg.stopLossValue),
        legSLDropDown: leg.stopLossType ?? "",
        legSLToggle: leg.stopLossToggle === "true" ? true : false,
        legTSLValue: Number(leg.tslValue),
        legTSLDropDown: leg.tslType ?? "",
        legTSLToggle: leg.tslToggle === "true" ? true : false,
        legTDValue: leg.tdValue,
      }));
      dispatch(saveLegData(mappedLegs));
    }
  };

  const onMount = () => {
    const CombinedStrategies = [
      ...(strategies?.diy || []),
      ...(strategies?.inHouse || []),
      ...(strategies?.preBuilt || []),
    ];

    const foundStrategy = CombinedStrategies?.find(
      (item) => item?.id === StrategyId
    );

    if (foundStrategy) {
      populateForm(foundStrategy);
    } else {
    }
  };

  useEffect(() => {
    if (StrategyId) {
      onMount();
    } else {
      reset();
    }
  }, [StrategyId, dropdownData, rePopulateForm]);

  const entryTime = watch("entryTime");
  const exitTime = watch("exitTime");

  function findDuplicateLegs(legs: any[]) {
    const keyMap = new Map<string, number[]>();

    legs.forEach((leg, index) => {
      const {
        legSegment,
        legOptionType,
        legExpiry,
        legStrikeType,
        legStrikeSelection,
        legStrikeSelectionValue,
        // legPosition,
      } = leg;

      // Create key ignoring the 'legPosition' so that 'Buy' and 'Sell' are treated as same
      const key = [
        legSegment,
        legOptionType,
        legExpiry,
        legStrikeSelectionValue !== undefined &&
        legStrikeSelectionValue !== null &&
        legStrikeSelectionValue !== ""
          ? `${legStrikeSelection}|${legStrikeSelectionValue}`
          : legStrikeType,
      ].join("|");

      if (!keyMap.has(key)) {
        keyMap.set(key, []);
      }
      keyMap.get(key)!.push(index);
    });

    const duplicateIndices: number[][] = [];
    const duplicateLegsDescription: string[] = [];

    keyMap.forEach((indices) => {
      if (indices.length > 1) {
        // If there are multiple legs with the same key, we consider them duplicates
        duplicateIndices.push(indices);

        // Check if Buy and Sell positions are present in the same combination
        const positions = indices.map((index) => legs[index].legPosition);
        if (positions.includes("Buy") && positions.includes("Sell")) {
          duplicateLegsDescription.push(
            `Legs ${indices
              .map((i) => i + 1)
              .join(
                " & "
              )} are trading each other, which will result into self-trade.`
          );
        } else {
          duplicateLegsDescription.push(
            `Legs ${indices
              .map((i) => i + 1)
              .join(
                " & "
              )} are same. Please modify them, as deploying a strategy with same legs is not allowed.`
          );
        }
      }
    });

    return { duplicateIndices, duplicateLegsDescription };
  }

  const handleCloseDuplicateLeg = () => {
    setState((prevState) => ({
      ...prevState,
      duplicateLegPopup: null,
    }));
  };

  async function submitHandlerForm() {
    setState((prevState) => ({
      ...prevState,
      isSubmitClicked: true,
    }));

    const formValidationError = await trigger();

    // Check if no legs exist
    if (legData.length === 0) {
      setState((prevState) => ({
        ...prevState,
        isLegDataValid: false,
        legError: "At least one leg must be created before saving the strategy",
      }));
      return; // Stop further execution
    }

    // Fetch form data & validation results from each LegComp
    const legsDataArray = await Promise.all(
      legData?.map(async (_: any, index: number) => {
        const legDataRes = LegRefs.current[index]?.getFormData();
        const validationRes = await LegRefs.current[index]?.triggerValidation();
        return { legDataRes, isValid: validationRes };
      })
    );

    // Check if any leg validation failed
    const legValidationError = legsDataArray?.some((leg) => !leg.isValid);

    if (legValidationError || !formValidationError) {
      return;
    }

    const duplicateLegs = findDuplicateLegs(
      legsDataArray
        .map((item, index) => {
          if (item.legDataRes) {
            return {
              ...(item.legDataRes as any),
              index,
            };
          }
          return null; // return null if legDataRes is undefined
        })
        .filter(
          (item): item is { index: number } & typeof item => item !== null
        )
    );

    // If duplicate legs are found, show the error message
    if (duplicateLegs.duplicateIndices.length > 0) {
      const message = duplicateLegs.duplicateLegsDescription.join("\n");

      // Set popup state to show error
      setState((prevState) => ({
        ...prevState,
        duplicateLegPopup: message,
      }));

      return;
    }
    // Reset leg error when validation passes
    setState((prevState) => ({
      ...prevState,
      isLegDataValid: true,
      legError: "",
    }));

    clearErrors();

    const data: FormDataTypes = getValues();
    const [entryHour, entryMinute] = String(entryTime).split(":")?.map(Number);
    const [exitHour, exitMinute] = String(exitTime).split(":")?.map(Number);

    let entryDaysArr: number[] = [];
    getValues("entryDays")?.forEach((day: any, index: number) => {
      if (day) {
        entryDaysArr.push(index);
      }
    });

    const payload = {
      strategyId: data.strategyId ?? null,
      strategyName: data.strategyName,
      index: data.index,
      executionTypeId: data.executionType,
      capital: data.capital,
      strategyType: data.strategyType,
      entryHours: entryHour,
      entryMinutes: entryMinute,
      entryOnDays: entryDaysArr,
      exitHours: exitHour,
      exitMinutes: exitMinute,
      exitOnExpiry: data.exitExpiry,
      exitAfterEntryDays: Number(data.exitAfterDays),
      targetMtmToggle: JSON.stringify(data.profitMTMToggle),
      targetMtmType: data.profitMTMDropDown,
      targetMtmValue: data.profitMTMValue,
      stopLossMtmToggle: JSON.stringify(data.stopLossMTMToggle),
      stopLossMtmType: data.stopLossMTMDropDown,
      stopLossMtmValue: data.stopLossMTMValue,
      legs: legsDataArray?.map(({ legDataRes }: any) => ({
        // access the names with the same names in the zod schema of the leg comp
        position: legDataRes.legPosition,
        optionType: legDataRes.legOptionType,
        expiry: legDataRes.legExpiry,
        lots: legDataRes.legLots,
        strikeSelection: legDataRes.legStrikeSelection,
        strikeType: legDataRes.legStrikeType,
        strikeSelectionValue: String(legDataRes.legStrikeSelectionValue),
        tgtToogle: JSON.stringify(legDataRes.legTGTToggle),
        tgtType: legDataRes.legTGTDropDown,
        tgtValue: Number(legDataRes.legTGTValue),
        stopLossToggle: JSON.stringify(legDataRes.legSLToggle),
        stopLossType: legDataRes.legSLDropDown,
        stopLossValue: Number(legDataRes.legSLValue),
        tslType: legDataRes.legTSLDropDown,
        tslValue: Number(legDataRes.legTSLValue),
        tslToggle: legDataRes.legTSLToggle,
        tdValue: Number(legDataRes.legTDValue),
        derivativeType: legDataRes.legSegment,
      })),
    };

    try {
      const config = { payload };
      const response = await postNoCodeStrategyService(config);
      if (response.data) {
        dispatch(saveStrategies({ strategiesRes: response.data }));
        if (response.success === true) {
          resetForm();
          setState((prevState) => ({
            ...prevState,
            isSubmitClicked: false,
          }));
        }
      }
    } catch (error) {}
  }

  const Indexvalue = watch("index");
  useEffect(() => {
    dispatch(setIndexValue(Indexvalue));
  }, [Indexvalue]);

  const MainInfoSection = () => {
    return (
      <ColumnFlexDiv $flexstart>
        <NoCodeHeaderText>Step 1: Set Strategy</NoCodeHeaderText>
        <MainStrategyDiv>
          {StrategyInfoFormFields.map((field) => (
            <Controller
              key={field.name}
              name={field.name as keyof FormDataTypes}
              control={control}
              render={({ field: inputField }) => {
                const underlyingValue = watch("index");

                const isUnderlyingSelected = !!underlyingValue;
                if (field.type === "select") {
                  return (
                    <NoCodeWidthSelect>
                      <NoCodeSelectComp
                        heading={field.heading}
                        item={
                          dropdownData[
                            field?.item as keyof NoCodeStrategyResponse
                          ] as DropDownItem[]
                        }
                        disabled={
                          field.name === "capital"
                            ? !isUnderlyingSelected
                            : field.disable === "true"
                        }
                        error={
                          errors[field.name as keyof FormDataTypes]?.message
                        }
                        {...inputField}
                        required={field.required}
                        info={dropdownData?.descriptions?.[field.info] ?? ""}
                      />
                    </NoCodeWidthSelect>
                  );
                } else if (field.type === "toggle") {
                  return (
                    <NoCodeWidthSelect>
                      <NoCodeToggleComp
                        heading={field.heading}
                        item={
                          dropdownData[
                            field?.item as keyof NoCodeStrategyResponse
                          ] as DropDownItem[]
                        }
                        error={
                          errors[field.name as keyof FormDataTypes]?.message
                        }
                        {...inputField}
                        required={field.required}
                        info={dropdownData?.descriptions?.[field.info] ?? ""}
                      />
                    </NoCodeWidthSelect>
                  );
                }

                return (
                  <NoCodeWidthSelect>
                    <NoCodeInputComp
                      heading={field.heading}
                      type={
                        field.type === "number" || field.type === "text"
                          ? field.type
                          : "text"
                      }
                      error={errors[field.name as keyof FormDataTypes]?.message}
                      disabled={
                        field.name === "capital"
                          ? !isUnderlyingSelected
                          : field.disable === "true"
                      }
                      {...inputField}
                      required={field.required}
                      info={dropdownData?.descriptions?.[field.info] ?? ""}
                    />
                  </NoCodeWidthSelect>
                );
              }}
            />
          ))}
        </MainStrategyDiv>
      </ColumnFlexDiv>
    );
  };

  const ExitSettingsPart = () => {
    return (
      <ExitSettings
        control={control}
        errors={errors}
        watch={watch}
        getValues={getValues}
      />
    );
  };

  const PositionBuilderPart = () => {
    // Filter out any invalid or empty leg objects
    const validLegs = legData?.filter(
      (legItem) => legItem && Object.keys(legItem).length > 0
    );
    const PositionBuilderHeader = `Step 4: ${
      isEasyStrategyTemplate ? "Position Builder" : "Strategy Legs"
    }`;
    return (
      <ColumnFlexDiv $flexstart>
        <NoCodeHeaderText>{PositionBuilderHeader}</NoCodeHeaderText>
        <PositionLegWrapDiv>
          {isEasyStrategyTemplate && (
            <>
              <PositionBuilder ref={positionRef} />
            </>
          )}

          {/* Map through the valid legs only */}
          {showLeg && validLegs.length > 0 && (
            <>
              {validLegs?.map((legItem, index) => (
                <React.Fragment key={legItem.id || index}>
                  <Legcomp
                    index={index}
                    legData={legItem}
                    isEasyStrategyTemplate={isEasyStrategyTemplate}
                    ref={(el) => (LegRefs.current[index] = el)}
                  />
                  {index < validLegs.length - 1 && <BorderDiv />}
                </React.Fragment>
              ))}
            </>
          )}
        </PositionLegWrapDiv>
      </ColumnFlexDiv>
    );
  };

  const LegErrorPart = () => {
    return (
      <>
        {legError && !isLegDataValid && (
          <ErrorText>Atleast one leg should be created</ErrorText>
        )}
      </>
    );
  };

  const SaveStrategyPart = () => {
    return (
      <CopyLegDiv $justifycontent="end">
        <MainStyledButton
          variant="contained"
          $width="13%"
          type="submit"
          $mobilewidth="50%"
        >
          Save Strategy
        </MainStyledButton>
      </CopyLegDiv>
    );
  };

  const DuplicateLegPart = () => {
    return duplicateLegPopup ? (
      <ConfirmationPopup
        open={Boolean(duplicateLegPopup)}
        onClose={handleCloseDuplicateLeg}
        firstdescription={duplicateLegPopup}
        inHouseEdit={true}
      />
    ) : null;
  };

  if (!dropdownData) {
    return <NoSearchStrategy text={"No Data Available"} />;
  }

  return (
    <>
      {dropdownDataLoadingState ? (
        <DIYFormShimmerComp />
      ) : dropdownAPIFail ? (
        <NoSearchStrategy text="Failed to load data." />
      ) : (
        <StyledForm onSubmit={handleSubmit(submitHandlerForm, onError)}>
          <StyledFormDiv>
            <FlexRowDiv $width="82%" $alignitems="end" $diy={true} $gap="24px">
              {MainInfoSection()}
              <EntrySettings control={control} errors={errors} watch={watch} />
            </FlexRowDiv>
            {ExitSettingsPart()}
            {PositionBuilderPart()}
            {LegErrorPart()}
            {SaveStrategyPart()}
            {DuplicateLegPart()}
          </StyledFormDiv>
        </StyledForm>
      )}
    </>
  );
};

export default EditDIYForm;
