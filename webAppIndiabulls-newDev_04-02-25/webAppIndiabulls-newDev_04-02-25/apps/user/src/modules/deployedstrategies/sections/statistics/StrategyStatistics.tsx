import React, { useEffect, useState } from "react";
import DetailedStatistics from "./sections/detailedstatistics/DetailedStatistics";
import DailySummary from "./sections/dailysummary/DailySummary";
import MonthPnl from "./sections/monthpnl/MonthPnl";
import ProfitCard from "./sections/profitcard/ProfitCard";
import { Backdrop, Fade, Modal } from "@mui/material";
import {
  ActiveStrategyPageProps,
  ProfitCardMappedDataTypes,
} from "./StrategyStatisticsTypes";
import {
  StrategyDetailsModalWrapper,
  StrategyDynamicWrapperDiv,
  StrategyFlexRow,
  StrategySearchText,
} from "./StrategyStatisticsStyles";
import CloseIcon from "../../../../assets/svgs/CloseOutlined.svg";
import { ImageWraper } from "../../../header/HeaderStyles";
import { DeployedStrategiesStatisticsService } from "../../services/DeployedStrategiesServices";
import {
  MonthlyStatiticsTypes,
  PerformanceOverviewTypes,
  ProfitStatisticsTypes,
  RiskMetricsTypes,
  StatisticsTypes,
  WeekStatsSummaryTypes,
} from "../../services/DeployedStrategiesServiceTypes";
import {
  labelMapping,
  sectionTitleMapping,
} from "../../DeployedStrategiesData";
import { CardWraperDivFlex } from "./sections/profitcard/ProfitCardStyles";
import { ShimmerCard } from "../deployedshimmercard/ShimmerCard";
import { StatisticsShimmerWrapper } from "../../DeployedStrategiesStyles";
import { ColumnFlexDiv, StyledSecondaryHeadlineText } from "../../../../components/ui/GlobalStyles";
import NoSearchStrategy from "../../../../../../../packages/ui/src/sharedcomponents/nosearch/NoSearchCard";

interface StatisticsStatetype {
  statistics: StatisticsTypes[];
  weekStatsSummary: WeekStatsSummaryTypes[];
  monthlyStatistics: MonthlyStatiticsTypes[];
  performanceOverview: {} | PerformanceOverviewTypes;
  profitStatistics: {} | ProfitStatisticsTypes;
  riskMetrics: {} | RiskMetricsTypes;
  isLoading: boolean;
  apiStatusFail: string;
}

const InitialState: StatisticsStatetype = {
  statistics: [] as StatisticsTypes[],
  monthlyStatistics: [] as MonthlyStatiticsTypes[],
  weekStatsSummary: [] as WeekStatsSummaryTypes[],
  performanceOverview: {} as PerformanceOverviewTypes,
  profitStatistics: {} as ProfitStatisticsTypes,
  riskMetrics: {} as RiskMetricsTypes,
  isLoading: true,
  apiStatusFail: "",
};

const StrategyStatistics: React.FC<ActiveStrategyPageProps> = ({
  open,
  onClose,
  strategyId,
}) => {
  const [state, setState] = useState<StatisticsStatetype>(InitialState);
  const {
    statistics,
    weekStatsSummary,
    monthlyStatistics,
    performanceOverview,
    profitStatistics,
    riskMetrics,
    isLoading,
    apiStatusFail,
  } = state;

  const fetchDeployedStatistics = async () => {
    try {
      if (!strategyId) return null;

      const response = await DeployedStrategiesStatisticsService(strategyId);
      if (response?.data) {
        setState((prevState) => ({
          ...prevState,
          statistics: response.data.statistics,
          monthlyStatistics: response.data.monthlyStatistics,
          weekStatsSummary: response.data.weekStatsSummary,
          performanceOverview: response.data.performanceOverview,
          profitStatistics: response.data.profitStatistics,
          riskMetrics: response.data.riskMetrics,
        }));
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        apiStatusFail: "Failed to load data.",
      }));
      throw error;
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    fetchDeployedStatistics();
  }, []);

  const ProfitCardData = (): ProfitCardMappedDataTypes[] => {
    const createMappedObject = (
      key: keyof typeof labelMapping,
      data: Record<string, any>
    ): ProfitCardMappedDataTypes => {
      const labels = labelMapping[key];
      const keys = Object.keys(labels);
      const stringLabels = labels as Record<string, string>;

      return {
        title: sectionTitleMapping[key],
        subtitle1: stringLabels[keys[0]],
        subtitle1Value: data[keys[0]] ?? "--",
        subtitle2: stringLabels[keys[1]],
        subtitle2Value: data[keys[1]] ?? "--",
        subtitle3: stringLabels[keys[2]],
        subtitle3Value: data[keys[2]] ?? "--",
      };
    };

    return [
      createMappedObject("performanceOverview", performanceOverview),
      createMappedObject("profitStatistics", profitStatistics),
      createMappedObject("riskMetrics", riskMetrics),
    ];
  };
  const headings = ["Detailed Statistics", "Daily Summary", "Month-wise PnL"];
  const ShimmerWrapperPart = () => {
    return (
      <div className="statisticsShimmerWrapper">
        <CardWraperDivFlex>
          {[...Array(3)].map((_, i) => (
            <ShimmerCard
              key={i}
              $height="170px"
              $minidesktopheight="170px"
              $tabheight="170px"
              $mobileheight="150px"
            />
          ))}
        </CardWraperDivFlex>
        <StatisticsShimmerWrapper>
          {headings.map((heading, i) => (
            <ColumnFlexDiv $flexstart={true} key={i}>
              <StyledSecondaryHeadlineText>
                {heading}
              </StyledSecondaryHeadlineText>
              <ShimmerCard
                $height="250px"
                $minidesktopheight="250px"
                $tabheight="250px"
                $mobileheight="200px"
              />
            </ColumnFlexDiv>
          ))}
        </StatisticsShimmerWrapper>
      </div>
    );
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open} // Now correctly using the open prop
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open} style={{ outline: "none", backgroundColor: "white" }}>
        <StrategyDetailsModalWrapper>
          <StrategyFlexRow>
            <StrategySearchText>Statistics</StrategySearchText>
            <ImageWraper>
              <img
                src={CloseIcon}
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  cursor: "pointer",
                }}
              />
            </ImageWraper>
          </StrategyFlexRow>
          {isLoading ? (
            ShimmerWrapperPart()
          ) : apiStatusFail ? (
             <NoSearchStrategy text={apiStatusFail} /> 
          ) : (
            <StrategyDynamicWrapperDiv>
              <ProfitCard ProfitCardMappedData={ProfitCardData()} />
              <DetailedStatistics statistics={statistics} />
              <DailySummary weekStatsSummary={weekStatsSummary} />
              <MonthPnl monthlyStatistics={monthlyStatistics} />
            </StrategyDynamicWrapperDiv>
          )}
        </StrategyDetailsModalWrapper>
      </Fade>
    </Modal>
  );
};

export default StrategyStatistics;
