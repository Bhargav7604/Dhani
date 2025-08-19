import { useState, useEffect } from "react";

import {
  Card,
  LeftSection,
  Title,
  ProfitText,
  MonthlyAverage,
  IconWrapper,
  ROIText,
  CardWraperDivFlex,
  StyledLabel,
} from "./ProfitCardStyles";
import { PNLShimmer } from "../../../../../../../../user/src/components/shimmers/PnlBoardShimmer";

import { useMediaQuery } from "@mui/material";
import {
  ProfitCardProps,
} from "../../StrategyStatisticsTypes";
import Stocks from "../../../../../../assets/svg/FRAME 2.svg"


const ProfitCard = (props: ProfitCardProps) => {
  const { ProfitCardMappedData } = props;
  const [loading, setLoading] = useState(true);
  const matches = useMediaQuery("max-width:769px");

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <CardWraperDivFlex>
      {ProfitCardMappedData.map((item, index) => (
        <>
          {loading ? (
            <PNLShimmer $width={matches ? "100%" : "380px"} $height="200px" />
          ) : (
            <Card key={index}>
              <LeftSection>
                <Title>{item.title}</Title>
                <IconWrapper>
                  <img src={Stocks} alt={Stocks} />
                </IconWrapper>
              </LeftSection>

              <LeftSection>
                <div>
                  <StyledLabel>{item.subtitle1}</StyledLabel>
                  <ProfitText $color={Number(item.subtitle1Value) <= 0}>
                    {item.subtitle1Value}
                  </ProfitText>
                </div>
              </LeftSection>

              <LeftSection>
                <div>
                  <StyledLabel>{item.subtitle2}</StyledLabel>
                  <MonthlyAverage>{item.subtitle2Value}</MonthlyAverage>
                </div>
                <div>
                  <StyledLabel>{item.subtitle3}</StyledLabel>
                  <ROIText>{item.subtitle3Value}</ROIText>
                </div>
              </LeftSection>
            </Card>
          )}
        </>
      ))}
    </CardWraperDivFlex>
  );
};

export default ProfitCard;
