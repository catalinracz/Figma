import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

const SingUpScreen = ({ navigation }) => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.artwork}>
        <Image source={require("../assets/SingUpArtwork.png")} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>Stay on top of your finance with us.</Text>
        <Text style={styles.underText}>
          We are your new financial Advisors to recommend the best investemnts
          for you.
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.createButton}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.createButtonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 20
  },
  artwork: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  text: {
    flex: 0.7
  },
  title: {
    fontSize: 34,
    textAlign: "center",
  },
  underText: {
    fontSize: 17,
    textAlign: "center",
    padding: 5
  },
  buttons: {
    flex: 0.5
  },
  createButton: {
    height: 60,
    alignItems: "center",
    backgroundColor: "#31A062",
    borderRadius: 20,
    justifyContent: "center"
  },
  createButtonText: {
    color: "white",
    fontSize: 17
  },
  loginButton: {
    margin: 15
  },
  loginButtonText: {
    color: "#31A062",
    fontSize: 17,
    textAlign: "center",
  },
});

export default SingUpScreen;
