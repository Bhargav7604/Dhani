import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import strategiesReducer from './slices/strategiesSlice';
import deployedStrategiesReducer from './slices/deployedStrategiesSlice';
import socketReducer from './slices/socketSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    strategies: strategiesReducer,
    deployedStrategies: deployedStrategiesReducer,
    socket: socketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;