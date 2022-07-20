import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Tutorial1() {
  return (
    <View style={styles.container}>
      <Text>Tutorial1.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c6e9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#ce03fc',
    width: '83%',
    height: '39%',
    borderRadius: '4000px',
  }
});
