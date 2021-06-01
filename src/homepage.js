import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const Homepage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  let fonts = useFonts({
    "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
    "SF-Pro": require("../assets/fonts/SFPro.ttf"),
  });
  return (
    <View style={styles.homepage}>
      <ScrollView>
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
            style={{
              borderRadius: 20,
              padding: 25,
            }}
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
            contentContainerStyle={styles.plansList}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <LinearGradient
                colors={["#F0C735", "#D98F39"]}
                start={[0, 0.0943]}
                end={[0, 0.8449]}
                style={{
                  borderRadius: 20,
                  height: 170,
                  width: 134,
                  marginRight: 20,
                  padding: 17,
                }}
              >
                <Text style={styles.gradeReturnText}>Gold</Text>
                <Text style={styles.returnText}>30% return</Text>
                <View style={styles.coin}>
                  <Image source={require("../assets/image4.png")} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                colors={["#CAC9C9", "#979797"]}
                start={[0, 0.0555]}
                end={[0, 0.9114]}
                style={{
                  borderRadius: 20,
                  height: 170,
                  width: 134,
                  marginRight: 20,
                  padding: 17,
                }}
              >
                <Text style={styles.gradeReturnText}>Silver</Text>
                <Text style={styles.returnText}>60% return</Text>
                <View style={styles.coin}>
                  <Image source={require("../assets/image5.png")} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                colors={["#BA8DF3", "#615EE2"]}
                start={[0, 0.1081]}
                end={[0, 0.9879]}
                style={{
                  borderRadius: 20,
                  height: 170,
                  width: 134,
                  padding: 17,
                }}
              >
                <Text style={styles.gradeReturnText}>Platinum</Text>
                <Text style={styles.returnText}>90% return</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.guide}>
          <Text style={styles.guideText}>Investment Guide</Text>
          <View style={{ borderColor: "#4A4A4A", borderBottomWidth: 1 }}>
            <Text style={styles.guideTitle}>Basic type of investments</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.guideSubText}>
                This is how you set your foot for 2020. Stock market recession.
                What's next...
              </Text>
              <View style={styles.image}>
                <Image source={require("../assets/Ellipse740.png")} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.guideTitle}>How Much can you start with</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
            <Text style={styles.guideSubText}>
              What do you like to see? It's a very different market from 2018.
              The way...
            </Text>
            <View style={styles.image}>
              <Image source={require("../assets/Ellipse741.png")} />
            </View>
            </View>
          </View>
        </View>
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.assetPage}>
            <View style={styles.topAsset}>
            <Text style={styles.assetTitle}>My Asset</Text>
            <TouchableOpacity style={styles.exitButton} onPress={() => setModalVisible(!modalVisible)}>
              <AntDesign name="closecircle" size={24} color="#B3B3B3" />
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#F6F6F9",
    padding: 30,
  },
  assetPage: {
    backgroundColor: "#FFFFFF",
    padding: 20
  },
  topAsset: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  exitButton: {
    alignSelf: 'center'
  },
  assetTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'DM-Sans',
    fontWeight: 'bold'
  },
  buttons: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },
  menuButton: {},
  notifButton: {},
  text: {},
  title: {
    fontSize: 34,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  portofolio: {},
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.9,
  },
  portofolioText: {
    fontSize: 16,
    fontFamily: "SF-Pro",
    color: "white",
  },
  money: {
    fontSize: 32,
    fontFamily: "SF-Pro",
    fontWeight: "600",
    color: "white",
    marginTop: 11,
  },
  investButton: {
    padding: 10,
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderRadius: 15,
    height: 40,
  },
  investButtonText: {
    color: "#31A078",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "SF-Pro",
    fontWeight: "600",
  },
  plans: {
    marginTop: 40,
  },
  plansText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  plansList: {},
  bestPlansText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 18,
    color: "#FE555D",
    fontWeight: "500",
  },
  gradeReturnText: {
    color: "white",
    fontSize: 17,
    fontFamily: "SF-Pro",
  },
  returnText: {
    color: "white",
    fontSize: 13,
    fontFamily: "SF-Pro",
  },
  guide: {
    marginTop: 48,
  },
  guideText: {
    fontSize: 22,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  guideTitle: {
    color: "#4F4F4F",
    fontSize: 18,
    marginTop: 20,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  guideSubText: {
    color: "#474747",
    fontFamily: "SF-Pro",
    width: 220,
  },
  image: {},
  coin: {
    position: "absolute",
  },
});

export default Homepage;
