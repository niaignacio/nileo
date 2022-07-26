import * as React from 'react';
import { View, Text } from "react-native";

const MyMovieList = ({ navigation, route }) => {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>My Movie List</Text>
</View>
   );
 }

 export default MyMovieList;