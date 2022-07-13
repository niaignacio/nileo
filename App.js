import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>peepeepoopoo</Text>
      <View style ={styles.box}>
      <Text>niaisaboob</Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03e7fc',
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
