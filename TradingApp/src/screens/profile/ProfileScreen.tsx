import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Card, List, Switch, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import Button from '../../components/common/Button';
import { colors, spacing, typography } from '../../styles/theme';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => dispatch(logout()) },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Profile</Text>
        
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user?.name?.charAt(0) || 'U'}
              </Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user?.name || 'User'}</Text>
              <Text style={styles.userEmail}>{user?.email || 'user@example.com'}</Text>
              <Text style={styles.userRole}>{user?.role || 'User'}</Text>
            </View>
          </View>
        </Card>
        
        <Card style={styles.settingsCard}>
          <Text style={styles.cardTitle}>Settings</Text>
          
          <List.Item
            title="Notifications"
            description="Receive trade alerts and updates"
            left={(props) => <List.Icon {...props} icon="bell" />}
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            )}
          />
          
          <Divider />
          
          <List.Item
            title="Dark Mode"
            description="Switch to dark theme"
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            right={() => (
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
              />
            )}
          />
          
          <Divider />
          
          <List.Item
            title="Trading Preferences"
            description="Configure your trading settings"
            left={(props) => <List.Icon {...props} icon="cog" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Trading preferences')}
          />
          
          <Divider />
          
          <List.Item
            title="Risk Management"
            description="Set your risk parameters"
            left={(props) => <List.Icon {...props} icon="shield-check" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Risk management')}
          />
          
          <Divider />
          
          <List.Item
            title="Help & Support"
            description="Get help and contact support"
            left={(props) => <List.Icon {...props} icon="help-circle" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Help & support')}
          />
        </Card>
        
        <Card style={styles.accountCard}>
          <Text style={styles.cardTitle}>Account</Text>
          
          <List.Item
            title="Account Information"
            description="View and edit your account details"
            left={(props) => <List.Icon {...props} icon="account" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Account information')}
          />
          
          <Divider />
          
          <List.Item
            title="Security"
            description="Change password and security settings"
            left={(props) => <List.Icon {...props} icon="lock" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Security settings')}
          />
          
          <Divider />
          
          <List.Item
            title="Privacy"
            description="Manage your privacy preferences"
            left={(props) => <List.Icon {...props} icon="eye" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Privacy settings')}
          />
        </Card>
        
        <View style={styles.logoutContainer}>
          <Button
            title="Logout"
            onPress={handleLogout}
            mode="outlined"
            color={colors.error}
            style={styles.logoutButton}
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
  profileCard: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    padding: spacing.lg,
  },
  profileHeader: {
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
    marginRight: spacing.md,
  },
  avatarText: {
    ...typography.h2,
    color: 'white',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  userEmail: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  userRole: {
    ...typography.caption,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  settingsCard: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  accountCard: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  cardTitle: {
    ...typography.h3,
    margin: spacing.md,
    color: colors.text,
  },
  logoutContainer: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.lg,
  },
  logoutButton: {
    marginBottom: spacing.xl,
  },
});

export default ProfileScreen;