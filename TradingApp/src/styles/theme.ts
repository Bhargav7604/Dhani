import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1667D9',
    secondary: '#037171',
    surface: '#FFFFFF',
    background: '#F8F9FA',
    error: '#F44336',
    success: '#4CAF50',
    warning: '#FF9800',
  },
};

export const colors = {
  primary: '#1667D9',
  secondary: '#037171',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  text: {
    primary: '#000000',
    secondary: '#1667D9',
    tertiary: '#94A3B8',
    disabled: '#ABABAB',
  },
  status: {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
  },
  border: {
    main: '#1667D9',
    secondary: '#E1ECFA',
    light: '#E0E0E0',
  },
};