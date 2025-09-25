import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import RoleSelection from './src/screens/auth/RoleSelection';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle="light-content" />
      <RoleSelection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default App;