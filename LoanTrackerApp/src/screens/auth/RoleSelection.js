import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import Button from '../../components/common/Button';

const RoleSelection = () => {
  const handleBeneficiary = () => {
    navigation.navigate('BeneficiaryDashboard');
  };

  const handleOfficer = () => {
    navigation.navigate('OfficerDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Tracker</Text>
      <Text style={styles.subtitle}>Team Hexa Titans</Text>
      
      <Text style={styles.roleTitle}>Select Your Role</Text>
      
      <Button title="👤 Beneficiary" onPress={handleBeneficiary} />
      <Button title="🏛️ Bank Officer" onPress={handleOfficer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 50,
  },
  roleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 30,
  },
});

export default RoleSelection;
