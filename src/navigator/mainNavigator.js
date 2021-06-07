import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomepageTab from '../screens/homepage';
import LoginScreen from '../screens/loginScreen';
import SingUpScreen from '../screens/signUpScreen';
import Contact from '../screens/contactInfoScreen';
import Notification from '../screens/notificationScreen';
import BankAccount from '../screens/bankAccountInfoScreen';
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
        <Stack.Screen name={roots.contactInfoScreen} component={Contact} />
        <Stack.Screen name={roots.notificationScreen} component={Notification} />
        <Stack.Screen name={roots.bankAccountInfoScreen} component={BankAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainStack;
