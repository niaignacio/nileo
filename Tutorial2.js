import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tutorial2 = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        
      
        <Image 
          style={styles.picture}
          source={require('./images/download.jpg')} />
        
        <View style={styles.txtbox}>
          <Text> While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future. Aspiring actress serves lattes to movie stars in between auditions and jazz musician Sebastian scrapes by playing cocktail-party gigs in dingy bars.</Text>

        </View>

        <View style={styles.txtbox}>
          <Text>IMDB: </Text>
          <Text>RottenTomatoes: </Text>
        </View>

      </View>
      
      <View style={styles.inline}>
        <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Tutorial1')}>
          <Text style={styles.fontSize}> Prev </Text>
        </Pressable>
  
        <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Tutorial3')}>
          <Text style={styles.fontSize}> Next </Text>
        </Pressable>
      </View>
        
      
      
    </View>


  );
}

export default Tutorial2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6E9C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7%',
   
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: '70%',
    borderRadius: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  txtbox:{
    marginRight: '10%',
    marginLeft: '10%',
    marginTop: '5%',
  },
  inline:{
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10%',
  },
  navBtn:{
    backgroundColor: '#FFFFFF',
    borderRadius: '40px',
    height: '150%',
    width: 100,
    alignItems: 'center',
  },
  fontSize:{
    fontSize: 30,
    marginTop: 15,
  },
  description: {
    color: '#ffffff'
  },
});
