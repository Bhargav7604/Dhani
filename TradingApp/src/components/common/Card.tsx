import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card as PaperCard } from 'react-native-paper';
import { colors, spacing } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  elevation?: number;
}

const Card: React.FC<CardProps> = ({ children, style, elevation = 2 }) => {
  return (
    <PaperCard style={[styles.card, style]} elevation={elevation}>
      <PaperCard.Content>
        {children}
      </PaperCard.Content>
    </PaperCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    marginVertical: spacing.xs,
    marginHorizontal: spacing.sm,
  },
});

export default Card;