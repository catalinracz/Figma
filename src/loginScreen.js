import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  let fonts = useFonts({
    "DM-Sans": require("../assets/fonts/DMSans-Regular.ttf"),
    "SF-Pro": require("../assets/fonts/SFPro.ttf"),
  });

  return (
    <>
          <View style={styles.mainPage}>
            <View style={styles.backButton}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.text}>
              <Text style={styles.title}>Create an account</Text>
              <Text style={styles.subTitle}>
                Invest and double your income now
              </Text>
            </View>
            <View style={styles.inputs}>
              <TextInput
                style={styles.nameInput}
                placeholder="Full name"
              ></TextInput>
              <TextInput
                style={styles.emailInput}
                placeholder="Email address"
              ></TextInput>
              <TextInput
                style={styles.passwordInput}
                secureTextEntry={true}
                placeholder="Password"
              ></TextInput>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => navigation.navigate("Homepage")}
              >
                <Text style={styles.createButtonText}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.alreadyButton}>
                <Text style={styles.alreadyButtonText}>
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  backButton: {
    flex: 0.2,
    marginTop: 20,
  },
  text: {
    flex: 0.7,
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    fontFamily: "DM-Sans",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
    fontFamily: "SF-Pro",
    color: "#4F4F4F",
  },
  inputs: {
    flex: 1,
  },
  nameInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    fontFamily: "SF-Pro",
    height: 60,
    padding: 20,
    marginBottom: 18,
    borderColor: "#828282",
  },
  emailInput: {
    borderWidth: 0.5,
    borderRadius: 20,
    fontFamily: "SF-Pro",
    height: 60,
    padding: 20,
    borderColor: "#828282",
  },
  passwordInput: {
    fontFamily: "SF-Pro",
    padding: 20,
  },
  buttons: {
    flex: 0.7,
  },
  createButton: {
    height: 60,
    alignItems: "center",
    backgroundColor: "#31A062",
    borderRadius: 20,
    marginBottom: 44,
    justifyContent: "center",
  },
  createButtonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "SF-Pro",
  },
  alreadyButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  alreadyButtonText: {
    color: "#31A062",
    fontSize: 17,
    fontFamily: "SF-Pro",
  },
});

export default LoginScreen;
