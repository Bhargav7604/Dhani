import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { RootState } from '../store/store';

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
          let iconName: keyof typeof MaterialIcons.glyphMap;

          if (route.name === 'Deployed') {
            iconName = 'dashboard';
          } else if (route.name === 'Strategies') {
            iconName = 'trending-up';
          } else if (route.name === 'Builder') {
            iconName = 'build';
          } else if (route.name === 'Performance') {
            iconName = 'analytics';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else {
            iconName = 'help';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
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
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;