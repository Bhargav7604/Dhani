import { PNLHeaderTypes } from "../../modules/deployedstrategies/services/SocketDataUtils";

export interface PNLValuesStateType {
    selectedOption: string;
    activeIndex: number;
  }
  
  export interface PNLValuesCompProps {
    positionalData: { title: string; Value: string; OldValue: number }[];
    intradayData: { title: string; Value: string; OldValue: number }[];
}
  
export interface PNLStateType {
  selectedExecutionType: PNLHeaderTypes;
}
  