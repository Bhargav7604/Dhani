import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { colors, spacing, typography } from '../../styles/theme';
import { formatCurrency } from '../../utils/formatters';

interface PnLBoardProps {
  totalPnl: number;
  todayPnl: number;
}

const PnLBoard: React.FC<PnLBoardProps> = ({ totalPnl, todayPnl }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.pnlCard}>
        <View style={styles.pnlRow}>
          <View style={styles.pnlItem}>
            <Text style={styles.pnlLabel}>Total P&L</Text>
            <Text style={[
              styles.pnlValue,
              { color: totalPnl >= 0 ? colors.profit : colors.loss }
            ]}>
              {formatCurrency(totalPnl)}
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.pnlItem}>
            <Text style={styles.pnlLabel}>Today's P&L</Text>
            <Text style={[
              styles.pnlValue,
              { color: todayPnl >= 0 ? colors.profit : colors.loss }
            ]}>
              {formatCurrency(todayPnl)}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  pnlCard: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
  },
  pnlRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pnlItem: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md,
  },
  pnlLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  pnlValue: {
    ...typography.h2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PnLBoard;