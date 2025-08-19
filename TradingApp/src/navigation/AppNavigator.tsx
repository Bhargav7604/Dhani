import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useAppSelector } from '../store/store';

// Screens
import LoginScreen from '../screens/auth/LoginScreen';
import DeployedStrategiesScreen from '../screens/deployed/DeployedStrategiesScreen';
import ReadyToDeployScreen from '../screens/strategies/ReadyToDeployScreen';
import StrategyBuilderScreen from '../screens/builder/StrategyBuilderScreen';
import PerformanceScreen from '../screens/performance/PerformanceScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Deployed') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          } else if (route.name === 'Strategies') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Builder') {
            iconName = focused ? 'construct' : 'construct-outline';
          } else if (route.name === 'Performance') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1667D9',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Deployed" component={DeployedStrategiesScreen} />
      <Tab.Screen name="Strategies" component={ReadyToDeployScreen} />
      <Tab.Screen name="Builder" component={StrategyBuilderScreen} />
      <Tab.Screen name="Performance" component={PerformanceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <Stack.Screen name="Main" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;