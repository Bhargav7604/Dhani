import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Text, Searchbar, Chip, SegmentedButtons } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setStrategies, setLoading } from '../../store/slices/strategiesSlice';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { colors } from '../../styles/theme';
import { Strategy } from '../../store/slices/strategiesSlice';

const ReadyToDeployScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('inHouse');
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const { strategies, loading } = useAppSelector(state => state.strategies);

  const mockStrategies = {
    inHouse: [
      {
        id: 1,
        name: 'Iron Condor Pro',
        description: 'Balanced iron condor with risk-defined strategies for consistent income generation.',
        category: 'In-House',
        minCapital: 50000,
        status: 'available',
        drawDown: 5.2,
        createdAt: Date.now() - 86400000 * 5,
        subscription: 'N',
      },
      {
        id: 2,
        name: 'Trend Catcher',
        description: 'Trend-following strategy using moving averages and momentum indicators.',
        category: 'In-House',
        minCapital: 75000,
        status: 'available',
        drawDown: 8.1,
        createdAt: Date.now() - 86400000 * 10,
        subscription: 'N',
      },
    ],
    popular: [
      {
        id: 3,
        name: 'Volatility Crusher',
        description: 'Shorting high IV options before earnings announcements.',
        category: 'Popular',
        minCapital: 100000,
        status: 'available',
        drawDown: 12.5,
        createdAt: Date.now() - 86400000 * 3,
        subscription: 'Y',
      },
    ],
    diy: [
      {
        id: 4,
        name: 'My Custom Strategy',
        description: 'Custom strategy created using the DIY builder.',
        category: 'DIY',
        minCapital: 25000,
        status: 'available',
        drawDown: 6.8,
        createdAt: Date.now() - 86400000 * 1,
        subscription: 'N',
      },
    ],
    preBuilt: [],
  };

  const fetchStrategies = async () => {
    dispatch(setLoading(true));
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(setStrategies(mockStrategies));
    } catch (error) {
      console.error('Failed to fetch strategies:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchStrategies();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchStrategies();
    setRefreshing(false);
  };

  const currentStrategies = strategies[selectedCategory as keyof typeof strategies] || [];
  const filteredStrategies = currentStrategies.filter(strategy =>
    strategy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryButtons = [
    { value: 'inHouse', label: 'In-House' },
    { value: 'popular', label: 'Popular' },
    { value: 'diy', label: 'My Strategies' },
  ];

  const renderStrategyCard = ({ item }: { item: Strategy }) => (
    <Card style={styles.strategyCard}>
      <View style={styles.cardHeader}>
        <View style={styles.strategyInfo}>
          <Text variant="titleMedium" style={styles.strategyName}>
            {item.name}
          </Text>
          <Chip style={styles.categoryChip} textStyle={styles.categoryText}>
            {item.category}
          </Chip>
        </View>
      </View>

      <Text variant="bodySmall" style={styles.description} numberOfLines={2}>
        {item.description}
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text variant="bodySmall" style={styles.statLabel}>Min Capital</Text>
          <Text variant="bodyMedium" style={styles.statValue}>
            ₹{item.minCapital.toLocaleString()}
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text variant="bodySmall" style={styles.statLabel}>Drawdown</Text>
          <Text variant="bodyMedium" style={styles.statValue}>
            {item.drawDown}%
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text variant="bodySmall" style={styles.statLabel}>Status</Text>
          <Text variant="bodyMedium" style={styles.statValue}>
            {item.subscription === 'Y' ? 'Deployed' : 'Available'}
          </Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <Button
          title="Customize"
          mode="outlined"
          onPress={() => console.log('Customize strategy')}
          style={styles.actionButton}
        />
        <Button
          title={item.subscription === 'Y' ? 'Deployed' : 'Deploy'}
          onPress={() => console.log('Deploy strategy')}
          style={styles.actionButton}
          disabled={item.subscription === 'Y'}
        />
      </View>
    </Card>
  );

  if (loading && currentStrategies.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.screenTitle}>
          Ready to Deploy
        </Text>

        <SegmentedButtons
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          buttons={categoryButtons}
          style={styles.segmentedButtons}
        />

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
                No strategies available in this category
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
    marginTop: 20,
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  segmentedButtons: {
    marginBottom: 16,
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
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  strategyInfo: {
    flex: 1,
  },
  strategyName: {
    color: colors.text.primary,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryChip: {
    backgroundColor: colors.border.secondary,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: 10,
    color: colors.text.secondary,
  },
  description: {
    color: colors.text.tertiary,
    marginBottom: 12,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  statValue: {
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

export default ReadyToDeployScreen;