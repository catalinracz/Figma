import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./profileScreen";
import Product from "./productScreen";
import Transaction from "./transactionScreen";
import { styles } from "../styles/homepageStyles";

const Tab = createBottomTabNavigator();
const Homepage = () => {
  const [modalVisible, setModalVisible] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.homepage}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifButton}>
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Welcome, Jessie.</Text>
        </View>
        <View style={styles.portofolio}>
          <LinearGradient
            colors={["#31A05F", "#31A078"]}
            start={[0, 0.4947]}
            end={[0.9575, 0]}
            style={styles.portofolioGradient}
          >
            <Text style={styles.portofolioText}>
              Your total asset potofolio
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.money}>N203,935</Text>
              <View style={styles.investButton}>
                <TouchableOpacity>
                  <Text style={styles.investButtonText}>Invest now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.plans}>
          <View style={styles.plansText}>
            <Text style={styles.bestPlansText}>Best Plans</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>
                See All
                <AntDesign name="arrowright" size={18} color="#FE555D" />
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <ImageBackground
                  source={require("../../assets/homepage/image4.png")}
                  style={styles.plansSize}
                >
                  <View style={styles.insidePlansText}>
                    <Text style={styles.gradeReturnText}>Gold</Text>
                    <Text style={styles.returnText}>30% return</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <ImageBackground
                source={require("../../assets/homepage/image5.png")}
                style={styles.plansSize}
              >
                <View style={styles.insidePlansText}>
                  <Text style={styles.gradeReturnText}>Silver</Text>
                  <Text style={styles.returnText}>60% return</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                colors={["#BA8DF3", "#615EE2"]}
                start={[0, 0.1081]}
                end={[0, 0.9879]}
                style={styles.plansSize}
              >
                <View style={styles.insidePlansText}>
                  <Text style={styles.gradeReturnText}>Platinum</Text>
                  <Text style={styles.returnText}>90% return</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.guide}>
          <Text style={styles.guideText}>Investment Guide</Text>
          <View style={{ borderColor: "#4A4A4A", borderBottomWidth: 1 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.guideTextContainer}>
                <Text style={styles.guideTitle}>Basic type of investments</Text>
                <Text style={styles.guideSubText}>
                This is how you set your foot for 2020. Stock market recession.
                What's next...
                </Text>
              </View>
              <View style={styles.image}>
                <Image source={require("../../assets/homepage/Ellipse740.png")} />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.guideTextContainer}>
                <Text style={styles.guideTitle}>How Much can you start with</Text>
                <Text style={styles.guideSubText}>
                What do you like to see? It's a very different market from 2018.
                The way...
                </Text>
              </View>
              <View style={styles.image}>
                <Image source={require("../../assets/homepage/Ellipse741.png")} />
              </View>
              </View>
          </View>
        </View>
        <Modal animationType="slide" visible={modalVisible}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.assetPage}>
            <View style={styles.topAsset}>
              <Text> </Text>
              <Text style={styles.assetTitle}>My Asset</Text>
              <TouchableOpacity
                style={styles.exitButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="closecircle" size={24} color="#B3B3B3" />
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>Your total asset portofolio</Text>
            <View style={styles.moneyRow}>
              <Text style={styles.moneyCount}>N203,935</Text>
              <Text style={styles.profit}><Entypo name="arrow-bold-up" size={18} color="#00B907" /> +2%</Text>
            </View>
            <Text style={styles.currentPlans}>Current Plans</Text>
            <ImageBackground style={styles.planImageSize} source={require('../../assets/asset/asset1.png')}>
              <Text style={styles.goldText}>Gold</Text>
              <Text style={styles.profitReturn}>30% return</Text>
            </ImageBackground>
            <TouchableOpacity>
              <Text style={styles.seeAllPlans}>See All Plans <AntDesign name="arrowright" size={18} color="#FE555D" /></Text>
            </TouchableOpacity>
            <Text style={styles.historyTitle}>History</Text>
            <View style={styles.history}>
              <Text style={styles.blackRp}>Rp 200.000</Text>
              <View style={styles.buyDate}>
                <Text style={styles.buy}>Buy "APPL" Stock</Text>
                <Text style={styles.date}>TUE 22 Jun 2020</Text>
              </View>
            </View>
            <View style={styles.history}>
              <Text style={styles.greenRp}>Rp 200.000</Text>
              <View style={styles.buyDate}>
                <Text style={styles.buy}>Buy "APPL" Stock</Text>
                <Text style={styles.date}>TUE 22 Jun 2020</Text>
              </View>
            </View>
            <View style={styles.history}>
              <Text style={styles.blackRp}>Rp 200.000</Text>
              <View style={styles.buyDate}>
                <Text style={styles.buy}>Buy "APPL" Stock</Text>
                <Text style={styles.date}>TUE 22 Jun 2020</Text>
              </View>
            </View>
            <View style={styles.history}>
              <Text style={styles.greenRp}>Rp 200.000</Text>
              <View style={styles.buyDate}>
                <Text style={styles.buy}>Buy "APPL" Stock</Text>
                <Text style={styles.date}>TUE 22 Jun 2020</Text>
              </View>
            </View>
          </View>
          </ScrollView>
        </Modal>
      </View>
    </ScrollView>
  );
};

const HomepageTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="#999999" />,
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="#999999" />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: () => <AntDesign name="swap" size={24} color="#999999" />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="#999999" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomepageTab;
