import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Text, Card, Chip, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from '../../store/store';
import { pauseStrategy, resumeStrategy, stopStrategy } from '../../store/slices/deployedStrategiesSlice';
import PnLBoard from '../../components/pnl/PnLBoard';
import { colors, spacing, typography } from '../../styles/theme';
import { formatCurrency, formatPercentage } from '../../utils/formatters';

const DeployedStrategiesScreen = () => {
  const dispatch = useDispatch();
  const { deployedStrategies, totalPnl, todayPnl } = useSelector(
    (state: RootState) => state.deployedStrategies
  );

  const handlePauseStrategy = (id: string) => {
    dispatch(pauseStrategy(id));
  };

  const handleResumeStrategy = (id: string) => {
    dispatch(resumeStrategy(id));
  };

  const handleStopStrategy = (id: string) => {
    dispatch(stopStrategy(id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return colors.success;
      case 'paused':
        return colors.warning;
      case 'stopped':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const renderStrategyCard = ({ item }: { item: any }) => (
    <Card style={styles.strategyCard}>
      <View style={styles.cardHeader}>
        <View style={styles.strategyInfo}>
          <Text style={styles.strategyName}>{item.name}</Text>
          <Chip 
            mode="outlined" 
            textStyle={{ color: getStatusColor(item.status) }}
            style={{ borderColor: getStatusColor(item.status) }}
          >
            {item.status.toUpperCase()}
          </Chip>
        </View>
        <View style={styles.actionButtons}>
          {item.status === 'running' ? (
            <IconButton
              icon="pause"
              size={20}
              onPress={() => handlePauseStrategy(item.id)}
            />
          ) : item.status === 'paused' ? (
            <IconButton
              icon="play"
              size={20}
              onPress={() => handleResumeStrategy(item.id)}
            />
          ) : null}
          <IconButton
            icon="stop"
            size={20}
            onPress={() => handleStopStrategy(item.id)}
          />
        </View>
      </View>
      
      <View style={styles.metricsRow}>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>P&L</Text>
          <Text style={[
            styles.metricValue,
            { color: item.pnl >= 0 ? colors.profit : colors.loss }
          ]}>
            {formatCurrency(item.pnl)}
          </Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Today P&L</Text>
          <Text style={[
            styles.metricValue,
            { color: item.todayPnl >= 0 ? colors.profit : colors.loss }
          ]}>
            {formatCurrency(item.todayPnl)}
          </Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Win Rate</Text>
          <Text style={styles.metricValue}>
            {formatPercentage(item.winningTrades / item.totalTrades * 100)}
          </Text>
        </View>
      </View>
      
      <View style={styles.additionalInfo}>
        <Text style={styles.infoText}>
          Capital: {formatCurrency(item.capital)}
        </Text>
        <Text style={styles.infoText}>
          Trades: {item.totalTrades} ({item.winningTrades} wins)
        </Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Deployed Strategies</Text>
        
        <PnLBoard totalPnl={totalPnl} todayPnl={todayPnl} />
        
        <View style={styles.strategiesSection}>
          <Text style={styles.sectionTitle}>Active Strategies</Text>
          <FlatList
            data={deployedStrategies}
            renderItem={renderStrategyCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
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
  strategiesSection: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    color: colors.text,
  },
  strategyCard: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.xs,
    padding: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  strategyInfo: {
    flex: 1,
  },
  strategyName: {
    ...typography.h3,
    marginBottom: spacing.xs,
    color: colors.text,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  metric: {
    alignItems: 'center',
  },
  metricLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  metricValue: {
    ...typography.body,
    fontWeight: 'bold',
  },
  additionalInfo: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  infoText: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
});

export default DeployedStrategiesScreen;