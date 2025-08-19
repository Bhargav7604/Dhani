import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Strategy {
  id: string;
  name: string;
  description: string;
  category: 'In-House' | 'Popular' | 'DIY';
  status: 'active' | 'inactive';
  pnl: number;
  returns: number;
  maxDrawdown: number;
  winRate: number;
}

interface StrategiesState {
  strategies: Strategy[];
  selectedCategory: string;
  isLoading: boolean;
  error: string | null;
}

const mockStrategies: Strategy[] = [
  {
    id: '1',
    name: 'Iron Condor Strategy',
    description: 'Options strategy for sideways market',
    category: 'In-House',
    status: 'active',
    pnl: 15420.50,
    returns: 12.5,
    maxDrawdown: -5.2,
    winRate: 78.5
  },
  {
    id: '2',
    name: 'Bull Call Spread',
    description: 'Bullish options strategy',
    category: 'Popular',
    status: 'active',
    pnl: 8750.25,
    returns: 8.9,
    maxDrawdown: -3.1,
    winRate: 65.2
  },
  {
    id: '3',
    name: 'Custom Straddle',
    description: 'User created volatility strategy',
    category: 'DIY',
    status: 'inactive',
    pnl: -2150.75,
    returns: -2.1,
    maxDrawdown: -8.5,
    winRate: 45.8
  }
];

const initialState: StrategiesState = {
  strategies: mockStrategies,
  selectedCategory: 'All',
  isLoading: false,
  error: null,
};

const strategiesSlice = createSlice({
  name: 'strategies',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    updateStrategy: (state, action: PayloadAction<Strategy>) => {
      const index = state.strategies.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.strategies[index] = action.payload;
      }
    },
    addStrategy: (state, action: PayloadAction<Strategy>) => {
      state.strategies.push(action.payload);
    },
  },
});

export const { setSelectedCategory, updateStrategy, addStrategy } = strategiesSlice.actions;
export default strategiesSlice.reducer;