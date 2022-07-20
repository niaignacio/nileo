import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tutorial1 } from './Tutorial1.js';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
    <View style={styles.container}>
      <Text style = {styles.setFontSize}>Hello, let's take a look around!</Text>
  
      <View style ={styles.box}>
      <Text> chicken nuggets</Text>

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
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
