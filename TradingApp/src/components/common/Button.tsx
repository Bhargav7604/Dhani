import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { colors } from '../../styles/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  loading?: boolean;
  style?: any;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  mode = 'contained',
  disabled = false,
  loading = false,
  style,
  color = colors.primary,
}) => {
  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      loading={loading}
      style={[{ marginVertical: 8 }, style]}
      buttonColor={mode === 'contained' ? color : undefined}
      textColor={mode === 'contained' ? 'white' : color}
    >
      {title}
    </PaperButton>
  );
};

export default Button;