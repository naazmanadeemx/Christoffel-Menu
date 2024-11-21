// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MenuItem } from '../types/MenuItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const logo = require('../../assets/logo22.png');

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const addItemHandler = () => {
    navigation.navigate('AddMenuItem', { setMenuItems });
  };

  const filterMenuHandler = () => {
    navigation.navigate('Filter', { menuItems }); 
  };

  const removeItemHandler = (id: number) => {
    setMenuItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const totalItems = menuItems.length;
  const averagePrice = totalItems > 0
    ? (menuItems.reduce((acc, item) => acc + item.price, 0) / totalItems).toFixed(2)
    : '0.00';

  const averagePriceByCourse = (course: string) => {
    const courseItems = menuItems.filter(item => item.course === course);
    return courseItems.length > 0
      ? (courseItems.reduce((acc, item) => acc + item.price, 0) / courseItems.length).toFixed(2)
      : null;
  };

  const averagePriceStarters = averagePriceByCourse('Starters');
  const averagePriceMains = averagePriceByCourse('Mains');
  const averagePriceDesserts = averagePriceByCourse('Desserts');

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateText}>No menu items available. Please add a menu item.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.statsContainer}>
        <Text style={styles.stats}>Total Items: {totalItems}</Text>
        <Text style={styles.stats}>Average Price: ${averagePrice}</Text>
        {averagePriceStarters && (
          <Text style={styles.stats}>Average Price (Starters): ${averagePriceStarters}</Text>
        )}
        {averagePriceMains && (
          <Text style={styles.stats}>Average Price (Mains): ${averagePriceMains}</Text>
        )}
        {averagePriceDesserts && (
          <Text style={styles.stats}>Average Price (Desserts): ${averagePriceDesserts}</Text>
        )}
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Dish Name: {item.name}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeItemHandler(item.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={renderEmptyState}
      />
      <TouchableOpacity style={styles.addButton} onPress={addItemHandler} activeOpacity={0.7}>
        <Text style={styles.addButtonText}>Add Menu Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton} onPress={filterMenuHandler} activeOpacity={0.7}>
        <Text style={styles.filterButtonText}>Filter Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
    backgroundColor: '#f0f0f0',
    paddingBottom: 16, 
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 5,
  },
  statsContainer: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stats: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 4,
  },
  item: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemDetails: { flex: 1 },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    padding: 10,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  filterButtonText: {
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

export default HomeScreen;
