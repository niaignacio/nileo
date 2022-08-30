import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import Tutorial1 from './Tutorial1.js';
import Tutorial2 from './Tutorial2.js';
import SignUp from './SignUp.js';
import MainScreen from './MainScreen.js';
import Welcome from './Welcome.js';
import { auth } from './firebase';
import Navbar from './HamburgerComponents/Navbar.js';
const Stack = createNativeStackNavigator();

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
function App() {
  return (
    <NavigationContainer>
      <Navbar/>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome', headerShown: false, }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tutorial1" component={Tutorial1}
        options={{
          title: 'Netflix and Chill', 
          headerStyle: {backgroundColor: '#47497d'}, 
          headerTitleStyle: {fontSize: 20, color: '#FFFFFF'},
          headerBackVisible: false,
          }}  />
        <Stack.Screen name="Tutorial2" component={Tutorial2}
        options={{
            title: 'Netflix and Chill', 
            headerStyle: {backgroundColor: '#47497d'}, 
            headerTitleStyle: {fontSize: 20, color: '#FFFFFF'},
            headerBackVisible: false,
            }} />
            <Stack.Screen name="SignUp" component={SignUp}
        options={{
            title: 'Netflix and Chill', 
            headerStyle: {backgroundColor: '#47497d'}, 
            headerTitleStyle: {fontSize: 20, color: '#FFFFFF'},
            headerBackVisible: false,
            }} />
      </Stack.Navigator> */}
    </NavigationContainer>
      
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86ebd3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setFontSize: {
    fontSize: '20px'
  },
  box: {
    backgroundColor: '#86ebd3',
    width: '83%',
    height: '39%',
    borderRadius: '4',
  }
});
