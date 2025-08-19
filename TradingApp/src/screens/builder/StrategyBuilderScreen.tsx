import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, SegmentedButtons, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { colors } from '../../styles/theme';

interface StrategyForm {
  strategyName: string;
  capital: string;
  strategyType: string;
  entryTime: string;
  exitTime: string;
}

const StrategyBuilderScreen = () => {
  const [selectedTab, setSelectedTab] = useState('templates');
  const { control, handleSubmit, formState: { errors } } = useForm<StrategyForm>();

  const tabButtons = [
    { value: 'templates', label: 'Templates' },
    { value: 'create', label: 'Create Own' },
    { value: 'saved', label: 'My Saved' },
  ];

  const strategyTypeButtons = [
    { value: 'Intraday', label: 'Intraday' },
    { value: 'Positional', label: 'Positional' },
  ];

  const onSubmit = (data: StrategyForm) => {
    console.log('Strategy data:', data);
    // Handle strategy creation
  };

  const renderTemplates = () => (
    <View style={styles.templatesContainer}>
      <Text variant="titleMedium" style={styles.sectionTitle}>
        Easy Strategy Templates
      </Text>
      
      {['Iron Condor', 'Straddle', 'Strangle', 'Bull Call Spread'].map((template, index) => (
        <Card key={index} style={styles.templateCard}>
          <View style={styles.templateHeader}>
            <Text variant="titleSmall" style={styles.templateName}>
              {template}
            </Text>
            <Button
              title="Use Template"
              mode="outlined"
              onPress={() => console.log(`Use ${template} template`)}
              style={styles.templateButton}
            />
          </View>
          <Text variant="bodySmall" style={styles.templateDescription}>
            Professional {template.toLowerCase()} strategy with optimized parameters
          </Text>
        </Card>
      ))}
    </View>
  );

  const renderCreateForm = () => (
    <ScrollView style={styles.formContainer}>
      <Text variant="titleMedium" style={styles.sectionTitle}>
        Create Your Own Strategy
      </Text>

      <Card style={styles.formCard}>
        <Text variant="titleSmall" style={styles.formSectionTitle}>
          Basic Information
        </Text>

        <Controller
          control={control}
          name="strategyName"
          rules={{ required: 'Strategy name is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Strategy Name"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={!!errors.strategyName}
              style={styles.input}
            />
          )}
        />

        <Controller
          control={control}
          name="capital"
          rules={{ required: 'Capital is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Required Capital"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={!!errors.capital}
              style={styles.input}
              keyboardType="numeric"
            />
          )}
        />

        <Text variant="bodyMedium" style={styles.inputLabel}>
          Strategy Type
        </Text>
        <Controller
          control={control}
          name="strategyType"
          rules={{ required: 'Strategy type is required' }}
          render={({ field: { onChange, value } }) => (
            <SegmentedButtons
              value={value}
              onValueChange={onChange}
              buttons={strategyTypeButtons}
              style={styles.segmentedButtons}
            />
          )}
        />

        <Controller
          control={control}
          name="entryTime"
          rules={{ required: 'Entry time is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Entry Time (HH:MM)"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={!!errors.entryTime}
              style={styles.input}
              placeholder="09:15"
            />
          )}
        />

        <Controller
          control={control}
          name="exitTime"
          rules={{ required: 'Exit time is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Exit Time (HH:MM)"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={!!errors.exitTime}
              style={styles.input}
              placeholder="15:30"
            />
          )}
        />

        <Button
          title="Save Strategy"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveButton}
        />
      </Card>
    </ScrollView>
  );

  const renderSavedStrategies = () => (
    <View style={styles.savedContainer}>
      <Text variant="titleMedium" style={styles.sectionTitle}>
        My Saved Strategies
      </Text>
      <View style={styles.emptyContainer}>
        <Text variant="bodyLarge" style={styles.emptyText}>
          No saved strategies yet
        </Text>
        <Text variant="bodySmall" style={styles.emptySubtext}>
          Create your first strategy using the builder
        </Text>
      </View>
    </View>
  );

  const renderContent = () => {
    switch (selectedTab) {
      case 'templates':
        return renderTemplates();
      case 'create':
        return renderCreateForm();
      case 'saved':
        return renderSavedStrategies();
      default:
        return renderTemplates();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.screenTitle}>
          Strategy Builder
        </Text>

        <SegmentedButtons
          value={selectedTab}
          onValueChange={setSelectedTab}
          buttons={tabButtons}
          style={styles.tabButtons}
        />

        {renderContent()}
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
  tabButtons: {
    marginBottom: 20,
  },
  templatesContainer: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 16,
    color: colors.text.primary,
    fontWeight: '600',
  },
  templateCard: {
    marginBottom: 8,
  },
  templateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  templateName: {
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  templateButton: {
    minWidth: 100,
  },
  templateDescription: {
    color: colors.text.tertiary,
  },
  formContainer: {
    flex: 1,
  },
  formCard: {
    marginBottom: 16,
  },
  formSectionTitle: {
    marginBottom: 16,
    color: colors.text.primary,
    fontWeight: '600',
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  inputLabel: {
    marginBottom: 8,
    color: colors.text.primary,
    fontWeight: '500',
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  saveButton: {
    marginTop: 16,
  },
  savedContainer: {
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
    marginBottom: 8,
  },
  emptySubtext: {
    color: colors.text.tertiary,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default StrategyBuilderScreen;