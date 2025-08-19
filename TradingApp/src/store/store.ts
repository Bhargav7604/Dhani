import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice from './slices/authSlice';
import strategiesSlice from './slices/strategiesSlice';
import deployedStrategiesSlice from './slices/deployedStrategiesSlice';
import socketSlice from './slices/socketSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    strategies: strategiesSlice,
    deployedStrategies: deployedStrategiesSlice,
    socket: socketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;