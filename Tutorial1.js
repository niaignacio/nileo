import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tutorial1 = ({ navigation, route }) => {
  return (
    
    <View style={styles.container}>
        <View style={styles.box}>
          <Image 
            style={styles.picture}
            source={require('./images/download.jpg')} />
          
          <View style={styles.txtbox}>
            <Text style={styles.align}> While navigating their careers in Los Angeles, a pianist and...</Text>
          </View>

          <View style={styles.txtbox}>
            <Text style={styles.align}>IMDB: </Text>
            <Text style={styles.align}>RottenTomatoes: </Text>
          </View>
        </View>

        <View style={styles.tutorialtxt}>
          <Text style={styles.tutorialFont}>Swipe LEFT if you would like to add this movie to your watchlist!</Text>

        </View>
        
        <View style={styles.inline}>
          <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.fontSize}> Prev </Text>
          </Pressable>
    
          <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Tutorial2')}>
            <Text style={styles.fontSize}> Next </Text>
          </Pressable>
        </View>
        
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
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: '60%',
    borderRadius: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tutorialtxt:{
    padding: 10,
    fontSize: 30,
  },
  tutorialFont:{
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  align:{
    textAlign: 'center',
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
    width: 100,
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3
  },
  fontSize:{
    fontSize: 30,
   
  },
  description: {
    color: '#ffffff'
  },
});
