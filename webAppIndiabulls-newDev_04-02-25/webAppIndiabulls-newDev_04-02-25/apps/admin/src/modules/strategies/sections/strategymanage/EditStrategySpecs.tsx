export const ActiveStrategyFields = {
  STRATEGY_NAME: "name",
  DEPLOYED_CAPITAL: "capital",
  ENTRY_DATE: "entryTime",
  EXIT_DATE: "exitTime",
  DESCRIPTION: "description",
  STRATEGY_CATEGORY:"selectcategory"
};
export const ActiveStrategyFieldMapping = {
  [ActiveStrategyFields.STRATEGY_NAME]: {
    name: "name",
    type: "text",
    placeholder: "Strategy Name",
    heading: "Strategy Name",
  },
  [ActiveStrategyFields.DEPLOYED_CAPITAL]: {
    name: "capital",
    type: "text",
    placeholder: "Deployed Capital",
    heading: "Deployed Capital",
  },
  [ActiveStrategyFields.ENTRY_DATE]: {
    name: "entryTime",
    type: "time",
    placeholder: "Entry Time",
    heading: "Entry Time",
  },
  [ActiveStrategyFields.EXIT_DATE]: {
    name: "exitTime",
    type: "time",
    placeholder: "Exit Time",
    heading: "Exit Time",
  },
  [ActiveStrategyFields.DESCRIPTION]: {
    name: "description",
    type: "textarea",
    placeholder: "Enter Something ",
    heading: "Description",
  },
  [ActiveStrategyFields.STRATEGY_CATEGORY]: {
  name: "category",
  type: "select",
  placeholder: "Select Strategy Category",
  heading: "Strategy Category",
  options: "categories",
},

};
export const StrategyFormFields = [
  ActiveStrategyFieldMapping[ActiveStrategyFields.STRATEGY_NAME],
  ActiveStrategyFieldMapping[ActiveStrategyFields.DEPLOYED_CAPITAL],
  ActiveStrategyFieldMapping[ActiveStrategyFields.ENTRY_DATE],
  ActiveStrategyFieldMapping[ActiveStrategyFields.EXIT_DATE],
  ActiveStrategyFieldMapping[ActiveStrategyFields.DESCRIPTION],
 ActiveStrategyFieldMapping[ActiveStrategyFields.STRATEGY_CATEGORY],

];
