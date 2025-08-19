import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Text, Searchbar, Chip } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setDeployedStrategies, setLoading } from '../../store/slices/deployedStrategiesSlice';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import PnLBoard from '../../components/pnl/PnLBoard';
import { colors } from '../../styles/theme';
import { DeployedStrategy } from '../../store/slices/deployedStrategiesSlice';

const DeployedStrategiesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const { deployedStrategies, loading } = useAppSelector(state => state.deployedStrategies);

  const mockDeployedStrategies: DeployedStrategy[] = [
    {
      id: 1,
      name: 'DeltaSync Nifty',
      status: 'live',
      capital: 50000,
      multiplier: '2x',
      execution: 'LiveTrading',
      pnl: 2500.50,
      positionType: 'Intraday',
    },
    {
      id: 2,
      name: 'BankNifty Breakout',
      status: 'paused',
      capital: 75000,
      multiplier: '1x',
      execution: 'PaperTrading',
      pnl: -1200.25,
      positionType: 'Positional',
    },
    {
      id: 3,
      name: 'Option Scalper',
      status: 'error',
      capital: 30000,
      multiplier: '3x',
      execution: 'LiveTrading',
      pnl: 850.75,
      positionType: 'Intraday',
    },
  ];

  const fetchDeployedStrategies = async () => {
    dispatch(setLoading(true));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(setDeployedStrategies(mockDeployedStrategies));
    } catch (error) {
      console.error('Failed to fetch deployed strategies:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchDeployedStrategies();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchDeployedStrategies();
    setRefreshing(false);
  };

  const filteredStrategies = deployedStrategies.filter(strategy =>
    strategy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return colors.status.success;
      case 'paused': return colors.status.warning;
      case 'error': return colors.status.error;
      default: return colors.text.tertiary;
    }
  };

  const renderStrategyCard = ({ item }: { item: DeployedStrategy }) => (
    <Card style={styles.strategyCard}>
      <View style={styles.cardHeader}>
        <View style={styles.strategyInfo}>
          <Text variant="titleMedium" style={styles.strategyName}>
            {item.name}
          </Text>
          <Text variant="bodySmall" style={styles.strategyId}>
            ID: {item.id}
          </Text>
        </View>
        <Chip 
          style={[styles.statusChip, { backgroundColor: getStatusColor(item.status) }]}
          textStyle={styles.statusText}
        >
          {item.status.toUpperCase()}
        </Chip>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text variant="bodySmall" style={styles.infoLabel}>Capital</Text>
            <Text variant="bodyMedium" style={styles.infoValue}>
              ₹{item.capital.toLocaleString()}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text variant="bodySmall" style={styles.infoLabel}>Multiplier</Text>
            <Text variant="bodyMedium" style={styles.infoValue}>
              {item.multiplier}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text variant="bodySmall" style={styles.infoLabel}>P&L</Text>
            <Text 
              variant="bodyMedium" 
              style={[
                styles.infoValue, 
                { color: item.pnl >= 0 ? colors.status.success : colors.status.error }
              ]}
            >
              ₹{item.pnl.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <Button
            title="Details"
            mode="outlined"
            onPress={() => console.log('View details')}
            style={styles.actionButton}
          />
          <Button
            title={item.status === 'live' ? 'Pause' : 'Resume'}
            onPress={() => console.log('Toggle strategy')}
            style={styles.actionButton}
            color={item.status === 'live' ? colors.status.warning : colors.status.success}
          />
        </View>
      </View>
    </Card>
  );

  if (loading && deployedStrategies.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <PnLBoard />
      
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.screenTitle}>
          Deployed Strategies
        </Text>

        <Searchbar
          placeholder="Search strategies..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />

        <FlatList
          data={filteredStrategies}
          renderItem={renderStrategyCard}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text variant="bodyLarge" style={styles.emptyText}>
                No deployed strategies found
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    marginBottom: 16,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  searchBar: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  strategyCard: {
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  strategyInfo: {
    flex: 1,
  },
  strategyName: {
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  strategyId: {
    color: colors.text.tertiary,
    marginTop: 2,
  },
  statusChip: {
    borderRadius: 16,
  },
  statusText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardContent: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  infoValue: {
    color: colors.text.primary,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    color: colors.text.tertiary,
    textAlign: 'center',
  },
});

export default DeployedStrategiesScreen;