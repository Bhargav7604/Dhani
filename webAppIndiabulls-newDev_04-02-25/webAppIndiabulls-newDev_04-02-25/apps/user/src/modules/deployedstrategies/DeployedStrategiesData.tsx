export const SortDropDownData = [
  { key: "Min Capital", val: "Min Capital" },
  { key: "Max Capital", val: "Max Capital" },
];

export const StrategyMapColumnData = [
  {
    tableData: {
      columns: [
        { id: "symbolcelldata.name", lable: "Symbol" },
        { id: "ltp", lable: "LTP" },
        { id: "quantity", lable: "Lots" },
        { id: "entryprice", lable: "Entry Price" },
        { id: "exitprice", lable: "Exit Price" },
        { id: "entrytime", lable: "Entry Time" },
        { id: "exittime", lable: "Exit Time" },
        { id: "pandl", lable: "P&L" },
      ],
    },
  },
];

export const sectionTitleMapping = {
  performanceOverview: "Performance Overview",
  profitStatistics: "Profit Statistics",
  riskMetrics: "Risk Metrics",
};

export const labelMapping = {
  performanceOverview: {
    winRatio: "Win Ratio",
    winDays: "Winning Days",
    lossDays: "Losing Days",
  },
  profitStatistics: {
    totalProfit: "Total Profit",
    monthlyAvg: "Monthly Average",
    totalROI: "Total ROI",
  },
  riskMetrics: {
    maxDrawDown: "Max Drawdown",
    sharpeRatio: "Sharpe Ratio",
    sortinoRatio: "Sortino Ratio",
  },
}

