import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Tutorial1Fn} from 'Tutorial1File';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>peepeepoopoo</Text>
      <Text> we did it!! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Tutorial1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
