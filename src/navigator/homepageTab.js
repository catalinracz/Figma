import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from '../screens/homepage';
import Profile from "../screens/profileScreen";
import Product from "../screens/productScreen";
import Transaction from "../screens/transactionScreen";
import { Images } from '../theme/images';

const Tab = createBottomTabNavigator();

const HomepageTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            tabBarIcon: () => <Image source={Images.homeTab} />,
          }}
        />
        <Tab.Screen
          name="Product"
          component={Product}
          options={{
            tabBarIcon: () => <Image source={Images.searchTab} />,
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarIcon: () => <Image source={Images.transactionTab} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Profile}
          options={{
            tabBarIcon: () => <Image source={Images.profileTab} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  export default HomepageTab;