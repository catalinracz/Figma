import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/loginScreen';
import SingUpScreen from './src/signUpScreen';
import Homepage from './src/homepage';

const navigator = createStackNavigator({
  Login: LoginScreen,
  Sign: SingUpScreen,
  Home: Homepage
},
{
  initialRouteName: 'Sign',
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(navigator);