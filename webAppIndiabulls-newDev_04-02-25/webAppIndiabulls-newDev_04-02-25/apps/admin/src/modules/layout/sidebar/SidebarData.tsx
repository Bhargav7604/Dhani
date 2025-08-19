import strategyIcon from "../../../../public/svg/strategy-sidenav-svg.svg";
import reportsIcon from "../../../../public/svg/reports-sidenav-svg.svg";
// import orderDiffIcon from "../../../../public/svg/order-svgrepo-com.svg";
import todayOrderIcon from "../../../../public/svg/orders-svgrepo-com.svg";
import openPositionIcon from "../../../../public/svg/openposition-sidenav-svg.svg";
import wizardIcon from "../../../../public/svg/strategy-play-svgrepo-com.svg";
import ErrorIcon from "../../../../public/svg/error-16-svgrepo-com.svg";
import Users from "../../../../public/svg/users-svgrepo-com.svg";
import Activitylog from "../../../../public/svg/activity-manager.svg";
 import RollManagement from "../../../../public/svg/communication.svg";
import OrderModification from "../../../../public/svg/ordermodification.svg"
import { NavItem } from "../LayoutUtils";

export const sidebarItems: NavItem[] = [
  {
    path: "/strategies",
    label: "Strategies",
    icon: <img src={strategyIcon} alt="Strategy Icon" />,

    subItems: [
      { path: "/strategies/manage", label: "- Strategy Management " },
      { path: "/strategies/active", label: "- Active" },
      { path: "/strategies/non-active", label: "- In-Active" },
      { path: "/strategies/strategylog", label: "- Strategy Log" },
    ],
  },
  {
    path: "/userslist",
    label: "Users",
    icon: <img src={Users} alt="user list" />,
    // subItems: [
    //   { path: "/userslist/userslist", label: "- Users List " },
    //   // { path: "/userslist/tokens", label: "- Token Logs" },

    // ],
  },
  {
    path: "/reports",
    label: "Reports",
    icon: <img src={reportsIcon} alt="Reports Icon" />,

    subItems: [
      { path: "/reports/trades", label: "- Trades" },
      { path: "/reports/pnl", label: "- PnL" },
      { path: "/reports/templatepnl", label: "- Template PNL" },
      { path: "/reports/activeuser", label: "- Active User" },
    ],
  },
  {
    path: "/errortraker",
    label: "Error Tracker",
    icon: <img src={ErrorIcon} alt="Error Icon" />,
  },
  {
    path: "/todays-order",
    label: "Today's Order",
    icon: <img src={todayOrderIcon} alt="Strategy Icon" />,
  },
  {
    path: "/open-positions",
    label: "Open Positions",
    icon: <img src={openPositionIcon} alt="Strategy Icon" />,
  },

  {
    path: "/nocodestrategy",
    label: "Strategy Builder",
    icon: <img src={wizardIcon} alt="Strategy Icon" />,
  },
  {
    path: "/activitylog",
    label: "Activity Monitor",
    icon: <img src={Activitylog} alt="Activity Icon" />,
  },
  {
    path: "/rollmanagement",
    label: "Role Management",
    icon: <img src={RollManagement} alt="Rollmanagement Icon" />,
  },
  {
    path: "/ordermodificationlogs",
    label: "Order Modification Logs",
    icon: <img src={OrderModification} alt="Order Modification Icon" />,
  },
];
