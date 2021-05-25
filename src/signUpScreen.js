import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useFonts } from '@expo-google-fonts/inter'

const SingUpScreen = ({ navigation }) => {
  let fonts = useFonts({
    "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
    "SF-Pro": require("../assets/fonts/SFPro.ttf"),
  });

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
    flex: 0.7,
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    fontFamily: 'DM-Sans',
    fontWeight: 'bold'
  },
  underText: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: 'DM-Sans',
    fontWeight: 'bold',
    padding: 5,
    color: '#4F4F4F'
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
    fontSize: 17,
    fontFamily: 'SF-Pro'
  },
  loginButton: {
    margin: 15
  },
  loginButtonText: {
    color: "#31A062",
    fontSize: 17,
    textAlign: "center",
    fontFamily: 'SF-Pro'
  },
});

export default SingUpScreen;
