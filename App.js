import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import Scoring from './Components/Scoring/Scoring';
import Match from './Components/Match/Match';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
            <Stack.Screen
               name="welcome" 
               component={WelcomeScreen} 
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="scoring" 
               component={Scoring}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="match" 
               component={Match}
               options={{ headerShown: false }}
            />
           
          </Stack.Navigator>
    </NavigationContainer>

  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
