export const PositionBuilderFields = {
  OPEN: "open",
  POSITION: "position",
  OPTIONTYPE: "optiontype",
  LOTS: "lots",
  EXPIRY: "expiry",
  STRIKESELECTION: "strikeselection",
  STRIKETYPE: "striketype",
  STRIKESELECTIONVALUE: "strikeselectionvalue"
};

export const PositionBuilderMapping = {
  [PositionBuilderFields.OPEN]: {
    heading: "Segment",
    name: "segment",
    item: "positionType",
    type: "toggle",
    required: true,
    info: "segment",
  },
  [PositionBuilderFields.POSITION]: {
    heading: "Position",
    name: "position",
    item: "order",
    type: "toggle",
    disable: "false",
    required: true,
    info: "position",
  },
  [PositionBuilderFields.OPTIONTYPE]: {
    heading: "Option Type",
    name: "optionType",
    item: "segmentType",
    type: "toggle",
    disable: "false",
    required: true,
    info: "optionType",
  },
  [PositionBuilderFields.LOTS]: {
    heading: "Lots",
    name: "lots",
    item: "lot",
    type: "select",
    disable: "false",
    required: true,
    info: "lots",
  },
  [PositionBuilderFields.EXPIRY]: {
    heading: "Expiry",
    name: "expiry",
    item: "expiryType",
    type: "select",
    disable: "false",
    required: true,
    info: "expiry",
  },
  [PositionBuilderFields.STRIKESELECTION]: {
    heading: "Strike Selection",
    name: "strikeSelection",
    item: "strikeSelection",
    type: "select",
    disable: "false",
    required: true,
    info: "strikeSelection",
  },
  [PositionBuilderFields.STRIKETYPE]: {
    heading: "Strike Type",
    name: "strikeType",
    item: "strikeType",
    type: "select",
    disable: "false",
    required: true,
    info: "strikeType",
  },
  [PositionBuilderFields.STRIKESELECTIONVALUE]: {
    heading: "Strike Selection Value",
    name: "strikeSelectionValue",
    item: [],
    type: "input",
    disable: "false",
    required: true,
    info: "strikeType"
  }
};

export const PositionBuilderFormFields = [
  PositionBuilderMapping[PositionBuilderFields.OPEN],
  PositionBuilderMapping[PositionBuilderFields.POSITION],
  PositionBuilderMapping[PositionBuilderFields.OPTIONTYPE],
  PositionBuilderMapping[PositionBuilderFields.LOTS],
  PositionBuilderMapping[PositionBuilderFields.EXPIRY],
  PositionBuilderMapping[PositionBuilderFields.STRIKESELECTION],
  PositionBuilderMapping[PositionBuilderFields.STRIKETYPE],
  PositionBuilderMapping[PositionBuilderFields.STRIKESELECTIONVALUE],
];
