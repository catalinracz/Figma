import React from 'react';
import LoginScreen from './src/loginScreen';
import SingUpScreen from './src/signUpScreen';
import Homepage from './src/homepage';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/profileScreen';
import AssetPage from './src/assetPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="SignUp" component={SingUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Asset" component={AssetPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

export const HomepageTab = () => {

return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} options={{ tabBarBadge: 3 }}/>
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

