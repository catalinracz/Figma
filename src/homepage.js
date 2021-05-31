import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const Homepage = () => {
  let fonts = useFonts({
    "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
    "SF-Pro": require("../assets/fonts/SFPro.ttf"),
  });
  return (
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
          style={{
            borderRadius: 20,
            height: 125,
            padding: 30,
            shadowColor: "#258B66",
            shadowOpacity: 0.2,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <Text style={styles.portofolioText}>Your total asset potofolio</Text>
          <Text style={styles.money}>N203,935</Text>
          <TouchableOpacity style={styles.investButton}>
            <Text style={styles.investButtonText}>Invest now</Text>
          </TouchableOpacity>
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
        <ScrollView horizontal={true} contentContainerStyle={styles.plansList}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#F0C735", "#D98F39"]}
              start={[0, 0.0943]}
              end={[0, 0.8449]}
              style={{
                borderRadius: 20,
                height: 170,
                width: 134,
                marginRight: 20,
                padding: 20,
              }}
            >
              <Text style={styles.gradeReturnText}>Gold</Text>
              <Text style={styles.returnText}>30% return</Text>
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
                padding: 20,
              }}
            >
              <Text style={styles.gradeReturnText}>Silver</Text>
              <Text style={styles.returnText}>60% return</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["#BA8DF3", "#615EE2"]}
              start={[0, 0.1081]}
              end={[0, 0.9879]}
              style={{ borderRadius: 20, height: 170, width: 134, padding: 20 }}
            >
              <Text style={styles.gradeReturnText}>Platinum</Text>
              <Text style={styles.returnText}>90% return</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#F6F6F9",
    flex: 1,
    padding: 30,
  },
  buttons: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },
  menuButton: {},
  notifButton: {},
  text: {
    flex: 0.32,
  },
  title: {
    fontSize: 34,
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  portofolio: {
    flex: 1,
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
  },
  investButton: {
    flex: 1,
    backgroundColor: "white",
    height: 40,
    alignSelf: "flex-end",
  },
  investButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "SF-Pro",
    fontWeight: "600",
  },
  plans: {
    flex: 1,
  },
  plansText: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});

export default Homepage;
