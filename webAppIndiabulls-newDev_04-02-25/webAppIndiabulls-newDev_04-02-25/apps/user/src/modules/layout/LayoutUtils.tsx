import { PayloadAction } from "@reduxjs/toolkit";

export interface LayoutContainerProps {
    backgroundcolor?: string
}

export interface ToasterInterface {
  id: number;
  status: boolean;
  message: string;
  duration: number;
}

export interface ToasterSliceProps {
  toasters: ToasterInterface[];
}

export interface ContentContainerProps {
  $margintop?: number;
} 

export interface AlgoCompDimensionStateProps {
  algoCompHeight?: number;
}
export interface ExecutionTypesProps {
  ExecutionType: string;
}

export type ExecutionTypeParams = PayloadAction<ExecutionTypesProps>;
export type AlgoCompDimensionPayload = PayloadAction<AlgoCompDimensionStateProps>;

export interface ToggleButtonsProps {
  $active?: boolean | string | undefined;
  $type?: "PaperTrading" | "LiveTrading";
}