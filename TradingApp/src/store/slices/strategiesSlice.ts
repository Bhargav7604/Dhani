import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Strategy {
  id: number;
  name: string;
  description: string;
  category: string;
  minCapital: number;
  status: string;
  drawDown: number;
  createdAt: number;
  subscription: string;
}

interface StrategiesState {
  strategies: {
    inHouse: Strategy[];
    popular: Strategy[];
    diy: Strategy[];
    preBuilt: Strategy[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: StrategiesState = {
  strategies: {
    inHouse: [],
    popular: [],
    diy: [],
    preBuilt: [],
  },
  loading: false,
  error: null,
};

const strategiesSlice = createSlice({
  name: 'strategies',
  initialState,
  reducers: {
    setStrategies: (state, action: PayloadAction<StrategiesState['strategies']>) => {
      state.strategies = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setStrategies, setLoading, setError } = strategiesSlice.actions;
export default strategiesSlice.reducer;