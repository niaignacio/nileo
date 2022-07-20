import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tutorial2 = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text> Tutorial Page 2</Text>
    </View>
  );
}

export default Tutorial2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
