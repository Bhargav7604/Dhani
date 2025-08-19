import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DeployedStrategy {
  id: number;
  name: string;
  status: string;
  capital: number;
  multiplier: string;
  execution: string;
  pnl: number;
  positionType: string;
}

interface DeployedStrategiesState {
  deployedStrategies: DeployedStrategy[];
  loading: boolean;
  error: string | null;
}

const initialState: DeployedStrategiesState = {
  deployedStrategies: [],
  loading: false,
  error: null,
};

const deployedStrategiesSlice = createSlice({
  name: 'deployedStrategies',
  initialState,
  reducers: {
    setDeployedStrategies: (state, action: PayloadAction<DeployedStrategy[]>) => {
      state.deployedStrategies = action.payload;
    },
    updateStrategyStatus: (state, action: PayloadAction<{ id: number; status: string }>) => {
      const strategy = state.deployedStrategies.find(s => s.id === action.payload.id);
      if (strategy) {
        strategy.status = action.payload.status;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setDeployedStrategies, updateStrategyStatus, setLoading, setError } = deployedStrategiesSlice.actions;
export default deployedStrategiesSlice.reducer;