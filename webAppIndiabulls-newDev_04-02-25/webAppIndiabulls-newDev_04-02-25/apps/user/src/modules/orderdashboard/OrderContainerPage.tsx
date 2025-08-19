import { DynamicWrapperDiv } from "../../components/ui/GlobalStyles";
import { RenderPageWrapper } from "../performancereports/PerformanceReportsStyles";
import { useState } from "react";
import ToggleButtonContainer from "../../../../../packages/ui/src/sharedcomponents/togglebutton/ToggleButtonContainer";
import OpenPositionsPage from "./open-positions/OpenPositions";
import OrderDifferencePage from "./order-difference/OrderDifference";

function OrderContainerPage() {
  const [currentPage, setCurrentPage] = useState<string>("orderDifference");

  const renderPage = () => {
    switch (currentPage) {
      case "orderDifference":
        return <OrderDifferencePage />;
      case "openPositions":
        return <OpenPositionsPage />;
      default:
        return null;
    }
  };

  const buttons = [
    { label: "Order Book", value: "orderDifference" },
    { label: "Open Positions", value: "openPositions" },
  ];

  return (
    <DynamicWrapperDiv $gap="18px" $shadow>
      <ToggleButtonContainer
        buttons={buttons}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <RenderPageWrapper>{renderPage()}</RenderPageWrapper>
    </DynamicWrapperDiv>
  );
}

export default OrderContainerPage;
