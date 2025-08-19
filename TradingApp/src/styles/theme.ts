import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
    surface: '#ffffff',
    background: '#f5f5f5',
    error: '#b00020',
    success: '#4caf50',
    warning: '#ff9800',
    profit: '#4caf50',
    loss: '#f44336',
  },
};

export const colors = {
  primary: '#6200ee',
  secondary: '#03dac6',
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#000000',
  textSecondary: '#666666',
  border: '#e0e0e0',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  profit: '#4caf50',
  loss: '#f44336',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold' as const,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal' as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal' as const,
  },
};