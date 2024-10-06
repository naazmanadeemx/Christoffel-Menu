// src/screens/FilterScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { MenuItem } from '../types/MenuItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type FilterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Filter'>;

const FilterScreen = ({ route }: { route: { params: { menuItems: MenuItem[] } } }) => {
  const { menuItems } = route.params;
  const navigation = useNavigation<FilterScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtered Menu Items</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Dish Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  item: { 
    padding: 10, 
    marginBottom: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
    borderRadius: 5, 
    backgroundColor: '#f9f9f9' 
  },
  itemText: { fontSize: 18, fontWeight: 'bold' },
});

export default FilterScreen;
