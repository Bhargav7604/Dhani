import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeployedStrategy {
  id: string;
  strategyId: string;
  name: string;
  status: 'running' | 'paused' | 'stopped';
  pnl: number;
  todayPnl: number;
  totalTrades: number;
  winningTrades: number;
  deployedAt: string;
  capital: number;
}

interface DeployedStrategiesState {
  deployedStrategies: DeployedStrategy[];
  totalPnl: number;
  todayPnl: number;
  isLoading: boolean;
  error: string | null;
}

const mockDeployedStrategies: DeployedStrategy[] = [
  {
    id: '1',
    strategyId: '1',
    name: 'Iron Condor Strategy',
    status: 'running',
    pnl: 15420.50,
    todayPnl: 1250.75,
    totalTrades: 45,
    winningTrades: 35,
    deployedAt: '2024-01-15T09:30:00Z',
    capital: 100000
  },
  {
    id: '2',
    strategyId: '2',
    name: 'Bull Call Spread',
    status: 'paused',
    pnl: 8750.25,
    todayPnl: -320.50,
    totalTrades: 28,
    winningTrades: 18,
    deployedAt: '2024-01-10T10:15:00Z',
    capital: 75000
  }
];

const initialState: DeployedStrategiesState = {
  deployedStrategies: mockDeployedStrategies,
  totalPnl: 24170.75,
  todayPnl: 930.25,
  isLoading: false,
  error: null,
};

const deployedStrategiesSlice = createSlice({
  name: 'deployedStrategies',
  initialState,
  reducers: {
    updateDeployedStrategy: (state, action: PayloadAction<DeployedStrategy>) => {
      const index = state.deployedStrategies.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.deployedStrategies[index] = action.payload;
      }
    },
    pauseStrategy: (state, action: PayloadAction<string>) => {
      const strategy = state.deployedStrategies.find(s => s.id === action.payload);
      if (strategy) {
        strategy.status = 'paused';
      }
    },
    resumeStrategy: (state, action: PayloadAction<string>) => {
      const strategy = state.deployedStrategies.find(s => s.id === action.payload);
      if (strategy) {
        strategy.status = 'running';
      }
    },
    stopStrategy: (state, action: PayloadAction<string>) => {
      const strategy = state.deployedStrategies.find(s => s.id === action.payload);
      if (strategy) {
        strategy.status = 'stopped';
      }
    },
    updatePnl: (state, action: PayloadAction<{ totalPnl: number; todayPnl: number }>) => {
      state.totalPnl = action.payload.totalPnl;
      state.todayPnl = action.payload.todayPnl;
    },
  },
});

export const { 
  updateDeployedStrategy, 
  pauseStrategy, 
  resumeStrategy, 
  stopStrategy, 
  updatePnl 
} = deployedStrategiesSlice.actions;
export default deployedStrategiesSlice.reducer;