// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddMenuItemScreen from './src/screens/AddMenuItemScreen';
import FilterScreen from './src/screens/FilterScreen';
import { MenuItem } from './src/types/MenuItem';

export type RootStackParamList = {
  Home: undefined;
  AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> };
  Filter: { menuItems: MenuItem[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
