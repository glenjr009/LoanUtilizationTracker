import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle="light-content" />
      <AppNavigator />
    </>
  );
};

export default App;