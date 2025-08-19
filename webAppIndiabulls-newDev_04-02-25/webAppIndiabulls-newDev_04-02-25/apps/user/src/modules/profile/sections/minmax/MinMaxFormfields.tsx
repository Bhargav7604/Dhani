export const MinMaxInfoFields = {
  MINPROFIT: "minprofit",
  MAXLOSS: "maxprofit",
};

export const MinMaxMapping = {
  [MinMaxInfoFields.MINPROFIT]: {
    heading: "Profit Target",
    name: "minProfit",
    type: "number",
    disable: "false",
    required: true,
  },
  [MinMaxInfoFields.MAXLOSS]: {
    heading: "Max Loss Cap",
    name: "maxLoss",
    type: "number",
    disable: "false",
    required: true,
  },
};

export const MinMaxDetailsInfoMapping = [
    MinMaxMapping[MinMaxInfoFields.MINPROFIT],
    MinMaxMapping[MinMaxInfoFields.MAXLOSS],
];
