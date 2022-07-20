import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tutorial1 = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.picture}
        source={require('./images/download.jpg')} />
      <Text style={styles.description}>While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future. Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars.</Text>
      <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Home')}>
        <Text> Previous </Text>
      </Pressable>
      <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Tutorial2')}>
        <Text> Next </Text>
      </Pressable>
    </View>
  );
}

export default Tutorial1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6E9C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%'
  },
  box: {
    backgroundColor: '#ce03fc',
    width: '83%',
    height: '39%',
    borderRadius: '4000px',
  },
  description: {
    color: '#ffffff'
  },
});
