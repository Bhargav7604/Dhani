// import { AmoutTypeData } from "./StrategiesCardData";

export const CoreSettingFields = {
  ATM_SYNTHETICATM: "atm_syntheticatm",
  MULTIPLIER: "multiplier",
  UNDERLYING: "underlying",
  ORDER: "order",
  EXECUTIONTYPE: "executiontype",
};

export const CoreSettingMapping = {
  [CoreSettingFields.ATM_SYNTHETICATM]: {
    heading: "ATM/Synthetic ATM",
    name: "atmType",
    item: "atmType",
    type: "select",
    required: true,
  },
  [CoreSettingFields.MULTIPLIER]: {
    heading: "Multiplier",
    name: "multiplier",
    item: "multiplier",
    type: "select",
    required: true,
  },
  [CoreSettingFields.UNDERLYING]: {
    heading: "Underlying",
    name: "underlying",
    item: "underlying",
    type: "select",
    required: true,
  },
  [CoreSettingFields.ORDER]: {
    heading: "Order",
    name: "order",
    item: "order",
    type: "toggle",
    required: true,
  },
  [CoreSettingFields.EXECUTIONTYPE]: {
    heading: "Execution Type",
    name: "executionType",
    item: "executionType",
    type: "toggle",
    required: true,
  },
};

export const CoreSettingsFormFields = [
  CoreSettingMapping[CoreSettingFields.ATM_SYNTHETICATM],
  CoreSettingMapping[CoreSettingFields.MULTIPLIER],
  CoreSettingMapping[CoreSettingFields.UNDERLYING],
  CoreSettingMapping[CoreSettingFields.ORDER],
  CoreSettingMapping[CoreSettingFields.EXECUTIONTYPE],
];

export const ProfitToggleFields = {
  PROFITMTM: "profitmtm",
  STOPLOSSMTM: "stoplossmtm",
};

export const ProfitToggleMapping = {
  [ProfitToggleFields.PROFITMTM]: {
    heading: "Profit MTM",
    dropdownName: "profitMTMDropDown",
    toggleName: "profitMTMToggle",
    inputNames: "profitMTMValue",
    item: "mtmType",
    numberOfInputs: 1,
    disable: "false",
    defaultToggle: "targetUnitToggle",
    defaultType: "targetUnitType",
    defaultValue: "targetUnitValue",
    required: true,
  },
  [ProfitToggleFields.STOPLOSSMTM]: {
    heading: "StopLoss MTM",
    dropdownName: "stopLossMTMDropDown",
    toggleName: "stopLossMTMToggle",
    inputNames: "stopLossMTMValue",
    item: "mtmType",
    numberOfInputs: 1,
    disable: "false",
    defaultToggle: "stopLossUnitToggle",
    defaultType: "stopLossUnitType",
    defaultValue: "stopLossUnitValue",
    required: true,
  },
};

export const ProfitToggleFormFields = [
  ProfitToggleMapping[ProfitToggleFields.PROFITMTM],
  ProfitToggleMapping[ProfitToggleFields.STOPLOSSMTM],
];

export const ExitSettingFields = {
  PROFITMTM: "profitmtm",
  STOPLOSSMTM: "stoplossmtm",
  DELTASLIPPAGE: "deltaslippage",
};

export const ExitSettingsMapping = {
  [ExitSettingFields.PROFITMTM]: {
    heading: "Profit MTM",
    dropdownName: "profitMTMDropDown",
    toggleName: "profitMTMToggle",
    inputNames: "profitMTMValue",
    item: "mtmType",
    numberOfInputs: 1,
    disable: "false",
  },
  [ExitSettingFields.STOPLOSSMTM]: {
    heading: "StopLoss MTM",
    dropdownName: "stopLossMTMDropDown",
    toggleName: "stopLossMTMToggle",
    inputNames: "stopLossMTMValue",
    item: "mtmType",
    numberOfInputs: 1,
    disable: "false",
  },
  [ExitSettingFields.DELTASLIPPAGE]: {
    heading: "Delta Slippage",
    name: "deltaSlippage",
    type: "text",
  },
};

export const ExitSettingsFormFields = [
  ExitSettingsMapping[ExitSettingFields.PROFITMTM],
  ExitSettingsMapping[ExitSettingFields.STOPLOSSMTM],
  ExitSettingsMapping[ExitSettingFields.DELTASLIPPAGE],
];
