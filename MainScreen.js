import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React, {useEffect, useState} from 'react';
import { auth } from './firebase';


const MainScreen = ({ navigation, route }) => {
  let [movieImage, setMovieImage] = useState('');
  let [description, setDescription] = useState('');
  let [imdb, setImdb] = useState();
  let [title, setTitle] = useState('');
  const fetchApiCall = () => {
     const options = {
          method: 'GET',
          headers: {
               'X-RapidAPI-Key': '887d4978e0msha4f5740a0624c7ap103f07jsn36d326eeb2fb',
               'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
          }
     };
     const page = Math.floor(Math.random() * 83) //choose a random page
     const endpoint = 'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page='+ page + '&output_language=en&language=en';//generate endpoint
     fetch(endpoint, options)
          .then(response => response.json())
          .then(response => {
               const rand = Math.floor(Math.random() * response.results.length-1); //choose a random movie on that page
               let result = response.results[rand];
               console.log(result);
               console.log("backdropURL: " + result.backdropURLs.original)
               setMovieImage(result.backdropURLs.original);
               setDescription(result.overview);
               setImdb((Number(result.imdbRating))/10);
               setTitle(result.originalTitle);
          })
          .catch(err => console.error(err));
  }
  const addToLiked = () => {
    console.log("adding " + title + " to " + auth.currentUser?.email + "'s liked movies");
  }
  const handleSignOut = () => {
    console.log("handleSignOut()");
    auth
      .signOut()
      .then(() => {
        navigation.navigate("SignUp");
      })
  }
  return (
    
    <View style={styles.container}>
          <View style={styles.inline}>
          <Pressable style={styles.navBtn} onPress = {fetchApiCall}>
               <Text> API Call </Text>
          </Pressable>
          <Pressable style={styles.navBtn} onPress = {handleSignOut}>
            <Text> Sign Out </Text>
          </Pressable>
          </View>
        <View style={styles.box}>
          <View style={styles.titlebox}>
          <Text style={styles.titlebox}>{title} </Text>

          </View>
          <View style={styles.imgbox}>
          <Image 
              style={styles.picture}
            source={{uri: `${movieImage}`}} />
          </View>
            
          <View style={styles.txtbox}>
            <Text style={styles.align} numberOfLines={3}> {description} </Text>
          </View>

          <View style={styles.txtbox}>
            <Text style={styles.align}>IMDB: {imdb} </Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Pressable style={styles.circleBtnContainer}>
               <Image 
                style={styles.circleBtn1}
               source={require('./images/dislikeBtnpng.png')} />
          </Pressable>
          <Pressable style={styles.circleBtnContainer}>
               <Image 
                    style={styles.circleBtn2}
                    source={require('./images/starBtn.png')} />
          </Pressable>
          <Pressable style={styles.circleBtnContainer} onPress={addToLiked}>
               <Image 
                    style={styles.circleBtn3}
                    source={require('./images/igHeart.png')} />
          </Pressable>
        </View>
        
    </View>
  );
}

export default MainScreen;

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
    height: '65%',
    borderRadius: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlebox:{
    fontSize: 20,
  },
  imgbox:{
    paddingTop: 10,
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
  btnContainer: {
     // backgroundColor: '#000000',
     width: '100%',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     paddingTop: 20,
  },
  circleBtnContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBtn1: {
    width: 60,
    height: 60,
    alignItems: 'center',

  },
  circleBtn2: {
    width: 60,
    height: 60,
    alignItems: 'center',

  },
  circleBtn3: {
    width: 30,
    height: 30,
    backgroundColor: '#FFFFFF',
    
  },
  picture: {
     width: 250,
     height: 400
  }
});
