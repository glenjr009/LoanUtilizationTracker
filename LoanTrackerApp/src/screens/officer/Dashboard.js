import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import Button from '../../components/common/Button';

const OfficerDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank Officer Dashboard</Text>
      <View style={styles.content}>
        <Button 
          title="Review Applications" 
          onPress={() => alert('Review Applications')} 
        />
        <Button 
          title="Manage Loans" 
          onPress={() => alert('Manage Loans')} 
        />
        <Button 
          title="Reports" 
          onPress={() => alert('View Reports')} 
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

export default OfficerDashboard;