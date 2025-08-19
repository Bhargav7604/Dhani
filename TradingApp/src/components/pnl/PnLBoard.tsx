import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppSelector } from '../../store/store';
import Card from '../common/Card';
import { colors } from '../../styles/theme';

const PnLBoard = () => {
  const pnlData = useAppSelector(state => state.socket.pnlData);

  const pnlItems = [
    { label: "Today's P&L", value: pnlData.todaysPnL },
    { label: 'Positional P&L', value: pnlData.positionalPnL },
    { label: 'Intraday P&L', value: pnlData.intradayPnL },
    { label: 'Overall P&L', value: pnlData.overallPnL },
    { label: 'Deployed Capital', value: pnlData.deployedCapital },
  ];

  return (
    <Card style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>
        P&L Dashboard
      </Text>
      
      <View style={styles.pnlGrid}>
        {pnlItems.map((item, index) => (
          <View key={index} style={styles.pnlItem}>
            <Text variant="bodySmall" style={styles.pnlLabel}>
              {item.label}
            </Text>
            <Text 
              variant="bodyMedium" 
              style={[
                styles.pnlValue,
                { 
                  color: item.label.includes('Capital') 
                    ? colors.text.primary 
                    : item.value >= 0 
                      ? colors.status.success 
                      : colors.status.error 
                }
              ]}
            >
              ₹{item.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 8,
  },
  title: {
    color: colors.text.primary,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  pnlGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pnlItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  pnlLabel: {
    color: colors.text.tertiary,
    marginBottom: 4,
    textAlign: 'center',
  },
  pnlValue: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PnLBoard;