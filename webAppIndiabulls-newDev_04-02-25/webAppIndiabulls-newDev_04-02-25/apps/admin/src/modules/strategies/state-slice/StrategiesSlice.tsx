
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const StrategiesSlice = createSlice({
  name: 'strategiesdata',
  initialState: {
    strategiesData: [], 
     categories: [], 
  },
  reducers: {
    setStrategies: (state, action: PayloadAction<any>) => {
      state.strategiesData = action.payload.strategiesData;
    },
     setCategories: (state, action: PayloadAction<any>) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { setStrategies,setCategories } = StrategiesSlice.actions;

export default StrategiesSlice.reducer;