import React, { useState } from "react";
import {
  StyledNoCodeButton,
  ButtonsDiv,
} from "../sharedComponents/CustomTable/CustomTableStyles";
import OpenBrokerPage from "./sections/openbroker/OpenBroker";
import OpenQuantLabPage from "./sections/openquantlab/OpenQuantlab";
import OrderDifferencePage from "./sections/order-difference/OrderDifference";
import { ButtonsWrapper } from "../../components/ui/GlobalStyles";

const OpenPositionsPage: React.FC = () => {
  const options = ["Open Broker", "Open QuantLab", "Order difference"];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderPage = () => {
    switch (activeIndex) {
      case 0:
        return <OpenBrokerPage />;
      case 1:
        return <OpenQuantLabPage />;
      case 2:
        return <OrderDifferencePage />;
      default:
        return <OpenBrokerPage />;
    }
  };

  return (
    <>
      <ButtonsWrapper>
        <ButtonsDiv>
          {options.map((option, index) => (
            <StyledNoCodeButton
              key={option}
              onClick={() => setActiveIndex(index)}
              active={activeIndex === index}
            >
              {option}
            </StyledNoCodeButton>
          ))}
        </ButtonsDiv>
      </ButtonsWrapper>
      {/* Conditional Page Render */}
      {renderPage()}
    </>
  );
};

export default OpenPositionsPage;
