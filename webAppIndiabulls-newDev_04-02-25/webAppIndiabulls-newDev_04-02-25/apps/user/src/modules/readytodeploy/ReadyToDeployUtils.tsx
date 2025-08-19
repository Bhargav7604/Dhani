import { StrategyAPIResponse } from "./services/AllStrategiesServiceTypes";

export interface HomePageStrategies {
  id: number;
  name: string;
  daysago: number;
  Details: {
    objecttitle: string;
    objectValue: string;
  }[];
}

export interface ReadyToDeployStateType {
  filteredStrategy: StrategyAPIResponse[];
  selectedStrategy: string;
  originalStrategy: StrategyAPIResponse[];
  // contentTopHeight: number | string;
}

export interface NoStrategyProps {
  $detailView?: boolean;
}

export interface ScrollYDivProps {
  $marginTop?: number | string;
}