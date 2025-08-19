import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, DataTable } from 'react-native-paper';
import Card from '../../components/common/Card';
import { colors } from '../../styles/theme';

const { width } = Dimensions.get('window');

interface PerformanceData {
  id: number;
  strategyName: string;
  pnl: number;
  trades: number;
  winRate: number;
}

const PerformanceScreen = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);

  const mockPerformanceData: PerformanceData[] = [
    {
      id: 1,
      strategyName: 'DeltaSync Nifty',
      pnl: 15420.50,
      trades: 45,
      winRate: 78.5,
    },
    {
      id: 2,
      strategyName: 'BankNifty Breakout',
      pnl: -2340.25,
      trades: 32,
      winRate: 65.2,
    },
    {
      id: 3,
      strategyName: 'Option Scalper',
      pnl: 8750.75,
      trades: 67,
      winRate: 82.1,
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPerformanceData(mockPerformanceData);
    }, 1000);
  }, []);

  const totalPnL = performanceData.reduce((sum, item) => sum + item.pnl, 0);
  const totalTrades = performanceData.reduce((sum, item) => sum + item.trades, 0);
  const avgWinRate = performanceData.length > 0 
    ? performanceData.reduce((sum, item) => sum + item.winRate, 0) / performanceData.length 
    : 0;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.screenTitle}>
          Performance Analytics
        </Text>

        {/* Summary Cards */}
        <View style={styles.summaryRow}>
          <Card style={styles.summaryCard}>
            <Text variant="bodySmall" style={styles.summaryLabel}>Total P&L</Text>
            <Text 
              variant="titleMedium" 
              style={[
                styles.summaryValue,
                { color: totalPnL >= 0 ? colors.status.success : colors.status.error }
              ]}
            >
              ₹{totalPnL.toFixed(2)}
            </Text>
          </Card>

          <Card style={styles.summaryCard}>
            <Text variant="bodySmall" style={styles.summaryLabel}>Total Trades</Text>
            <Text variant="titleMedium" style={styles.summaryValue}>
              {totalTrades}
            </Text>
          </Card>
        </View>

        <View style={styles.summaryRow}>
          <Card style={styles.summaryCard}>
            <Text variant="bodySmall" style={styles.summaryLabel}>Avg Win Rate</Text>
            <Text variant="titleMedium" style={styles.summaryValue}>
              {avgWinRate.toFixed(1)}%
            </Text>
          </Card>

          <Card style={styles.summaryCard}>
            <Text variant="bodySmall" style={styles.summaryLabel}>Active Strategies</Text>
            <Text variant="titleMedium" style={styles.summaryValue}>
              {performanceData.length}
            </Text>
          </Card>
        </View>

        {/* Performance Table */}
        <Card style={styles.tableCard}>
          <Text variant="titleMedium" style={styles.tableTitle}>
            Strategy Performance
          </Text>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Strategy</DataTable.Title>
              <DataTable.Title numeric>P&L</DataTable.Title>
              <DataTable.Title numeric>Trades</DataTable.Title>
              <DataTable.Title numeric>Win %</DataTable.Title>
            </DataTable.Header>

            {performanceData.map((item) => (
              <DataTable.Row key={item.id}>
                <DataTable.Cell>
                  <Text variant="bodySmall" numberOfLines={1}>
                    {item.strategyName}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text 
                    variant="bodySmall"
                    style={{ 
                      color: item.pnl >= 0 ? colors.status.success : colors.status.error 
                    }}
                  >
                    ₹{item.pnl.toFixed(0)}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text variant="bodySmall">{item.trades}</Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text variant="bodySmall">{item.winRate.toFixed(1)}%</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  screenTitle: {
    marginBottom: 20,
    marginTop: 20,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  summaryCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  summaryLabel: {
    color: colors.text.tertiary,
    marginBottom: 8,
    textAlign: 'center',
  },
  summaryValue: {
    color: colors.text.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCard: {
    marginTop: 8,
  },
  tableTitle: {
    marginBottom: 16,
    color: colors.text.primary,
    fontWeight: '600',
  },
});

export default PerformanceScreen;