export const CoreSettingFields = {
  MULTIPLIER: "multiplier",
  EXECUTIONTYPE: "executiontype",
};

export const CoreSettingMapping = {
  [CoreSettingFields.MULTIPLIER]: {
    heading: "Multiplier",
    name: "multiplier",
    item: "multiplier",
    type: "select",
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
  CoreSettingMapping[CoreSettingFields.MULTIPLIER],
  CoreSettingMapping[CoreSettingFields.EXECUTIONTYPE],
];
