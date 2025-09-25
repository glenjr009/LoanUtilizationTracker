import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSelection from '../screens/auth/RoleSelection';
import BeneficiaryDashboard from '../screens/beneficiary/Dashboard';
import OfficerDashboard from '../screens/officer/Dashboard';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RoleSelection" component={RoleSelection} />
        <Stack.Screen name="BeneficiaryDashboard" component={BeneficiaryDashboard} />
        <Stack.Screen name="OfficerDashboard" component={OfficerDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;