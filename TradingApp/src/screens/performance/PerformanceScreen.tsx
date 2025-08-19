import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, SegmentedButtons } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../../styles/theme';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const PerformanceScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const periods = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
  ];

  // Mock performance data
  const performanceData = {
    today: {
      totalPnl: 1250.75,
      totalTrades: 12,
      winningTrades: 8,
      losingTrades: 4,
      winRate: 66.67,
      avgWin: 245.50,
      avgLoss: -125.25,
      maxWin: 450.00,
      maxLoss: -200.00,
      profitFactor: 1.96,
    },
    week: {
      totalPnl: 5420.30,
      totalTrades: 45,
      winningTrades: 32,
      losingTrades: 13,
      winRate: 71.11,
      avgWin: 285.75,
      avgLoss: -145.80,
      maxWin: 650.00,
      maxLoss: -320.00,
      profitFactor: 2.15,
    },
    month: {
      totalPnl: 18750.85,
      totalTrades: 156,
      winningTrades: 108,
      losingTrades: 48,
      winRate: 69.23,
      avgWin: 295.20,
      avgLoss: -155.40,
      maxWin: 850.00,
      maxLoss: -420.00,
      profitFactor: 2.08,
    },
    year: {
      totalPnl: 125420.50,
      totalTrades: 1245,
      winningTrades: 856,
      losingTrades: 389,
      winRate: 68.75,
      avgWin: 305.85,
      avgLoss: -165.25,
      maxWin: 1250.00,
      maxLoss: -650.00,
      profitFactor: 2.12,
    },
  };

  const currentData = performanceData[selectedPeriod as keyof typeof performanceData];

  const MetricCard = ({ title, value, isPositive }: { title: string; value: string; isPositive?: boolean }) => (
    <Card style={styles.metricCard}>
      <Text style={styles.metricTitle}>{title}</Text>
      <Text style={[
        styles.metricValue,
        isPositive !== undefined && {
          color: isPositive ? colors.profit : colors.loss
        }
      ]}>
        {value}
      </Text>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Performance Analytics</Text>
        
        <View style={styles.periodSelector}>
          <SegmentedButtons
            value={selectedPeriod}
            onValueChange={setSelectedPeriod}
            buttons={periods}
          />
        </View>
        
        <View style={styles.metricsGrid}>
          <MetricCard
            title="Total P&L"
            value={formatCurrency(currentData.totalPnl)}
            isPositive={currentData.totalPnl >= 0}
          />
          <MetricCard
            title="Win Rate"
            value={formatPercentage(currentData.winRate)}
          />
          <MetricCard
            title="Total Trades"
            value={currentData.totalTrades.toString()}
          />
          <MetricCard
            title="Profit Factor"
            value={currentData.profitFactor.toFixed(2)}
          />
        </View>
        
        <Card style={styles.detailCard}>
          <Text style={styles.cardTitle}>Trade Statistics</Text>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Winning Trades:</Text>
            <Text style={[styles.statValue, { color: colors.profit }]}>
              {currentData.winningTrades}
            </Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Losing Trades:</Text>
            <Text style={[styles.statValue, { color: colors.loss }]}>
              {currentData.losingTrades}
            </Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Average Win:</Text>
            <Text style={[styles.statValue, { color: colors.profit }]}>
              {formatCurrency(currentData.avgWin)}
            </Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Average Loss:</Text>
            <Text style={[styles.statValue, { color: colors.loss }]}>
              {formatCurrency(currentData.avgLoss)}
            </Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Max Win:</Text>
            <Text style={[styles.statValue, { color: colors.profit }]}>
              {formatCurrency(currentData.maxWin)}
            </Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Max Loss:</Text>
            <Text style={[styles.statValue, { color: colors.loss }]}>
              {formatCurrency(currentData.maxLoss)}
            </Text>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    ...typography.h2,
    textAlign: 'center',
    marginVertical: spacing.lg,
    color: colors.text,
  },
  periodSelector: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  metricCard: {
    width: '48%',
    padding: spacing.md,
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
  metricTitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  metricValue: {
    ...typography.h3,
    color: colors.text,
    textAlign: 'center',
  },
  detailCard: {
    marginHorizontal: spacing.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  cardTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
    color: colors.text,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statLabel: {
    ...typography.body,
    color: colors.text,
  },
  statValue: {
    ...typography.body,
    fontWeight: 'bold',
  },
});

export default PerformanceScreen;