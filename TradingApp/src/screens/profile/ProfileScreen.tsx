import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, List, Switch, Divider } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { colors } from '../../styles/theme';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [liveTrading, setLiveTrading] = React.useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => dispatch(logout())
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.screenTitle}>
          Profile
        </Text>

        {/* User Info Card */}
        <Card style={styles.userCard}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Text variant="headlineSmall" style={styles.avatarText}>
                {user?.name?.charAt(0) || 'U'}
              </Text>
            </View>
            <View style={styles.userDetails}>
              <Text variant="titleMedium" style={styles.userName}>
                {user?.name || 'User Name'}
              </Text>
              <Text variant="bodyMedium" style={styles.userEmail}>
                {user?.email || 'user@example.com'}
              </Text>
              <Text variant="bodySmall" style={styles.clientId}>
                Client ID: {user?.clientId || 'N/A'}
              </Text>
            </View>
          </View>
        </Card>

        {/* Settings Card */}
        <Card style={styles.settingsCard}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Settings
          </Text>

          <List.Item
            title="Push Notifications"
            description="Receive alerts for strategy updates"
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                color={colors.primary}
              />
            )}
          />

          <Divider />

          <List.Item
            title="Live Trading Mode"
            description="Enable real money trading"
            right={() => (
              <Switch
                value={liveTrading}
                onValueChange={setLiveTrading}
                color={colors.primary}
              />
            )}
          />

          <Divider />

          <List.Item
            title="Risk Management"
            description="Configure risk parameters"
            right={() => <List.Icon icon="chevron-right" />}
            onPress={() => console.log('Open risk management')}
          />

          <Divider />

          <List.Item
            title="Trading Preferences"
            description="Set your trading preferences"
            right={() => <List.Icon icon="chevron-right" />}
            onPress={() => console.log('Open trading preferences')}
          />
        </Card>

        {/* Account Actions */}
        <Card style={styles.actionsCard}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Account
          </Text>

          <Button
            title="Change Password"
            mode="outlined"
            onPress={() => console.log('Change password')}
            style={styles.actionButton}
          />

          <Button
            title="Export Data"
            mode="outlined"
            onPress={() => console.log('Export data')}
            style={styles.actionButton}
          />

          <Button
            title="Help & Support"
            mode="outlined"
            onPress={() => console.log('Help & support')}
            style={styles.actionButton}
          />

          <Button
            title="Logout"
            mode="contained"
            onPress={handleLogout}
            style={styles.logoutButton}
            color={colors.status.error}
          />
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
  userCard: {
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    color: colors.text.primary,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  clientId: {
    color: colors.text.tertiary,
    fontSize: 12,
  },
  settingsCard: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    color: colors.text.primary,
    fontWeight: '600',
  },
  actionsCard: {
    marginBottom: 16,
  },
  actionButton: {
    marginBottom: 8,
  },
  logoutButton: {
    marginTop: 16,
  },
});

export default ProfileScreen;