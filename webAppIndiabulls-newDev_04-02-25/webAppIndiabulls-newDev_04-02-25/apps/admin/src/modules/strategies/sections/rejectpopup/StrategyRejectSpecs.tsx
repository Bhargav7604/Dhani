export const ActiveStrategyFields = {
  STRATEGY_NAME: "name",
  DESCRIPTION: "description",
};
export const StrategyFieldRejectMapping = {
  [ActiveStrategyFields.STRATEGY_NAME]: {
    name: "name",
    type: "text",
    placeholder: "Name",
    heading: "Name",
  },
  
  [ActiveStrategyFields.DESCRIPTION]: {
    name: "description",
    type: "textarea",
    placeholder: "Enter Reason why you are reject this strategy ",
    heading: "Enter a Valid Reason",
  },
};
export const StrategyFormFields = [
  StrategyFieldRejectMapping[ActiveStrategyFields.STRATEGY_NAME],
 
  StrategyFieldRejectMapping[ActiveStrategyFields.DESCRIPTION],
];
