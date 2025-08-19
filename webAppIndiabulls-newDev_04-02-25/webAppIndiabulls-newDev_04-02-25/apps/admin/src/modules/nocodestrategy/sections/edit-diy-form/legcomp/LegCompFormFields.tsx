export const LegPositionFields = {
  OPEN: "open",
  POSITION: "position",
  OPTIONTYPE: "optiontype",
  LOTS: "lots",
  EXPIRY: "expiry",
  STRIKESELECTION: "strikeselection",
  STRIKETYPE: "striketype",
  STRIKESELECTIONVALUE: "strikeselectionvalue"
};

export const LegPositionMapping = {
  [LegPositionFields.OPEN]: {
    heading: "Segment",
    name: "legSegment",
    item: "positionType",
    type: "toggle",
    disable: "false",
    required: true,
    info: "segment",
  },
  [LegPositionFields.POSITION]: {
    heading: "Position",
    name: "legPosition",
    item: "order",
    type: "toggle",
    disable: "false",
    required: true,
    info: "position",
  },
  [LegPositionFields.OPTIONTYPE]: {
    heading: "Option Type",
    name: "legOptionType",
    item: "segmentType",
    type: "toggle",
    disable: "false",
    required: true,
    info: "optionType",
  },
  [LegPositionFields.LOTS]: {
    heading: "Lots",
    name: "legLots",
    item: "lot",
    type: "select",
    disable: "false",
    required: true,
    info: "lots",
  },
  [LegPositionFields.EXPIRY]: {
    heading: "Expiry",
    name: "legExpiry",
    item: "expiryType",
    type: "select",
    disable: "false",
    required: true,
    info: "expiry",
  },
  [LegPositionFields.STRIKESELECTION]: {
    heading: "Strike Selection",
    name: "legStrikeSelection",
    item: "strikeSelection",
    type: "select",
    disable: "false",
    required: true,
    info: "strikeSelection",
  },
  [LegPositionFields.STRIKETYPE]: {
    heading: "Strike Type",
    name: "legStrikeType",
    item: "strikeType",
    type: "select",
    disable: "false",
    required: true,
    info: "strikeType",
  },
  [LegPositionFields.STRIKESELECTIONVALUE]: {
    heading: "Strike Selection Value",
    name: "legStrikeSelectionValue",
    item: "",
    type: "input",
    disable: "false",
    required: true,
    info: "strikeType",
  }
};

export const LegPositionFormFields = [
  LegPositionMapping[LegPositionFields.OPEN],
  LegPositionMapping[LegPositionFields.POSITION],
  LegPositionMapping[LegPositionFields.OPTIONTYPE],
  LegPositionMapping[LegPositionFields.LOTS],
  LegPositionMapping[LegPositionFields.EXPIRY],
  LegPositionMapping[LegPositionFields.STRIKESELECTION],
  LegPositionMapping[LegPositionFields.STRIKETYPE],
  LegPositionMapping[LegPositionFields.STRIKESELECTIONVALUE],
];

export const LegToggleFields = {
  TGT: "tgt",
  STOPLOSS: "stoploss",
  TRL: "trl",
};

export const LegToggleMapping = {
  [LegToggleFields.TGT]: {
    heading: "Target",
    dropDownName: "legTGTDropDown",
    inputNames: "legTGTValue",
    toggleName: "legTGTToggle",
    numberOfInputs: 1,
    item: "tgt",
    disable: "false",
    info: "target",
  },
  [LegToggleFields.STOPLOSS]: {
    heading: "Stop Loss",
    dropDownName: "legSLDropDown",
    inputNames: "legSLValue",
    toggleName: "legSLToggle",
    numberOfInputs: 1,
    item: "tgt",
    disable: "false",
    info: "stopLoss",
  },
  [LegToggleFields.TRL]: {
    heading: "TSL",
    dropDownName: "legTSLDropDown",
    inputNames: "legTSLValue",
    toggleName: "legTSLToggle",
    numberOfInputs: 1,
    item: "trl",
    disable: "false",
    info: "tsl",
  },
};

export const LegToggleFormFields = [
  LegToggleMapping[LegToggleFields.TGT],
  LegToggleMapping[LegToggleFields.STOPLOSS],
  LegToggleMapping[LegToggleFields.TRL],
];
