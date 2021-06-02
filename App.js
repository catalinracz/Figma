import React from 'react';
import LoginScreen from './src/loginScreen';
import SingUpScreen from './src/signUpScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomepageTab from './src/homepage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="SignUp" component={SingUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Homepage" component={HomepageTab} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

