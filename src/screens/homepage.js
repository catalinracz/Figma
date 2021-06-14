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
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./profileScreen";
import Product from "./productScreen";
import Transaction from "./transactionScreen";
import { styles } from "../styles/homepageStyles";
import { Images } from "../components/images";
import { homeText } from "../text/text";
import AssetHistory from "../components/assetHistory";

const Tab = createBottomTabNavigator();
const Homepage = () => {
  const [modalVisible, setModalVisible] = useState("");

  const _assetArray = [
    {
      price: homeText.price1,
      color: styles.blackRp,
      stock: homeText.buyappl,
      time: homeText.time,
    },
    {
      price: homeText.price2,
      color: styles.greenRp,
      stock: homeText.tlkm,
      time: homeText.time,
    },
    {
      price: homeText.price3,
      color: styles.blackRp,
      stock: homeText.fb,
      time: homeText.time,
    },
    {
      price: homeText.price3,
      color: styles.greenRp,
      stock: homeText.sellappl,
      time: homeText.time,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.homepage}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.menuButton}>
            <Image source={Images.menu} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifButton}>
            <Image source={Images.notif} />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{homeText.title}</Text>
        </View>
        <View style={styles.portofolio}>
          <LinearGradient
            colors={["#31A05F", "#31A078"]}
            start={[0, 0.4947]}
            end={[0.9575, 0]}
            style={styles.portofolioGradient}
          >
            <Text style={styles.portofolioText}>{homeText.portofolio}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.money}>{homeText.money}</Text>
              <View style={styles.investButton}>
                <TouchableOpacity>
                  <Text style={styles.investButtonText}>{homeText.invest}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.plans}>
          <View style={styles.plansText}>
            <Text style={styles.bestPlansText}>{homeText.best}</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>
                {homeText.see}
                <Image source={Images.rightArrow} />
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <ImageBackground
                  source={Images.gradient1}
                  style={styles.plansSize}
                >
                  <View style={styles.insidePlansText}>
                    <Text style={styles.gradeReturnText}>{homeText.gold}</Text>
                    <Text style={styles.returnText}>{homeText.return1}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <ImageBackground
                source={Images.gradient2}
                style={styles.plansSize}
              >
                <View style={styles.insidePlansText}>
                  <Text style={styles.gradeReturnText}>{homeText.silver}</Text>
                  <Text style={styles.returnText}>{homeText.return2}</Text>
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
                  <Text style={styles.gradeReturnText}>
                    {homeText.platinum}
                  </Text>
                  <Text style={styles.returnText}>{homeText.return3}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.guide}>
          <Text style={styles.guideText}>{homeText.gdTitle}</Text>
          <View style={{ borderColor: "#4A4A4A", borderBottomWidth: 1 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.guideTextContainer}>
                <Text style={styles.guideTitle}>{homeText.gdSub1}</Text>
                <Text style={styles.guideSubText}>{homeText.gdText1}</Text>
              </View>
              <View style={styles.image}>
                <Image source={Images.ellipse1} />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.guideTextContainer}>
                <Text style={styles.guideTitle}>{homeText.gdSub2}</Text>
                <Text style={styles.guideSubText}>{homeText.gdText2}</Text>
              </View>
              <View style={styles.image}>
                <Image source={Images.ellipse2} />
              </View>
            </View>
          </View>
        </View>
        <Modal animationType="slide" visible={modalVisible}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.assetPage}>
              <View style={styles.topAsset}>
                <Text> </Text>
                <Text style={styles.assetTitle}>{homeText.assetTitle}</Text>
                <TouchableOpacity
                  style={styles.exitButton}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Image source={Images.exit} />
                </TouchableOpacity>
              </View>
              <Text style={styles.subTitle}>{homeText.portofolio}</Text>
              <View style={styles.moneyRow}>
                <Text style={styles.moneyCount}>{homeText.money}</Text>
                <Text style={styles.profit}>
                  <Image source={Images.up} /> {homeText.percent}
                </Text>
              </View>
              <Text style={styles.currentPlans}>{homeText.assetPlans}</Text>
              <ImageBackground
                style={styles.planImageSize}
                source={Images.assetImg}
              >
                <Text style={styles.goldText}>{homeText.gold}</Text>
                <Text style={styles.profitReturn}>{homeText.return1}</Text>
              </ImageBackground>
              <TouchableOpacity>
                <Text style={styles.seeAllPlans}>
                  {homeText.seePlans}
                  <AntDesign name="arrowright" size={18} color="#FE555D" />
                </Text>
              </TouchableOpacity>
              <Text style={styles.historyTitle}>{homeText.historyTitle}</Text>
              {_assetArray.map((x, index) => (
                <AssetHistory
                  key={index}
                  price={x.price}
                  color={x.color}
                  stock={x.stock}
                  time={x.time}
                />
              ))}
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
