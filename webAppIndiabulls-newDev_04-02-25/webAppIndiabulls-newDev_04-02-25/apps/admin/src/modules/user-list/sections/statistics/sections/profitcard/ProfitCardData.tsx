import Stocks from "../../../../../../assets/svgs/FRAME 2.svg"
import Frame from "../../../../../../assets/svgs/FRAME 3.svg";
import Frame1 from "../../../../../../assets/svgs/FRAME 1.svg";

export const CardData = [
  {
    id: 1,
    title: "Performance Overview",
    img: Frame1,
    winratio: "Win Ratio",
    winvalue: "80.00%",
    windays: "Win Days",
    winnvalue: "98",
    lossdays: "Loss Days",
    lossvalue: "34",
  },
  {
    id: 2,
    title: "Profit Statistics",
    img: Stocks,
    winratio: "Total Profit",
    winvalue: "₹. 68,000.12",
    windays: "Monthly Average",
    winnvalue: "₹. 4,000.12",
    lossdays: "Total ROI",
    lossvalue: "5.12%",
  },
  {
    id: 3,
    title: "Risk Metrics",
    img: Frame,
    winratio: "Max Drawdown",
    winvalue:" -2.45%",
    windays: "Sharpe Ratio",
    winnvalue: "1.12",
    lossdays: "Sortino Ratio",
    lossvalue: "2.52",
  },
];
