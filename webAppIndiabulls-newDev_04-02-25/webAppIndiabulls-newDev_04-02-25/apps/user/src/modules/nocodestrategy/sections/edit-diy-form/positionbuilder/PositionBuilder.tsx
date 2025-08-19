import { Controller, useForm } from "react-hook-form";
import {
  ExitSettingsDiv,
  NoCodeWidthSelect,
  PositionWrapDiv,
  TrailingStopLossDiv,
} from "../../../NoCodeStrategyStyles";
import { PositionBuilderFormFields } from "./PositionBuilderFormfields";
import NoCodeToggleComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeToggleComp";
import {
  DropDownItem,
  NoCodeStrategyResponse,
} from "../../../services/NoCodeStrategyServiceTypes";
import NoCodeSelectComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeSelectComp";
import { DiySaveButton } from "../../../../../components/ui/GlobalStyles";
import { useAppDispatch, useAppSelector } from "../../../../../store/Store";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PositionBuilderSchema,
  PositionFormDataTypes,
  PositionRefProps,
} from "./PositionBuilderUtils";
import { createLeg } from "../../../state-slice/NoCodeStrategySlice";
import NoCodeInputComp from "../../../../../../../../packages/ui/src/sharedcomponents/formfields/NoCodeInputComp";
import { PopupButtonsDiv } from "../../../../readytodeploy/sections/strategiescard/StrategiesCardStyles";

const PositionBuilder = forwardRef<PositionRefProps, {}>((_, ref) => {
  const {
    control,
    formState: { errors },
    watch,
    getValues,
    reset,
    setValue,
  } = useForm<PositionFormDataTypes>({
    resolver: zodResolver(PositionBuilderSchema),
  });
  const dropdownData = useAppSelector(
    (appstate) => appstate.diy.DiyDropDownRes
  );
  const { indexValue } = useAppSelector((appState) => appState.diy);
  const dispatch = useAppDispatch();
  const watchedOpenField = watch("segment");

  const strikeSelectionWatch = watch("strikeSelection");

  // Check for ATM types
  const isStrikeSelectionATM = ["SpotAtm", "FutureAtm", "SyntheticAtm"].some(
    (item) => item.toLowerCase() === (strikeSelectionWatch ?? "").toLowerCase()
  );

  // Check for "others"
  const isStrikeSelectionOthers =
    strikeSelectionWatch?.toLowerCase() === "others";

  // Determine whether to show the strikeType field
  const shouldRenderStrikeType =
    !strikeSelectionWatch || isStrikeSelectionATM || isStrikeSelectionOthers;

  // Determine whether to show strikeSelectionValue (input)
  const shouldRenderStrikeSelectionValue =
    !!strikeSelectionWatch && !isStrikeSelectionATM && !isStrikeSelectionOthers;

  useEffect(() => {
    if (isStrikeSelectionATM) {
      setValue("strikeType", "ATM");
    }
  }, [strikeSelectionWatch, setValue]);

  const memoizedExpiryOptions = useMemo(() => {
    return PositionBuilderFormFields.reduce((acc, field) => {
      if (field.name === "expiry") {
        const expiryOptions =
          dropdownData[field.item as keyof NoCodeStrategyResponse];

        if (
          watchedOpenField === "FUTURE" ||
          ([2, 3, 5].includes(Number(indexValue)) &&
            Array.isArray(expiryOptions))
        ) {
          // Filter options when segment is "FUTURE" (first priority)
          // or when indexValue is 2, 3, or 5
          acc[field.name] = Array.isArray(expiryOptions)
            ? expiryOptions?.filter(
                (option: { key: string }) =>
                  option.key === "CurrentMonth" || option.key === "NextMonth"
              )
            : [];
        } else {
          acc[field.name] = expiryOptions;
        }
      } else {
        acc[field.name] =
          dropdownData[field.item as keyof NoCodeStrategyResponse];
      }
      return acc;
    }, {} as Record<string, any>);
  }, [indexValue, dropdownData, watchedOpenField]);

  const resetFormValues = () => ({
    position: "",
    optionType: "",
    lots: "",
    expiry: "",
    strikeSelection: "",
    strikeType: "",
  });

  useImperativeHandle(ref, () => ({
    resetBuilderform: () => reset(resetFormValues()),
  }));

  const handleAddRow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(
      createLeg({
        id: null,
        segment: getValues("segment") || "",
        positions: getValues("position") || "",
        optionType: getValues("optionType") || "",
        lots: getValues("lots") || "",
        expiry: getValues("expiry") || "",
        strikeSelection: getValues("strikeSelection") || "",
        strikeType: getValues("strikeType") || "",
        strikeSelectionValue: getValues("strikeSelectionValue") || "",
        legTGTValue: 0,
        legTGTToggle: false,
        legTGTDropDown: "",
        legSLValue: 0,
        legSLToggle: false,
        legSLDropDown: "",
        legTSLToggle: false,
        legTSLValue: 0,
        legTSLDropDown: "",
        legTDValue: undefined,
      })
    );
  };

  function positionfieldCheck() {
    type FormFields =
      | "segment"
      | "position"
      | "lots"
      | "expiry"
      | "optionType"
      | "strikeSelection"
      | "strikeType"
      | "strikeSelectionValue";

    const requiredFields: FormFields[] =
      watchedOpenField === "FUTURE"
        ? ["segment", "position", "lots", "expiry"]
        : [
            "segment",
            "position",
            "optionType",
            "lots",
            "expiry",
            "strikeSelection",
            isStrikeSelectionATM || isStrikeSelectionOthers
              ? "strikeType"
              : "strikeSelectionValue",
          ];

    return requiredFields.every((fieldName) => {
      const fieldValue = watch(fieldName) as string | undefined; // Ensure fieldValue is string or undefined
      return typeof fieldValue === "string" && fieldValue.trim() !== "";
    });
  }

  const filteredFields = PositionBuilderFormFields.filter((field) => {
    // Remove some fields if FUTURE is selected
    if (
      watchedOpenField === "FUTURE" &&
      [
        "strikeSelection",
        "strikeType",
        "optionType",
        "strikeSelectionValue",
      ].includes(field.name)
    ) {
      return false;
    }

    // Only render `strikeType` if the logic says so
    if (field.name === "strikeType") {
      return shouldRenderStrikeType;
    }

    // Only render strikeSelectionValue input if required
    if (field.name === "strikeSelectionValue") {
      return shouldRenderStrikeSelectionValue;
    }

    return true;
  });

  return (
    <ExitSettingsDiv
      $alignitems="start"
      $padding="20px 11px"
      $mobilepadding="12px"
      $border={true}
    >
      <PositionWrapDiv $width={watchedOpenField === "FUTURE" ? "60%" : ""}>
        {filteredFields.map((field) => (
          <Controller
            key={field.name}
            name={field.name as keyof PositionFormDataTypes}
            control={control}
            render={({ field: inputField }) => {
              if (field.type === "toggle") {
                return (
                  <TrailingStopLossDiv>
                    <NoCodeToggleComp
                      heading={field.heading}
                      item={
                        dropdownData[
                          field.item as keyof NoCodeStrategyResponse
                        ] as DropDownItem[]
                      }
                      error={
                        errors[field.name as keyof PositionFormDataTypes]
                          ?.message
                      }
                      {...inputField}
                      required={field.required}
                      info={dropdownData?.descriptions?.[field.info]}
                    />
                  </TrailingStopLossDiv>
                );
              }

              if (field.type === "input") {
                return (
                  <NoCodeWidthSelect>
                    <NoCodeInputComp
                      heading={field.heading}
                      error={
                        errors[field.name as keyof PositionFormDataTypes]
                          ?.message
                      }
                      type="number"
                      {...inputField}
                      info={dropdownData?.descriptions?.[field.info]}
                      required={field.required}
                    />
                  </NoCodeWidthSelect>
                );
              }

              return (
                <NoCodeWidthSelect
                  width={field.name === "lots" ? "60%" : "110%"}
                >
                  <NoCodeSelectComp
                    heading={field.heading}
                    item={memoizedExpiryOptions[field.name] || []}
                    error={
                      errors[field.name as keyof PositionFormDataTypes]?.message
                    }
                    disabled={
                      field.name === "strikeType"
                        ? isStrikeSelectionATM
                        : field.disable === "true"
                    }
                    {...inputField}
                    required={field.required}
                    info={dropdownData?.descriptions?.[field.info]}
                  />
                </NoCodeWidthSelect>
              );
            }}
          />
        ))}
      </PositionWrapDiv>

      <PopupButtonsDiv $nopadding="0px">
        <DiySaveButton
          width="12%"
          variant="outlined"
          onClick={handleAddRow}
          disabled={!positionfieldCheck()}
          $mobilewidth="50%"
        >
          Add Leg
        </DiySaveButton>
      </PopupButtonsDiv>
    </ExitSettingsDiv>
  );
});

export default PositionBuilder;
