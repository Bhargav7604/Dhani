// import { HourData, MinuteData } from "../../../NoCodeStrategyData";

//Strategy Main Info FormFields
export const StrategyInfoFields = {
  STRATEGYNAME: "strategyname",
  INDEX: "index",
  CAPITAL: "capital",
  EXECUTIONTYPE: "executiontype",
};

export const StartegyInfoMapping = {
  [StrategyInfoFields.STRATEGYNAME]: {
    heading: "Strategy Name ",
    name: "strategyName",
    item: [],
    type: "text",
    disable: "false",
    defaultValue: "name",
    required: true,
    info: "strategyName",
  },
  [StrategyInfoFields.INDEX]: {
    heading: "Index",
    name: "index",
    item: "underlyingMenu",
    type: "select",
    disable: "false",
    defaultValue: "underlying",
    required: true,
    info: "index",
  },
  [StrategyInfoFields.CAPITAL]: {
    heading: "Capital",
    name: "capital",
    item: [],
    type: "number",
    disable: "false",
    defaultValue: "minCapital",
    required: true,
    info: "capital",
  },
  [StrategyInfoFields.EXECUTIONTYPE]: {
    heading: "Execution Type",
    name: "executionType",
    item: "executionType",
    type: "toggle",
    disable: "false",
    required: true,
    info: "executionType",
  },
};

export const StrategyInfoFormFields = [
  StartegyInfoMapping[StrategyInfoFields.STRATEGYNAME],
  StartegyInfoMapping[StrategyInfoFields.INDEX],
  StartegyInfoMapping[StrategyInfoFields.CAPITAL],
  StartegyInfoMapping[StrategyInfoFields.EXECUTIONTYPE],
];

