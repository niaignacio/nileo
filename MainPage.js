import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainPage = ({ navigation, route }) => {
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
          <Text style={styles.tutorialFont}>Swipe RIGHT if this movie does not pique your interest!</Text>

        </View>
        
        <View style={styles.inline}>
          <Pressable style={styles.navBtn} onPress={() => navigation.navigate('Tutorial1')}>
            <Text style={styles.fontSize}> Prev </Text>
          </Pressable>
    
          <Pressable style={styles.navBtn} onPress={() => navigation.navigate('MainPage')}>
            <Text style={styles.fontSize}> Next </Text>
          </Pressable>
        </View>
        
    </View>
    );
}