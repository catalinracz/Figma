import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/loginScreen';
import SingUpScreen from './src/signUpScreen';

const navigator = createStackNavigator({
  Login: LoginScreen,
  Sign: SingUpScreen
},
{
  initialRouteName: 'Sign',
  defaultNavigationOptions: {
      title: 'Figma'
  }
});

export default createAppContainer(navigator);