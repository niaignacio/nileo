import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.setFontSize}>Hello, let's take a look around!</Text>
  
      <View style ={styles.box}>
      <Text></Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86ebd3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setFontSize: {
    fontSize: '20px',
  },
  box: {
    backgroundColor: 'ffffff',
    width: '83%',
    height: '39%',
    borderRadius: '4',
  }
});
