import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import Button from '../../components/common/Button';

const BeneficiaryDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beneficiary Dashboard</Text>
      <View style={styles.content}>
        <Button 
          title="View My Loans" 
          onPress={() => alert('View Loans')} 
        />
        <Button 
          title="Apply for Loan" 
          onPress={() => alert('Apply for Loan')} 
        />
        <Button 
          title="Track Applications" 
          onPress={() => alert('Track Applications')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginTop: 40,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },
});

export default BeneficiaryDashboard;