import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, TextInput, SegmentedButtons } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/common/Button';
import { colors, spacing, typography } from '../../styles/theme';

const StrategyBuilderScreen = () => {
  const [strategyName, setStrategyName] = useState('');
  const [strategyType, setStrategyType] = useState('options');
  const [description, setDescription] = useState('');
  const [entryCondition, setEntryCondition] = useState('');
  const [exitCondition, setExitCondition] = useState('');

  const handleSaveStrategy = () => {
    // Handle saving the strategy
    console.log('Saving strategy:', {
      name: strategyName,
      type: strategyType,
      description,
      entryCondition,
      exitCondition,
    });
  };

  const strategyTypes = [
    { value: 'options', label: 'Options' },
    { value: 'equity', label: 'Equity' },
    { value: 'futures', label: 'Futures' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Strategy Builder</Text>
        <Text style={styles.subtitle}>Create your own trading strategy</Text>
        
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          
          <TextInput
            label="Strategy Name"
            value={strategyName}
            onChangeText={setStrategyName}
            mode="outlined"
            style={styles.input}
          />
          
          <Text style={styles.inputLabel}>Strategy Type</Text>
          <SegmentedButtons
            value={strategyType}
            onValueChange={setStrategyType}
            buttons={strategyTypes}
            style={styles.segmentedButtons}
          />
          
          <TextInput
            label="Description"
            value={description}
            onChangeText={setDescription}
            mode="outlined"
            multiline
            numberOfLines={3}
            style={styles.input}
          />
        </Card>
        
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Entry Conditions</Text>
          
          <TextInput
            label="Entry Condition"
            value={entryCondition}
            onChangeText={setEntryCondition}
            mode="outlined"
            multiline
            numberOfLines={4}
            placeholder="Define when to enter the trade..."
            style={styles.input}
          />
        </Card>
        
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Exit Conditions</Text>
          
          <TextInput
            label="Exit Condition"
            value={exitCondition}
            onChangeText={setExitCondition}
            mode="outlined"
            multiline
            numberOfLines={4}
            placeholder="Define when to exit the trade..."
            style={styles.input}
          />
        </Card>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Save Strategy"
            onPress={handleSaveStrategy}
            style={styles.saveButton}
          />
          <Button
            title="Test Strategy"
            onPress={() => console.log('Testing strategy')}
            mode="outlined"
            style={styles.testButton}
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
    marginTop: spacing.lg,
    color: colors.text,
  },
  subtitle: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.textSecondary,
  },
  card: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    padding: spacing.lg,
  },
  sectionTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
    color: colors.text,
  },
  input: {
    marginBottom: spacing.md,
  },
  inputLabel: {
    ...typography.body,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  segmentedButtons: {
    marginBottom: spacing.md,
  },
  buttonContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.lg,
  },
  saveButton: {
    marginBottom: spacing.md,
  },
  testButton: {
    marginBottom: spacing.xl,
  },
});

export default StrategyBuilderScreen;