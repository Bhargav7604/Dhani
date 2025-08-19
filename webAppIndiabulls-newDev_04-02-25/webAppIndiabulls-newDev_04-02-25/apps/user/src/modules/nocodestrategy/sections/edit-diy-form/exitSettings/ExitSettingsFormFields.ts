export const ExitAfterFields = {
  EXITEXPIRY: "exitexpiry",
  EXITAFTERDAYS: "exitafterdays",
};

export const ExitAfterInfoMapping = {
  [ExitAfterFields.EXITEXPIRY]: {
    heading: "Exit on Expiry",
    name: "exitExpiry",
    item: "exitOnExpiry",
    type: "select",
    disable: "false",
    defaultValue: "exitOnExpiry",
    info: "exitOnExpiry",
  },
  [ExitAfterFields.EXITAFTERDAYS]: {
    heading: "Exit After Entry + Days",
    name: "exitAfterDays",
    item: "exitAfterEntry",
    type: "select",
    disable: "false",
    defaultValue: "exitAfterEntryDays",
    info: "exitAfterEntryDays",
  },
};

export const ExitAfterFormFields = [
  ExitAfterInfoMapping[ExitAfterFields.EXITEXPIRY],
  ExitAfterInfoMapping[ExitAfterFields.EXITAFTERDAYS],
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
    item: "profitMtm",
    numberOfInputs: 1,
    disable: "false",
    defaultToggle: "targetUnitToggle",
    defaultType: "targetUnitType",
    defaultValue: "targetUnitValue",
    required: true,
    info: "profitMtm"
  },
  [ProfitToggleFields.STOPLOSSMTM]: {
    heading: "StopLoss MTM",
    dropdownName: "stopLossMTMDropDown",
    toggleName: "stopLossMTMToggle",
    inputNames: "stopLossMTMValue",
    item: "profitMtm",
    numberOfInputs: 1,
    disable: "false",
    defaultToggle: "stopLossUnitToggle",
    defaultType: "stopLossUnitType",
    defaultValue: "stopLossUnitValue",
    required: true,
    info: "stopLossMtm"
  },
};

export const ProfitToggleFormFields = [
  ProfitToggleMapping[ProfitToggleFields.PROFITMTM],
  ProfitToggleMapping[ProfitToggleFields.STOPLOSSMTM],
];

export const TrailingFields = {
  TRAILINGSTOPLOSS: "trailingstoploss",
  ACTIVATE: "activate",
  LOCKPROFILE: "lockprofile",
  PROFITINCREASE: "profitincrease",
  INCREASETSL: "increasetsl",
};

export const TrailingInfoMapping = {
  [TrailingFields.TRAILINGSTOPLOSS]: {
    heading: "Trailing Stoploss",
    name: "TrailingStoploss",
    dropDownName: "trailingStoploss",
    type: "toggle",
    numberOfInputs: 0,
    disable: "false",
    toggleName: "trailingToggle",
  },
  [TrailingFields.ACTIVATE]: {
    heading: "Activate at",
    name: "activate",
    item: [],
    type: "text",
    disable: "false",
  },
  [TrailingFields.LOCKPROFILE]: {
    heading: "Lock Profile at",
    name: "lockProfile",
    item: [],
    type: "text",
    disable: "false",
  },
  [TrailingFields.PROFITINCREASE]: {
    heading: "Profile Increase at",
    name: "profileIncrease",
    item: [],
    type: "text",
    disable: "false",
  },
  [TrailingFields.INCREASETSL]: {
    heading: "Increase TSL by",
    name: "increaseTSL",
    item: [],
    type: "text",
    disable: "false",
  },
};

export const TrailingFormFields = [
  // TrailingInfoMapping[TrailingFields.TRAILINGSTOPLOSS],
  // TrailingInfoMapping[TrailingFields.ACTIVATE],
  // TrailingInfoMapping[TrailingFields.LOCKPROFILE],
  // TrailingInfoMapping[TrailingFields.PROFITINCREASE],
  // TrailingInfoMapping[TrailingFields.INCREASETSL],
];
