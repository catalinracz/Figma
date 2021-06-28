import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomepageTab from "./homepageTab";
import FirstScreen from "../screens/firstScreen";
import SignupScreen from "../screens/signUpScreen";
import LoginScreen from "../screens/loginScreen";
import Contact from "../screens/contactInfoScreen";
import Notification from "../screens/notificationScreen";
import BankAccount from "../screens/bankAccountInfoScreen";
import roots from "./roots";
import { persistor, store } from "../components/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name={roots.firstScreen} component={FirstScreen} />
            <Stack.Screen name={roots.signUpScreen} component={SignupScreen} />
            <Stack.Screen name={roots.loginScreen} component={LoginScreen} />
            <Stack.Screen name={roots.homeScreen} component={HomepageTab} />
            <Stack.Screen name={roots.contactInfoScreen} component={Contact} />
            <Stack.Screen
              name={roots.notificationScreen}
              component={Notification}
            />
            <Stack.Screen
              name={roots.bankAccountInfoScreen}
              component={BankAccount}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default MainStack;
