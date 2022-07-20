import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tutorial1 from './Tutorial1.js';
import Tutorial2 from './Tutorial2.js';
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
      <Text> Welcome! Let's take a look around. </Text>
      <Button title="->" onPress={() => navigation.navigate('Tutorial1', {prev: 'Home'})} />
    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tutorial1" component={Tutorial1} options={{headerShown: false}}/>
        <Stack.Screen name="Tutorial2" component={Tutorial2} />
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
