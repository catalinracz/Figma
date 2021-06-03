import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomepageTab from '../screens/homepage';
import LoginScreen from '../screens/loginScreen';
import SingUpScreen from '../screens/signUpScreen';
import roots from './roots';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
      headerShown: false
      }}
      >
        <Stack.Screen name={roots.signupScreen} component={SingUpScreen} />
        <Stack.Screen name={roots.loginScreen} component={LoginScreen} />
        <Stack.Screen name={roots.homeScreen} component={HomepageTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainStack;
