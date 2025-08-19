export const PNLMappingfields = [
    { key: "deployedCapital", label: "Deployed Capital" },
    { key: "positionalPAndL", label: "Positional P&L" },
    { key: "intradayPAndL", label: "Intraday P&L" },
    { key: "todaysPAndL", label: "Today's P&L" },
    { key: "overAllUserPAndL", label: "Overall P&L" },
];

export type PNLFieldKey = (typeof PNLMappingfields)[number]["key"];