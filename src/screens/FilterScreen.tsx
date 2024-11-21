// src/screens/FilterScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from '../types/MenuItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type FilterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Filter'>;

const FilterScreen = ({ route }: { route: { params: { menuItems: MenuItem[] } } }) => {
  const { menuItems } = route.params;
  const navigation = useNavigation<FilterScreenNavigationProp>();

  const [selectedCourse, setSelectedCourse] = useState<string>('All');

  const filteredItems = selectedCourse === 'All'
    ? menuItems
    : menuItems.filter(item => item.course === selectedCourse);

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateText}>No items available for the selected course.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>
      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="All Courses" value="All" />
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Dish Name: {item.name}</Text>
            <Text style={styles.itemDescription}>Description: {item.description}</Text>
            <Text style={styles.itemCourse}>Course: {item.course}</Text>
            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={renderEmptyState}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f0f0f0',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  picker: { 
    height: 50, 
    width: '100%', 
    marginBottom: 16, 
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
  },
  item: { 
    padding: 16, 
    marginBottom: 10, 
    borderRadius: 8, 
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  itemCourse: {
    fontSize: 16,
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#888',
  },
});

export default FilterScreen;
