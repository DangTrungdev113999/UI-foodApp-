/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" headerMode='none'>
        <Screen name='Home' component={HomeScreen} />
        <Screen name="Splash" component={Splash} />
        <Screen name="Login" component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
};



export default App;
