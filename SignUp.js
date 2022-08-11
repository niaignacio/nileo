import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, KeyboardAvoidingView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase';

const SignUp= () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if(user) {
          navigation.navigate("Main");
        }
      })
      return unsubscribe;
    }, [])
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
              const user = userCredentials.user;
              console.log('signed up with: ', user.email)
        })
        .catch(error => alert(error.message))
    }
    const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('logged in with: ', user.email)
    })
    .catch(error => alert(error.message))
    }
  return (
    <KeyboardAvoidingView style={styles.container}>
     <TextInput
          style = {styles.textInput}
          placeholder = "Email"
          value = {email}
          onChangeText = {text => setEmail(text)}
     />
     <TextInput
          style = {styles.textInput}
          placeholder = "Password"
          value = {password}
          onChangeText = {text => setPassword(text)}
          secureTextEntry
     />
     <View style={styles.buttonContainer}>
          <Pressable style={styles.btnPrimary} onPress={handleLogin}>
            <Text style={styles.authBtnText}> Login </Text>
          </Pressable>
          <Pressable style={styles.btnPrimary} onPress={handleSignUp}>
            <Text style={styles.authBtnText}> Register </Text>
          </Pressable>
     </View>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

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
  textInput: {
     width: '90%',
     backgroundColor: '#FFFFFF',
     color: '#000000',
     margin: 5,
     borderRadius: 15,
     paddingTop: 10,
     paddingBottom: 10,
     paddingLeft: 10
  },
  buttonContainer: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     width: '100%'
  },
  btnPrimary: {
     backgroundColor: '#47497d',
      padding: 10,
      borderRadius: 15
      
  },
  authBtnText: {
     color: '#FFFFFF'
  }
});
