export interface ActiveStrategyManageProps {
  open: boolean;
  onClose: () => void;
  id: number | null | undefined;
  strategyName?: string | null;
}

export interface StrategyRows {
  id: number;
  userId: number;

  description: string;
  name: string;
  instrument: string;
  status: string;
  isHidden?: string;
}

export interface StrategyType {
  id: number;
  name: string;
  capital: number;
  entryHours: number;
  entryMinutes: number;
  exitHours: number ;
  exitMinutes:  number;
  description: string;
  category: string;
  isHidden?: boolean;
  scId: string;
}
export interface StrategyLogRows {
  id: number;
  strategyId: string;
  strategyName: string;
  userId: string;
  userName:string;
  deploymentDate: string;
  description: string;
  status: string;
  errorCode: string;
}
