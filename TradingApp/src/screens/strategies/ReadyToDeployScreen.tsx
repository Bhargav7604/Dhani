import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Text, Card, Chip, Searchbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from '../../store/store';
import { setSelectedCategory } from '../../store/slices/strategiesSlice';
import Button from '../../components/common/Button';
import { colors, spacing, typography } from '../../styles/theme';
import { formatPercentage } from '../../utils/formatters';

const ReadyToDeployScreen = () => {
  const dispatch = useDispatch();
  const { strategies, selectedCategory } = useSelector(
    (state: RootState) => state.strategies
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = ['All', 'In-House', 'Popular', 'DIY'];

  const filteredStrategies = strategies.filter(strategy => {
    const matchesCategory = selectedCategory === 'All' || strategy.category === selectedCategory;
    const matchesSearch = strategy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         strategy.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDeploy = (strategyId: string) => {
    // Handle strategy deployment
    console.log('Deploying strategy:', strategyId);
  };

  const renderCategoryChip = (category: string) => (
    <Chip
      key={category}
      selected={selectedCategory === category}
      onPress={() => dispatch(setSelectedCategory(category))}
      style={styles.categoryChip}
      mode={selectedCategory === category ? 'flat' : 'outlined'}
    >
      {category}
    </Chip>
  );

  const renderStrategyCard = ({ item }: { item: any }) => (
    <Card style={styles.strategyCard}>
      <View style={styles.cardHeader}>
        <View style={styles.strategyInfo}>
          <Text style={styles.strategyName}>{item.name}</Text>
          <Text style={styles.strategyDescription}>{item.description}</Text>
          <Chip 
            mode="outlined" 
            style={styles.categoryTag}
            compact
          >
            {item.category}
          </Chip>
        </View>
      </View>
      
      <View style={styles.metricsRow}>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Returns</Text>
          <Text style={[
            styles.metricValue,
            { color: item.returns >= 0 ? colors.profit : colors.loss }
          ]}>
            {formatPercentage(item.returns)}
          </Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Max Drawdown</Text>
          <Text style={[styles.metricValue, { color: colors.loss }]}>
            {formatPercentage(item.maxDrawdown)}
          </Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Win Rate</Text>
          <Text style={styles.metricValue}>
            {formatPercentage(item.winRate)}
          </Text>
        </View>
      </View>
      
      <Button
        title="Deploy Strategy"
        onPress={() => handleDeploy(item.id)}
        style={styles.deployButton}
        mode="contained"
      />
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Ready to Deploy</Text>
        
        <Searchbar
          placeholder="Search strategies..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map(renderCategoryChip)}
        </ScrollView>
        
        <View style={styles.strategiesSection}>
          <Text style={styles.sectionTitle}>
            {selectedCategory === 'All' ? 'All Strategies' : `${selectedCategory} Strategies`}
            {` (${filteredStrategies.length})`}
          </Text>
          <FlatList
            data={filteredStrategies}
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
  searchBar: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  categoriesContainer: {
    marginBottom: spacing.lg,
  },
  categoriesContent: {
    paddingHorizontal: spacing.md,
  },
  categoryChip: {
    marginRight: spacing.sm,
  },
  strategiesSection: {
    marginTop: spacing.md,
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
  strategyDescription: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  categoryTag: {
    alignSelf: 'flex-start',
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
  deployButton: {
    marginTop: spacing.sm,
  },
});

export default ReadyToDeployScreen;