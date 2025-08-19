import { Controller, useForm } from "react-hook-form";
import {
  CopyLegDiv,
  DiySaveButton,
  InnerLegDiv,
  LegCornerDiv,
  LegDeleteButton,
  LegIndexText,
  NoCodeWidthSelect,
  PositionWrapDiv,
  ToggleDropDownLegDiv,
  TrailingStopLossDiv,
} from "../../../NoCodeStrategyStyles";
import { LegItem, NoCodeLegCompProps } from "../../../NoCodeStrategyUtils";
import {
  DropDownItem,
  NoCodeStrategyResponse,
} from "../../../services/NoCodeStrategyServiceTypes";
import NoCodeSelectComp from "../../../components/NoCodeSelectComp";
import ToggleDropdownComp from "../../../components/ToggleDropdownComp";
import {
  LegPositionFormFields,
  LegToggleFormFields,
} from "./LegCompFormFields";
 import LegDelete from "../../../../../assets/svg/legdelete.svg";
import { useAppDispatch, useAppSelector } from "../../../../../store/Store";
import NoCodeToggleComp from "../../../components/NoCodeToggleComp";
import { forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import { LegCompSchema, LegFormDataTypes } from "./LegCompUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { copyLeg, deleteLeg } from "../../../state-slice/NoCodeStrategySlice";
import { LegRefsProps } from "../EditDIYUtils";
import NoCodeInputComp from "../../../components/NoCodeInputComp";

const Legcomp = forwardRef<LegRefsProps, NoCodeLegCompProps>((props, ref) => {
  const { legData, index, isEasyStrategyTemplate = true } = props;
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
    trigger,
    watch,
    // setFocus,
  } = useForm<LegFormDataTypes>({
    resolver: zodResolver(LegCompSchema),
    mode: "onChange",
  });

  // console.log(errors);

  const dispatch = useAppDispatch();
  const dropdownData = useAppSelector(
    (appstate) => appstate.diy.DiyDropDownRes
  );
  const { indexValue } = useAppSelector((appState) => appState.diy);

  useImperativeHandle(ref, () => ({
    getFormData: () => {
      return getValues();
    },
    triggerValidation: async (): Promise<boolean> => {
      return await trigger();
    },
  }));

  const TSLToggleWatch = watch("legTSLToggle");
  const watchedLegOpenField = watch("legSegment");

  const memoizedLegOptions = useMemo(() => {
    return LegPositionFormFields?.reduce((acc, field) => {
      if (field.name === "legExpiry") {
        const expiryOptions =
          dropdownData?.[field?.item as keyof NoCodeStrategyResponse];

        if (
          watchedLegOpenField === "FUTURE" ||
          ([2, 3, 5].includes(Number(indexValue)) &&
            Array.isArray(expiryOptions))
        ) {
          // Prioritize "FUTURE" in "legSegment" for filtering
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
          dropdownData?.[field?.item as keyof NoCodeStrategyResponse];
      }
      return acc;
    }, {} as Record<string, any>);
  }, [indexValue, dropdownData, watchedLegOpenField]);

  // const legStrikeSelectionWatch = watch("legStrikeSelection");

  // const isStrikeSelectionDisabled = [
  //   "SpotAtm",
  //   "FutureAtm",
  //   "SyntheticAtm",
  // ]?.some(
  //   (item) =>
  //     item?.toLowerCase() === (legStrikeSelectionWatch ?? "").toLowerCase()
  // );
  // const shouldRenderLegInput =
  //   legStrikeSelectionWatch &&
  //   !isStrikeSelectionDisabled &&
  //   legStrikeSelectionWatch !== "others";
  const legStrikeSelectionWatch = watch("legStrikeSelection") ?? "";
  const lowerStrike = legStrikeSelectionWatch.toLowerCase();

  const isStrikeSelectionDisabled = [
    "spotatm",
    "futureatm",
    "syntheticatm",
  ].includes(lowerStrike);
  const isStrikeSelectionOthers = lowerStrike === "others";

  const shouldShowStrikeSelectionValue =
    legStrikeSelectionWatch &&
    !isStrikeSelectionDisabled &&
    !isStrikeSelectionOthers;

  useEffect(() => {
    if (isStrikeSelectionDisabled) {
      setValue("legStrikeType", "ATM");
    }
  }, [legStrikeSelectionWatch, setValue]);

  const handleCopyLeg = () => {
    const formData = getValues(); // Get the current form values
    const copiedLeg: LegItem = {
      id: null,
      segment: formData?.legSegment,
      positions: formData?.legPosition,
      optionType: formData?.legOptionType || "",
      lots: formData?.legLots,
      expiry: formData?.legExpiry,
      strikeSelection: formData?.legStrikeSelection || "",
      strikeType: formData?.legStrikeType || "", // Ensure this is copied correctly
      strikeSelectionValue: formData?.legStrikeSelectionValue || "",
      legTGTToggle: formData?.legTGTToggle,
      legTGTDropDown: formData?.legTGTDropDown,
      legTGTValue: formData?.legTGTValue,
      legSLToggle: formData?.legSLToggle,
      legSLDropDown: formData?.legSLDropDown,
      legSLValue: formData?.legSLValue,
      legTSLValue: formData?.legTSLValue,
      legTSLDropDown: formData?.legTSLDropDown,
      legTSLToggle: formData?.legTSLToggle,
      legTDValue: formData?.legTDValue,
    };
    dispatch(copyLeg({ index, legData: copiedLeg }));
  };

  const handleDeleteLeg = () => {
    if (legData.id) {
      dispatch(deleteLeg({ id: legData.id }));
    }
  };

  useEffect(() => {
    if (legData) {
      setValue("legSegment", legData.segment || "");
      setValue(`legPosition`, legData.positions);
      setValue(`legOptionType`, legData.optionType);
      setValue(`legLots`, legData.lots?.toString());
      setValue(`legExpiry`, legData.expiry);
      setValue(`legStrikeSelection`, legData.strikeSelection || "");
      setValue(`legStrikeType`, legData.strikeType);
      setValue("legStrikeSelectionValue", legData.strikeSelectionValue);
      setValue(
        `legTGTToggle`,
        typeof legData.legTGTToggle === "boolean"
          ? legData.legTGTToggle
          : undefined
      );
      setValue(`legTGTDropDown`, legData.legTGTDropDown || "");
      setValue(`legTGTValue`, Number(legData.legTGTValue));
      setValue(
        `legSLToggle`,
        typeof legData.legSLToggle === "boolean"
          ? legData.legSLToggle
          : undefined
      );
      setValue(`legSLDropDown`, legData.legSLDropDown || "");
      setValue(`legSLValue`, Number(legData.legSLValue));
      setValue(`legTSLDropDown`, legData.legTSLDropDown || "");
      setValue(`legTSLValue`, Number(legData.legTSLValue));
      setValue(
        `legTSLToggle`,
        typeof legData.legTSLToggle === "boolean"
          ? legData.legTSLToggle
          : undefined
      );
      setValue("legTDValue", legData.legTDValue);
    }
    // console.log(legData);
  }, [legData, setValue]);

  const excludedFields = [
    "legStrikeType",
    "legOptionType",
    "legStrikeSelection",
  ];

  const filteredLegPositionFields = LegPositionFormFields.filter((field) => {
    // Remove legStrikeSelectionValue if it's not needed
    if (
      field.name === "legStrikeSelectionValue" &&
      !shouldShowStrikeSelectionValue
    ) {
      return false;
    }

    // Remove legStrikeType if strike selection value should be shown instead
    if (field.name === "legStrikeType" && shouldShowStrikeSelectionValue) {
      return false;
    }

    // FUTURE field exclusion logic
    if (
      watchedLegOpenField === "FUTURE" &&
      excludedFields.includes(field.name)
    ) {
      return false;
    }

    return true;
  });

  useEffect(() => {
    if (watchedLegOpenField === "FUTURE") {
      setValue("legStrikeType", null);
      setValue("legOptionType", null);
      setValue("legStrikeSelection", "");
      setValue("legStrikeSelectionValue", "");
    }
  }, [watchedLegOpenField]);

  return (
    <InnerLegDiv>
      <LegCornerDiv>
        <LegIndexText>Leg #{index + 1}</LegIndexText>
        {isEasyStrategyTemplate && (
          <div onClick={handleDeleteLeg}>
            <LegDeleteButton src={LegDelete} alt="LegDelete" />
          </div>
        )}
      </LegCornerDiv>
      <PositionWrapDiv $width={watchedLegOpenField === "FUTURE" ? "60%" : ""}>
        {filteredLegPositionFields.map((field) => {
          // const field = LegPositionFormFields[fieldKey as any];
          const errorMessage =
            errors?.[field.name as keyof LegFormDataTypes]?.message;

          return (
            <Controller
              key={field.name}
              name={field.name as keyof LegFormDataTypes}
              control={control}
              render={({ field: inputField }) => {
                // toggle fields like segment, position, etc.
                if (field.type === "toggle") {
                  return (
                    <TrailingStopLossDiv>
                      <NoCodeToggleComp
                        heading={field.heading}
                        item={
                          dropdownData?.[
                            field?.item as keyof NoCodeStrategyResponse
                          ] as DropDownItem[]
                        }
                        error={errorMessage}
                        {...inputField}
                        required={field.required}
                        info={dropdownData?.descriptions?.[field.info]}
                      />
                    </TrailingStopLossDiv>
                  );
                }

                // Input field for Strike Selection Value when custom value is selected
                if (field.name === "legStrikeSelectionValue") {
                  return (
                    <NoCodeWidthSelect>
                      <NoCodeInputComp
                        heading={field.heading}
                        error={errorMessage}
                        type="number"
                        {...inputField}
                        info={dropdownData?.descriptions?.[field.info]}
                        required={field.required}
                      />
                    </NoCodeWidthSelect>
                  );
                }

                // Select fields like legLots, expiry, strikeType, etc.
                return (
                  <NoCodeWidthSelect
                    width={field.name === "legLots" ? "60%" : ""}
                  >
                    <NoCodeSelectComp
                      heading={field.heading}
                      item={memoizedLegOptions[field.name] || []}
                      error={errorMessage}
                      disabled={
                        field.name === "legStrikeType"
                          ? isStrikeSelectionDisabled
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
          );
        })}
      </PositionWrapDiv>

      <ToggleDropDownLegDiv>
        {LegToggleFormFields.map((field, toggleIndex) => (
          // <NoCodeWidthSelect key={toggleIndex}>
          <ToggleDropdownComp
            key={toggleIndex}
            heading={field.heading}
            item={dropdownData?.[field?.item as keyof NoCodeStrategyResponse]}
            numberOfInputs={field.numberOfInputs}
            control={control}
            errors={errors}
            getValues={getValues}
            toggleName={field.toggleName}
            dropdownName={field.dropDownName}
            inputNames={field.inputNames}
            info={dropdownData?.descriptions?.[field.info]}
          />
        ))}
        <NoCodeWidthSelect width="65%">
          <Controller
            name={"legTDValue" as keyof LegFormDataTypes}
            control={control}
            render={({ field: inputField }) => {
              return (
                <NoCodeInputComp
                  heading="Trailing Distance"
                  {...inputField}
                  disabled={!TSLToggleWatch}
                  error={errors?.legTDValue?.message}
                  info={dropdownData?.descriptions?.trailingDistance}
                />
              );
            }}
          />
        </NoCodeWidthSelect>
      </ToggleDropDownLegDiv>
      {isEasyStrategyTemplate && (
        <CopyLegDiv>
          <DiySaveButton
            width="12%"
            variant="outlined"
            onClick={handleCopyLeg}
            $mobilewidth="50%"
          >
            Copy Leg
          </DiySaveButton>
        </CopyLegDiv>
      )}
    </InnerLegDiv>
  );
});

export default Legcomp;
